import { useState } from "react";
import DATA from "../data";
import DestinationCover from "../ui_components/destination_cover";
import DestinationDescription from "../ui_components/destination_description";
import DestinationItems from "../ui_components/destination_items";

const Destination = () => {
    const data = DATA.destinations;
    const [useDestination, setDestination] = useState(data[0]);
    // console.log(useDestination)

    return (
    <main id="main" className="destination grid-container grid-container--destination flow">
        <h1 className="numbered-title"><span aria-hidden="true">01</span>Pick your destination</h1>
        <DestinationCover image={useDestination.name}/>
        <DestinationItems useItem={useDestination} setItem={setDestination} data={data}/>
        <DestinationDescription useItem={useDestination}/>
    </main>
)}

export default Destination;