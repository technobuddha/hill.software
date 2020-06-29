import React                    from 'react';

export type Filter<T extends Record<string, any>> = {
    name:       string;
    execute:    FilterExecuter<T>;
}

export type FilterExecuter<T extends Record<string, any>> = (params: FilterParams<T>) => FilterReturn<T>;

export type FilterParams<T extends Record<string, any>> =
{
    index:              number;
    data:               T[];
    value?:             FilterValue;
    onFilterChanged:    (params: FilterChangedParams) => void;
};

export type FilterValue  = string | string[] | undefined;
export type FilterValues = Record<string, FilterValue>;

export type FilterChangedParams = {
    name:               string;
    value:              FilterValue;
}

export type FilterReturn<T extends Record<string, any>> = {
    filteredData:           T[];
    actuatorComponent?:     (props: FilterActuatorProps)  => React.ReactElement<FilterActuatorProps>;
    indicatorComponent?:    (props: FilterIndicatorProps) => React.ReactElement<FilterIndicatorProps>;
}

export type FilterActuatorProps = {
    classes?:   FilterActuatorClasses;
    styles?:    FilterActuatorStyles;
}

export type FilterIndicatorProps = {
    classes?:   FilterIndicatorClasses;
    styles?:    FilterIndicatorStyles;
}

export type FilterActuatorClasses = {
    root:       string;
    button:     string;
    icon:       string;
    title:      string;
}
export type FilterActuatorStyles = {[key in keyof FilterActuatorClasses]: React.CSSProperties};

export type FilterIndicatorClasses = {
    root:       string;
}
export type FilterIndicatorStyles = {[key in keyof FilterIndicatorClasses]: React.CSSProperties};