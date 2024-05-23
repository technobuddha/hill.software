import type { Resource } from './resource';
import type { DataQuality } from './data-quality';
import type { Image } from './image';

export type Label = Resource & {
    Name:               string;
    Profile:            string;
    ReleaseUrl:         string;
    Uri:                string;
    DataQuality:        DataQuality;
    ContactInfo:        string;
    Sublabels:          SubLabel[];
    Urls:               string[];
    Images:             Image[];
    ParentLabel:        string;
}

export type SubLabel = Resource & {
    Name:               string;
}

export type LabelRelease = Resource & {
    Status:             string;
    Thumb:              string;
    Format:             string;
    Title:              string;
    Catno:              string;
    Artist:             string;
}