import React, { useState } from "react";
import Accordion1 from "./Accordion1";

function ParentAccordion() {
    const items = [
        {
            title: "Accojts", content: "ad;slja;kj"
        },
        {
            title: "Accojts", content: "ad;slja;kj"
        },
        {
            title: "Accojts", content: "ad;slja;kj"
        },
        {
            title: "Accojts", content: "ad;slja;kj"
        }]
    return (
        <div>
            <Accordion1 items={items} />
        </div>
    );
}

export default ParentAccordion;