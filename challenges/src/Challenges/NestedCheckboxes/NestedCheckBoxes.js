import { useState } from "react";
import { checkboxesData } from "./checkBoxesdata";

const CheckBoxes = ({ data, checked, setChecked }) => {
    const handleChange = (isChecked, node) => {

        setChecked(prev => {
            const newState = { ...prev, [node.id]: isChecked };
            const updateChildren = (node) => {
                node.children?.forEach((child) => {
                    newState[child.id] = isChecked;
                    child.children && updateChildren(child)
                })
            }
            updateChildren(node);
            const verifyChecked = (node) => {
                if (!node.children) return newState[node.id] || false;
                newState[node.id] = node.children.every((child) => verifyChecked(child))
                return newState[node.id];
            }
            checkboxesData.forEach((node) => verifyChecked(node))
            return newState;
        })
    }
    return (
        <>
            {data.map((node) => (
                <div key={node.id} style={{ paddingLeft: "10px" }}>
                    <input type="checkbox" style={{ cursor: 'pointer' }} checked={checked[node.id] || false} onChange={(e) => handleChange(e.target.checked, node)} />
                    <span>{node.name}</span><br />
                    {
                        node.children &&
                        <CheckBoxes data={node.children} checked={checked} setChecked={setChecked} />
                    }
                </div>
            ))}
        </>
    )
}
function NestedCheckBoxes() {
    // basically to track the checked node we have {1:true,2:true}  so creating a global state for it and will pass this state as props to children
    const [checked, setChecked] = useState({});
    const mockData = checkboxesData;
    return (
        <>
            <h1>NestedCheckBoxes</h1>
            <CheckBoxes data={mockData} checked={checked} setChecked={setChecked} />
        </>
    )
}

export default NestedCheckBoxes;