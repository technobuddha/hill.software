
export type Image = {
    width:              number;
    height:             number;
    uri:                number;
    uri150:             number;
    type:               ImageType;
}

export type ImageType = 'primary' | 'secondary';