/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
/*
Author: Jamis Buck <jamis@jamisbuck.org>
License: Public domain, baby. Knock yourself out.
The original CoffeeScript sources are always available on GitHub:
http://github.com/jamis/csmazes
*/

class BlobbyCell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.name = `r${this.row}c${this.col}`;
    }

    north() { return `r${this.row - 1}c${this.col}`; }
    south() { return `r${this.row + 1}c${this.col}`; }
    east() { return `r${this.row}c${this.col + 1}`; }
    west() { return `r${this.row}c${this.col - 1}`; }
}

class BlobbyRegion {
    constructor() {
        this.cells = [];
    }

    addCell(cell) {
        this[cell.name] = cell;
        return this.cells.push(cell);
    }
}

const Cls = (Maze.Algorithms.BlobbyDivision = class BlobbyDivision extends Maze.Algorithm {
    static initClass() {
        this.prototype.START = 1;
        this.prototype.PLANT = 2;
        this.prototype.GROW  = 3;
        this.prototype.WALL  = 4;
    }

    constructor(maze, options) {
        super(...arguments);

        this.threshold = options.threshold != null ? options.threshold : 4;
        this.growSpeed = options.growSpeed != null ? options.growSpeed : 5;
        this.wallSpeed = options.wallSpeed != null ? options.wallSpeed : 2;

        this.stack = [ ];

        const region = new BlobbyRegion();
        for(let row = 0, end = maze.height, asc = end >= 0; asc ? row < end : row > end; asc ? row++ : row--) {
            for(let col = 0, end1 = maze.width, asc1 = end1 >= 0; asc1 ? col < end1 : col > end1; asc1 ? col++ : col--) {
                const cell = new BlobbyCell(row, col);
                region.addCell(cell);

                if(row > 0) {
                    maze.carve(col, row, Maze.Direction.N);
                    maze.carve(col, row - 1, Maze.Direction.S);
                }

                if(col > 0) {
                    maze.carve(col, row, Maze.Direction.W);
                    maze.carve(col - 1, row, Maze.Direction.E);
                }
            }
        }

        this.stack.push(region);
        this.state = this.START;
    }

    stateAt(col, row) {
        const name = `r${row}c${col}`;
        const cell = this.region != null ? this.region[name] : undefined;

        if(cell)
            return cell.state != null ? cell.state : 'active';

        return 'blank';
    }

    step() {
        switch(this.state) {
            case this.START: return this.startRegion();
            case this.PLANT: return this.plantSeeds();
            case this.GROW:  return this.growSeeds();
            case this.WALL:  return this.drawWall();
        }
    }

    startRegion() {
        delete this.boundary;
        this.region = this.stack.pop();

        if(this.region) {
            for(let cell of Array.from(this.region.cells))  delete cell.state;
            this.highlightRegion(this.region);
            this.state = this.PLANT;
            return true;
        }
        return false;
    }

    plantSeeds() {
        const indexes = this.rand.randomizeList(__range__(0, this.region.cells.length, false));

        this.subregions = { a: new BlobbyRegion(), b: new BlobbyRegion() };

        const a = this.region.cells[indexes[0]];
        const b = this.region.cells[indexes[1]];

        a.state = 'a';
        b.state = 'b';

        this.subregions.a.addCell(a);
        this.subregions.b.addCell(b);

        this.updateAt(a.col, a.row);
        this.updateAt(b.col, b.row);

        this.frontier = [ a, b ];

        this.state = this.GROW;

        return true;
    }

    growSeeds() {
        let growCount = 0;
        while((this.frontier.length > 0) && (growCount < this.growSpeed)) {
            const index = this.rand.nextInteger(this.frontier.length);
            const cell = this.frontier[index];

            const n = this.region[cell.north()];
            const s = this.region[cell.south()];
            const e = this.region[cell.east()];
            const w = this.region[cell.west()];

            const list = [];
            if(n && !n.state)  list.push(n);
            if(s && !s.state)  list.push(s);
            if(e && !e.state)  list.push(e);
            if(w && !w.state)  list.push(w);

            if(list.length > 0) {
                const neighbor = this.rand.randomElement(list);
                neighbor.state = cell.state;
                this.subregions[cell.state].addCell(neighbor);
                this.frontier.push(neighbor);
                this.updateAt(neighbor.col, neighbor.row);
                growCount += 1;
            } else {
                this.frontier.splice(index, 1);
            }
        }

        this.state = this.frontier.length === 0 ? this.WALL : this.GROW;
        return true;
    }

    findWall() {
        this.boundary = [];

        for(let cell of Array.from(this.subregions.a.cells)) {
            const n = this.region[cell.north()];
            const s = this.region[cell.south()];
            const e = this.region[cell.east()];
            const w = this.region[cell.west()];

            if(n && (n.state !== cell.state))
                this.boundary.push({ from: cell, to: n, dir: Maze.Direction.N });

            if(s && (s.state !== cell.state))
                this.boundary.push({ from: cell, to: s, dir: Maze.Direction.S });

            if(e && (e.state !== cell.state))
                this.boundary.push({ from: cell, to: e, dir: Maze.Direction.E });

            if(w && (w.state !== cell.state))
                this.boundary.push({ from: cell, to: w, dir: Maze.Direction.W });
        }

        return this.rand.removeRandomElement(this.boundary);
    }

    drawWall() {
        if(!this.boundary)  this.findWall();

        let wallCount = 0;
        while((this.boundary.length > 0) && (wallCount < this.wallSpeed)) {
            const wall = this.rand.removeRandomElement(this.boundary);

            this.maze.uncarve(wall.from.col, wall.from.row, wall.dir);
            this.maze.uncarve(wall.to.col, wall.to.row, Maze.Direction.opposite[wall.dir]);
            this.updateAt(wall.from.col, wall.from.row);
            wallCount += 1;
        }

        if(this.boundary.length === 0) {
            let cell;
            for(cell of Array.from(this.region.cells))  cell.state = 'blank';

            if((this.subregions.a.cells.length >= this.threshold) || ((this.subregions.a.cells.length > 4) && ((this.rand.nextInteger() % 10) < 5)))
                this.stack.push(this.subregions.a);
            else
                for(cell of Array.from(this.subregions.a.cells))  cell.state = 'in';

            if((this.subregions.b.cells.length >= this.threshold) || ((this.subregions.b.cells.length > 4) && ((this.rand.nextInteger() % 10) < 5)))
                this.stack.push(this.subregions.b);
            else
                for(cell of Array.from(this.subregions.b.cells))  cell.state = 'in';

            this.highlightRegion(this.subregions.a);
            this.highlightRegion(this.subregions.b);

            this.state = this.START;
        }

        return true;
    }

    highlightRegion(region) {
        return Array.from(region.cells).map(cell =>
            this.updateAt(cell.col, cell.row));
    }
});
Cls.initClass();

function __range__(left, right, inclusive) {
    let range = [];
    let ascending = left < right;
    let end = !inclusive ? right : ascending ? right + 1 : right - 1;
    for(let i = left; ascending ? i < end : i > end; ascending ? i++ : i--)
        range.push(i);

    return range;
}
