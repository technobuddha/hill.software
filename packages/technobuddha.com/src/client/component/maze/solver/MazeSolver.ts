import type { Maze, Cell, CellDirection } from '../maze/Maze';

export type MazeProperties =  {
    maze: Maze;
    context: CanvasRenderingContext2D;
};

export type SolveArguments = {
    color?: string;
    entrance?: CellDirection;
    exit?: CellDirection;
};

export abstract class MazeSolver {
    protected maze:       Maze;
    protected context:    CanvasRenderingContext2D;

    constructor({ maze, context }: { maze: Maze; context: CanvasRenderingContext2D }) {
        this.maze       = maze;
        this.context    = context;
    }

    //this.context.fillRect(
    //    path.x * this.maze.CELL_SIZE + (d === 'E' ? -this.maze.WALL_SIZE : this.maze.WALL_SIZE),
    //    path.y * this.maze.CELL_SIZE + (d === 'S' ? -this.maze.WALL_SIZE : this.maze.WALL_SIZE),
    //    this.maze.CELL_SIZE - (d === 'E' || d === 'W' ? 0 : (this.maze.WALL_SIZE * 2)),
    //    this.maze.CELL_SIZE - (d === 'S' || d === 'N' ? 0 : (this.maze.WALL_SIZE * 2)),
    //);

    protected drawPath(path: CellDirection) {
        if(this.context) {
            const cs  = this.maze.CELL_SIZE;
            const ws  = this.maze.WALL_SIZE;

            const x0  = path.x * cs + ws * 3;
            const y0  = path.y * cs + ws * 3;
            const x1  = path.x * cs + cs - ws * 3;
            const y1  = path.y * cs + cs - ws * 3;
            const xc  = path.x * cs + (cs - ws) / 2;
            const yc  = path.y * cs + (cs - ws) / 2;

            const ctx = this.context;
            ctx.clearRect(x0, y0, cs - ws * 2, cs - ws * 2);

            switch(path.direction) {
                case 'N':
                    ctx.beginPath();
                    ctx.moveTo(x0, y1);
                    ctx.lineTo(xc, y0);
                    ctx.lineTo(x1, y1);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'S':
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                    ctx.lineTo(xc, y1);
                    ctx.lineTo(x1, y0);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'E':
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                    ctx.lineTo(x1, yc);
                    ctx.lineTo(x0, y1);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'W':
                    ctx.beginPath();
                    ctx.moveTo(x1, y0);
                    ctx.lineTo(x0, yc);
                    ctx.lineTo(x1, y1);
                    ctx.closePath();
                    ctx.fill();
                    break;
            }
        }
    }

    protected fillCell({ x, y }: Cell) {
        this.context.fillRect(
            x * this.maze.CELL_SIZE + this.maze.WALL_SIZE,
            y * this.maze.CELL_SIZE + this.maze.WALL_SIZE,
            this.maze.CELL_SIZE - (this.maze.WALL_SIZE * 2),
            this.maze.CELL_SIZE - (this.maze.WALL_SIZE * 2)
        );
        if(!this.maze.walls[x][y].N) {
            this.context.fillRect(
                x * this.maze.CELL_SIZE + this.maze.WALL_SIZE,
                y * this.maze.CELL_SIZE,
                this.maze.CELL_SIZE - (this.maze.WALL_SIZE * 2),
                this.maze.WALL_SIZE,
            );
        }
        if(!this.maze.walls[x][y].S) {
            this.context.fillRect(
                x * this.maze.CELL_SIZE + this.maze.WALL_SIZE,
                y * this.maze.CELL_SIZE + (this.maze.CELL_SIZE - this.maze.WALL_SIZE),
                this.maze.CELL_SIZE - (this.maze.WALL_SIZE * 2),
                this.maze.WALL_SIZE
            );
        }
        if(!this.maze.walls[x][y].W) {
            this.context.fillRect(
                x * this.maze.CELL_SIZE,
                y * this.maze.CELL_SIZE + this.maze.WALL_SIZE,
                this.maze.WALL_SIZE,
                this.maze.CELL_SIZE - (this.maze.WALL_SIZE * 2)
            );
        }
        if(!this.maze.walls[x][y].E) {
            this.context.fillRect(
                x * this.maze.CELL_SIZE + (this.maze.CELL_SIZE - this.maze.WALL_SIZE),
                y * this.maze.CELL_SIZE + this.maze.WALL_SIZE,
                this.maze.WALL_SIZE,
                this.maze.CELL_SIZE - (this.maze.WALL_SIZE * 2)
            );
        }
    }

    public abstract solve({ color, entrance, exit }: SolveArguments): Promise<void>;
}

export default MazeSolver;
