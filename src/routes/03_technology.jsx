import { useState } from "react";
import DATA from "../data";
import Cover from "../ui_components/cover";
import DescriptionTechnology from "../ui_components/description_technology";
import NavigationNumber from "../ui_components/navigation_number";
const Technology = () => {
    const data = DATA.technology;
    const [useTechnology, setTechnology] = useState(data[0]);

    return (
        <main id="main" className="technology grid-container grid-container--technology flow">
            <h1 className="numbered-title"><span aria-hidden='true'>03</span>Technology</h1>
            <div className="landscape">
                <Cover name={`${useTechnology.name}-landscape`} type={'jpg'} />
            </div>
            <div className="portrait">
                <Cover name={`${useTechnology.name}-portrait`} type={'jpg'} />
            </div>
            <NavigationNumber useItem={useTechnology} setItem={setTechnology} data={data}/>
            <DescriptionTechnology name={useTechnology.name} description={useTechnology.description}/>
        </main>
    )
}

export default Technology;