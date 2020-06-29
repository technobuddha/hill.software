import React    from 'react';
import isArray  from 'lodash/isArray';
import isString from 'lodash/isString';
import delay    from 'lodash/delay';
import Box      from '@material-ui/core/Box';
import Button   from '@material-ui/core/Button';
import Menu     from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Chip     from '@material-ui/core/Chip';
import { Filter, FilterParams, FilterActuatorProps, FilterIndicatorProps } from '../filter';

export type FilterFactoryMenuOptions<T extends Record<string, any>> = {
    type:           'menu';
    name:           string;
    title:          string;
    icon?:          React.ComponentType<{className?: string; style?: React.CSSProperties;}>;
    filters:        MenuOption<T>[];
    defaultFilter?: number;
};

type MenuOption<T> =
{
    filter:         (data: T[]) => T[];
    subtitle?:      string;
    indicatorText?: string;
};

export function filterFactoryMenu<T extends Record<string, any>>(options: FilterFactoryMenuOptions<T>): Filter<T> {
    const { name, icon: Icon }  = options;

    return {
        name,
        execute: (params: FilterParams<T>) => {
            const selectedFilter = (
                isArray(params.value) && params.value.length > 0
                ?   parseInt(params.value[0], 10)
                :   isString(params.value) && params.value.length > 0
                ?   parseInt(params.value, 10)
                :   (options.defaultFilter || 0)
            );

            return {
                filteredData:       options.filters[selectedFilter].filter(params.data),
                actuatorComponent:  (props: FilterActuatorProps) => {
                    const [anchorEl, setAnchorEl]   = React.useState<HTMLElement | null>(null);
                    const handleButtonClick         = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); }
                    const handleMenuClose           = () => { setAnchorEl(null); }
                    const handleMenuClick           = (index: number) => (_e: React.MouseEvent<HTMLElement>) => {
                        setAnchorEl(null);
                        delay(
                            () => { params.onFilterChanged?.({name, value: index === (options.defaultFilter || 0) ? undefined : index.toString()}); },
                            0
                        );
                    }

                    return (
                        <Box 
                            key={params.index}
                            className={props.classes?.root}
                            style={props.styles?.root}
                        >
                            <Button
                                onClick={handleButtonClick}
                                className={props.classes?.button}
                                style={props.styles?.button}
                            >
                                {Icon &&
                                    <Icon 
                                        className={props.classes?.icon}
                                        style={props.styles?.icon}
                                    />
                                }
                                <Box
                                    className={props.classes?.title}
                                    style={props.styles?.title}
                                >
                                    {options.title}
                                </Box>
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={anchorEl !== null}
                                onClose={handleMenuClose}
                            >
                                {options.filters.map(
                                    (filter, i) => (
                                        <MenuItem
                                            key={i}
                                            selected={i === selectedFilter}
                                            onClick={handleMenuClick(i)}
                                        >
                                            {filter.subtitle}
                                        </MenuItem>
                                    )
                                )}
                            </Menu>
                        </Box>
                    )
                },
                indicatorComponent: (
                    options.filters[selectedFilter].indicatorText
                    ?   (props: FilterIndicatorProps) => {
                            const handleFilterDelete = () => {
                                params.onFilterChanged?.({name, value: undefined});
                            }

                            return (
                                <Chip
                                    key={params.index}
                                    className={props.classes?.root}
                                    style={props.styles?.root}
                                    icon={Icon && <Icon />}
                                    color="secondary"
                                    label={options.filters[selectedFilter].indicatorText}
                                    onDelete={handleFilterDelete}
                                />
                            )
                        }
                    :   undefined
                )
            }
        }
    }
}

export default filterFactoryMenu;
