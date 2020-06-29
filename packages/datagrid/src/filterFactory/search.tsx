// import React                   from 'react';
// import classNames              from 'clsx';
// import { FilterRunnerParams, FilterRunner } from '.';
// import Button                  from '$client/control/Button';
// import Popover                 from '@material-ui/core/Popover';
// import FormControl             from '@material-ui/core/FormControl';
// import Chip                    from '$client/control/Chip';
// import SearchInput             from '$client/control/SearchInput';
// import css                     from './menu.pcss';
// import { Record<string, any> }     from '../types';

// export type FilterFactorySearchOptions = {
//     type:       'search';
//     name:       string;
//     title:      string;
//     icon?:      React.ComponentType<{ className?: string }>;
//     chip?:      (search: string) => string;
// };

// export function filterFactorySearch<T extends Record<string, any>>(options: FilterFactorySearchOptions): FilterRunner<T>
// {
//     const { title, icon: Icon, chip, name } = options;

//     const component = <T extends Record<string, any>>(props: FilterRunnerParams<T>) => {
//         const [ search, setSearch ]       = React.useState<string>('');
//         const [ anchorEl, setAnchorEl ]   = React.useState<HTMLElement | null>(null);

//         const handleButtonClick  = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); }
//         const handlePopoverClose = () => { setAnchorEl(null); }
//         const handleFilterDelete = () => { setSearch(''); setAnchorEl(null); }

//         const chipSearch    = chip?.(search);

//         const myFilter = (rows: T[]) => rows;

//         return props.children({
//             data:   myFilter(props.data),
//             filter: (
//                 <Button
//                     key={`b${props.index}`}
//                     className={classNames(css.menuFilter, props.classes?.input)}
//                     onClick={handleButtonClick}
//                 >
//                     {Icon && <Icon className={css.icon} />}
//                     <div className={css.title}>{title}</div>
//                 </Button>
//             ),
//             popup:  (
//                 <Popover
//                     key={`p${props.index}`}
//                     anchorEl={anchorEl}
//                     open={anchorEl !== null}
//                     onClose={handlePopoverClose}
//                 >
//                     <FormControl>
//                         <SearchInput />
//                     </FormControl>
//                 </Popover>
//             ),
//             chip: (
//                 !!chipSearch && (
//                     <Chip
//                         className={props.classes?.chip}
//                         icon={Icon && <Icon />}
//                         color="secondary"
//                         label={chipSearch}
//                         onDelete={handleFilterDelete}
//                     />
//                 )
//             )
//         });
//     }

//     return { name, component }
// }

// export default filterFactorySearch;
