import React, { useEffect, useState, useRef } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import styles from './Canvas.module.css';
import { useSelector } from 'react-redux';
import Cursor from '@/components/cursor/Cursor';


const Canvas = ({ onClearLines, clearLines }) => {

    const [lines, setLines] = useState([]);

    const isDrawing = useRef(false);

    // states
    const colorSelector = useSelector(state => state.color);
    const toolSelector = useSelector(state => state.tool);
    const sizeSelector = useSelector(state => state.size);


    useEffect(() => {

    }, [clearLines]);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]);
        console.log(colorSelector);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing.current) {
            return;
        }

        const stage = e.target.getStage();
        const point = stage.getPointerPosition();

        // Draw line
        let lastLine = lines[lines.length - 1];

        if (lastLine) {
            // add point
            lastLine.points = lastLine.points.concat([point.x, point.y]);

            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };


    return (
        <div
            className='text-center flex justify-center items-center'
        >
            <div
                style={{
                    width: window.innerWidth >= 767 ? 1000 : 400
                }}
            >
                <Cursor />
                <Stage
                    width={window.innerWidth >= 767 ? 1000 : 400}
                    height={window.innerHeight}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    className={styles.canvas_big}

                >
                    <Layer>
                        {lines.map((line, i) => (
                            <Line
                                key={i}
                                points={line.points}
                                stroke={colorSelector != '' ? colorSelector : '#fff'}
                                strokeWidth={2}
                                tension={0.5}
                                lineCap='round'
                                globalCompositeOperation={
                                    toolSelector === 'ERASER' ? 'destination-out' : 'source-over'}

                            />
                        ))}
                    </Layer>

                </Stage>
            </div>
        </div>
    );
}

export default Canvas;