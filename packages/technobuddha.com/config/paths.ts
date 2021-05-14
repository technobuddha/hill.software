import path from 'path';
import fs   from 'fs-extra';

const isDevelopment = process.env.NODE_ENV !== 'production';
let   home          = fs.realpathSync(process.env.PROJECT_HOME ?? process.cwd());

for(;;) {
    if(fs.existsSync(path.join(home, '.env'))) break;
    if(home === '/') { home = process.cwd(); break; }
    home = fs.realpathSync(path.join(home, '..'));
}

const resolveHome   = (...relativePath: string[]) => path.join(home, ...relativePath);

export default {
    home:                       resolveHome('.'),
    env:                        resolveHome('.env'),
    data:                       resolveHome('data'),
    src:                        resolveHome('src'),
    node_modules:               resolveHome('node_modules'),
    webpackHotMiddlewareClient: resolveHome('node_modules', 'webpack-hot-middleware', 'client.js'),
    assets:                     resolveHome('assets'),
    doc:                        resolveHome('doc'),
    webroot:                    resolveHome('webroot'),
    client:                     resolveHome('src', 'client'),
    clientEntry:                resolveHome('src', 'client', 'index.tsx'),
    server:                     resolveHome('src', 'server'),
    serverEntry:                resolveHome('src', 'server', 'server.ts'),
    worker:                     resolveHome('src', 'worker'),
    workerEntry:                resolveHome('src', 'worker', 'index.ts'),
    views:                      resolveHome('views'),
    locales:                    resolveHome('locales'),
    bin:                        isDevelopment ? resolveHome('deploy', 'bin')  : resolveHome('bin'),
    dist:                       isDevelopment ? resolveHome('deploy', 'dist') : resolveHome('dist'),
};
