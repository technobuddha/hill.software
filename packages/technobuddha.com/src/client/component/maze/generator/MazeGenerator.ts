import type { Maze, Cell, CellDirection } from '../maze/Maze';

export type MazeGeneratorProperties = {
    maze:           Maze;
    start:          Cell;
    random:         () => number;
    selectNeighbor: (neighbors: CellDirection[]) => CellDirection;
};

export class MazeGenerator {
    public maze:            MazeGeneratorProperties['maze'];
    public start:           MazeGeneratorProperties['start'];
    public currentCell:     MazeGeneratorProperties['start'];
    public random:          MazeGeneratorProperties['random'];
    public selectNeighbor:  MazeGeneratorProperties['selectNeighbor'];

    constructor({ maze, start, random, selectNeighbor }: MazeGeneratorProperties) {
        this.maze               = maze;
        this.currentCell        = start;
        this.start              = start;
        this.random             = random;
        this.selectNeighbor     = selectNeighbor;
    }

    public async generate(speed: number): Promise<Maze> {
        return new Promise(resolve => {
            const { maze } = this;

            if(speed) {
                const go = () => {
                    let building = true;
                    for(let i = 0; i < speed; ++i) {
                        if(building)
                            building = this.step();
                    }

                    if(building)
                        requestAnimationFrame(go);
                    else
                        resolve(maze);
                };
                go();
            } else {
                while(this.step());
                resolve(maze);
            }
        });
    }

    protected step(): boolean {
        return false;
    }
}

export default MazeGenerator;
