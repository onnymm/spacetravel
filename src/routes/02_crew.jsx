import { useState } from "react";
import DATA from "../data";
import Cover from "../ui_components/cover";
import DescriptionCrew from "../ui_components/description_crew";
import NavigationDot from "../ui_components/navigation_dot";

const Crew = () => {
    const data = DATA.crew;
    const [useCrewMember, setCrewMember] = useState(data[0]);

    return(
        <main id="main" className="crew grid-container grid-container--crew flow">
            <div className="numbered-title"><span>02</span>Meet you crew</div>
            <DescriptionCrew name={useCrewMember.name} role={useCrewMember.role} bio={useCrewMember.bio}/>
            <NavigationDot useItem={useCrewMember} setItem={setCrewMember} data={data}/>
            <Cover name={useCrewMember.name} type={'png'}/>
        </main>
    )
}

export default Crew;