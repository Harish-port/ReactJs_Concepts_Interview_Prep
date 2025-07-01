import { useState } from "react"

function PracticeAcordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleAccord = (selectedAccord) => {
        
    }
    return (
        <div>
            {items.map((item, index) => (
                <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "10px" }} onClick={() => handleAccord(index)}>
                    {item.title}
                    <div style={{ borderBottom: '0px solid transperent', border: "1px solid black" }}>
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PracticeAcordion