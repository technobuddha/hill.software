import type { Cell, CellDirection } from '../maze/Maze';
import { Maze } from '../maze/Maze';

import { MazeRenderer } from '../maze/MazeRenderer';
import type { MazeRendererProperties } from '../maze/MazeRenderer';

export type MazeGeneratorProperties = MazeRendererProperties & {
    entrance:               CellDirection;
    exit:                   CellDirection;
    start:                  Cell;
    random:                 () => number;
    selectNeighbor:         (neighbors: CellDirection[]) => CellDirection;
};

export class MazeGenerator extends MazeRenderer {
    public random:          () => number;
    public selectNeighbor:  (neighbors: CellDirection[]) => CellDirection;
    public entrance:        CellDirection;
    public exit:            CellDirection;
    public start:           Cell;
    public currentCell:     Cell;

    constructor({ random, selectNeighbor, entrance, exit, start, ...props }: MazeGeneratorProperties) {
        super(props);
        this.random             = random;
        this.selectNeighbor     = selectNeighbor;
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