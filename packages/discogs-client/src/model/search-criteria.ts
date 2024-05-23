import type { ResourceType } from './resource-type';

export type SearchCriteria = {
    Query:          string;         // "q"
    Type:           ResourceType,
    Title:          string;
    ReleaseTitle:   string;
    Credit:         string;
    Artist:         string;
    Anv:            string;
    Label:          string;
    Genre:          string;
    Style:          string;
    Country:        string;
    Year:           string;
    Format:         string;
    Catno:          string;
    Barcode:        string;
    Track:          string;
    Submitter:      string;
    Contributor:    string;
}