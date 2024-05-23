import { DataQuality } from './data-quality';
import { Resource } from './resource';
import { Image } from './image';
import { Track } from './track';

export type Master = Resource & {
    Title:                  string;
    VersionsUrl:            string;
    Uri:                    string;
    MainRelease:            number;
    MainReleaseUrl:         string;
    Year:                   number;
    Styles:                 string[];
    Genres:                 string[];
    DataQuality:            DataQuality;
    Videos:                 Video[];
    Artists:                Release.Artist;
    Images:                 Image[]
    Tracks:                 Track[];    // "tracklist"
    Notes:                  string;
    Versions:               Version[];
}

export type Version = Resource & {
    Title:                  string;
    Status:                 string;
    Thumb:                  string;
    Country:                string;
    Format:                 string;
    Label:                  string;
    Released:               string;
    Catno:                  string;
}