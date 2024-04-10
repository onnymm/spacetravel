import { useState } from "react";
import DATA from "../data";
import Cover from "../ui_components/cover";
import CrewDescription from "../ui_components/crew_description";
import DotNavigation from "../ui_components/dot_navigation";

const Crew = () => {
    const data = DATA.crew;
    const [useCrewMember, setCrewMember] = useState(data[0]);

    return(
        <main id="main" className="crew grid-container grid-container--crew flow">
            <div className="numbered-title"><span>02</span>Meet you crew</div>
            <CrewDescription name={useCrewMember.name} role={useCrewMember.role} bio={useCrewMember.bio}/>
            <DotNavigation useItem={useCrewMember} setItem={setCrewMember} data={data}/>
            <Cover name={useCrewMember.name}/>
        </main>
    )
}

export default Crew;