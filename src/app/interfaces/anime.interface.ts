export interface Anime {
    request_hash:         string;
    request_cached:       boolean;
    request_cache_expiry: number;
    results:              Result[];
    last_page:            number;
}

export interface Result {
    mal_id:     number;
    url:        string;
    image_url:  string;
    title:      string;
    airing:     boolean;
    synopsis:   string;
    type:       Type;
    episodes:   number;
    score:      number;
    start_date: Date;
    end_date:   Date | null;
    members:    number;
    rated:      Rated;
}

export enum Rated {
    G = "G",
    PG = "PG",
    PG13 = "PG-13",
    R = "R",
    RatedR = "R+",
    Rx = "Rx",
}

export enum Type {
    Movie = "Movie",
    Music = "Music",
    Ona = "ONA",
    Ova = "OVA",
    Special = "Special",
    Tv = "TV",
}
