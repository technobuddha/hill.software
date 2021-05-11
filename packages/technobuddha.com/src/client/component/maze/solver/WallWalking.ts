import create2DArray from '@technobuddha/library/create2DArray';
import type { CellDirection } from '../maze/Maze';
import { opposite } from '../maze/directions';
import type { Direction } from '../maze/directions';

import { MazeSolver } from './MazeSolver';
import type { SolveArguments } from './MazeSolver';

export class WallWalking extends MazeSolver {
    public async solve({ entrance = this.maze.entrance, exit = this.maze.exit }: SolveArguments = {}) {
        this.prepare();

        return new Promise<void>(resolve => {
            let cell:  CellDirection = { x: entrance.x, y: entrance.y, direction: opposite[entrance.direction] };
            let cells: { visits: number; direction?: Direction }[][] =
                create2DArray(this.maze.width, this.maze.height, () => ({ visits: 0 }));

            const go = () => {
                requestAnimationFrame(
                    () => {
                        const v = ++cells[cell.x][cell.y].visits;
                        if(cell.x !== exit.x || cell.y !== exit.y) {
                            const turns: Direction[] =
                                cell.direction === 'S' ? [ 'W', 'S', 'E', 'N' ]
                                    : cell.direction === 'W' ? [ 'N', 'W', 'S', 'E' ]
                                        : cell.direction === 'N' ? [ 'E', 'N', 'W', 'S' ]
                                            : [ 'S', 'E', 'N', 'W' ];

                            const dir = turns.find(d => !this.maze.walls[cell.x][cell.y][d])!;
                            const next = this.maze.move(cell, dir);
                            this.drawPath({ ...cell, direction: dir }, `rgba(0, 0, 255, ${v * 0.25})`);
                            cells[cell.x][cell.y].direction = dir;
                            cell = next;
                            go();
                        } else {
                            this.clear();
                            cell = { x: entrance.x, y: entrance.y, direction: cells[entrance.x][entrance.y].direction! };

                            for(;;) {
                                if(cell.x !== exit.x || cell.y !== exit.y) {
                                    const next = this.maze.move(cell, cell.direction);
                                    this.drawPath(cell, 'blue');
                                    cell = { ...next, direction: cells[next.x][next.y].direction! };
                                } else {
                                    this.drawPath(exit, 'blue');
                                    resolve();
                                    break;
                                }
                            }
                        }
                    }
                );
            };
            go();
        });
    }
}

export default WallWalking;
