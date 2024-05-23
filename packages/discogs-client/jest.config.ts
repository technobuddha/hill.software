import type { Config } from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        //verbose: true,
        testMatch: [ '**/test/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)' ],
        preset: 'ts-jest',
        transform: {
            '\\.tsx?$': 'ts-jest',
            '\\.jsx?$': 'babel-jest',
        },
        testEnvironment: 'jsdom',
        globals: {
            'ts-jest': {
                tsconfig: './test/tsconfig.json',
            },
        },
    };
};
