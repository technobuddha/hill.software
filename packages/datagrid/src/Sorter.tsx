import React                        from 'react';
import { useHistory }               from 'react-router-dom';
import Fade                         from '@material-ui/core/Fade';
import CircularProgress             from '@material-ui/core/CircularProgress'
import { Column }                   from './column';
import { getSort, setSort }         from './query';

type SorterProps<T extends Record<string, any>> =
{
    data:               T[];
    columns:            Column<T>[];
    children:           (renderProps: SorterRenderProps<T>) => React.ReactElement;
};

export type SorterRenderProps<T extends Record<string, any>> = {
    data:               T[];
    sortBy:             string;
    sortOrder:          string;
    handleSortChanged:  (name: string) => void;
}

export const Sorter = <T extends Record<string, any>>({data, columns, children}: SorterProps<T>) => {
    const history   = useHistory();
    const { column, sortBy, sortOrder }   = getSort(columns);
    const [ sorting, setSorting ]         = React.useState<boolean>(true);
    
    const handleSortChanged = (name: string) => {
        history.push(setSort(name));
    }

    React.useEffect(
        () => {
            const collate = column.collate ? column.collate(sortOrder === 'asc') : null;
    
            if(collate)
                data.sort(collate);
            setSorting(false);
        },
        [data, sortBy, sortOrder]
    )

    return (
        sorting
        ?   <Fade
                in={true}
                style={{transitionDelay: '100ms'}}
                unmountOnExit
            >
                <CircularProgress color="secondary"/>
            </Fade>
        :   children({data, sortBy, sortOrder, handleSortChanged})
    );
}

export default Sorter;
