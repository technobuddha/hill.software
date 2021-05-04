import create2DArray from '@technobuddha/library/create2DArray';
import type { Maze, Cell } from './Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';

export class SimplifiedPrims extends MazeGenerator {
    private visited:      boolean[][];
    public activeCells:   Cell[];

    constructor(props: MazeGeneratorProperties) {
        super(props);

        this.visited = create2DArray(this.width, this.height, false);
        this.activeCells  = [ this.start ];
        this.visited[this.start.x][this.start.y] = true;
    }

    public step(maze: Maze) {
        const cellIndex     = Math.floor(this.random() * this.activeCells.length);
        this.currentCell    = this.activeCells[cellIndex];

        const unvisitedNeighbors = maze.neighbors(this.currentCell).filter(cell => !this.visited[cell.x][cell.y]);
        if(unvisitedNeighbors.length > 0) {
            const newCell = this.selectNeighbor(unvisitedNeighbors);
            maze.removeWall(this.currentCell, newCell.direction);
            this.visited[newCell.x][newCell.y] = true;

            this.activeCells.push(newCell);
        } else {
            this.activeCells.splice(cellIndex, 1);
        }

        return this.activeCells.length > 0;
    }
}

export default SimplifiedPrims;
