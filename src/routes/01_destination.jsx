import { useState } from "react";
import DATA from "../data";
import DestinationCover from "../ui_components/destination_cover";
import DestinationDescription from "../ui_components/destination_description";
import DestinationItems from "../ui_components/destination_items";

const Destination = () => {
    const [useItem, setItem] = useState(DATA.destinations[0].name);
    console.log(useItem)

    return (
    <main id="main" className="grid-container grid-container--destination">
        <DestinationItems setItem={setItem} data={DATA}/>
        <DestinationDescription useItem={useItem}/>
        <DestinationCover image={useItem}/>
    </main>
)}

export default Destination;