/*
    This implementation of the Mersenne Twister is a port of the a
    C implementation, by Takuji Nishimura and Makoto Matsumoto.
*/

/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_genrand(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/

/* Period parameters */
const N           = 624;
const M           = 397;
const MATRIX_A    = 0x9908b0df;         /* constant vector a */
const UPPER_MASK  = 0x80000000;         /* most significant w-r bits */
const LOWER_MASK  = 0x7FFFFFFF;         /* least significant r bits */
const MAG01       = [ 0, MATRIX_A ];

function defaultSeed() {
    const currentDate = new Date();
    return (currentDate.getMinutes() * 60000) + (currentDate.getSeconds() * 1000) + currentDate.getMilliseconds();
}

export class MersenneTwister {
    private mti     = N + 1;                    /* the array for the state vector  */
    public mt      = new Uint32Array(N);

    constructor(seed: number | number[] = defaultSeed()) {
        this.setSeed(seed);
    }

    public setSeed(seed: number | number[]): void {
        if(typeof seed === 'number')
            this.init_genrand(seed);
        else
            this.init_by_array(seed);
    }

    /* initializes mt[N] with a seed */
    public init_genrand(seed: number): void {
        this.mt[0]  = seed;
        this.mti    = 1;

        for(this.mti = 1; this.mti < N; ++this.mti)
            this.mt[this.mti] = (1812433253 * (this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)) + this.mti);
        /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
        /* In the previous versions, MSBs of the seed affect   */
        /* only MSBs of the array mt[].                        */
        /* 2002/01/09 modified by Makoto Matsumoto             */
    }

    /* initialize by an array with array */
    /* init_key is the array for initializing keys */
    public init_by_array(key: number[]): void {
        this.init_genrand(19650218);

        let i = 1;
        let j = 0;
        for(let k = Math.min(key.length, N); k; --k) {
            this.mt[i] = (this.mt[i] ^ ((this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)) * 1664525)) + key[j] + j;  /* non linear */
            i++; j++;

            if(i >= N)          { this.mt[0] = this.mt[N - 1]; i = 1; }
            if(j >= key.length) j = 0;
        }

        for(let k = N - 1; k; --k) {
            this.mt[i] = (this.mt[i] ^ ((this.mt[i - 1] ^ (this.mt[i - 1] >> 30))  * 1566083941)) - i;  /* non linear */
            if(++i >= N) { this.mt[0] = this.mt[N - 1]; i = 1; }
        }

        this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
    }

    /* generates a random number on [0,0xffffffff]-interval */
    public genrand_int32(): number {
        let y;

        if(this.mti >= N) {
            let kk;

            for(kk = 0; kk < N - M; ++kk) {
                y = (this.mt[kk] & UPPER_MASK) | (this.mt[kk + 1] & LOWER_MASK);
                this.mt[kk] = this.mt[kk + M] ^ (y >> 1) ^ MAG01[y & 0x1];
            }
            for(; kk < N - 1; ++kk) {
                y = (this.mt[kk] & UPPER_MASK) | (this.mt[kk + 1] & LOWER_MASK);
                this.mt[kk] = this.mt[kk + (M - N)] ^ (y >> 1) ^ MAG01[y & 0x1];
            }

            y = (this.mt[N - 1] & UPPER_MASK) | (this.mt[0] & LOWER_MASK);
            this.mt[N - 1] = this.mt[M - 1] ^ (y >> 1) ^ MAG01[y & 0x1];
            this.mti = 0;
        }

        y = this.mt[this.mti++];

        /* Tempering */
        y ^= (y >> 11);
        y ^= (y << 7) & 0x9d2c5680;
        y ^= (y << 15) & 0xefc60000;
        y ^= (y >> 18);

        return y;
    }

    /* generates a random number on [0,0x7fffffff]-interval */
    public genrand_int31(): number {
        return this.genrand_int32() >>> 1;
    }

    /* generates a random number on [0,1]-real-interval */
    public genrand_real1(): number {
        return this.genrand_int32() / 4294967295.0;
        /* divided by 2^32-1 */
    }

    /* generates a random number on [0,1)-real-interval */
    public genrand_real2(): number {
        return this.genrand_int32() / 4294967296.0;
        /* divided by 2^32 */
    }

    /* generates a random number on (0,1)-real-interval */
    public genrand_real3(): number {
        return (this.genrand_int32() + 0.5) / 4294967296.0;
        /* divided by 2^32 */
    }

    /* generates a random number on [0,1) with 53-bit resolution*/
    public genrand_res53(): number {
        const a = this.genrand_int32() >> 5;
        const b = this.genrand_int32() >> 6;
        return (a * 67108864.0 + b) / 9007199254740992.0;
    }
    /* These real versions are due to Isaku Wada, 2002/01/09 added */
}

export default MersenneTwister;
