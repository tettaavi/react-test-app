export interface Characters {
    info: CharactersInfo;
    results: Character[];
}

export interface CharactersInfo {
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