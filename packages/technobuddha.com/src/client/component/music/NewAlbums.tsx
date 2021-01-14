import React from 'react';
import DataGrid from '#control/datagrid/DataGrid'; // TODO 'datagrid';
import useApi from '#context/api';
import Box from '@material-ui/core/Box';
import MusicNote from '@material-ui/icons/MusicNote';
import DelayedCircularProgress from '#control/DelayedCircularProgress';

export const NewAlbums: React.FC = () => {
    const api   = useApi();
    const [ dataset, setDataset ]   = React.useState<any[]>(null!);

    React.useEffect(
        () => {
           api.music.newAlbums().then(tracks => setDataset(tracks.payload));
        },
        []
    );

    if(dataset) {
        return (
            <DataGrid
                data={dataset}
                rowHeight={32}
                selection={true}
                columns={[
                    {name: 'artist',        type: 'array',  sortBy: ['artist', 'album']},
                    {name: 'album',         type: 'string', sortBy: ['album']},
                    {name: 'year',          type: 'number', sortBy: ['year'], width: 40},
                    {name: 'genre',         type: 'array',  sortBy: ['genre', 'subgenre']},
                    {name: 'subgenre',      type: 'array',  sortBy: ['subgenre']}
                ]}
                filters={[
                    {type: 'checkbox-list', name: 'genre',    Icon: MusicNote},
                    {type: 'checkbox-list', name: 'subgenre', Icon: MusicNote},
                ]}
                defaultSort="artist"
                useLocation={true}
            />
        );
    } else {
        return <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center"><DelayedCircularProgress /></Box>;
    }

}

export default NewAlbums;
