import type webpack                  from 'webpack';
import type { CMTDOptions } from './index';
import CMTD    from './index';

export class CMTDWebpackPlugin implements webpack.Plugin {
    private readonly cmtd:       CMTD;
    private isWatching: boolean;

    constructor(options: CMTDOptions) {
        this.cmtd       = new CMTD(options);
        this.isWatching = false;
    }

    public apply(compiler: webpack.Compiler) {
        compiler.hooks.beforeRun.tap(
            'CMTDWebpackPlugin',
            (_compilation, _callback) => {
                void this.cmtd.scan();
            }
        );

        compiler.hooks.watchRun.tapPromise(
            'CMTDWebpackPlugin',
            async () => {
                if(this.isWatching)  return Promise.resolve();

                this.isWatching = true;
                await this.cmtd.scan();
                this.cmtd.watch();
            }
        );
    }
}

export default CMTDWebpackPlugin;
