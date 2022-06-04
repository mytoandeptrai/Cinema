export interface ICommonFireBase {}

export interface IDetailMovie {
    backdrop_path: string;
    genres: IGenre[];
    homepage: string;
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
    last_air_date: string;
    name: string;
    seasons: {
        episode_count: number;
        season_number: number;
    }[];
}

export interface ISeason {
    episodes: IEpisode[];
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    air_date?: string;
    episode_count?: number;
    id?: string;
}

export interface IEpisode {
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface ICast {
    id: number;
    name: string;
    profile_path: string;
    character: string;
}

export interface IVideoTrailer {
    name: string;
    key: string;
    official?: boolean;
    id?: string;
    published_at?: string;
    site?: string;
    size?: number;
    type?: string;
    iso_639_1?: string;
    iso_3166_1?: string;
}

export interface ISearchResult {
    page: number;
    total_pages: number;
    total_results: number;
    results: Item[];
}

export interface Item {
    poster_path: string;
    title?: string;
    name?: string;
    overview: string;
    backdrop_path: string;
    id: number;
    media_type: 'tv' | 'movie';
    vote_average: number;
}

export interface IUser {
    photoURL: string;
    displayName: string;
    email: string;
    uid?: string;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface ICast {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: 0;
    original_name: string;
    popularity: number;
    profile_path: string;
}

export interface IUserResponse {
    operationType: string;
    providerId: string;
    user: any;
    _tokenResponse: any;
}
