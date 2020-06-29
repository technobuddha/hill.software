import React            from 'react';
import Box              from '@material-ui/core/Box';
import { ColumnType }   from './column';

export function rendererFactory(key: string, type: ColumnType) {
    switch (type) {
        case 'number':
            return (datum: any) => <Box flexGrow={1} margin={0.5} textAlign="right">{datum[key]?.toString()}</Box>;

        case 'date':
            return (datum: any) => <Box flexGrow={1} margin={0.5} textAlign="right">{new Date(datum[key]).toUTCString()}</Box>;

        case 'unknown':
        case 'string':
        default:
            return (datum: any) => <Box flexGrow={1} margin={0.5} textAlign="left">{datum[key]?.toString()}</Box>;
    }
}

export default rendererFactory;
