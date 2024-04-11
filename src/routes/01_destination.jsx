import { useState } from "react";
import DATA from "../data";
import Cover from "../ui_components/cover";
import DescriptionDestination from "../ui_components/description_destination";
import NavigationUnderline from "../ui_components/navigation_underline";

const Destination = () => {
    const data = DATA.destinations;
    const [useDestination, setDestination] = useState(data[0]);

    return (
    <main id="main" className="destination grid-container grid-container--destination flow">
        <h1 className="numbered-title"><span aria-hidden="true">01</span>Pick your destination</h1>
        <Cover name={useDestination.name} type={'png'}/>
        <NavigationUnderline useItem={useDestination} setItem={setDestination} data={data}/>
        <DescriptionDestination useItem={useDestination}/>
    </main>
)}

export default Destination;