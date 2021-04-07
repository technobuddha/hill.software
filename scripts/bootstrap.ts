#!/bin/env -S ts-node --project ./tsconfig.json --prefer-ts-exts
import process                      from 'process';
import isEmpty                      from 'lodash/isEmpty';
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

//const rebuild   = new Set<string>();
const packages    = Object.fromEntries((JSON.parse(shell.exec('lerna list --json', { silent: true })) as LernaPackage[])
                    .filter(p => p.name !== '@technobuddha/vt100')
                    .map(p => [ p.name, p ]));
const versions:   Record<string, string>   = {};
const dependsOn:  Record<string, string[]> = Object.fromEntries(Object.keys(packages).map(name => [name, []]));

for(const pkg of Object.values(packages)) {
    const packageName    = pkg.name;
    const dstPackageFile = path.join(pkg.location, 'package.json');
    if(fs.pathExistsSync(dstPackageFile)) {
        const dstPackageJson = JSON.parse(fs.readFileSync(dstPackageFile).toString()) as PackageJson;

        if(pkg.version)
            versions[packageName] = dstPackageJson.version!;

        for(const deps of [ dstPackageJson.dependencies, dstPackageJson.devDependencies ]) {
            if(deps) {
                for(const dependencyName of Object.keys(deps)) {
                    if(dependencyName in packages) {
                        if(!options.update || options.update.includes(dependencyName)) {
                            if(!(packageName in dependsOn))
                                dependsOn[packageName] = [];
                            dependsOn[packageName].push(dependencyName);
                        }
                    }
                }
            }
        }
    }
}

let buildOrder: string[] = [];
if(options.update) {
    buildOrder = Object.entries(dependsOn).filter(([ , dep ]) => dep.length > 0).map(([ key ]) => key);
} else {
    // Compute the build order
    while(!isEmpty(dependsOn)) {
        for(const [ name, depends ] of Object.entries({ ...dependsOn })) {
            if(depends.length === 0) {
                buildOrder.push(name);
                delete dependsOn[name];

                for(const d of Object.values(dependsOn)) {
                    if(d.includes(name)) {
                        d.splice(d.indexOf(name), 1);
                    }
                }
            }
        }
    }
}

// Update the versions numbers of dependencies
for(const dstPackage of Object.values(packages)) {
    const dstPackageFile = path.join(dstPackage.location, 'package.json');
    if(fs.pathExistsSync(dstPackageFile)) {
        const dstPackageJson = JSON.parse(fs.readFileSync(dstPackageFile).toString()) as PackageJson;

        for(const [ name, version ] of Object.entries(versions)) {
            if(dstPackageJson.dependencies && name in dstPackageJson.dependencies)
                dstPackageJson.dependencies[name] = `^${version}`;

            if(dstPackageJson.devDependencies && name in dstPackageJson.devDependencies)
                dstPackageJson.devDependencies[name] = `^${version}`;

        }

        fs.writeFileSync(dstPackageFile, `${JSON.stringify(dstPackageJson, undefined, 2)}\n`);
    }
}

for(const name of buildOrder) {
    const dstPackage = packages[name];
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
                            run(shell.cp('-r',  path.join(srcPackage.location, dist, '*'), nodeModule));
                            run(shell.rm('-rf', path.join(nodeModule, 'node_modules')));
                            run(shell.rm('-f',  path.join(nodeModule, 'package-lock.json')));
                            out(`${srcPackage.name.padEnd(32)} installed in ${dstPackage.name}\n`);
                        }
                    }
                }
            }
        }
    }

    if(!options.update && !(name === 'technobuddha.com' || name === 'ams')) {
        process.chdir(packages[name].location);
        shell.exec('npm run compile');
    }
}
