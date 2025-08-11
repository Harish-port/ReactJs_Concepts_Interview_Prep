import React from 'react';
import { useState } from 'react';

function PracticeAccordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleClick = (selectedItem) => {
        if (activeIndex === selectedItem) {
            setActiveIndex(null)
        } else {
            setActiveIndex(selectedItem)
        }
    }
    return (
        <div>PracticeAccordion
            {items.map((item, index) => (
                <div key={index} style={{border:"1px solid black",padding:"20px"}}>
                    <div onClick={() => handleClick(index)}>
                        {item.title}
                    </div>
                    {activeIndex === index && (
                        <div style={{ padding: "10px", background: "#fafafa" }}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default PracticeAccordion