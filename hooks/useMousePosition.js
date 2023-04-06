import { useEffect, useState } from "react";

export default function useMousePosition() {
    const [mousePos, setMousePos] = useState({
        x: null,
        y: null
    });

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event;
            setMousePos({ x: clientX, y: clientY });
        };
        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };


    }, []);

    return mousePos;
}