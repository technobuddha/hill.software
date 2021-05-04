import React from 'react';
import { Size } from '@technobuddha/mui-size';
import { MazeFactory } from './generator/MazeFactory';

import Kruskals             from './generator/Kruskals';
import RecursiveBacktracker from './generator/RecursiveBacktracker';
import RecursiveDivision    from './generator/RecursiveDivision';
import TruePrims            from './generator/TruePrims';

type MazeProps = {
    children?: never;
};

export const Maze: React.FC<MazeProps> = () => {
    return (
        <Size width="100%" height="100%">
            {
                ({ width, height }) =>
                    <MazeBoard boxWidth={width} boxHeight={height} />
            }
        </Size>
    );
};

type MazeBoardProps = {
    boxWidth: number;
    boxHeight: number;
    children?: never;
};

const algorithms = [
    Kruskals,
    RecursiveBacktracker,
    RecursiveDivision,
    TruePrims,
];

export const MazeBoard: React.FC<MazeBoardProps> = ({ boxWidth, boxHeight }) => {
    const canvasMaze        = React.useRef<HTMLCanvasElement | null>(null);
    const canvasSolve1      = React.useRef<HTMLCanvasElement | null>(null);
    const canvasSolve2      = React.useRef<HTMLCanvasElement | null>(null);
    const [ redraw, setRedraw ]   = React.useState(0);

    React.useEffect(
        () => {
            if(canvasMaze.current && canvasSolve1.current && canvasSolve2.current) {
                const contextMaze   = canvasMaze.current.getContext('2d')!;
                const contextSolve1 = canvasSolve1.current.getContext('2d')!;
                const contextSolve2 = canvasSolve2.current.getContext('2d')!;

                const factory = new MazeFactory({ context: contextMaze, width: 180, height: 80 });

                contextSolve1.fillStyle = 'transparent';

                contextSolve1.clearRect(0, 0, boxWidth, boxHeight);
                contextSolve2.clearRect(0, 0, boxWidth, boxHeight);

                factory.create(algorithms[Math.floor(Math.random() * algorithms.length)], 10)
                .then(maze => {
                    //maze.drawDistances();
                    const n = Math.floor(Math.random() * 4);
                    //maze.drawSolution(contextSolve1, true, 'rgba(255, 0, 0, 0.6)');
                    //maze.drawSolution(contextSolve2, true, 'rgba(0, 0, 255, 0.4)', maze.exit, maze.entrance);
                    (n === 0 ? maze.drawSolution(contextSolve1)
                        :   n === 1 ? maze.drawSolution2(contextSolve1)
                            :   n === 2 ? maze.drawSolution3(contextSolve1)
                                : maze.drawSolution4(contextSolve1)
                    )
                    .then(() => {
                        setTimeout(
                            () => setRedraw(x => x + 1),
                            5000
                        );
                    });
                });
            }
        },
        [ redraw ]
    );

    return (
        <div style={{ position: 'relative' }}>
            <canvas ref={canvasMaze} width={boxWidth} height={boxHeight} style={{ position: 'absolute', zIndex: 1 }} />
            <canvas ref={canvasSolve1} width={boxWidth} height={boxHeight} style={{ position: 'absolute', zIndex: 2 }} />
            <canvas ref={canvasSolve2} width={boxWidth} height={boxHeight} style={{ position: 'absolute', zIndex: 3 }} />
        </div>
    );
};

export default Maze;
