import React                                            from 'react';
import isNumber                                         from 'lodash/isNumber';
import { SizeScrollbar, SizeScrollbarProps, SizeScrollbarRenderProps }      from 'mui-size';
import { Column }                                       from './column';

export type FrameProps<T extends Record<string, any>> = Omit<SizeScrollbarProps, 'children'> & {
    columns:        Column<T>[];
    controlWidth:   number;
    selection?:     boolean;
    menu?:          boolean;
    children:       (props: FrameRenderProps) => React.ReactElement;
}

export type FrameRenderProps = SizeScrollbarRenderProps & {
    columnWidths:   number[];
}

export const Frame = <T extends Record<string, any>>(props: FrameProps<T>) => {
    console.log('Frame rendeding');
    
    return (
        <SizeScrollbar flexGrow={1} width="100%" height="100%" display="flex" flexDirection="column" position="relative">
            {({width, height, scrollbarWidth, scrollbarHeight}: SizeScrollbarRenderProps) => {
                let rowWidth    = width - scrollbarWidth - 1;
                let stars       = 0;
                
                if(props.selection)  rowWidth -= props.controlWidth;
                if(props.menu)       rowWidth -= props.controlWidth;
                
                props.columns.forEach(
                    column => {
                        if(isNumber(column.width))
                            rowWidth    -= column.width;
                        else
                            stars       += parseInt(column.width, 10) || 1;
                    }
                );

                const columnWidths = props.columns.map(column => isNumber(column.width) ? column.width : (rowWidth * (parseInt(column.width, 10) || 1)) / stars);

                return props.children({width, height, scrollbarWidth, scrollbarHeight, columnWidths});
            }}
        </SizeScrollbar>
    );
}

export default Frame;
