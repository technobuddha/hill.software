import create2DArray from '@technobuddha/library/create2DArray';
import shuffle from '@technobuddha/library/shuffle';

import { MazeRenderer } from './MazeRenderer';
import type { MazeRendererProperties } from './MazeRenderer';
import type { Direction, Corner } from './directions';

export type Cell = {
    x: number;
    y: number;
};

export type CellDirection = Cell & {
    direction: Direction;
};

export type CellCorner = Cell & {
    corner: Corner;
};

export type MazeProperties = MazeRendererProperties & {
    entrance:               CellDirection;
    exit:                   CellDirection;
};

type Wall = {
    N:  boolean;
    E:  boolean;
    W:  boolean;
    S:  boolean;
};

export class Maze extends MazeRenderer {
    public entrance:        CellDirection;
    public exit:            CellDirection;
    public walls:           Wall[][];

    constructor({
        entrance,
        exit,
        ...props
    }: MazeProperties) {
        super(props);
        this.entrance           = entrance;
        this.exit               = exit;
        this.walls              = create2DArray(this.width, this.height, () => ({ N: true, E: true, W: true, S: true }));

        //this.walls[entrance.x][entrance.y][entrance.direction] = false;
        //this.walls[exit.x][exit.y][exit.direction]             = false;

        this.draw();
    }

    public draw() {
        if(this.context) {
            this.prepare();

            this.context.fillStyle = this.cellColor;
            this.context.fillRect(-1, -1, this.width * this.cellSize + 2, this.height * this.cellSize + 2);

            this.context.fillStyle = this.wallColor;
            for(let x = 0; x < this.width; ++x) {
                for(let y = 0; y < this.height; ++y) {
                    const wall = this.walls[x][y];

                    if(wall.N) this.drawWall({ x, y, direction: 'N' });
                    if(wall.S) this.drawWall({ x, y, direction: 'S' });
                    if(wall.E) this.drawWall({ x, y, direction: 'E' });
                    if(wall.W) this.drawWall({ x, y, direction: 'W' });
                    this.drawPillar({ x, y, corner: 'NE' });
                    this.drawPillar({ x, y, corner: 'NW' });
                    this.drawPillar({ x, y, corner: 'SE' });
                    this.drawPillar({ x, y, corner: 'SW' });
                }
            }

            const x0 = -1;
            const y0 = -1;
            const x1 = this.width;
            const y1 = this.height;
            for(let x = 0; x < this.width; ++x) {
                this.drawPillar({ x, y: y0, corner: 'SE' });
                this.drawPillar({ x, y: y0, corner: 'SW' });
                this.drawPillar({ x, y: y1, corner: 'NE' });
                this.drawPillar({ x, y: y1, corner: 'NW' });
                if(this.walls[x][y0 + 1].N) this.drawWall({ x, y: y0, direction: 'S' }, 'purple');
                if(this.walls[x][y1 - 1].S) this.drawWall({ x, y: y1, direction: 'N' }, 'purple');
            }

            for(let y = 0; y < this.height; ++y) {
                this.drawPillar({ x: x0, y, corner: 'NE' });
                this.drawPillar({ x: x0, y, corner: 'SE' });
                this.drawPillar({ x: x1, y, corner: 'NW' });
                this.drawPillar({ x: x1, y, corner: 'SW' });
                if(this.walls[x0 + 1][y].W) this.drawWall({ x: x0, y, direction: 'E' }, 'purple');
                if(this.walls[x1 - 1][y].E) this.drawWall({ x: x1, y, direction: 'W' }, 'purple');
            }

            this.drawPillar({ x: x0, y: y0, corner: 'SE' });
            this.drawPillar({ x: x1, y: y0, corner: 'SW' });
            this.drawPillar({ x: x0, y: y1, corner: 'NE' });
            this.drawPillar({ x: x1, y: y1, corner: 'NW' });
        }
    }

    public removeWall(cell: Cell, direction: Direction) {
        if(this.inMaze(cell)) {
            this.walls[cell.x][cell.y][direction] = false;
            this.drawWall({ ...cell, direction }, 'white');

            const cell2 = this.move(cell, direction);
            if(this.inMaze(cell2)) {
                this.walls[cell2.x][cell2.y][this.opposite(direction)] = false;
                this.drawWall({ ...cell2, direction: this.opposite(direction) }, this.cellColor);
            }
        }
    }

    public addWall(cell: Cell, direction: Direction) {
        if(this.inMaze(cell)) {
            this.walls[cell.x][cell.y][direction] = true;
            this.drawWall({ ...cell, direction }, 'black');

            const cell2 = this.move(cell, direction);
            if(this.inMaze(cell2)) {
                this.walls[cell2.x][cell2.y][this.opposite(direction)] = true;
                this.drawWall({ ...cell2, direction: this.opposite(direction) }, this.wallColor);
            }
        }
    }

    public inMaze(cell: Cell) {
        return cell.x >= 0 && cell.x < this.width && cell.y >= 0 && cell.y < this.height;
    }

    public move(cell: Cell, direction: Direction): CellDirection {
        let next: CellDirection;

        switch(direction) {
            case 'N':   next = { x: cell.x,     y: cell.y - 1,  direction }; break;
            case 'E':   next = { x: cell.x + 1, y: cell.y,      direction }; break;
            case 'W':   next = { x: cell.x - 1, y: cell.y,      direction }; break;
            case 'S':   next = { x: cell.x,     y: cell.y + 1,  direction }; break;
        }

        //if(next.x < 0)              next.x += this.width;
        //if(next.x >= this.width)    next.x -= this.width;

        return next;
    }

    public sides(cell: Cell) {
        return (this.walls[cell.x][cell.y].N ? 1 : 0) +
            (this.walls[cell.x][cell.y].E ? 1 : 0) +
            (this.walls[cell.x][cell.y].W ? 1 : 0) +
            (this.walls[cell.x][cell.y].S ? 1 : 0);
    }

    public neighbors(
        cell: Cell,
        { dirs = [ 'N', 'E', 'W', 'S' ]}: { dirs?: Direction[] } = {}
    ): CellDirection[] {
        return dirs
        .map(direction => this.move(cell, direction))
        .filter(c => this.inMaze(c));
    }

    public validMoves(
        cell: Cell,
        { dirs = [ 'N', 'E', 'W', 'S' ], walls = this.walls }: { dirs?: Direction[]; walls?: Wall[][] } = {}
    ): CellDirection[] {
        return dirs
        .filter(d => !walls[cell.x][cell.y][d])
        .map(direction => this.move(cell, direction))
        .filter(c => this.inMaze(c));
    }

    public toString() {
        let str = '';

        for(let y = 0; y < this.height; ++y) {
            for(let x = 0; x < this.width; ++x)
                str += this.walls[x][y].N ? '+==' : '+  ';
            str += '+\n';
            for(let x = 0; x < this.width; ++x)
                str += this.walls[x][y].W ? '|  ' : '   ';
            str += this.walls[this.width - 1][y].E ? '|\n' : ' \n';
        }
        for(let x = 0; x < this.width; ++x)
            str += this.walls[x][this.height - 1].S ? '+==' : '+  ';
        str += '+\n';

        return str;
    }

    protected distancesFrom(point = this.entrance) {
        const queue: Cell[]    = [];
        const distances         = create2DArray(this.width, this.height, Infinity);
        distances[point.x][point.y]  = 0;
        queue.unshift(point);

        let maxDistance = 1;
        while(queue.length) {
            const cell      = queue.pop()!;
            const neighbors = shuffle(
                this.neighbors(cell)
                .filter(n => !this.walls[cell.x][cell.y][n.direction] && distances[n.x][n.y] === Infinity)
            );

            for(const neighbor of neighbors) {
                const distance = distances[cell.x][cell.y] + 1;
                distances[neighbor.x][neighbor.y]  = distance;

                if(distance > maxDistance)
                    maxDistance = distance;

                queue.unshift(neighbor);
            }
        }

        return { distances, maxDistance };
    }

    public drawDistances(point = this.entrance) {
        if(this.context) {
            const { distances, maxDistance } = this.distancesFrom(point);

            for(let x = 0; x < this.width; ++x) {
                for(let y = 0; y < this.height; ++y) {
                    if(distances[x][y] === Infinity) {
                        this.context.fillStyle = 'black';
                    } else {
                        this.context.fillStyle = //`hsla(${distances[x][y] * 360 / maxDistance}, 100%, 50%, 0.25)`;
                        `rgba(0, 0, 0, ${distances[x][y] * 0.5 / maxDistance})`;
                    }

                    this.context.fillRect(
                        x * this.cellSize + this.wallSize,
                        y * this.cellSize + this.wallSize,
                        this.cellSize - (this.wallSize * 2),
                        this.cellSize - (this.wallSize * 2)
                    );
                    if(!this.walls[x][y].N) {
                        this.context.fillRect(
                            x * this.cellSize + this.wallSize,
                            y * this.cellSize,
                            this.cellSize - (this.wallSize * 2),
                            this.wallSize,
                        );
                    }
                    if(!this.walls[x][y].S) {
                        this.context.fillRect(
                            x * this.cellSize + this.wallSize,
                            y * this.cellSize + (this.cellSize - this.wallSize),
                            this.cellSize - (this.wallSize * 2),
                            this.wallSize
                        );
                    }
                    if(!this.walls[x][y].W) {
                        this.context.fillRect(
                            x * this.cellSize,
                            y * this.cellSize + this.wallSize,
                            this.wallSize,
                            this.cellSize - (this.wallSize * 2)
                        );
                    }
                    if(!this.walls[x][y].E) {
                        this.context.fillRect(
                            x * this.cellSize + (this.cellSize - this.wallSize),
                            y * this.cellSize + this.wallSize,
                            this.wallSize,
                            this.cellSize - (this.wallSize * 2)
                        );
                    }
                }
            }
        }
    }

    public braid() {
        return new Promise<void>(resolve => {
            let x = 0;
            let y = 0;
            const go = () => {
                if(this.sides({ x, y }) === 3) {
                    requestAnimationFrame(
                        () => {
                            const neighbors = this.neighbors({ x, y }).filter(cell => this.walls[x][y][cell.direction]);
                            if(this.neighbors.length) {
                                const index = Math.floor(neighbors.length * Math.random());
                                this.removeWall({ x, y }, neighbors[index].direction);
                            }

                            x++;
                            if(x >= this.width) { x = 0; y++; }
                            if(y < this.height) go(); else resolve();
                        }
                    );
                } else {
                    x++;
                    if(x >= this.width) { x = 0; y++; }
                    if(y < this.height) go(); else resolve();
                }
            };
            go();
        });
    }
}

export default Maze;
