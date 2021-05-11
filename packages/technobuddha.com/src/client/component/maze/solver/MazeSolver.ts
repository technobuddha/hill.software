import type { Maze, CellDirection } from '../maze/Maze';

import { MazeRenderer } from '../maze/MazeRenderer';

export type MazeProperties =  {
    maze: Maze;
    context: CanvasRenderingContext2D;
};

export type SolveArguments = {
    color?: string;
    entrance?: CellDirection;
    exit?: CellDirection;
};

export abstract class MazeSolver extends MazeRenderer {
    protected maze:       Maze;

    constructor({ maze, context }: { maze: Maze; context: CanvasRenderingContext2D }) {
        super({
            context,
            width: maze.width,
            height: maze.height,
            cellSize: maze.cellSize,
            cellColor: maze.cellColor,
            wallSize: maze.wallSize,
            wallColor: maze.wallColor,
            voidSize: maze.voidSize,
            voidColor: maze.voidColor,
        });

        this.maze       = maze;
        this.context    = context;
    }

    public abstract solve({ color, entrance, exit }: SolveArguments): Promise<void>;
}

export default MazeSolver;
