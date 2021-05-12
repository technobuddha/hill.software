/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
/*
Author: Jamis Buck <jamis@jamisbuck.org>
License: Public domain, baby. Knock yourself out.
The original CoffeeScript sources are always available on GitHub:
http://github.com/jamis/csmazes
*/

class Maze {
    constructor(width, height, algorithm, options) {
        this.width = width;
        this.height = height;
        if(options == null)  options = {};
        this.grid = new Maze.Grid(this.width, this.height);
        this.rand = options.rng || new MersenneTwister(options.seed);
        this.isWeave = options.weave;

        if(this.rand.randomElement == null) {
            this.rand.randomElement = function(list) { return list[this.nextInteger(list.length)]; };
            this.rand.removeRandomElement = function(list) {
                const results = list.splice(this.nextInteger(list.length), 1);
                if(results)  return results[0];
            };
            this.rand.randomizeList = function(list) {
                let i = list.length - 1;
                while(i > 0) {
                    const j = this.nextInteger(i + 1);
                    [ list[i], list[j] ] = Array.from([ list[j], list[i] ]);
                    i--;
                }
                return list;
            };
            this.rand.randomDirections = function() { return this.randomizeList(Maze.Direction.List.slice(0)); };
        }

        this.algorithm = new algorithm(this, options);
    }

    onUpdate(fn) { return this.algorithm.onUpdate(fn); }
    onEvent(fn) { return this.algorithm.onEvent(fn); }

    generate() {
        return (() => {
            const result = [];
            while(true) {
                if(!this.step())  break;  else
                    result.push(undefined);
            }
            return result;
        })();
    }

    step() { return this.algorithm.step(); }

    isEast(x, y) { return this.grid.isMarked(x, y, Maze.Direction.E); }
    isWest(x, y) { return this.grid.isMarked(x, y, Maze.Direction.W); }
    isNorth(x, y) { return this.grid.isMarked(x, y, Maze.Direction.N); }
    isSouth(x, y) { return this.grid.isMarked(x, y, Maze.Direction.S); }
    isUnder(x, y) { return this.grid.isMarked(x, y, Maze.Direction.U); }
    isValid(x, y) { return (x >= 0 && x < this.width) && (y >= 0 && y < this.height); }
    carve(x, y, dir) { return this.grid.mark(x, y, dir); }
    uncarve(x, y, dir) { return this.grid.clear(x, y, dir); }
    isSet(x, y, dir) { return this.grid.isMarked(x, y, dir); }
    isBlank(x, y) { return this.grid.at(x, y) === 0; }
    isPerpendicular(x, y, dir) { return (this.grid.at(x, y) & Maze.Direction.Mask) === Maze.Direction.cross[dir]; }
}

Maze.Algorithms = {};

Maze.Algorithm = class Algorithm {
    constructor(maze, options) {
        this.maze = maze;
        if(options == null)  options = {};
        this.updateCallback = function(maze, x, y) { };
        this.eventCallback = function(maze, x, y) { };
        this.rand = this.maze.rand;
    }

    onUpdate(fn) { return this.updateCallback = fn; }
    onEvent(fn) { return this.eventCallback = fn; }

    updateAt(x, y) { return this.updateCallback(this.maze, parseInt(x), parseInt(y)); }
    eventAt(x, y) { return this.eventCallback(this.maze, parseInt(x), parseInt(y)); }

    canWeave(dir, thruX, thruY) {
        if(this.maze.isWeave && this.maze.isPerpendicular(thruX, thruY, dir)) {
            const nx = thruX + Maze.Direction.dx[dir];
            const ny = thruY + Maze.Direction.dy[dir];
            return this.maze.isValid(nx, ny) && this.maze.isBlank(nx, ny);
        }
    }

    performThruWeave(thruX, thruY) {
        if(this.rand.nextBoolean()) {
            return this.maze.carve(thruX, thruY, Maze.Direction.U);
        } else if(this.maze.isNorth(thruX, thruY)) {
            this.maze.uncarve(thruX, thruY, Maze.Direction.N | Maze.Direction.S);
            return this.maze.carve(thruX, thruY, Maze.Direction.E | Maze.Direction.W | Maze.Direction.U);
        }
        this.maze.uncarve(thruX, thruY, Maze.Direction.E | Maze.Direction.W);
        return this.maze.carve(thruX, thruY, Maze.Direction.N | Maze.Direction.S | Maze.Direction.U);
    }

    performWeave(dir, fromX, fromY, callback) {
        const thruX = fromX + Maze.Direction.dx[dir];
        const thruY = fromY + Maze.Direction.dy[dir];
        const toX = thruX + Maze.Direction.dx[dir];
        const toY = thruY + Maze.Direction.dy[dir];

        this.maze.carve(fromX, fromY, dir);
        this.maze.carve(toX, toY, Maze.Direction.opposite[dir]);

        this.performThruWeave(thruX, thruY);

        if(callback)  callback(toX, toY);

        this.updateAt(fromX, fromY);
        this.updateAt(thruX, thruY);
        return this.updateAt(toX, toY);
    }
};

Maze.Direction = {
    N: 0x01,
    S: 0x02,
    E: 0x04,
    W: 0x08,
    U: 0x10,
    Mask: (0x01 | 0x02 | 0x04 | 0x08 | 0x10),
    List: [ 1, 2, 4, 8 ],
    dx: { 1: 0, 2: 0, 4: 1, 8: -1 },
    dy: { 1: -1, 2: 1, 4: 0, 8: 0 },
    opposite: { 1: 2, 2: 1, 4: 8, 8: 4 },
    cross: { 1: 4 | 8, 2: 4 | 8, 4: 1 | 2, 8: 1 | 2 },
};

Maze.Grid = class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = (__range__(1, this.height, true).map(y => (__range__(1, this.width, true).map(x => 0))));
    }

    at(x, y) { return this.data[y][x]; }
    mark(x, y, bits) { return this.data[y][x] |= bits; }
    clear(x, y, bits) { return this.data[y][x] &= ~bits; }
    isMarked(x, y, bits) { return (this.data[y][x] & bits) === bits; }
};
function __range__(left, right, inclusive) {
    let range = [];
    let ascending = left < right;
    let end = !inclusive ? right : ascending ? right + 1 : right - 1;
    for(let i = left; ascending ? i < end : i > end; ascending ? i++ : i--)
        range.push(i);

    return range;
}
