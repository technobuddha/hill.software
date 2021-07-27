#!/bin/env -S ts-node --prefer-ts-exts
// import buildForNPM from '../../../scripts/build-for-npm';

// buildForNPM({ packageName: 'color' });

//#!/bin/env -S ts-node --prefer-ts-exts -r ./config/env.ts -r tsconfig-paths/register
import fs                           from 'fs-extra';
import process                      from 'process';
import webpack                      from 'webpack';
import chalk                        from 'chalk';
import shell                        from 'shelljs';
import metricUnits                  from '@technobuddha/library/metricUnits';
import binaryUnits                  from '@technobuddha/library/binaryUnits';
import { genWebpackConfig }         from '../webpack.config';
import type { PackageJson }         from 'type-fest';

chalk.level = 3;
process.env.NODE_ENV = 'production';

function out(text: string | undefined) {
    if(text)
        process.stdout.write(text);
}

function report(error: Error | null, stats: webpack.Stats): void {
    if(error) {
        out(`\n${chalk.red(error)}\n`);
        process.exit(1);
    }

    if(stats.compilation.errors.length > 0) {
        out(`${chalk.red('Errors:')}\n`);
        for(const e of stats.compilation.errors)
            out(`${e.message}\n`);
    }

    if(stats.compilation.warnings.length > 0) {
        out(`${chalk.yellow('Warnings:')}\n`);
        for(const w of stats.compilation.warnings)
            out(`${w.message}\n`);
    }

    if(stats.compilation.errors.length > 0) process.exit(1);

    for(const [ filename, asset ] of Object.entries(stats.compilation.assets)) {
        const a: any = asset;
        const size = binaryUnits(fs.statSync(a.existsAt).size, { format: '###.00', pad: 6 });

        out(`${' '.repeat(50)}${filename.padEnd(40)} ${(a.isOverSizeLimit ? chalk.red : chalk.green)(size).padStart(20)}\n`);
    }
}

function run(res: shell.ShellString) {
    if(res.code !== 0) {
        if(res.stdout) out(chalk.yellow(res.stdout));
        if(res.stderr) out(chalk.red(res.stderr));
        process.exit(res.code);
    }
}

function nano() {
    const t = process.hrtime();
    return t[0] + t[1] / 1000000000;
}

let timer: number;
function start(task: string, text?: string) {
    out(chalk.whiteBright(task));
    out(' '.repeat(12 - task.length));
    if(text) {
        out(chalk.blue(text));
        out(' '.repeat(20 - text.length));
    } else {
        out(' '.repeat(20));
    }
    timer = nano();
}

function finish() {
    const clock = nano() - timer;

    out(chalk.cyanBright(`${metricUnits(clock, { format: '##0.00', pad: 6 })}s\n`));
}

start('Cleaning');
run(shell.rm('-rf', 'dist'));
run(shell.mkdir('dist'));
finish();

start('Compiling', 'color');
webpack(
    genWebpackConfig(false),
    (errorServer: Error, statsServer: webpack.Stats) => {
        finish();
        report(errorServer, statsServer);

        start('Copying', 'files');
        // run(shell.cp('-r', [ 'assets', 'webroot', 'data', 'locales', 'views', '.env', 'package/*' ], 'deploy'));
        finish();

        start('Building', 'package.json');
        const pj = JSON.parse(fs.readFileSync('package.json').toString()) as PackageJson;

        delete pj.devDependencies;
        fs.writeFileSync('dist/package.json', JSON.stringify(pj, undefined, 2), 'utf8');
        finish();

        out(`\n--${chalk.green('done')}\n`);
        process.exit(0);
    }
);
