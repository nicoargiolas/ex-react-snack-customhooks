// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse

// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.
// Cosa deve fare?
// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.

import { useState, useEffect } from "react";

export default function useCustomPointer(pointer) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', updatePosition)

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        }
    }, [])

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    pointerEvents: 'none', // così non interferisce con click, hover ecc
                    transform: 'translate(-50%, -50%)', // per centrare
                    zIndex: 9999,
                    cursor: 'none',
                }}
            >
                {pointer}
            </div>
        </>
    )
}