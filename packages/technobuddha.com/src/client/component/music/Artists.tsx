import React           from 'react';
import DelayedLoading  from '#control/delayedLoading';
import DataGrid        from '#control/datagrid';
import useApi          from '#context/api';

export const NewAlbums: React.FC = () => {
    const api   = useApi();
    const [ dataset, setDataset ]   = React.useState<any[]>(null!);

    React.useEffect(
        () => {
           api.music.artists().then(tracks => setDataset(tracks.payload));
        },
        []
    );

    if(dataset) {
        return (
            <DataGrid
                data={dataset}
                rowHeight={32}
                columns={[
                    {name: 'artist',        type: 'string', sortBy: ['artist', 'album']},
                    {name: 'album',         type: 'string', sortBy: ['album']},
                    {name: 'year',          type: 'number', sortBy: ['year'], width: 40},
                    {name: 'genre',         type: 'array',  sortBy: ['genre', 'subgenre']},
                    {name: 'subgenre',      type: 'array',  sortBy: ['subgenre']}
                ]}
                filters={[
                    // {type: 'checkbox-list', name: 'genre',    Icon: MusicNote},
                    // {type: 'checkbox-list', name: 'subgenre', Icon: MusicNote},
                ]}
                defaultSort="artist"
                useLocation={true}
            />
        );
    } else {
        return <DelayedLoading />;
    }

}

export default NewAlbums;
