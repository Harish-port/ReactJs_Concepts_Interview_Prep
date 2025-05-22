import { useState } from "react";
const PracticeAcoordrion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (selectedIndex) => {
        if (selectedIndex === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(selectedIndex)
        }
    }
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className="wrapper" style={{ border: "1px solid gray", width: "400px", margin: "20px auto" }}>
                    <div style={{ backgroundColor: "gray", color: "white", padding: "10px", cursor: 'pointer' }} onClick={() => handleClick(index)} >
                        {item.title}
                    </div>
                    {activeIndex === index &&
                        (<div style={{ backgroundColor: "lightgray", color: "black", padding: "10px" }}>
                            {item.content}
                        </div>)
                    }
                </div>
            ))}
        </>
    )
}

export default PracticeAcoordrion;