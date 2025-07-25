import Accordion from "./Accordion1";
import Accordion1 from "./Accordion1";
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
            <PracticeAcordion items={items} />
        </div>
    );
}

export default ParentAccordion;