import express  from 'express';
import db       from '#server/db/music';

import type { Logger } from 'winston';
import type { Router } from 'express';

export function music(_logger: Logger): Router {
    return express.Router()
    .get(
        '/tracks',
        (_req, res) => {
            void (async () => {
                const tracks = await db.getTracks();
                res.status(200).json(tracks);
            })();
        }
    )
    .get(
        '/newAlbums',
        (_req, res) => {
            void (async () => {
                const albums = await db.getNewAlbums();
                res.status(200).json(albums);
            })();
        }
    )
    .get(
        '/artists',
        (_req, res) => {
            void (async () => {
                const artists = await db.getArtists();
                res.status(200).json(artists);
            })();
        }
    )
    .get(
        '/genres',
        (_req, res) => {
            void (async () => {
                const artists = await db.getGenres();
                res.status(200).json(artists);
            })();
        }
    );
}

export type { GetTracks, GetNewAlbums, GetArtists, GetGenres } from '#server/db/music';
export default music;
