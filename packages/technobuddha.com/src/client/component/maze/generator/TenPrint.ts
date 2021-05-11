import type { Maze } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';
import { opposite } from '../maze/directions';

export class TenPrint extends MazeGenerator {
    constructor(props: MazeGeneratorProperties) {
        super(props);
        this.currentCell = { x: 0, y: 0 };
    }

    public step(maze: Maze) {
        const neighbors = maze.neighbors(this.currentCell, [ 'S', 'E' ]);
        if(neighbors.length) {
            const n1 = this.selectNeighbor(neighbors);
            const n2 = maze.move(this.currentCell, opposite[n1.direction]);

            if(maze.inMaze(n1)) maze.removeWall(this.currentCell, n1.direction);
            if(maze.inMaze(n2)) maze.removeWall(this.currentCell, n2.direction);
        } else {
            maze.removeWall(this.currentCell, 'E');
            maze.removeWall({ x: this.currentCell.x - 1, y: this.currentCell.y }, 'E');
        }

        this.currentCell.x += 2;
        if(this.currentCell.x >= this.width) {
            this.currentCell.y++;
            this.currentCell.x = this.currentCell.y % 2;
        }

        return this.currentCell.y < this.height;
    }
}

export default TenPrint;
