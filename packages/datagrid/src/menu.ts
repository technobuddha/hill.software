import React from 'react';

export type Menu = {
    text:       string;
    onClick:    (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export type MenuParams<T> = {
    data?:      T[];
    datum?:     T;
    //index:      number;
};
export type MenuFactory<T> = (args: MenuParams<T>) => Menu[];