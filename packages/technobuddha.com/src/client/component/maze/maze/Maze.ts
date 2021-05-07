import create2DArray from '@technobuddha/library/create2DArray';
import shuffle from '@technobuddha/library/shuffle';
import { opposite, directions } from './directions';
import { } from '@technobuddha/library/color';

import type { Direction } from './directions';

export type Cell = {
    x: number;
    y: number;
};

export type CellDirection = Cell & {
    direction: Direction;
};

export type MazeProperties = {
    context?:               CanvasRenderingContext2D;
    width:                  number;
    height:                 number;
    entrance:               CellDirection;
    exit:                   CellDirection;
    cellSize:               number;
    wallSize:               number;
};

type Wall = {
    N:  boolean;
    E:  boolean;
    W:  boolean;
    S:  boolean;
};

export class Maze {
    public readonly CELL_SIZE;
    public readonly WALL_SIZE;

    public context:         CanvasRenderingContext2D | undefined;
    public width:           number;
    public height:          number;
    public entrance:        CellDirection;
    public exit:            CellDirection;
    public walls:           Wall[][];

    constructor({ context, width, height, entrance, exit, cellSize = 7, wallSize = 1 }: MazeProperties) {
        this.context            = context;
        this.width              = width;
        this.height             = height;
        this.entrance           = entrance;
        this.exit               = exit;
        this.walls              = create2DArray(this.width, this.height, () => ({ N: true, E: true, W: true, S: true }));
        this.CELL_SIZE          = cellSize;
        this.WALL_SIZE          = wallSize;

        this.walls[entrance.x][entrance.y][entrance.direction] = false;
        this.walls[exit.x][exit.y][exit.direction]             = false;

        this.draw();
    }

    public translateContext(context: CanvasRenderingContext2D) {
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate(
            Math.floor((context.canvas.width - this.width * this.CELL_SIZE) / 2),
            Math.floor((context.canvas.height - this.height * this.CELL_SIZE) / 2),
        );
    }

    public draw() {
        if(this.context) {
            this.translateContext(this.context);

            this.context.fillStyle = 'white';
            this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

            this.context.fillStyle = 'black';
            for(let x = 0; x < this.width; ++x) {
                for(let y = 0; y < this.height; ++y) {
                    const wall = this.walls[x][y];

                    this.context.fillRect(
                        x * this.CELL_SIZE,
                        y * this.CELL_SIZE,
                        this.WALL_SIZE,
                        this.WALL_SIZE,
                    );

                    this.context.fillRect(
                        x * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                        y * this.CELL_SIZE,
                        this.WALL_SIZE,
                        this.WALL_SIZE,
                    );

                    this.context.fillRect(
                        x * this.CELL_SIZE,
                        y * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                        this.WALL_SIZE,
                        this.WALL_SIZE,
                    );

                    this.context.fillRect(
                        x * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                        y * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                        this.WALL_SIZE,
                        this.WALL_SIZE,
                    );

                    if(wall.N) {
                        this.context.fillRect(
                            x * this.CELL_SIZE + this.WALL_SIZE,
                            y * this.CELL_SIZE,
                            this.CELL_SIZE - (this.WALL_SIZE * 2),
                            this.WALL_SIZE
                        );
                    }
                    if(wall.S) {
                        this.context.fillRect(
                            x * this.CELL_SIZE + this.WALL_SIZE,
                            y * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                            this.CELL_SIZE - (this.WALL_SIZE * 2),
                            this.WALL_SIZE
                        );
                    }
                    if(wall.E) {
                        this.context.fillRect(
                            x * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                            y * this.CELL_SIZE + this.WALL_SIZE,
                            this.WALL_SIZE,
                            this.CELL_SIZE - (this.WALL_SIZE * 2),
                        );
                    }
                    if(wall.W) {
                        this.context.fillRect(
                            x * this.CELL_SIZE,
                            y * this.CELL_SIZE + this.WALL_SIZE,
                            this.WALL_SIZE,
                            this.CELL_SIZE - (this.WALL_SIZE * 2),
                        );
                    }
                }
            }

            for(let x = 0; x < this.width; ++x) {
                this.context.fillRect(
                    x * this.CELL_SIZE,
                    -this.WALL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
                this.context.fillRect(
                    x * this.CELL_SIZE + this.CELL_SIZE - this.WALL_SIZE,
                    -this.WALL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
                if(this.walls[x][0].N) {
                    this.context.fillRect(
                        x * this.CELL_SIZE + this.WALL_SIZE,
                        -this.WALL_SIZE,
                        this.CELL_SIZE - this.WALL_SIZE * 2,
                        this.WALL_SIZE,
                    );
                }

                this.context.fillRect(
                    x * this.CELL_SIZE,
                    this.height * this.CELL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );

                this.context.fillRect(
                    x * this.CELL_SIZE + this.CELL_SIZE - this.WALL_SIZE,
                    this.height * this.CELL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );

                if(this.walls[x][this.height - 1].S) {
                    this.context.fillRect(
                        x * this.CELL_SIZE + this.WALL_SIZE,
                        this.height * this.CELL_SIZE,
                        this.CELL_SIZE - this.WALL_SIZE * 2,
                        this.WALL_SIZE,
                    );
                }
            }

            for(let y = 0; y < this.height; ++y) {
                this.context.fillRect(
                    -this.WALL_SIZE,
                    y * this.CELL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
                this.context.fillRect(
                    -this.WALL_SIZE,
                    y * this.CELL_SIZE + this.CELL_SIZE - this.WALL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
                if(this.walls[0][y].W) {
                    this.context.fillRect(
                        -this.WALL_SIZE,
                        y * this.CELL_SIZE + this.WALL_SIZE,
                        this.WALL_SIZE,
                        this.CELL_SIZE - this.WALL_SIZE * 2,
                    );
                }

                this.context.fillRect(
                    this.width * this.CELL_SIZE,
                    y * this.CELL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );

                this.context.fillRect(
                    this.width * this.CELL_SIZE,
                    y * this.CELL_SIZE + this.CELL_SIZE - this.WALL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );

                if(this.walls[this.width - 1][y].E) {
                    this.context.fillRect(
                        this.width * this.CELL_SIZE,
                        y * this.CELL_SIZE + this.WALL_SIZE,
                        this.WALL_SIZE,
                        this.CELL_SIZE - this.WALL_SIZE * 2,
                    );
                }
            }

            if(this.walls[0][0].N || this.walls[0][0].W) {
                this.context.fillRect(
                    -this.WALL_SIZE,
                    -this.WALL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
            }

            if(this.walls[this.width - 1][0].N || this.walls[this.width - 1][0].E) {
                this.context.fillRect(
                    this.width * this.CELL_SIZE,
                    -this.WALL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
            }

            if(this.walls[0][this.height - 1].S || this.walls[this.height - 1][0].W) {
                this.context.fillRect(
                    -this.WALL_SIZE,
                    this.height * this.CELL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
            }

            if(this.walls[this.width - 1][this.height - 1].S || this.walls[this.width - 1][this.height - 1].E) {
                this.context.fillRect(
                    this.width * this.CELL_SIZE,
                    this.height * this.CELL_SIZE,
                    this.WALL_SIZE,
                    this.WALL_SIZE,
                );
            }
        }
    }

    public removeWall(cell: Cell, direction: Direction) {
        if(this.inMaze(cell)) {
            this.walls[cell.x][cell.y][direction] = false;
            this.drawWall(cell, direction, 'white');

            const cell2 = Maze.move(cell, direction);
            if(this.inMaze(cell2)) {
                this.walls[cell2.x][cell2.y][opposite[direction]] = false;
                this.drawWall(cell2, opposite[direction], 'white');
            }
        }
    }

    public addWall(cell: Cell, direction: Direction) {
        if(this.inMaze(cell)) {
            this.walls[cell.x][cell.y][direction] = true;
            this.drawWall(cell, direction, 'black');

            const cell2 = Maze.move(cell, direction);
            if(this.inMaze(cell2)) {
                this.walls[cell2.x][cell2.y][opposite[direction]] = true;
                this.drawWall(cell2, opposite[direction], 'black');
            }
        }
    }

    public seal(cell: Cell) {
        if(this.inMaze(cell)) {
            directions.forEach(
                direction => {
                    if(!this.walls[cell.x][cell.y][direction]) {
                        this.walls[cell.x][cell.y][direction] = true;

                        const cell2 = Maze.move(cell, direction);
                        if(this.inMaze(cell2))
                            this.walls[cell2.x][cell2.y][opposite[direction]] = true;
                    }
                }
            );

            if(this.context) {
                this.context.fillStyle = 'black';
                this.context.fillRect(
                    cell.x * this.CELL_SIZE - this.WALL_SIZE,
                    cell.y * this.CELL_SIZE - this.WALL_SIZE,
                    this.CELL_SIZE + (this.WALL_SIZE * 2),
                    this.CELL_SIZE + (this.WALL_SIZE * 2),
                );
            }
        }
    }

    private drawWall(cell: Cell, direction: Direction, fillStyle: string) {
        if(this.context) {
            const sX = cell.x * this.CELL_SIZE;
            const sY = cell.y * this.CELL_SIZE;
            const eX = sX + (this.CELL_SIZE - this.WALL_SIZE);
            const eY = sY + (this.CELL_SIZE - this.WALL_SIZE);

            this.context.fillStyle = fillStyle;

            switch(direction) {
                case 'N':
                    this.context.fillRect(
                        sX + this.WALL_SIZE,
                        sY,
                        this.CELL_SIZE - (this.WALL_SIZE * 2),
                        this.WALL_SIZE
                    );
                    break;
                case 'S':
                    this.context.fillRect(
                        sX + this.WALL_SIZE,
                        eY,
                        this.CELL_SIZE - (this.WALL_SIZE * 2),
                        this.WALL_SIZE
                    );
                    break;
                case 'E':
                    this.context.fillRect(
                        eX,
                        sY + this.WALL_SIZE,
                        this.WALL_SIZE,
                        this.CELL_SIZE - (this.WALL_SIZE * 2)
                    );
                    break;
                case 'W':
                    this.context.fillRect(
                        sX,
                        sY + this.WALL_SIZE,
                        this.WALL_SIZE,
                        this.CELL_SIZE - (this.WALL_SIZE * 2)
                    );
                    break;
            }
        }
    }

    public inMaze(cell: Cell) {
        return cell.x >= 0 && cell.x < this.width && cell.y >= 0 && cell.y < this.height;
    }

    public static move(cell: Cell, direction: Direction): CellDirection {
        switch(direction) {
            case 'N':   return { x: cell.x,     y: cell.y - 1,  direction };
            case 'E':   return { x: cell.x + 1, y: cell.y,      direction };
            case 'W':   return { x: cell.x - 1, y: cell.y,      direction };
            case 'S':   return { x: cell.x,     y: cell.y + 1,  direction };
        }
    }

    public sides(cell: Cell) {
        return (this.walls[cell.x][cell.y].N ? 1 : 0) +
            (this.walls[cell.x][cell.y].E ? 1 : 0) +
            (this.walls[cell.x][cell.y].W ? 1 : 0) +
            (this.walls[cell.x][cell.y].S ? 1 : 0);
    }

    public neighbors(cell: Cell, dirs: Direction[] = [ 'N', 'E', 'W', 'S' ]): CellDirection[] {
        return dirs
        .map(direction => Maze.move(cell, direction))
        .filter(c => this.inMaze(c));
    }

    public validMoves(cell: Cell, dirs: Direction[] = [ 'N', 'E', 'W', 'S' ]): CellDirection[] {
        return dirs
        .filter(d => !this.walls[cell.x][cell.y][d])
        .map(direction => Maze.move(cell, direction))
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
                    if(distances[x][y] === Infinity)
                        this.context.fillStyle = 'black';
                    else
                        this.context.fillStyle = `hsla(${distances[x][y] * 360 / maxDistance}, 100%, 50%, 0.25)`;
                        //`rgba(0, 0, 0, ${distances[x][y] * 0.5 / maxDistance})`;

                    this.context.fillRect(
                        x * this.CELL_SIZE + this.WALL_SIZE,
                        y * this.CELL_SIZE + this.WALL_SIZE,
                        this.CELL_SIZE - (this.WALL_SIZE * 2),
                        this.CELL_SIZE - (this.WALL_SIZE * 2)
                    );
                    if(!this.walls[x][y].N) {
                        this.context.fillRect(
                            x * this.CELL_SIZE + this.WALL_SIZE,
                            y * this.CELL_SIZE,
                            this.CELL_SIZE - (this.WALL_SIZE * 2),
                            this.WALL_SIZE,
                        );
                    }
                    if(!this.walls[x][y].S) {
                        this.context.fillRect(
                            x * this.CELL_SIZE + this.WALL_SIZE,
                            y * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                            this.CELL_SIZE - (this.WALL_SIZE * 2),
                            this.WALL_SIZE
                        );
                    }
                    if(!this.walls[x][y].W) {
                        this.context.fillRect(
                            x * this.CELL_SIZE,
                            y * this.CELL_SIZE + this.WALL_SIZE,
                            this.WALL_SIZE,
                            this.CELL_SIZE - (this.WALL_SIZE * 2)
                        );
                    }
                    if(!this.walls[x][y].E) {
                        this.context.fillRect(
                            x * this.CELL_SIZE + (this.CELL_SIZE - this.WALL_SIZE),
                            y * this.CELL_SIZE + this.WALL_SIZE,
                            this.WALL_SIZE,
                            this.CELL_SIZE - (this.WALL_SIZE * 2)
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
