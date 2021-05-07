import { Maze }                 from '../maze/Maze';
import create2DArray            from '@technobuddha/library/create2DArray';
import type { CellDirection }   from '../maze/Maze';
import { opposite }             from '../maze/directions';
import type { Direction }       from '../maze/directions';

import { MazeSolver } from './MazeSolver';
import type { SolveArguments } from './MazeSolver';

export class WallWalking extends MazeSolver {
    public async solve({ entrance = this.maze.entrance, exit = this.maze.exit }: SolveArguments = {}) {
        this.maze.translateContext(this.context);

        return new Promise<void>(resolve => {
            let cell: CellDirection = { x: entrance.x, y: entrance.y, direction: opposite[entrance.direction] };
            let visits = create2DArray(this.maze.width, this.maze.height, 0);

            const go = () => {
                requestAnimationFrame(
                    () => {
                        const v = ++visits[cell.x][cell.y];
                        this.context.fillStyle = `rgba(0, 0, 255, ${v * 0.2})`;
                        if(cell.x !== exit.x || cell.y !== exit.y) {
                            const turns: Direction[] =
                                cell.direction === 'S' ? [ 'W', 'S', 'E', 'N' ]
                                    :   cell.direction === 'W' ? [ 'N', 'W', 'S', 'E' ]
                                        :   cell.direction === 'N' ? [ 'E', 'N', 'W', 'S' ]
                                            : [ 'S', 'E', 'N', 'W' ];

                            const next = Maze.move(cell, turns.find(dir => !this.maze.walls[cell.x][cell.y][dir])!);
                            this.drawPath({ ...cell, direction: next.direction });
                            cell = next;
                            go();
                        } else {
                            this.drawPath(exit);
                            resolve();
                        }
                    }
                );
            };
            go();
        });
    }
}

export default WallWalking;
