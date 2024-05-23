type Paginated<T> = {
    Items: T[];
    Pagination: {
        Page: number;
        Pages: number;
        Items: number;
        PerPage: number;
        Urls: {
            First: string;
            Prev: string;
            Next: string;
            Last: string;
        }
    }
}
