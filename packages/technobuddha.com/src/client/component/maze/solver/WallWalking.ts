import create2DArray from '@technobuddha/library/create2DArray';
import type { CellDirection, Direction } from '../maze/Maze';

import { MazeSolver } from './MazeSolver';
import type { MazeSolverProperties, SolveArguments } from './MazeSolver';

export class WallWalking extends MazeSolver {
    private turn:  (direction: Direction) => Direction[];

    constructor(props: MazeSolverProperties) {
        super(props);

        this.turn = Math.random() < 0.5 ? this.maze.rightTurn : this.maze.leftTurn;
    }

    public async solve({ entrance = this.maze.entrance, exit = this.maze.exit }: SolveArguments = {}) {
        const { maze } = this;
        maze.prepareContext(this.context);

        return new Promise<void>(resolve => {
            let cell:  CellDirection = { x: entrance.x, y: entrance.y, direction: maze.opposite(entrance.direction) };
            let cells: { visits: number; direction?: Direction }[][] =
                create2DArray(maze.width, maze.height, () => ({ visits: 0 }));

            const go = () => {
                requestAnimationFrame(
                    () => {
                        const v = ++cells[cell.x][cell.y].visits;
                        if(cell.x === exit.x && cell.y === exit.y) {
                            maze.clear();
                            cell = { x: entrance.x, y: entrance.y, direction: cells[entrance.x][entrance.y].direction! };

                            for(;;) {
                                if(cell.x !== exit.x || cell.y !== exit.y) {
                                    const next = maze.move(cell, cell.direction)!;
                                    maze.drawPath(cell, 'yellow');
                                    cell = { ...next, direction: cells[next.x][next.y].direction! };
                                } else {
                                    maze.drawPath(exit, 'yellow');
                                    resolve();
                                    break;
                                }
                            }
                        } else {
                            const turns = this.turn(cell.direction);
                            const dir   = turns.find(d => maze.walls[cell.x][cell.y][d] === false)!;
                            const next  = maze.move(cell, dir)!;
                            maze.drawPath({ ...cell, direction: dir }, `rgba(255, 255, 0, ${(v + 1) * 0.25})`);
                            cells[cell.x][cell.y].direction = dir;
                            cell = next;
                            go();
                        }
                    }
                );
            };
            go();
        });
    }
}

export default WallWalking;
