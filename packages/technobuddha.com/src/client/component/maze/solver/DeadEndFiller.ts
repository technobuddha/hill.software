import type { Cell }            from '../maze/Maze';
import { directions } from '../maze/directions';

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

        this.prepare();
        return new Promise<void>(resolve => {
            const deadEnds: Cell[] = [];
            for(let x = 0; x < this.maze.width; ++x) {
                for(let y = 0; y < this.maze.height; ++y) {
                    if(sides({ x, y }) === 3 && (x !== entrance.x || y !== entrance.y) && (x !== exit.x || y !== exit.y)) {
                        this.drawX({ x, y }, 'red');
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
                                    const moves = this.maze.validMoves(cell, { walls });

                                    if(sides(cell) === 3 && (cell.x !== entrance.x || cell.y !== entrance.y) && (cell.x !== exit.x || cell.y !== exit.y)) {
                                        for(const direction of directions) {
                                            if(!walls[cell.x][cell.y][direction]) {
                                                walls[cell.x][cell.y][direction] = true;
                                                this.drawWall({ ...cell, direction });

                                                const cell2 = this.maze.move(cell!, direction);
                                                if(this.maze.inMaze(cell2)) {
                                                    walls[cell2.x][cell2.y][this.maze.opposite(direction)] = true;
                                                    this.drawWall({ ...cell2, direction: this.maze.opposite(direction) });
                                                }
                                            }
                                        }

                                        this.drawFloor(cell, this.wallColor);
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
