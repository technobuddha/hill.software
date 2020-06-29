import React                from 'react';

export type Column<T extends Record<string, any>>  =
{
    name:       string;
    width:      number | '*' | '1*' | '2*' | '3*' | '4*' | '5*' | '6*' | '7*' | '8*' | '9*' | '10*' | '11*' | '12*';
    title:      React.ReactNode;
    collate:    ((ascending: boolean) => (x: T, y: T) => number) | null;
    render:     (data: T) => React.ReactElement;
};

export type ColumnType = 'string' | 'number' | 'date' | 'unknown';

export type ColumnSpecification<T extends Record<string, any>> = string | (
    Partial<Omit<Column<T>, 'name'>> & {
        name:   Column<T>['name'];
        type?:  Exclude<ColumnType, 'unknown'>;
    });


export default Column;