import type { Configuration, Plugin }       from 'webpack';
import path                                 from 'path';

const extensions    = [ '.ts' ];

export function genWebpackConfig(isDevelopment = true): Configuration {
    const plugins: Plugin[] = [];

    return {
        name:   'color',
        // https://webpack.js.org/concepts/mode/
        mode:       isDevelopment ? 'development' : 'production',
        // https://webpack.js.org/configuration/entry-context/#entry
        entry: {
            index:   './src/index.ts',
        },
        // https://webpack.js.org/configuration/output/
        output: {
            filename:       '[name].js',
            path:           path.resolve('./dist'),
        },
        // https://webpack.js.org/configuration/module/
        module: {
            rules: [
                {
                    test:       /\.ts?$/u,
                    loader:     'ts-loader',
                    // options:    {
                    //     transpileOnly: true,
                    // },
                    exclude:    /node-modules/u,
                },
                {
                    enforce:    'pre',
                    test:       /\.js$/u,
                    loader:     'source-map-loader',
                },
            ],
        },
        // https://webpack.js.org/configuration/resolve/
        resolve: {
            extensions,
            mainFields:     [ 'typescript', 'esnext', 'es2015', 'module', 'main' ],
        },
        // https://webpack.js.org/configuration/optimization/
        optimization: {
            minimize:                   !isDevelopment,
            splitChunks: {
                chunks:                 'all',
                automaticNameDelimiter: '-',
                // cacheGroups: {
                //     packages: {
                //         test:           /[\\/]node_modules[\\/]/u,
                //         priority:       1,
                //     },
                // },
            },
            namedModules: true,
        },
        // https://webpack.js.org/configuration/devtool/
        devtool:        isDevelopment ? 'source-map' : false,
        // https://webpack.js.org/configuration/target/
        target:         'web',
        // https://webpack.js.org/configuration/performance/
        performance:    { hints: false },
        // https://webpack.js.org/configuration/stats/
        stats:          false,
        // https://webpack.js.org/configuration/plugins/
        plugins,
    };
}

export default genWebpackConfig;
