import process                          from 'process';
import { setTimeout, clearTimeout }     from 'timers';
import keys                             from 'lodash/keys';
import omit                             from 'lodash/omit';
import isNil                            from 'lodash/isNil';
import i18next                          from '#settings/i18next';
import { translate, readTranslations, writeTranslations } from '#util/translation';

import type { Application }     from 'express';
import type { Logger }          from 'winston';
import type { TranslateReturn } from '#util/translation';

export function translation(app: Application, logger: Logger): void {
    if(process.env.GCLOUD_PROJECT && process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        const translationWorker     = new TranslationWorker(logger);

        app.post(
            '/locales/*',
            (req, res) => {
                const nsfile = req.url.split('/')[3];
                const [ ns ] = nsfile.split('.');
                translationWorker.enqueue(ns, req.body);
                res.end();
            }
        );
    }
}

class TranslationWorker {
    private static readonly interval                = 1000;

    private queue:  {[key: string]: string[] }     = {};
    private timer:  NodeJS.Timer | null             = null;

    private readonly logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;

        logger.info('Translation worker running.');

        process
        .once('SIGINT',     () => { this.exit(); process.exit(1); })
        .once('SIGTERM',    () => { this.exit(); process.exit(1); });

        this.run();
    }

    public enqueue(url: string, body: {[key: string]: string }): void {
        const phrases   = keys(omit(body, '_t'));

        this.queue[url] = (url in this.queue) ? this.queue[url].concat(phrases) : phrases;
    }

    private exit() {
        if(this.timer)
            clearTimeout(this.timer);
        void this.write();
    }

    private run() {
        this.timer = setTimeout(() => { void this.write().then(() => { this.run(); }); }, TranslationWorker.interval);
    }

    private async write() {
        const myQueue       = this.queue;
        this.queue          = {};

        for(const ns of Object.keys(myQueue)) {
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            for(const lng of i18next.supportedLngs || []) {
                const currentTranslations = readTranslations(lng, ns);
                const archiveTranslations = readTranslations(lng, ns, 'archive');
                const promises            = [] as Promise<TranslateReturn>[];

                for(const phrase of myQueue[ns]) {
                    if(isNil(currentTranslations[phrase])) {
                        if(isNil(archiveTranslations[phrase])) {
                            promises.push(translate(phrase, lng));
                        } else {
                            currentTranslations[phrase] = archiveTranslations[phrase];
                            delete archiveTranslations[phrase];
                            this.logger.verbose(`${phrase} extracted from archive ${lng}/${ns}`);
                        }
                    } else {
                        this.logger.verbose(`${phrase} is already translated for ${lng}/${ns}`);
                    }
                }

                for(const tr of await Promise.all(promises)) {
                    if(tr.translation) {
                        currentTranslations[tr.key] = tr.translation;
                        this.logger.info(`${tr.key} added to ${lng}/${ns}`);
                    }
                }

                writeTranslations(currentTranslations, lng, ns);
                writeTranslations(archiveTranslations, lng, ns, 'archive');
            }
        }
    }
}

export default translation;
