import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { colorAction } from '../../actions';

const Colors = () => {

    const colorSelector = useSelector(state => state.color);

    const dispatch = useDispatch();

    const [style, setStyle] = useState({});

    const colors = [
        '#e24545', // RED
        '#e2972a', // ORANGE
        '#dfdf43', // YELLOW
        '#8ee27f', // GREEN
        '#56d1ac', // TEAL
        '#5198da', // BLUE
        '#8290e6', // BLURPLE
        '#b374e7', // PURPLE
        '#c764e6', // MAGENTA
        '#ec6dda', // PINK
    ];

    const handleClick = (color) => {

        dispatch(colorAction(color = color));

        setStyle(prevState => ({
            [color]: !prevState[color]
        }));
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-rows-2 grid-flow-col md:grid-rows-5 gap-2'>
                {colors.map((color, idx) => (
                    <div
                        key={idx}
                        className={`w-5 h-5 md:w-7 md:h-7 rounded-full border border-black/90 border-separate cursor-pointer`}
                        style={{
                            backgroundColor: color,
                            border: style[`${idx}`] ? '3px inset #000000' : 'none',
                        }}
                        onClick={() => handleClick(color) || handleClick(idx)}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colors;