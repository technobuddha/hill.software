import React from 'react';
import { Size } from '@technobuddha/mui-size';
import { MazeFactory } from './maze/MazeFactory';

import Kruskals             from './generator/Kruskals';
import RecursiveBacktracker from './generator/RecursiveBacktracker';
import RecursiveDivision    from './generator/RecursiveDivision';
import TruePrims            from './generator/TruePrims';
//import BinaryTree           from './generator/BinaryTree';

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

                const cz = 27;
                const wz = 1;

                const w = Math.floor((boxWidth  - wz * 4) / cz);
                const h = Math.floor((boxHeight - wz * 4) / cz);

                const factory = new MazeFactory({
                    context: contextMaze,
                    width: w,
                    height: h,
                    cellSize: cz,
                    wallSize: wz,
                });

                contextSolve1.clearRect(0, 0, boxWidth, boxHeight);
                contextSolve2.clearRect(0, 0, boxWidth, boxHeight);

                factory.create(algorithms[Math.floor(Math.random() * algorithms.length)], 10)
                .then(maze => {
                    //maze.drawDistances();
                    const n = Math.floor(Math.random() * 4);
                    (n === 0 ? new DepthFirstSearch({ maze, context: contextSolve1 }).solve()
                        :   n === 1 ? new DeadEndFiller({ maze, context: contextSolve1 }).solve()
                            :   n === 2 ? new WallWalking({ maze, context: contextSolve1 }).solve()
                                : new BreadthFirstSearch({ maze, context: contextSolve1 }).solve()
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
