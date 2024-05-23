import { Resource } from './resource';
import { ResourceType } from './resource-type';

export type SearchResult = Resource & {
    Type:               ResourceType;
    Thumb:              string;
    Title:              string;
    Uri:                string;
}

export type ArtistSearchResult = SearchResult;

export type ReleaseSearchResult = SearchResult & {
    Styles:             string[];
    Formats:            string[];
    Country:            string;
    Barcodes:           string;
    Labels:             string[];
    Catno:              string;
    Year:               number;
    Genres:             string[];
}

export type LabelSearchResult = SearchResult;

// TODO Looks same as ReleaseSearchResults ??
export type MasterSearchResult = SearchResult & {
    Styles:             string[];
    Formats:            string[];
    Country:            string[];
    Labels:             string[];
    Catno:              string;
    Year:               string;
    Genres:             string;
}

