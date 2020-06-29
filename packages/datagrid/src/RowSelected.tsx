import React                from 'react';
import Checkbox             from '@material-ui/core/Checkbox';
import { useRowProperties }      from './RowProperties';

export type RowSelectedProps<T extends Record<string, any>> = {
    datum?:         T;
    data?:          T[];
    className?:     string;
    style?:         React.CSSProperties;
    children?:      never
}

export const RowSelected = <T extends Record<string, any>>(props: RowSelectedProps<T>) => {
    const { datum, data } = props;

    const { setSelected, getSelected, setAllSelected, countSelected } = useRowProperties();

    const handleCheckboxChange = React.useCallback(
        (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => { setSelected(datum!, checked); },
        [datum]
    );

    const handleMasterChange = React.useCallback(
        (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => { setAllSelected(data!, checked); },
        [data]
    );

    if(datum) {
        return (
            <Checkbox
                size="small"
                className={props.className}
                style={props.style}
                onChange={handleCheckboxChange}
                checked={getSelected(datum)}
                color="secondary"
            />
        )
    } else if(data) {
        const {selected, unselected} = countSelected(data);

        return (
            <Checkbox
                size="small"
                className={props.className}
                style={props.style}
                onChange={handleMasterChange}
                checked={selected > 0 && unselected === 0}
                indeterminate={selected > 0 && unselected > 0}
                color="secondary"
            />
        )
    } else {
        return <div>Neither datum or data set</div>;
    }
}