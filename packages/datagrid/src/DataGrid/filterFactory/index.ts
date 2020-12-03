import { Filter }                                               from '../filter';
import { AnalyzerResults }                                      from '../analyzer';
import { filterFactoryCustom,   FilterFactoryCustomOptions }    from './custom';
import { filterFactoryCheckbox, FilterFactoryCheckboxOptions }  from './checkbox-list';
import { filterFactoryTransfer, FilterFactoryTransferOptions }  from './transfer';
import { filterFactorySearch,   FilterFactorySearchOptions }    from './search';

export type FilterSpecification<T = unknown> =  
    FilterFactoryCustomOptions<T>   |
    FilterFactoryCheckboxOptions    |
    FilterFactoryTransferOptions    |
    FilterFactorySearchOptions;

export function filterFactory<T = unknown>(options: FilterSpecification<T>, data: T[], analysis: AnalyzerResults<T>): Filter<T>
{
    switch (options.type)
    {
        case 'checkbox-list':
            return filterFactoryCheckbox(options, data, analysis);
        case 'transfer':
            return filterFactoryTransfer(options, analysis);
        case 'search':
            return filterFactorySearch(options, analysis);
        case 'custom':
            return filterFactoryCustom(options, data);
    }
}

export default filterFactory;
