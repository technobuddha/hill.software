
import { Resource } from './resource';
import { DataQuality } from './data-quality';
import { Image } from './image';

export type Artist = Resource & {
    name:                   string;
    releases_url:           string;
    uri:                    string;
    realname:               string;
    profile:                string;
    data_quality:           DataQuality;
    namevariations:         NameVariation[];
    aliases:                Alias[];
    urls:                   string[];
    images:                 Image[];
    members:                Member[];
    groups:                 Group[];
}

export type NameVariation = Resource & {
    name:                   string;
}

export type Alias = Resource & {
    name:                   string;
}

export type Member = Resource & {
    active:                 boolean;
    name:                   string;
}

export type Group = Resource & {
    name:                   string;
}

// export type ArtistRelease = Resource & {
//     Thumb:                  string;
//     Artist:                 string;
//     Title:                  string;
//     MainRelease:            number;
//     Role:                   string;
//     Year:                   number;
//     Type:                   ResourceType;
//     Status:                 ReleaseStatus;
//     Format:                 string;
//     Label:                  Label;
// }