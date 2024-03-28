export interface Characters {
    info: BaseInfo;
    results: Character[];
}

export interface BaseInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: Gender;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
}

export interface Episodes {
    info: BaseInfo;
    results: Episode[]
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface Locations {
    info: BaseInfo;
    results: Location[]
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string
}