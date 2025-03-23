// useLayoutEffect runs after the first render but before the brower points the UI
// Purpose: Similar to useEffect, but runs synchronously after DOM mutations.

// Use Case: Measuring layout changes, DOM manipulations before the browser paints.


import { useState, useEffect, useLayoutEffect } from 'react';

function EffectComparison() {
    const [effectValue, setEffectValue] = useState("initial")
    const [layourEffectValue, setLayoutEffectValue] = useState("initial");

    useEffect(() => {
        console.log(effectValue, "effectValue");
        setEffectValue("updated")
    }, [])  // Runs after the first render

    useLayoutEffect(() => {
        console.log(layourEffectValue, "layourEffectValue");
        setLayoutEffectValue("updated")
    }, []) // Runs after the first render but before the brower paints

    return (

        <>
            <p>{effectValue} effectValue</p>
            <p>{layourEffectValue} layourEffectValue</p>
        </>
    )
}
export default EffectComparison;