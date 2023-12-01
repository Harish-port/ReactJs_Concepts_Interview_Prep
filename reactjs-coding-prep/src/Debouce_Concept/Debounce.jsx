import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Debounce() {
  const [pinCode, setPinCode] = useState("");
  const [outputData, setOutputData] = useState();
  
  useEffect(() => {
    const getData = setTimeout(() => {
      setOutputData();
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((response) => {
          setOutputData(response.data[0]?.PostOffice[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 2000);
    return () => clearInterval(getData);
  }, [pinCode]);

  return (
    <div>
      <h1>Debounce Concept</h1>
      <input
        placeholder="Search input..."
        type="number"
        onChange={(e) => setPinCode(e.target.value)}
      />
      <br />
      {outputData?.Pincode}
      <br />
      {outputData?.Name}
      <br />
      {outputData?.State}
    </div>
  );
}
