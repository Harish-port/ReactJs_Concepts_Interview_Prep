import React, { useState } from 'react';

function PracticeAcordion({ items }) {
    const [active, setActive] = useState(null);
    console.log(items, "dlskahdkl");
    const handleClick = (selectedItem) => {
        if (active === selectedItem) {
            setActive(null)
        } else {
            setActive(selectedItem)
        }
    }
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <div onClick={() => handleClick(index)} style={{ cursor: 'pointer', width: 400, border: "1px solid black", padding: "10px" }}>
                        {item.title}
                    </div>
                    {
                        active === index &&
                        <div>
                            {item.content}
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default PracticeAcordion