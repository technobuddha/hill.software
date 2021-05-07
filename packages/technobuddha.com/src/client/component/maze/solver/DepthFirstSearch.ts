import { Maze }             from '../maze/Maze';
import create2DArray        from '@technobuddha/library/create2DArray';
import shuffle              from '@technobuddha/library/shuffle';
import type { Cell }        from '../maze/Maze';
import { directions }       from '../maze/directions';
import type { Direction }   from '../maze/directions';

import { MazeSolver } from './MazeSolver';
import type { SolveArguments } from './MazeSolver';

export class DepthFirstSearch extends MazeSolver {
    public async solve({ color = 'red', entrance = this.maze.entrance, exit = this.maze.exit }: SolveArguments = {}) {
        this.maze.translateContext(this.context);

        return new Promise<void>(resolve => {
            type CP = Cell & { parent?: CP; direction: Direction };

            const queue: CP[]   = [];
            const discovered    = create2DArray(this.maze.width, this.maze.height, false);
            const distances     = create2DArray(this.maze.width, this.maze.height, 0);

            discovered[entrance.x][entrance.y] = true;
            this.drawPath(entrance);
            queue.unshift(entrance);

            this.context.fillStyle = color;
            const go = () => {
                if(queue.length) {
                    requestAnimationFrame(
                        () => {
                            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

                            const cell = queue.pop();
                            let   path = cell;
                            while(path) {
                                const next = path.parent;
                                if(next)
                                    this.drawPath({ ...next, direction: path.direction });
                                path = next;
                            }

                            if(cell && (cell.x !== exit.x || cell.y !== exit.y)) {
                                for(const direction of shuffle(directions)) {
                                    if(!this.maze.walls[cell.x][cell.y][direction]) {
                                        const next = Maze.move(cell, direction);

                                        if(this.maze.inMaze(next)) {
                                            if(!discovered[next.x][next.y]) {
                                                discovered[next.x][next.y] = true;
                                                distances[next.x][next.y]  = distances[cell.x][cell.y] + 1;

                                                queue.push({ ...next, parent: cell });
                                            }
                                        }
                                    }
                                }

                                go();
                            } else {
                                this.drawPath(exit);
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

export default DepthFirstSearch;
