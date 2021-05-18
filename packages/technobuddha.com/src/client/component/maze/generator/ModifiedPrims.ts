import type { Cell } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';
import create2DArray from '@technobuddha/library/create2DArray';

export class ModifiedPrims extends MazeGenerator {
    private visited:      boolean[][];
    private activeCells:  Cell[];
    private costs:        number[][];

    constructor(props: MazeGeneratorProperties) {
        super(props);

        const { maze: { width, height }} = this;

        this.visited = create2DArray(width, height, false);
        this.activeCells  = [ this.start ];
        this.visited[this.start.x][this.start.y] = true;
        this.costs = create2DArray(width, height, this.random);
    }

    public step() {
        const { maze } = this;

        let minCost     = Infinity;
        let cellIndex   = 0;
        this.activeCells.forEach((cell, index) => {
            if(this.costs[cell.x][cell.y] < minCost) {
                minCost = this.costs[cell.x][cell.y];
                cellIndex = index;
            }
        });
        this.currentCell = this.activeCells[cellIndex];

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

export default ModifiedPrims;
