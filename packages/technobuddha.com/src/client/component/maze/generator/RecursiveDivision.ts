import type { Maze, Cell } from '../maze/Maze';
import { MazeGenerator } from './MazeGenerator';
import type { MazeGeneratorProperties } from './MazeGenerator';

type Rect           = { x: number; y: number; width: number; height: number };
type State          = 'choose-region' | 'make-wall' | 'make-passage';

export class RecursiveDivision extends MazeGenerator {
    public stack:       Rect[];
    public region:      Rect;
    public state:       State;
    public horizontal:  boolean;
    public wall:   Cell;

    constructor(props: MazeGeneratorProperties) {
        super(props);

        this.region      = { x: 0, y: 0, width: this.width, height: this.height };
        this.stack       = [ this.region ];
        this.state       = 'choose-region';
        this.horizontal  = true;
        this.wall        = { x: 0, y: 0 };
    }

    protected preProcessor(maze: Maze) {
        for(let x = 0; x < this.width; ++x) {
            for(let y = 0; y < this.height; ++y) {
                if(y < this.height - 1) maze.removeWall({ x, y }, 'S');
                if(x < this.width  - 1) maze.removeWall({ x, y }, 'E');
            }
        }

        return super.preProcessor(maze);
    }

    private chooseRegion(_maze: Maze) {
        if(this.stack.length) {
            this.region = this.stack.pop()!;
            this.state = 'make-wall';
            return true;
        }

        return false;
    }

    private makeWall(maze: Maze) {
        if(this.region.width < this.region.height)
            this.horizontal = true;
        else if(this.region.width > this.region.height)
            this.horizontal = false;
        else if(this.random() > 0.5)
            this.horizontal = true;
        else
            this.horizontal = false;

        this.wall = {
            x:  (
                this.region.x +
                (this.horizontal ? 0 : Math.floor(this.random() * (this.region.width - 2)))
            ),
            y:  (
                this.region.y +
                (this.horizontal ? Math.floor(this.random() * (this.region.height - 2)) : 0)
            ),
        };

        const dxt = this.horizontal ? 1 : 0;
        const dyt = this.horizontal ? 0 : 1;
        const dir = this.horizontal ? 'S' : 'E';
        const cur = { ...this.wall };

        let len = this.horizontal ? this.region.width : this.region.height;
        while(len > 0) {
            maze.addWall(cur, dir);

            cur.x += dxt;
            cur.y += dyt;
            len--;
        }

        this.state = 'make-passage';

        return true;
    }

    public makePassage(maze: Maze) {
        const passage = {
            x: this.wall.x +
                (this.horizontal ? Math.floor(this.random() * this.region.width) : 0),
            y: this.wall.y +
                (this.horizontal ? 0 : Math.floor(this.random() * this.region.height)),
        };

        maze.removeWall(passage, this.horizontal ? 'S' : 'E');

        let width  = this.horizontal ? this.region.width : this.wall.x - this.region.x + 1;
        let height = this.horizontal ? this.wall.y - this.region.y + 1 : this.region.height;

        if(width >= 2 && height >= 2)
            this.stack.push({ x: this.region.x, y: this.region.y, width, height });

        let x  = this.horizontal ? this.region.x : this.wall.x + 1;
        let y  = this.horizontal ? this.wall.y + 1 : this.region.y;
        width  = this.horizontal ? this.region.width  : this.region.x + this.region.width  - this.wall.x - 1;
        height = this.horizontal ? this.region.y + this.region.height - this.wall.y - 1 : this.region.height;

        if(width >= 2 && height >= 2)
            this.stack.push({ x, y, width, height });

        this.state = 'choose-region';
        return true;
    }

    public step(maze: Maze) {
        switch(this.state) {
            case 'choose-region':   return this.chooseRegion(maze);
            case 'make-wall':       return this.makeWall(maze);
            case 'make-passage':    return this.makePassage(maze);
        }
    }
}

export default RecursiveDivision;
