import type { Cell, CellDirection, CellCorner } from './Maze';
import type { Direction } from './directions';

export type MazeRendererProperties = {
    context?: CanvasRenderingContext2D;
    width: number;
    height: number;
    cellSize: number;
    cellColor: string;
    wallSize: number;
    wallColor: string;
};

export abstract class MazeRenderer {
    public readonly cellSize: number;
    public readonly cellColor: string;
    public readonly wallSize: number;
    public readonly wallColor: string;

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
    }: MazeRendererProperties) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cellColor = cellColor;
        this.wallSize = wallSize;
        this.wallColor = wallColor;
    }

    public opposite(dir: Direction): Direction {
        switch(dir) {
            case 'N':   return 'S';
            case 'E':   return 'W';
            case 'W':   return 'E';
            case 'S':   return 'N';
        }
    }

    private offsets({ x, y }: Cell) {
        const margin = Math.floor(this.cellSize / 8);

        const x0 = x  * this.cellSize;
        const x1 = x0 + this.wallSize;
        const x2 = x1 + margin;
        const x5 = x0 + this.cellSize;
        const x4 = x5 - this.wallSize;
        const x3 = x4 - margin;
        const xc = (x0 + x5) / 2;

        const y0 = y  * this.cellSize;
        const y1 = y0 + this.wallSize;
        const y2 = y1 + margin;
        const y5 = y0 + this.cellSize;
        const y4 = y5 - this.wallSize;
        const y3 = y4 - margin;
        const yc = (y0 + y5) / 2;

        return { x0, x1, x2, xc, x3, x4, x5, y0, y1, y2, yc, y3, y4, y5 };
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
            const { x1, x4, y1, y4 } = this.offsets({ x, y });

            this.context.fillStyle = color;
            this.context.fillRect(x1, y1, x4 - x1, y4 - y1);
        }
    }

    protected drawX({ x, y }: Cell, color = 'black', cellColor = this.cellColor) {
        if(this.context) {
            const { x1, x2, x3, x4, y1, y2, y3, y4 } = this.offsets({ x, y });

            this.context.fillStyle = cellColor;
            this.context.fillRect(x1, y1, x4 - x1, y4 - y1);

            this.context.strokeStyle = color;
            this.context.beginPath();
            this.context.moveTo(x2, y2);
            this.context.lineTo(x3, y3);
            this.context.moveTo(x2, y3);
            this.context.lineTo(x3, y2);
            this.context.stroke();
        }
    }

    protected drawWall(cd: CellDirection, color = this.wallColor) {
        if(this.context) {
            const { x0, x1, x4, x5, y0, y1, y4, y5 } = this.offsets(cd);

            this.context.fillStyle = color;
            switch(cd.direction) {
                case 'N':   this.context.fillRect(x1, y0, x4 - x1, y1 - y0);    break;
                case 'S':   this.context.fillRect(x1, y4, x4 - x1, y5 - y4);    break;
                case 'E':   this.context.fillRect(x4, y1, x5 - x4, y4 - y1);    break;
                case 'W':   this.context.fillRect(x0, y1, x1 - x0, y4 - y1);    break;
            }
        }
    }

    protected drawPillar({ x, y, corner }: CellCorner, color = this.wallColor) {
        if(this.context) {
            const { x0, x1, x4, x5, y0, y1, y4, y5 } = this.offsets({ x, y });

            this.context.fillStyle = color;
            if(corner === 'NW') this.context.fillRect(x0, y0, x1 - x0, y1 - y0);
            if(corner === 'NE') this.context.fillRect(x4, y0, x5 - x4, y1 - y0);
            if(corner === 'SW') this.context.fillRect(x0, y4, x1 - x0, y5 - y4);
            if(corner === 'SE') this.context.fillRect(x4, y4, x5 - x4, y5 - y4);
        }
    }

    protected drawPath(cell: CellDirection, color = 'red') {
        if(this.context) {
            const { x1, x2, xc, x3, x4, y1, y2, yc, y3, y4 } = this.offsets(cell);

            this.context.fillStyle = color;
            this.context.clearRect(x1, y1, x4 - x1, y4 - y1);

            switch(cell.direction) {
                case 'N':
                    this.context.beginPath();
                    this.context.moveTo(x2, y3);
                    this.context.lineTo(xc, y2);
                    this.context.lineTo(x3, y3);
                    this.context.closePath();
                    this.context.fill();
                    break;
                case 'S':
                    this.context.beginPath();
                    this.context.moveTo(x2, y2);
                    this.context.lineTo(xc, y3);
                    this.context.lineTo(x3, y2);
                    this.context.closePath();
                    this.context.fill();
                    break;
                case 'E':
                    this.context.beginPath();
                    this.context.moveTo(x2, y2);
                    this.context.lineTo(x3, yc);
                    this.context.lineTo(x2, y3);
                    this.context.closePath();
                    this.context.fill();
                    break;
                case 'W':
                    this.context.beginPath();
                    this.context.moveTo(x3, y2);
                    this.context.lineTo(x2, yc);
                    this.context.lineTo(x3, y3);
                    this.context.closePath();
                    this.context.fill();
                    break;
            }
        }
    }
}

export default MazeRenderer;
