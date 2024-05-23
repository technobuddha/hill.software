import { DataQuality } from './data-quality';
import type { Resource } from './resource';
import type { ReleaseStatus } from './release-status';
import type { Image } from './image';
import type { ReleaseIdentifierType } from './release-identifier-type';

export type Release = Resource & {
    Title:              string;
    Uri:                string;
    Status:             ReleaseStatus;
    DataQuality:        DataQuality;
    Country:            string;
    Year:               number;
    Released:           string;
    ReleasedFormatted:  string;
    Notes:              string;
    FormatQuality:      string;
    Styles:             string[];
    Genres:             string[];
    Labels:             Label[];
    Companies:          Company[];
    ExtraArtists:       Artist[];   // "extraartists"
    Videos:             Video[];
    Formats:            Format[];
    Images:             Image[];
    Identifiers:        Identifier[];
    Thumb:              string;
    MasterId:           number;
}

type Label = Resource & {
    Name:               string;
    EntityType:         number;
    Catno:              string;
    EntityTypeName:     string;
}

type Artist = Resource & {
    Tracks:             string;
    Role:               string;
    Anv:                string;
    Join:               string;
    Name:               string;
}

type Company = Resource & {
    EntityType:         string;
    Catno:              string;
    EntityTypeName:     string;
    Name:               string;
}

type Identifier = {
    Type:               ReleaseIdentifierType;
    Description:        string;
    Value:              string;
}

type Format = {
    Descriptions:       string[];
    Name:               string;
    Qty:                string;
}

type FormatType = 'Vinyl' | 'CD' | 'CDr' | 'DVD' | 'Blu-ray' | 'SACD' | 'DAT' | 'Laserdisc';

type FormatDescriptionType = 'LP' | 'FLAC' | 'WAV' | 'Album' | 'Maxi-Single' | 'Single' | 'Compilation' | 'Mixed';