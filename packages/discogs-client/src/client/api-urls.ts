
export const apiUrls = {
    release(releaseId: number) {
        return `releases/${releaseId}`;
    },

    masterRelease(masterId: number) {
        return `masters/${masterId}`;
    },

    masterReleaseVersions(masterId: number, page = 1, perPage = 50) {
        return `masters/${masterId}/versions?page=${page}&per_page=${perPage}`;
    },

    artist(artistId: number) {
        return `artists/${artistId}`;
    },

    artistRelease(artistId: number, page = 1, perPage = 50) {
        return `artists/${artistId}/releases?page=${page}&per_page=${perPage}`;
    },

    label(labelId: number) {
        return `labels/${labelId}`;
    },

    labelReleases(labelId: number, page = 1, perPage = 50) {
        return `labels/${labelId}/releases?page=${page}&per_page=${perPage}`;
    },

    search(searchTerms: string) {
        return `database/search?q=${encodeURIComponent(searchTerms)}`;
    },
    // search(criteria: SearchCriteria, page = 1, perPage = 50) {
    //     return `database/search?{criteria.buildQueryString}&page={page}&per_page={perPage}`;
    // }

    image(filename: string) {
        return `images/${encodeURIComponent(filename)}`;
    }
}