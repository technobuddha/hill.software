import create2DArray        from '@technobuddha/library/create2DArray';
import shuffle              from '@technobuddha/library/shuffle';
import type { Cell, Direction }        from '../maze/Maze';

import { MazeSolver } from './MazeSolver';
import type { SolveArguments } from './MazeSolver';

type DD = {
    dir?: Direction;
    dist: number;
};

export class BreadthFirstSearch extends MazeSolver {
    public async solve({ color = 'lime', entrance = this.maze.entrance, exit = this.maze.exit }: SolveArguments = {}) {
        const { maze } = this;

        maze.prepareContext(this.context);

        return new Promise<void>(resolve => {
            const queue: Cell[] = [];
            const distances     = create2DArray(maze.width, maze.height, () => ({ dist: Infinity } as DD));
            distances[entrance.x][entrance.y]  = { dist: 0 };
            queue.unshift(entrance);
            maze.drawCell(entrance, color);

            for(const direction of maze.directions) {
                if(!maze.walls[entrance.x][entrance.y][direction])
                    maze.drawWall({ ...entrance, direction }, color);
            }

            const go = () => {
                requestAnimationFrame(
                    () => {
                        if(queue.length) {
                            const cell      = queue.pop()!;

                            if(cell.x === exit.x && cell.y === exit.y) {
                                queue.length = 0;
                                go();
                            } else {
                                const distance  = distances[cell.x][cell.y].dist + 1;
                                const neighbors = shuffle(
                                    maze.validMoves(cell)
                                    .filter(n => distances[n.x][n.y].dist > distance)
                                );

                                for(const neighbor of neighbors) {
                                    distances[neighbor.x][neighbor.y]  = { dir: neighbor.direction, dist: distance };
                                    maze.drawCell(neighbor, color);
                                    for(const direction of maze.directions) {
                                        if(maze.walls[neighbor.x][neighbor.y][direction] === false)
                                            maze.drawWall({ ...neighbor, direction }, color);
                                    }
                                    queue.unshift(neighbor);
                                }
                                go();
                            }
                        } else {
                            maze.clear();

                            let cell = { ...exit, direction: maze.opposite(exit.direction) };
                            for(;;) {
                                maze.drawPath({ ...cell, direction: maze.opposite(cell.direction) }, color);
                                if(cell.x === entrance.x && cell.y === entrance.y)
                                    break;
                                cell = maze.move(cell, maze.opposite(distances[cell.x][cell.y].dir!))!;
                            }
                            resolve();
                        }
                    }
                );
            };
            go();
        });
    }
}

export default BreadthFirstSearch;
