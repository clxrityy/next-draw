import React, { useState } from 'react';
import { RxEraser, RxPencil1 } from 'react-icons/rx';
import { TfiPaintBucket } from 'react-icons/tfi';
import { useSelector, useDispatch } from 'react-redux';
import { toolAction } from '../../actions';

const Tool = () => {

    const toolSelector = useSelector(state => state.tool);

    const dispatch = useDispatch();

    const [tool, setTool] = useState('PENCIL');

    const handleClick = (tool) => {
        dispatch(toolAction(tool));

        setTool(tool);
    }

    return (
        <div className='p-2'>
            <div className='flex flex-row justify-center items-center space-x-1'>
                <div
                    className='rounded-full bg-white p-1'
                    style={{
                        border: tool === 'ERASER' ? '2px solid #000000' : 'none'
                    }}
                >
                    <RxEraser
                        className='text-blue-900 cursor-pointer w-4 h-4'
                        onClick={() => handleClick('ERASER')}
                    />
                </div>
                <div
                    className='rounded-full bg-white p-1'
                    style={{
                        border: tool === 'PENCIL' ? '2px solid #000000' : 'none'
                    }}
                >
                    <RxPencil1
                        className='text-blue-900 cursor-pointer w-4 h-4'
                        onClick={() => handleClick('PENCIL')}
                    />
                </div>
                <div
                    className='rounded-full bg-white p-1'
                    style={{
                        border: tool === 'BUCKET' ? '2px solid #000000' : 'none'
                    }}
                >
                    <TfiPaintBucket
                        className='text-blue-900 cursor-pointer w-4 h-4'
                        onClick={() => handleClick('BUCKET')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Tool;