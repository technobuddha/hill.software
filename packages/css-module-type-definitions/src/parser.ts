/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import fs                   from 'fs-extra';
import { cosmiconfigSync }  from 'cosmiconfig';
import type { AcceptedPlugin, Parser, Root } from 'postcss';
import postcss from 'postcss';

export type ParserReturn    = Set<string>;

export async function parser(
    filePath:   string,
    config:     any,
    plugins:    AcceptedPlugin[] | null = null,
):  Promise<ParserReturn> {
    // TODO [2021-12-31] config is 'any' this could probably use some better type definitions, but I can't find them :(
    if(config === undefined)
        config = cosmiconfigSync('postcss').search()?.config ?? {};

    const importer       = require('postcss-import')(config.plugins['postcss-import'])   as AcceptedPlugin;
    const localByDefault = require('postcss-modules-local-by-default')                   as AcceptedPlugin;
    const scope          = require('postcss-modules-scope')                              as AcceptedPlugin;
    const comment        = require('postcss-comment')                                    as Parser;

    const defaultPlugins = [ importer, localByDefault, scope ];

    const exportTokens  = new Set<string>();

    const gatherPlugIn =  (root: Root) => {
        root.each(
            node => {
                if(node.type === 'rule' && node.selector === ':export') {
                    node.each(
                        child => {
                            if(child.type === 'decl')
                                exportTokens.add(child.prop);
                        }
                    );
                }
            }
        );
    };

    const source = fs.readFileSync(filePath, 'utf-8');
    await postcss((plugins ?? defaultPlugins).concat([ gatherPlugIn ]))
    .process(source, {
        from: filePath,
        parser: comment,
    });

    return exportTokens;
}

export default parser;
