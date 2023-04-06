import Draggable from 'react-draggable';
import { IoMdSettings } from 'react-icons/io';
import Colors from './Colors';
import Tool from './Tool';

const Settings = () => {
    return (
        <div className='absolute mt-5 ml-5'>
            <Draggable>
                <div className='text-white bg-blue-900 p-4 rounded-lg flex flex-col justify-center items-center text-center cursor-move'>
                    <div className='py-2'>
                        <IoMdSettings className='w-5 h-5 md:w-8 md:h-8' />
                    </div>
                    <div className='space-y-3'>
                        <Colors />
                        <Tool />
                    </div>
                </div>
            </Draggable>
        </div>
    );
};

export default Settings;