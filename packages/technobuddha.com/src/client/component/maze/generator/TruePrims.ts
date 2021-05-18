import type { CellDirection } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';
import create2DArray from '@technobuddha/library/create2DArray';
import type { Direction } from '../maze/directions';

export class TruePrims extends MazeGenerator {
    private visited:        boolean[][];
    private activePassages: CellDirection[];
    private costs:          Record<Direction, number>[][];

    constructor(props: MazeGeneratorProperties) {
        super(props);

        const { maze } = this;
        const { width, height } = maze;

        this.currentCell = this.start;
        this.visited = create2DArray(width, height, false);
        this.visited[this.currentCell.x][this.currentCell.y] = true;

        this.costs = create2DArray(
            width,
            height,
            () => Object.fromEntries(maze.directions.map(direction => [ direction, 0 ])) as Record<Direction, number>
        );

        this.activePassages = maze.directions.map(direction => ({ ...this.currentCell, direction }));

        for(let x = 0; x < width; ++x) {
            for(let y = 0; y < height; ++y) {
                for(let direction of maze.directions) {
                    const cell         = maze.move({ x, y }, direction);
                    const isBorderWall = !maze.inMaze(cell);
                    let   passageCost  = isBorderWall ? Infinity : this.random();

                    if((direction === 'N' || direction === 'W') && !isBorderWall)
                        passageCost = this.costs[cell.x][cell.y][maze.opposite(direction)];

                    this.costs[x][y][direction] = passageCost;
                }
            }
        }
    }

    public step() {
        const { maze } = this;

        let minCost      = Infinity;
        let passageIndex = 0;

        this.activePassages.forEach((passage, index) => {
            if(this.costs[passage.x][passage.y][passage.direction] < minCost) {
                minCost = this.costs[passage.x][passage.y][passage.direction];
                passageIndex = index;
            }
        });

        const passage = this.activePassages[passageIndex];
        const cell    = maze.move(passage, passage.direction);

        if(maze.inMaze(cell) && !this.visited[cell.x][cell.y]) {
            maze.removeWall(passage, passage.direction);
            this.visited[cell.x][cell.y] = true;

            for(const direction of maze.directions) {
                if(direction !== maze.opposite(passage.direction))
                    this.activePassages.push({ ...cell, direction });
            }
        } else {
            this.activePassages.splice(passageIndex, 1);
        }

        return this.activePassages.length > 0 && minCost !== Infinity;
    }
}

export default TruePrims;
