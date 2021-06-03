import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';

export class TenPrint extends MazeGenerator {
    constructor(props: MazeGeneratorProperties) {
        super(props);
        this.currentCell = { x: 0, y: 0 };
    }

    public step() {
        const { maze }          = this;
        const { width, height } = maze;

        const neighbors = maze.neighbors(this.currentCell, { dirs: [ 'S', 'E' ]});
        if(neighbors.length) {
            const n1 = this.selectNeighbor(neighbors);
            const n2 = maze.move(this.currentCell, maze.opposite(n1.direction))!;

            if(maze.inMaze(n1)) maze.removeWall(this.currentCell, n1.direction);
            if(maze.inMaze(n2)) maze.removeWall(this.currentCell, n2.direction);
        } else {
            maze.removeWall(this.currentCell, 'E');
            maze.removeWall({ x: this.currentCell.x - 1, y: this.currentCell.y }, 'E');
        }

        this.currentCell.x += 2;
        if(this.currentCell.x >= width) {
            this.currentCell.y++;
            this.currentCell.x = this.currentCell.y % 2;
        }

        return this.currentCell.y < height;
    }
}

export default TenPrint;
