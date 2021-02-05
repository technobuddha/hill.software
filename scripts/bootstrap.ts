#!/bin/env -S ts-node --prefer-ts-exts
import process                      from 'process';
import chalk                        from 'chalk';
import shell                        from 'shelljs';
import path                         from 'path';
import fs                           from 'fs-extra';
import type { PackageJson }         from 'type-fest';

function out(text: string | undefined) {
    if(text)
        process.stdout.write(text);
}

function run(res: shell.ShellString) {
    if(res.code !== 0) {
        if(res.stdout) out(chalk.yellow(res.stdout));
        if(res.stderr) out(chalk.red(res.stderr));
        process.exit(res.code);
    }
}

type LernaPackage = {
    name: string;
    version: string;
    private: boolean;
    location: string;
};

const args    = process.argv.slice(2);
const rebuild = new Set<string>();

const packages = Object.fromEntries((JSON.parse(shell.exec('lerna list --json', { silent: true })) as LernaPackage[]).map(p => [ p.name, p ]));
for(const dstPackage of Object.values(packages)) {
    const dstPackageFile = path.join(dstPackage.location, 'package.json');
    if(fs.pathExistsSync(dstPackageFile)) {
        const dstPackageJson = JSON.parse(fs.readFileSync(dstPackageFile).toString()) as PackageJson;

        for(const deps of [ dstPackageJson.dependencies, dstPackageJson.devDependencies ]) {
            if(deps) {
                for(const dependencyName of Object.keys(deps)) {
                    if(dependencyName in packages && (args.length === 0 || args.includes(dependencyName))) {
                        const srcPackage     = packages[dependencyName];
                        const srcPackageFile = path.join(srcPackage.location, 'package.json');
                        if(fs.pathExistsSync(srcPackageFile)) {
                            const srcPackageJson = JSON.parse(fs.readFileSync(srcPackageFile).toString()) as PackageJson;
                            const nodeModule     = path.join(dstPackage.location, 'node_modules', srcPackage.name);
                            const dist           = (srcPackageJson.publishConfig?.directory as string | undefined) ?? '';

                            run(shell.rm('-rf', nodeModule));
                            run(shell.mkdir('-p', nodeModule));
                            run(shell.cp('-r', path.join(srcPackage.location, dist, '*'), nodeModule));
                            out(`${srcPackage.name.padEnd(32)} installed in ${dstPackage.name}\n`);

                            if(dstPackage.name !== 'technobuddha.com')
                                rebuild.add(dstPackage.name)
                        }
                    }
                }
            }
        }
    }
}

rebuild.forEach(
    re => {
        process.chdir(packages[re].location);
        shell.exec('npm run build');
    }
)
