// useLayoutEffect runs after the first render but before the brower paints the UI
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


// Explanation>>>

// useLayoutEffect is just like useEffect, but it runs synchronously after DOM mutations and before the browser repaints the UI.

// ✅ When to Use useLayoutEffect
// Use it only when:

// You need to measure DOM layout (e.g. element size/position).

// You want to mutate the DOM (e.g. animations, scroll, focus) before the user sees it.


// use Case>>>>>>
// Scroll to bottom on mount (perfect use case)
import { useLayoutEffect, useRef } from 'react';

function ChatBox() {
    const messagesEndRef = useRef(null);

    useLayoutEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div style={{ height: 300, overflowY: 'auto' }}>
            {/* simulate chat messages */}
            {[...Array(30)].map((_, i) => (
                <p key={i}>Message {i + 1}</p>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}