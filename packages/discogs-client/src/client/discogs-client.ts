
import fetch from 'node-fetch';
import { RateLimiter } from 'limiter';
import { apiUrls } from './api-urls';


export class DiscogsClient {

    private limiter: RateLimiter;

    // cspell:disable-next-line
    constructor(private userAgent = 'TechnobuddhaMusicLibrarian/3.00', private key = 'fXThazVQPlgeZSXLqKxj', private secret = 'QMuAOKkGOmFboZbnpABzAXUgLRvAEeGF') {
        this.limiter = new RateLimiter({ tokensPerInterval: 60,  interval: 'minute' });
    }

    private async request<T extends string/*JsonObject*/>(uri: string) {
        await this.limiter.removeTokens(1);

        return fetch(
            uri,
            {
                headers: {
                    'User-Agent:': this.userAgent,
                    'Authorization': `Discogs key=${this.key}, secret=${this.secret}`
                }
            }
        )
        .then(
            response => {
                if(response.ok) {
                    return response.text() as Promise<T>;
                }

                throw new Error(`${response.status} (${response.statusText}))`);        // TODO DiscogsException
            }
        )
    }

    public async artist(artistId: number) {
        return this.request(apiUrls.artist(artistId));
    }


}