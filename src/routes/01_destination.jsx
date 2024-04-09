import { useState } from "react";
import DATA from "../data";
import DestinationCover from "../ui_components/destination_cover";
import DestinationDescription from "../ui_components/destination_description";
import DestinationItems from "../ui_components/destination_items";

const Destination = () => {
    const [useItem, setItem] = useState(DATA.destinations[0].name);
    console.log(useItem)

    return (
    <main id="main" className="grid-container-xxxx grid-container--destination">
        <h1 className="numbered-title"><span aria-hidden="true">01</span>Pick your destination</h1>
        <DestinationCover image={useItem}/>
        <DestinationItems setItem={setItem} data={DATA}/>
        <DestinationDescription useItem={useItem}/>
    </main>
)}

export default Destination;