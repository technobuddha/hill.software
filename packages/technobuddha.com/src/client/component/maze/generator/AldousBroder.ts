import MazeGenerator from './MazeGenerator';
import create2DArray from '@technobuddha/library/create2DArray';

import type { Maze } from '../maze/Maze';
import type { MazeGeneratorProperties } from './MazeGenerator';

export class AldousBroder extends MazeGenerator {
    private visited: boolean[][] = [];
    private totalVisited         = 0;

    constructor(props: MazeGeneratorProperties) {
        super(props);

        this.totalVisited   = 0;
        this.visited        = create2DArray(this.width, this.height, false);
        this.currentCell    = this.start;
        this.visited[this.currentCell.x][this.currentCell.y] = true;
    }

    public step(maze: Maze) {
        for(;;) {
            const cell = this.selectNeighbor(maze.neighbors(this.currentCell));

            if(!this.visited[cell.x][cell.y]) {
                maze.removeWall(this.currentCell, cell.direction);
                this.visited[cell.x][cell.y] = true;
                this.totalVisited++;
                break;
            }

            this.currentCell = cell;
        }

        return this.totalVisited < this.width * this.height;
    }
}

export default AldousBroder;