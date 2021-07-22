import type { Cell } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';
import create2DArray from '@technobuddha/library/create2DArray';

export class RecursiveBacktracker extends MazeGenerator {
    private readonly    visited:    boolean[][];
    public              stack:      Cell[];

    constructor(props: MazeGeneratorProperties) {
        super(props);

        const { maze: { width, height }} = this;

        this.visited = create2DArray(width, height, false);
        this.currentCell = this.start;
        this.stack  = [ this.currentCell ];
        this.visited[this.currentCell.x][this.currentCell.y] = true;
    }

    public override step() {
        const { maze } = this;

        const unvisitedNeighbors = maze.neighbors(this.currentCell).filter(cell => !this.visited[cell.x][cell.y]);
        if(unvisitedNeighbors.length > 0) {
            const newCell = this.selectNeighbor(unvisitedNeighbors);
            maze.removeWall(this.currentCell, newCell.direction);
            this.visited[newCell.x][newCell.y] = true;

            this.stack.push(newCell);
            this.currentCell = newCell;
        } else {
            this.currentCell = this.stack.pop()!;
        }

        return this.stack.length > 0;
    }
}

export default RecursiveBacktracker;
