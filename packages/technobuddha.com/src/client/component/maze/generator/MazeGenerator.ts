import type { Cell, CellDirection } from './Maze';
import { Maze } from './Maze';

export type MazeGeneratorProperties = {
    context?:               CanvasRenderingContext2D;
    width:                  number;
    height:                 number;
    entrance:               CellDirection;
    exit:                   CellDirection;
    start:                  Cell;
    random:                 () => number;
    selectNeighbor:         (neighbors: CellDirection[]) => CellDirection;
};

export class MazeGenerator {
    public context:         CanvasRenderingContext2D | undefined;
    public random:          () => number;
    public selectNeighbor:  (neighbors: CellDirection[]) => CellDirection;
    public width:           number;
    public height:          number;
    public entrance:        CellDirection;
    public exit:            CellDirection;
    public start:           Cell;
    public currentCell:     Cell;

    constructor({ context, random, selectNeighbor, width, height, entrance, exit, start }: MazeGeneratorProperties) {
        this.context            = context;
        this.random             = random;
        this.selectNeighbor     = selectNeighbor;
        this.width              = width;
        this.height             = height;
        this.entrance           = entrance;
        this.exit               = exit;
        this.start              = start;
        this.currentCell        = start;
    }

    protected preProcessor(maze: Maze) {
        return maze;
    }

    public async generate(speed: number): Promise<Maze> {
        return new Promise(resolve => {
            const maze = this.preProcessor(new Maze({ ...this }));

            if(speed) {
                const go = () => {
                    let building = true;
                    for(let i = 0; i < speed; ++i) {
                        if(building)
                            building = this.step(maze);
                    }

                    if(building)
                        requestAnimationFrame(go);
                    else
                        resolve(maze);
                };
                go();
            } else {
                while(this.step(maze));
                resolve(maze);
            }
        });
    }

    protected step(_maze: Maze): boolean {
        return false;
    }
}

export default MazeGenerator;
