import Accordion1 from "./Accordion1";
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
            <PRoacticeAcoordrion items={items} />
        </div>
    );
}

export default ParentAccordion;