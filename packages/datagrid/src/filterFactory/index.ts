import { Filter }                                     from '../filter';
import { filterFactoryMenu, FilterFactoryMenuOptions }      from './menu';
//import { FilterFactorySearchOptions }  from './search';
import { filterFactoryCustom, FilterFactoryCustomOptions }  from './custom';

export type FilterSpecification<T extends Record<string, any>> = /*FilterFactorySearchOptions | */ FilterFactoryMenuOptions<T> | FilterFactoryCustomOptions<T>;

export function filterFactory<T extends Record<string, any>>(options: FilterSpecification<T>): Filter<T>
{
    switch (options.type)
    {
        case 'menu':
            return filterFactoryMenu(options);
        //case 'search':
        //    return filterFactorySearch(options);
        case 'custom':
            return filterFactoryCustom(options);
    }
}

export default filterFactory;
