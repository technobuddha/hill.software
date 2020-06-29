import { Filter, FilterExecuter } from '../filter';

export type FilterFactoryCustomOptions<T extends Record<string, any>> = {
    type:       'custom';
    name:       string;
    execute:    FilterExecuter<T>;
};

export function filterFactoryCustom<T extends Record<string, any>>(options: FilterFactoryCustomOptions<T>): Filter<T> {
    return {
        name:       options.name,
        execute:    options.execute,
    }
}

export default filterFactoryCustom;
