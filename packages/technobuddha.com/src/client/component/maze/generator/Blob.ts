import create2DArray from '@technobuddha/library/create2DArray';
import shuffle       from '@technobuddha/library/shuffle';
import type { Cell, CellDirection } from '../maze/Maze';

import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';

type SubRegion = 'a' | 'b' | 'm';

class Region {
    private width:  number;
    private height: number;
    public subregions: (SubRegion | null)[][];

    constructor({ width, height }: { width: number; height: number }) {
        this.width      = width;
        this.height     = height;
        this.subregions = create2DArray(width, height, null);
    }

    public cells(subregion = 'm') {
        const cs: Cell[] = [];

        for(let x = 0; x < this.width; ++x) {
            for(let y = 0; y < this.height; ++y) {
                if(this.subregions[x][y] === subregion)
                    cs.push({ x, y });
            }
        }

        return cs;
    }

    public split(threshold: number) {
        const rs: Region[] = [];

        const a = this.cells('a');
        const b = this.cells('b');

        if(a.length >= threshold) {
            const r = new Region({ width: this.width, height: this.height });
            for(const c of a) r.addCell(c);
            rs.push(r);
        }

        if(b.length >= threshold) {
            const r = new Region({ width: this.width, height: this.height });
            for(const c of b) r.addCell(c);
            rs.push(r);
        }

        return rs;
    }

    public addCell(cell: Cell) {
        this.subregions[cell.x][cell.y] = 'm';
    }
}

type BlobProperties = MazeGeneratorProperties & {
    threshold: number;
};

export class Blob extends MazeGenerator {
    private threshold:  number;
    private walls:      CellDirection[] = [];

    constructor({ threshold = 3, ...props }: BlobProperties) {
        super({ ...props });

        this.threshold  = threshold;
        this.walls      = [];

        const { maze }          = this;
        const { width, height } = maze;

        maze.removeInteriorWalls();

        const allRegion = new Region({ width, height });
        for(let x = 0; x < width; ++x) {
            for(let y = 0; y < height; ++y)
                allRegion.addCell({ x, y });
        }

        const stack = [ allRegion ];
        while(stack.length) {
            const region = stack.pop()!;

            const [ seedA, seedB ] = shuffle(region.cells());
            region.subregions[seedA.x][seedA.y] = 'a';
            region.subregions[seedB.x][seedB.y] = 'b';

            const frontier = [ seedA, seedB ];

            while(frontier.length) {
                const index = Math.floor(Math.random() * frontier.length);
                const cell  = frontier[index];

                const neighbors = maze.neighbors(cell)
                .filter(n => region.subregions[n.x][n.y] === 'm');

                if(neighbors.length > 0) {
                    const neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
                    region.subregions[neighbor.x][neighbor.y] = region.subregions[cell.x][cell.y];
                    frontier.push(neighbor);
                } else {
                    frontier.splice(index, 1);
                }
            }

            const boundary = region.cells('a')
            .flatMap(cell => maze.neighbors(cell).filter(n => region.subregions[n.x][n.y] === 'b'));

            boundary.splice(Math.floor(Math.random() * boundary.length), 1);

            for(const cd of boundary)
                this.walls.push({ ...cd, direction: maze.opposite(cd.direction) });

            stack.push(...region.split(this.threshold));
        }
    }

    protected step() {
        const { maze } = this;

        if(this.walls.length) {
            const wall = this.walls.shift()!;
            maze.addWall(wall, wall.direction);
            return true;
        }
        return false;
    }
}

export default Blob;
