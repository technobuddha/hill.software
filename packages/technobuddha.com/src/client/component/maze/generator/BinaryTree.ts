import type { Maze } from './Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';

export class TenPrint extends MazeGenerator {
    constructor(props: MazeGeneratorProperties) {
        super(props);

        this.currentCell = { x: 0, y: 0 };
    }

    public step(maze: Maze) {
        const neighbors = maze.neighbors(this.currentCell, [ 'S', 'E' ]);
        if(neighbors.length > 0)
            maze.removeWall(this.currentCell, this.selectNeighbor(neighbors).direction);

        this.currentCell.x++;
        if(this.currentCell.x >= this.width) {
            this.currentCell.x = 0;
            this.currentCell.y++;
        }

        return this.currentCell.y < this.height;
    }
}

export default TenPrint;
