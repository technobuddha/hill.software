import { Column, ColumnSpecification }  from '../column';
import { collatorFactory }              from '../collatorFactory';
import { rendererFactory }              from '../rendererFactory';
import { analyzer }                     from './information';
import isString                         from 'lodash/isString';

export function columnFactory<T extends Record<string, any>>(data: T[], columns?: ColumnSpecification<T>[]): Column<T>[] {
    const { deriveKeys, deriveColumnType, createDefaultColumn } = analyzer(data);

    if(columns) {
        return columns.map(column => {
            if(isString(column)) {
                return createDefaultColumn(column);
            } else {
                const type = column.type || deriveColumnType(column.name);

                return {
                    name:    column.name,
                    width:   column.width  || '*',
                    title:   column.title  || column.name,
                    render:  column.render || rendererFactory(column.name, type),
                    collate: column.collate === null ? null : column.collate || collatorFactory(column.name, type),
                }
            }
        });
    } else {
        return deriveKeys().map(key => createDefaultColumn(key));
    }
}

export default columnFactory;