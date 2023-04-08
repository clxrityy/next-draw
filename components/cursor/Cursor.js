import styles from './Cursor.module.css';
import useMousePosition from '@/util/useMousePosition';
import { useSelector } from 'react-redux';

const Cursor = () => {
    const { x, y } = useMousePosition();

    let color = useSelector(state => state.color);

    if (color === '') {
        color = '#fff'
    }

    return (

        <>
            <div
                style={{ left: `${x}px`, top: `${y}px`, backgroundColor: color }}
                className={styles.cursor}
            >
            </div>
        </>
    );
}

export default Cursor;