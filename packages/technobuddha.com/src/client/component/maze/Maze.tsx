import React from 'react';
import { Size } from '@technobuddha/mui-size';
import { MazeFactory } from './maze/MazeFactory';

import Kruskals             from './generator/Kruskals';
import RecursiveBacktracker from './generator/RecursiveBacktracker';
import RecursiveDivision    from './generator/RecursiveDivision';
import TruePrims            from './generator/TruePrims';
import Blob                 from './generator/Blob';
import GrowingTree          from './generator/GrowingTree';

import DeadEndFiller        from './solver/DeadEndFiller';
import WallWalking          from './solver/WallWalking';
import DepthFirstSearch     from './solver/DepthFirstSearch';
import BreadthFirstSearch   from './solver/BreadthFirstSearch';

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
    Blob,
    GrowingTree,
];

const solvers = [
    DepthFirstSearch,
    DeadEndFiller,
    WallWalking,
    BreadthFirstSearch,
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

                const cz = 13;
                const wz = 1;

                const w = Math.floor((boxWidth  - wz * 4) / cz);
                const h = Math.floor((boxHeight - wz * 4) / cz);

                const factory = new MazeFactory({
                    context: contextMaze,
                    width: w,
                    height: h,
                    cellSize: cz,
                    wallSize: wz,
                    entrance: 'bottom left',
                    exit: 'top right',
                });

                contextSolve1.clearRect(0, 0, boxWidth, boxHeight);
                contextSolve2.clearRect(0, 0, boxWidth, boxHeight);

                factory.create(algorithms[Math.floor(Math.random() * algorithms.length)], 10)
                .then(maze => {
                    //maze.drawDistances();
                    const Solver = solvers[Math.floor(Math.random() * solvers.length)];
                    new Solver({ maze, context: contextSolve1 }).solve()
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
