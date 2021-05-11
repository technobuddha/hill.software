import type { Cell, CellDirection, CellCorner } from './Maze';

export type MazeRendererProperties = {
    context?: CanvasRenderingContext2D;
    width: number;
    height: number;
    cellSize: number;
    cellColor: string;
    wallSize: number;
    wallColor: string;
    voidSize: number;
    voidColor: string;
};

export abstract class MazeRenderer {
    public readonly cellSize: number;
    public readonly cellColor: string;
    public readonly wallSize: number;
    public readonly wallColor: string;
    public readonly voidSize: number;
    public readonly voidColor: string;

    public context: CanvasRenderingContext2D | undefined;
    public width: number;
    public height: number;

    constructor({
        context,
        width,
        height,
        cellSize,
        cellColor,
        wallSize,
        wallColor,
        voidSize,
        voidColor,
    }: MazeRendererProperties) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cellColor = cellColor;
        this.wallSize = wallSize;
        this.wallColor = wallColor;
        this.voidSize = voidSize;
        this.voidColor = voidColor;
    }

    private offsets(n: number) {
        const n0 = n * this.cellSize;
        const n1 = n0 + this.voidSize;
        const n2 = n1 + this.wallSize;
        const n5 = n0 + this.cellSize;
        const n4 = n5 - this.voidSize;
        const n3 = n4 - this.wallSize;

        return [ n0, n1, n2, n3, n4, n5 ];
    }

    protected prepare() {
        if(this.context) {
            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.context.translate(
                Math.floor((this.context.canvas.width - this.width * this.cellSize) / 2),
                Math.floor((this.context.canvas.height - this.height * this.cellSize) / 2),
            );
        }
    }

    protected clear() {
        if(this.context) {
            this.context.clearRect(
                -this.wallSize,
                -this.wallSize,
                this.width * this.cellSize + this.wallSize * 2,
                this.height * this.cellSize + this.wallSize * 2,
            );
        }
    }

    protected drawFloor({ x, y }: Cell, color = this.cellColor) {
        if(this.context) {
            this.context.fillStyle = color;
            this.context.fillRect(
                x * this.cellSize + this.voidSize + this.wallSize,
                y * this.cellSize + this.voidSize + this.wallSize,
                this.cellSize - (this.voidSize * 2 + this.wallSize * 2),
                this.cellSize - (this.voidSize * 2 + this.wallSize * 2)
            );
        }
    }

    protected drawX({ x, y }: Cell, color = 'black') {
        if(this.context) {
            this.context.fillStyle = this.cellColor;
            this.context.fillRect(
                x * this.cellSize + this.wallSize,
                y * this.cellSize + this.wallSize,
                this.cellSize - (this.wallSize * 2),
                this.cellSize - (this.wallSize * 2)
            );
            this.context.strokeStyle = color;
            this.context.beginPath();
            this.context.moveTo(x * this.cellSize + this.wallSize, y * this.cellSize + this.wallSize);
            this.context.lineTo(x * this.cellSize + this.cellSize - this.wallSize, y * this.cellSize + this.cellSize - this.wallSize);
            this.context.moveTo(x * this.cellSize + this.cellSize - this.wallSize, y * this.cellSize + this.wallSize);
            this.context.lineTo(x * this.cellSize + this.wallSize, y * this.cellSize + this.cellSize - this.wallSize);
            this.context.stroke();
        }
    }

    protected drawWall(cd: CellDirection, color = this.wallColor) {
        if(this.context) {
            const sX = cd.x * this.cellSize;
            const sY = cd.y * this.cellSize;
            const eX = sX + (this.cellSize - this.wallSize);
            const eY = sY + (this.cellSize - this.wallSize);

            this.context.fillStyle = color;
            switch(cd.direction) {
                case 'N':
                    this.context.fillRect(
                        sX + this.wallSize,
                        sY,
                        this.cellSize - (this.wallSize * 2),
                        this.wallSize
                    );
                    break;
                case 'S':
                    this.context.fillRect(
                        sX + this.wallSize,
                        eY,
                        this.cellSize - (this.wallSize * 2),
                        this.wallSize
                    );
                    break;
                case 'E':
                    this.context.fillRect(
                        eX,
                        sY + this.wallSize,
                        this.wallSize,
                        this.cellSize - (this.wallSize * 2)
                    );
                    break;
                case 'W':
                    this.context.fillRect(
                        sX,
                        sY + this.wallSize,
                        this.wallSize,
                        this.cellSize - (this.wallSize * 2)
                    );
                    break;
            }
        }
    }

    protected drawPillar({ x, y, corner }: CellCorner, color = this.wallColor) {
        if(this.context) {
            const ctx = this.context;
            const cs = this.cellSize;
            const ws = this.wallSize;
            const x0 = x * cs;
            const y0 = y * cs;
            const x1 = x * cs + cs - ws;
            const y1 = y * cs + cs - ws;

            ctx.fillStyle = color;
            if(corner === 'NW') ctx.fillRect(x0, y0, ws, ws);
            if(corner === 'NE') ctx.fillRect(x1, y0, ws, ws);
            if(corner === 'SW') ctx.fillRect(x0, y1, ws, ws);
            if(corner === 'SE') ctx.fillRect(x1, y1, ws, ws);
        }
    }

    //this.context.fillRect(
    //    path.x * this.maze.CELL_SIZE + (d === 'E' ? -this.maze.WALL_SIZE : this.maze.WALL_SIZE),
    //    path.y * this.maze.CELL_SIZE + (d === 'S' ? -this.maze.WALL_SIZE : this.maze.WALL_SIZE),
    //    this.maze.CELL_SIZE - (d === 'E' || d === 'W' ? 0 : (this.maze.WALL_SIZE * 2)),
    //    this.maze.CELL_SIZE - (d === 'S' || d === 'N' ? 0 : (this.maze.WALL_SIZE * 2)),
    //);

    protected drawPath(path: CellDirection, color = 'red') {
        if(this.context) {
            const cs = this.cellSize;
            const ws = this.wallSize;

            const margin = this.cellSize > 24 ? 3 : this.cellSize > 16 ? 2 : 1;

            const x0 = path.x * cs + ws + margin;
            const y0 = path.y * cs + ws + margin;
            const x1 = path.x * cs + cs - (ws + margin);
            const y1 = path.y * cs + cs - (ws + margin);
            const xc = path.x * cs + (cs - ws) / 2;
            const yc = path.y * cs + (cs - ws) / 2;

            const ctx = this.context;
            ctx.fillStyle = color;
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
}

export default MazeRenderer;
