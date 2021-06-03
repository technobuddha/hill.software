import randomShuffle from '@technobuddha/library/randomShuffle';
import create2DArray from '@technobuddha/library/create2DArray';
import type { Cell } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';

type Mode = 'horizontal' | 'vertical';

export class Ellers extends MazeGenerator {
    private visited:                    boolean[][];
    private mode:                       Mode;
    private cellSets:                   number[][];
    private sets:                       Record<number, Cell[]>;
    private cellsToConnectVertically:   Cell[];

    constructor(props: MazeGeneratorProperties) {
        super(props);

        const { maze }          = this;
        const { width, height } = maze;

        this.visited        = create2DArray(width, height, false);
        this.currentCell    = { x: 0, y: 0 };
        this.visited[this.currentCell.x][this.currentCell.y] = true;

        this.sets       = {};
        this.cellSets   = create2DArray(width, height, (x, y) => {
            const setId = x + y * width;
            this.sets[setId] = [{ x, y }];
            return setId;
        });

        this.cellsToConnectVertically = [];
        this.mode = 'horizontal';
        this.initializeRow();
    }

    public step() {
        return this.mode === 'horizontal' ? this.horizontalStep() : this.verticalStep();
    }

    private initializeRow() {
        this.currentCell.x = 0;
        this.mode = 'horizontal';
    }

    private horizontalStep() {
        const { maze } = this;
        const { width, height } = maze;

        const c0 = this.currentCell;
        const c1 = maze.move(c0, 'E')!;

        if(
            (this.cellSets[c0.x][c0.y] !== this.cellSets[c1.x][c1.y]) &&
            ((c0.y === height - 1) || (this.random() > 0.5))
        ) {
            this.merge(c0, c1);
            maze.removeWall(c0, 'E');
        }

        this.currentCell.x++;

        if(this.currentCell.x >= width - 1) {
            if(this.currentCell.y === height - 1)
                return false;

            this.mode = 'vertical';
            this.cellsToConnectVertically = this.computeVerticals();
        }
        return true;
    }

    private computeVerticals() {
        const verticalConnections: Cell[] = [];

        for(let set of Object.values(this.sets)) {
            const candidates = randomShuffle(set).filter(({ y }) => y === this.currentCell.y);

            if(candidates.length > 0) {
                const numberOfCellsToConnect = Math.floor(this.random() * (candidates.length - 1)) + 1;

                for(let i = 0; i < numberOfCellsToConnect; i++)
                    verticalConnections.push(candidates[i]);
            }
        }

        return verticalConnections;
    }

    private merge(sink: Cell, target: Cell) {
        let sinkSet     = this.cellSets[sink.x][sink.y];
        let targetSet   = this.cellSets[target.x][target.y];

        for(let cell of this.sets[targetSet])
            this.cellSets[cell.x][cell.y] = sinkSet;

        this.sets[sinkSet] = this.sets[sinkSet].concat(this.sets[targetSet]);

        return delete this.sets[targetSet];
    }

    private verticalStep() {
        const { maze } = this;

        //no cells left to connect vertically
        if(this.cellsToConnectVertically.length === 0) {
            this.currentCell.y++;
            this.initializeRow();
        } else {
            this.currentCell.x = this.cellsToConnectVertically.pop()!.x;

            this.merge(
                this.currentCell,
                { x: this.currentCell.x, y: this.currentCell.y + 1 },
            );

            maze.removeWall(this.currentCell, 'S');
        }

        return true;
    }
}

export default Ellers;
