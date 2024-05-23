import { Release } from "./release";

export type Track = {
    Duration:               string;
    Position:               string;
    Title:                  string;
    ExtraArtists:           Release.Artist;
    Artists:                Release.Artist;
    SubTracks:              Track[];
}