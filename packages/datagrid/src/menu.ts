import React from 'react';

export type MenuParams<T> = {
    event:      React.MouseEvent<SVGSVGElement, MouseEvent>,
    data?:      T[];
    datum?:     T;
    index?:     number;
};
export type MenuFactory<T> = (args: MenuParams<T>) => void;