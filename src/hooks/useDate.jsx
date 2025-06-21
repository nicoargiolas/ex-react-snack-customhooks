// 🏆 Snack 2: useDate() – Ottenere la Data Attuale

// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.
// Cosa deve fare?
// Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.

import { useEffect, useState } from 'react'

export default function useDate() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer)
    }, [])

    return date
}