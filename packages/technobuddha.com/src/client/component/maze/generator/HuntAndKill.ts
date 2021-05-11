import create2DArray from '@technobuddha/library/create2DArray';
import type { Maze, Cell } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';

export class HuntAndKill extends MazeGenerator {
    private visited:            boolean[][];
    private startHuntingFrom:   Cell;
    private hunting:            boolean;

    constructor(props: MazeGeneratorProperties) {
        super(props);

        this.currentCell      = this.start;
        this.startHuntingFrom = this.currentCell;
        this.hunting          = false;

        this.visited = create2DArray(this.width, this.height, false);
    }

    public step(maze: Maze) {
        if(!this.hunting) {
            this.visited[this.currentCell.x][this.currentCell.y] = true;

            const unvisitedNeighbors = maze.neighbors(this.currentCell).filter(cell => !this.visited[cell.x][cell.y]);
            if(unvisitedNeighbors.length > 0) {
                const cell = this.selectNeighbor(unvisitedNeighbors);
                maze.removeWall(this.currentCell, cell.direction);
                this.currentCell = cell;

                if(
                    Math.max(this.currentCell.y - 1, 0) < this.startHuntingFrom.y ||
                    (
                        Math.max(this.currentCell.x - 1, 0) < this.startHuntingFrom.x &&
                        Math.max(this.currentCell.y - 1, 0) === this.startHuntingFrom.y
                    )
                ) {
                    if(this.currentCell.y !== 0)
                        this.startHuntingFrom = { x: this.currentCell.x, y: this.currentCell.y - 1 };
                    else if(this.currentCell.x !== 0)
                        this.startHuntingFrom = { x: this.currentCell.x - 1, y: this.currentCell.y };
                    else
                        this.startHuntingFrom = this.currentCell;
                }
            } else {
                this.hunting = true;
                this.currentCell = this.startHuntingFrom;
            }
        } else if(!this.visited[this.currentCell.x][this.currentCell.y]) {
            const visitedNeighbors = maze.neighbors(this.currentCell).filter(cell => this.visited[cell.x][cell.y]);
            if(visitedNeighbors.length > 0) {
                if(this.currentCell.y !== 0 && !this.visited[this.currentCell.y][this.currentCell.y - 1])
                    this.startHuntingFrom = { x: this.currentCell.x, y: this.currentCell.y - 1 };
                else
                    this.startHuntingFrom = this.currentCell;

                maze.removeWall(
                    this.currentCell,
                    this.selectNeighbor(visitedNeighbors).direction
                );

                this.hunting = false;
            }
        }

        if(this.hunting) {
            this.currentCell = maze.move(this.currentCell, 'E');
            if(this.currentCell.x >= this.width) {
                this.currentCell.x = 0;
                this.currentCell.y++;
            }

            if(this.currentCell.y >= this.height)
                return false;
        }

        return true;
    }
}

export default HuntAndKill;
