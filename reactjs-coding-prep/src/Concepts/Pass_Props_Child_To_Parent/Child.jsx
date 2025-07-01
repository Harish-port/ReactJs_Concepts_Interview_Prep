import React from "react";

function Child({ setTest }) {
  const sendData = () => {
    setTest("Hello from Child!!!")
  }
  
  return (
    <div onClick={sendData} >gt</div>
  )
}

export default Child;