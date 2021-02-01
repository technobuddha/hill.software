﻿/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'mocha';
import { use, expect } from 'chai';
import getTimezone     from '../src/getTimezone';

use(require('chai-match'));

describe(
    'getTimezone',
    () => {
        it(
            'should output something resembling a timezone',
            () => {
                expect(getTimezone(new Date(2018, 6, 4))).to.match(/^Z|[+-]([0][0-9]|[1][0-2]):([0-5][0-9])$/u);
            }
        );
    }
);