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
};

type Wall = {
    N:  boolean;
    E:  boolean;
    W:  boolean;
    S:  boolean;
};

export class Maze {
    public readonly CELL_SIZE        = 10;
    public readonly WALL_SIZE   = 2;

    public context:         CanvasRenderingContext2D | undefined;
    public width:           number;
    public height:          number;
    public entrance:        CellDirection;
    public exit:            CellDirection;
    public walls:           Wall[][];

    constructor({ context, width, height, entrance, exit }: MazeProperties) {
        this.context            = context;
        this.width              = width;
        this.height             = height;
        this.entrance           = entrance;
        this.exit               = exit;
        this.walls              = create2DArray(this.width, this.height, () => ({ N: true, E: true, W: true, S: true }));

        this.walls[entrance.x][entrance.y][entrance.direction] = false;
        this.walls[exit.x][exit.y][exit.direction]             = false;

        this.draw();
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

    private drawPath(path: CellDirection, context = this.context) {
        if(context) {
            const d = path.direction;

            context.fillRect(
                path.x * this.CELL_SIZE + (d === 'E' ? -this.WALL_SIZE : this.WALL_SIZE),
                path.y * this.CELL_SIZE + (d === 'S' ? -this.WALL_SIZE : this.WALL_SIZE),
                this.CELL_SIZE - (d === 'E' || d === 'W' ? 0 : (this.WALL_SIZE * 2)),
                this.CELL_SIZE - (d === 'S' || d === 'N' ? 0 : (this.WALL_SIZE * 2)),
            );
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

    public neighbors(cell: Cell, dirs: Direction[] = [ 'N', 'E', 'W', 'S' ]): CellDirection[] {
        return dirs
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

    public draw() {
        if(this.context) {
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
        }
    }

    protected distancesFrom(point = this.entrance) {
        const queue: Cell[]    = [];
        const discovered        = create2DArray(this.width, this.height, false);
        const distances         = create2DArray(this.width, this.height, Infinity);

        discovered[point.x][point.y] = true;
        distances[point.x][point.y]  = 0;
        queue.unshift(point);

        let maxDistance = 1;
        let cell: Cell | undefined;
        // eslint-disable-next-line no-cond-assign
        while(cell = queue.pop()) {
            for(const direction of shuffle(directions)) {
                if(!this.walls[cell.x][cell.y][direction]) {
                    const next = Maze.move(cell, direction);

                    if(this.inMaze(next)) {
                        if(!discovered[next.x][next.y]) {
                            discovered[next.x][next.y] = true;

                            const distance = distances[cell.x][cell.y] + 1;
                            distances[next.x][next.y]  = distance;

                            if(distance > maxDistance)
                                maxDistance = distance;

                            queue.unshift({ ...next });
                        }
                    }
                }
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

    public async drawSolution(
        context: CanvasRenderingContext2D,
        depthFirst = true,
        color = 'red',
        entrance = this.entrance,
        exit = this.exit
    ):  Promise<void> {
        return new Promise<void>(resolve => {
            type CP = Cell & { parent?: CP; direction: Direction };

            const queue: CP[]   = [];
            const discovered    = create2DArray(this.width, this.height, false);
            const distances     = create2DArray(this.width, this.height, 0);

            discovered[entrance.x][entrance.y] = true;
            queue.unshift(entrance);

            context.fillStyle = color;
            const go = () => {
                if(queue.length) {
                    requestAnimationFrame(
                        () => {
                            context.clearRect(0, 0, context.canvas.width, context.canvas.height);

                            const cell = queue.pop();
                            let   path = cell;
                            while(path) {
                                this.drawPath(path, context);
                                path = path.parent;
                            }

                            if(cell && (cell.x !== exit.x || cell.y !== exit.y)) {
                                for(const direction of shuffle(directions)) {
                                    if(!this.walls[cell.x][cell.y][direction]) {
                                        const next = Maze.move(cell, direction);

                                        if(this.inMaze(next)) {
                                            if(!discovered[next.x][next.y]) {
                                                discovered[next.x][next.y] = true;
                                                distances[next.x][next.y]  = distances[cell.x][cell.y] + 1;

                                                if(depthFirst)
                                                    queue.push({ ...next, parent: cell });
                                                else
                                                    queue.unshift({ ...next, parent: cell });
                                            }
                                        }
                                    }
                                }

                                go();
                            } else {
                                resolve();
                            }
                        }
                    );
                }
            };
            go();
        });
    }

    public async drawSolution2(_context: CanvasRenderingContext2D) {
        return new Promise<void>(resolve => {
            let x    = 0;
            let y    = 0;

            const go = () => {
                requestAnimationFrame(
                    () => {
                        const sealed: Cell[] = [];

                        do {
                            if(
                                (this.walls[x][y].N ? 1 : 0) +
                                (this.walls[x][y].E ? 1 : 0) +
                                (this.walls[x][y].W ? 1 : 0) +
                                (this.walls[x][y].S ? 1 : 0) === 3
                            )
                                sealed.push({ x, y });

                            x++;
                            if(x >= this.width) {
                                x = 0;
                                y++;
                            }
                        } while(y < this.height);

                        if(sealed.length) {
                            while(sealed.length)
                                this.seal(sealed.pop()!);

                            x = 0;
                            y = 0;
                            go();
                        } else {
                            resolve();
                        }
                    }
                );
            };
            go();
        });
    }

    public async drawSolution3(context: CanvasRenderingContext2D) {
        return new Promise<void>(resolve => {
            let cell: CellDirection = { x: this.entrance.x, y: this.entrance.y, direction: opposite[this.entrance.direction] };
            let visits = create2DArray(this.width, this.height, 0);

            const go = () => {
                requestAnimationFrame(
                    () => {
                        const v = ++visits[cell.x][cell.y];
                        //context.clearRect(0, 0, this.width * this.CELL_SIZE, this.height * this.CELL_SIZE);
                        context.fillStyle = `rgba(0, 0, 0, ${v * 0.2})`;
                        this.drawPath(cell, context);

                        const turns: Direction[] =
                            cell.direction === 'S' ? [ 'W', 'S', 'E', 'N' ]
                                :   cell.direction === 'W' ? [ 'N', 'W', 'S', 'E' ]
                                    :   cell.direction === 'N' ? [ 'E', 'N', 'W', 'S' ]
                                        : [ 'S', 'E', 'N', 'W' ];

                        cell = Maze.move(cell, turns.find(dir => !this.walls[cell.x][cell.y][dir])!);

                        // context.fillStyle = 'red';
                        // this.drawPath(cell, context);

                        if(cell.x !== this.exit.x || cell.y !== this.exit.y)
                            go();
                        else
                            resolve();
                    }
                );
            };
            go();
        });
    }

    public async drawSolution4(
        context: CanvasRenderingContext2D,
        color = 'red',
        entrance = this.entrance,
        exit = this.exit
    ):  Promise<void> {
        return new Promise<void>(resolve => {
            type CP = Cell & { parent?: CP; direction: Direction };

            const queue: CP[]   = [];
            const discovered    = create2DArray(this.width, this.height, false);
            const distances     = create2DArray(this.width, this.height, 0);

            discovered[entrance.x][entrance.y] = true;
            queue.unshift(entrance);

            context.fillStyle = color;
            const go = () => {
                if(queue.length) {
                    requestAnimationFrame(
                        () => {
                            context.clearRect(0, 0, context.canvas.width, context.canvas.height);

                            const drawn = new Set<number>();

                            for(const cell of queue) {
                                let c: CP | undefined = cell;
                                while(c) {
                                    const idx = c.x + c.y * this.width;
                                    if(!drawn.has(idx)) {
                                        drawn.add(idx);
                                        this.drawPath(c, context);
                                    }
                                    c = c.parent;
                                }
                            }

                            const cell = queue.pop();
                            if(cell && (cell.x !== exit.x || cell.y !== exit.y)) {
                                for(const direction of shuffle(directions)) {
                                    if(!this.walls[cell.x][cell.y][direction]) {
                                        const next = Maze.move(cell, direction);

                                        if(this.inMaze(next)) {
                                            if(!discovered[next.x][next.y]) {
                                                discovered[next.x][next.y] = true;
                                                distances[next.x][next.y]  = distances[cell.x][cell.y] + 1;

                                                queue.unshift({ ...next, parent: cell });
                                            }
                                        }
                                    }
                                }

                                go();
                            } else {
                                resolve();
                            }
                        }
                    );
                }
            };
            go();
        });
    }
}

export default Maze;
