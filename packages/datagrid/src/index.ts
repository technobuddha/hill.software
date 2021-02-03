import map from 'lodash/map';

process.stdout.write(JSON.stringify(map([ 1, 2, 3 ], n => n * 2)));
