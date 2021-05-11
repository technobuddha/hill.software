import type { Maze, CellDirection } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';
import create2DArray from '@technobuddha/library/create2DArray';
import type { Direction } from '../maze/directions';
import { directions, opposite } from '../maze/directions';

export class TruePrims extends MazeGenerator {
    private visited:        boolean[][];
    private activePassages: CellDirection[];
    private costs:          Record<Direction, number>[][];

    constructor(props: MazeGeneratorProperties) {
        super(props);

        this.currentCell = this.start;
        this.visited = create2DArray(this.width, this.height, false);
        this.visited[this.currentCell.x][this.currentCell.y] = true;

        this.costs = create2DArray(this.width, this.height, () => ({ N: 0, E: 0, W: 0, S: 0 }));

        this.activePassages = directions.map(direction => ({ ...this.currentCell, direction }));
    }

    protected preProcessor(maze: Maze) {
        for(let x = 0; x < this.width; ++x) {
            for(let y = 0; y < this.height; ++y) {
                for(let direction of directions) {
                    const cell         = maze.move({ x, y }, direction);
                    const isBorderWall = !maze.inMaze(cell);
                    let   passageCost  = isBorderWall ? Infinity : this.random();

                    if((direction === 'N' || direction === 'W') && !isBorderWall)
                        passageCost = this.costs[cell.x][cell.y][opposite[direction]];

                    this.costs[x][y][direction] = passageCost;
                }
            }
        }

        return maze;
    }

    public step(maze: Maze) {
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

            for(const direction of directions) {
                if(direction !== opposite[passage.direction])
                    this.activePassages.push({ ...cell, direction });
            }
        } else {
            this.activePassages.splice(passageIndex, 1);
        }

        return this.activePassages.length > 0 && minCost !== Infinity;
    }
}

export default TruePrims;
