import { Maze }                 from '../maze/Maze';
import type { Cell }            from '../maze/Maze';
import { directions, opposite } from '../maze/directions';

import { MazeSolver } from './MazeSolver';
import type { SolveArguments } from './MazeSolver';

export class DeadEndFiller extends MazeSolver {
    public async solve({ entrance = this.maze.entrance, exit = this.maze.exit }: SolveArguments = {}) {
        const walls = this.maze.walls.map(row => [ ...row ]);

        const sides = (cell: Cell) => (
            (walls[cell.x][cell.y].N ? 1 : 0) +
            (walls[cell.x][cell.y].E ? 1 : 0) +
            (walls[cell.x][cell.y].W ? 1 : 0) +
            (walls[cell.x][cell.y].S ? 1 : 0)
        );

        this.maze.translateContext(this.context);
        return new Promise<void>(resolve => {
            const deadEnds: Cell[] = [];
            for(let x = 0; x < this.maze.width; ++x) {
                for(let y = 0; y < this.maze.height; ++y) {
                    if(sides({ x, y }) === 3 && (x !== entrance.x || y !== entrance.y) && (x !== exit.x || y !== entrance.y)) {
                        this.context.fillStyle = 'red';
                        this.fillCell({ x, y });
                        deadEnds.push({ x, y });
                    }
                }
            }

            const go = () => {
                if(deadEnds.length) {
                    const index = Math.floor(deadEnds.length * Math.random());
                    let cell    = deadEnds[index];
                    deadEnds.splice(index, 1);

                    const gogo = () => {
                        requestAnimationFrame(
                            () => {
                                if(cell) {
                                    const moves = this.maze.neighbors(cell)
                                    .filter(c => !walls[cell!.x][cell!.y][c.direction]);

                                    if(sides(cell) === 3) {
                                        directions.forEach(
                                            direction => {
                                                if(!walls[cell!.x][cell!.y][direction]) {
                                                    walls[cell!.x][cell!.y][direction] = true;

                                                    const cell2 = Maze.move(cell!, direction);
                                                    if(this.maze.inMaze(cell2))
                                                        walls[cell2.x][cell2.y][opposite[direction]] = true;
                                                }
                                            }
                                        );

                                        if(this.context) {
                                            this.context.fillStyle = 'grey';
                                            this.context.fillRect(
                                                cell.x * this.maze.CELL_SIZE - this.maze.WALL_SIZE,
                                                cell.y * this.maze.CELL_SIZE - this.maze.WALL_SIZE,
                                                this.maze.CELL_SIZE + (this.maze.WALL_SIZE * 2),
                                                this.maze.CELL_SIZE + (this.maze.WALL_SIZE * 2),
                                            );
                                        }

                                        [ cell ] = moves;
                                        gogo();
                                    } else {
                                        go();
                                    }
                                }
                            }
                        );
                    };
                    gogo();
                } else {
                    resolve();
                }
            };
            go();
        });
    }
}

export default DeadEndFiller;
