import Accordion from "./Accordion1";
import Accordion1 from "./Accordion1";
import React from 'react';
import PracticeAcordion from "./Practice";
import PRoacticeAcoordrion from "./Practice";

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
            <Accordion items={items} />
            <PracticeAcordion items={items} />
        </div>
    );
}

export default ParentAccordion;