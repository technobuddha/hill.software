import { Maze }             from '../maze/Maze';
import create2DArray        from '@technobuddha/library/create2DArray';
import shuffle              from '@technobuddha/library/shuffle';
import type { Cell }        from '../maze/Maze';
import { opposite }         from '../maze/directions';

import { MazeSolver } from './MazeSolver';
import type { SolveArguments } from './MazeSolver';

import type { Direction } from '../maze/directions';

type DD = {
    dir?: Direction;
    dist: number;
};

export class BreadthFirstSearch extends MazeSolver {
    public async solve({ color = 'rgba(0, 255, 0, 0.25)', entrance = this.maze.entrance, exit = this.maze.exit }: SolveArguments = {}) {
        this.translateContext();

        return new Promise<void>(resolve => {
            const queue: Cell[] = [];
            const distances     = create2DArray(this.maze.width, this.maze.height, () => ({ dist: Infinity } as DD));
            distances[entrance.x][entrance.y]  = { dist: 0 };
            queue.unshift(entrance);
            this.drawCell(entrance, color);
            if(!this.maze.walls[entrance.x][entrance.y].N)
                this.drawWall({ ...entrance, direction: 'N' }, color);
            if(!this.maze.walls[entrance.x][entrance.y].S)
                this.drawWall({ ...entrance, direction: 'S' }, color);
            if(!this.maze.walls[entrance.x][entrance.y].E)
                this.drawWall({ ...entrance, direction: 'E' }, color);
            if(!this.maze.walls[entrance.x][entrance.y].W)
                this.drawWall({ ...entrance, direction: 'W' }, color);

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
                                    this.maze.neighbors(cell)
                                    .filter(n => !this.maze.walls[cell.x][cell.y][n.direction] && distances[n.x][n.y].dist > distance)
                                );

                                for(const neighbor of neighbors) {
                                    distances[neighbor.x][neighbor.y]  = { dir: neighbor.direction, dist: distance };
                                    this.drawCell(neighbor, color);
                                    if(!this.maze.walls[neighbor.x][neighbor.y].N)
                                        this.drawWall({ ...neighbor, direction: 'N' }, color);
                                    if(!this.maze.walls[neighbor.x][neighbor.y].S)
                                        this.drawWall({ ...neighbor, direction: 'S' }, color);
                                    if(!this.maze.walls[neighbor.x][neighbor.y].E)
                                        this.drawWall({ ...neighbor, direction: 'E' }, color);
                                    if(!this.maze.walls[neighbor.x][neighbor.y].W)
                                        this.drawWall({ ...neighbor, direction: 'W' }, color);
                                    queue.unshift(neighbor);
                                }
                                go();
                            }
                        } else {
                            this.clear();

                            let cell = { ...exit, direction: opposite[exit.direction] };
                            for(;;) {
                                this.drawPath({ ...cell, direction: opposite[cell.direction] }, 'green');
                                if(cell.x === entrance.x && cell.y === entrance.y)
                                    break;
                                cell = Maze.move(cell, opposite[distances[cell.x][cell.y].dir!]);
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
