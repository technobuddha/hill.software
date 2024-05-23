import expect  from '../../../util/expect';
import { DiscogsClient } from '../src/client/discogs-client';

describe(
    'discogs client',
    () => {
        test(
            'should do something',
            async () => {
                const client = new DiscogsClient();
                expect(await (client.artist(1))).toBe({});
            }
        );
    }
);
