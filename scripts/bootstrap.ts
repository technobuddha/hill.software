#!/bin/env -S ts-node --prefer-ts-exts
import process                      from 'process';
import chalk                        from 'chalk';
import shell                        from 'shelljs';
import path                         from 'path';
import fs                           from 'fs-extra';
import { program }                  from 'commander';
import type { PackageJson }         from 'type-fest';

program
    .option('--no-recompile',        'Do not recompile dependent packages')
    .option('--update [package...]', 'Update specified package')
    .parse(process.argv);  // ts-node is the first argument, so remove it

const options = program.opts();

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

const rebuild = new Set<string>();

const packages = Object.fromEntries((JSON.parse(shell.exec('lerna list --json', { silent: true })) as LernaPackage[]).map(p => [ p.name, p ]));
for(const dstPackage of Object.values(packages)) {
    const dstPackageFile = path.join(dstPackage.location, 'package.json');
    if(fs.pathExistsSync(dstPackageFile)) {
        const dstPackageJson = JSON.parse(fs.readFileSync(dstPackageFile).toString()) as PackageJson;

        for(const deps of [ dstPackageJson.dependencies, dstPackageJson.devDependencies ]) {
            if(deps) {
                for(const dependencyName of Object.keys(deps)) {
                    if(dependencyName in packages && (!options.update || options.update.includes(dependencyName))) {
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

if(options.recompile) {
   rebuild.forEach(
        re => {
            process.chdir(packages[re].location);
            shell.exec('npm run build');
        }
    ) 
}

