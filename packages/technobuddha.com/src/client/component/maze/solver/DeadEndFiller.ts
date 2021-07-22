import { MazeSolver } from './MazeSolver';

export class DeadEndFiller extends MazeSolver {
    public async solve() {
        const { maze } = this;
        const walls = maze.walls.map(row => [ ...row ]);

        maze.prepareContext(this.context);
        return new Promise<void>(resolve => {
            const deadEnds = maze.deadEnds();
            for(const end of deadEnds)
                maze.drawX(end, 'red');

            const go = () => {
                if(deadEnds.length) {
                    const index = Math.floor(deadEnds.length * Math.random());
                    let cell    = deadEnds[index];
                    deadEnds.splice(index, 1);

                    const gogo = () => {
                        requestAnimationFrame(
                            () => {
                                if(cell) {
                                    const moves = maze.validMoves(cell, { walls });

                                    if(maze.isDeadEnd(cell)) {
                                        for(const direction of maze.directions) {
                                            if(!walls[cell.x][cell.y][direction]) {
                                                walls[cell.x][cell.y][direction] = true;
                                                maze.drawWall({ ...cell, direction });

                                                const cell2 = maze.move(cell, direction);
                                                if(cell2 && maze.inMaze(cell2)) {
                                                    walls[cell2.x][cell2.y][maze.opposite(direction)] = true;
                                                    maze.drawWall({ ...cell2, direction: maze.opposite(direction) });
                                                }
                                            }
                                        }

                                        maze.drawCell(cell, maze.wallColor);
                                        [ cell ] = moves;
                                        gogo();
                                    } else {
                                        go();
                                    }
                                }
                            }
                        );
                    };
                    gogo();
                } else {
                    resolve();
                }
            };
            go();
        });
    }
}

export default DeadEndFiller;
