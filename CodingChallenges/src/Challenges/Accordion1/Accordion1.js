import { useState } from "react";

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // collapse if clicking the same item
        } else {
            setActiveIndex(index); // open the new item
        }
    };

    if (!items || items.length === 0) {
        return <div>No items to display</div>; // handle empty items array
    }

    return (
        <div style={{ width: "400px", margin: "20px auto" }}>
            {items.map((item, index) => (
                <div key={index} style={{ border: "1px solid #ccc", marginBottom: "8px", borderRadius: "4px" }}>
                    <div
                        onClick={() => handleClick(index)}
                        style={{
                            padding: "10px",
                            background: activeIndex === index ? "#f0f0f0" : "#e0e0e0",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
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
    );
}

export default Accordion;
