import React from 'react';
import { Filter, FilterValues, FilterChangedParams, FilterActuatorProps, FilterIndicatorProps } from './filter';

type FiltererProps<T extends Record<string, any>> =
{
    data:               T[];
    children:           (renderProps: FiltererRenderProps<T>) => React.ReactElement;
    filters:            Filter<T>[];
    filterValues:       FilterValues;
    onFilterChanged:    (params: FilterChangedParams) => void;
};

export type FiltererRenderProps<T extends Record<string, any>> = {
    data:       T[];
    actuators:  ((props: FilterActuatorProps)  => React.ReactElement<FilterActuatorProps>)[];
    indicators: ((props: FilterIndicatorProps) => React.ReactElement<FilterIndicatorProps>)[];
}

export const Filterer = <T extends Record<string, any>>(props: FiltererProps<T>) => {
    const { filterValues, onFilterChanged } = props;

    let   data:         T[]                          = props.data;
    const actuators:    ((props: FilterActuatorProps)  => React.ReactElement<FilterActuatorProps>)[] = [];
    const indicators:   ((props: FilterIndicatorProps) => React.ReactElement<FilterIndicatorProps>)[] = [];

    console.log('Filtering...')

    props.filters.forEach(
        (filter: Filter<T>, index) => {
            const value = filterValues[filter.name];
            const { filteredData, actuatorComponent, indicatorComponent } = filter.execute({data, index, value, onFilterChanged});

            data = filteredData;
            if(actuatorComponent)   actuators.push(actuatorComponent);
            if(indicatorComponent)  indicators.push(indicatorComponent);
        }
    )

    return props.children({data, actuators, indicators: indicators});
}

export default Filterer;
