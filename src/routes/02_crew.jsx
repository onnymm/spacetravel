import { useState } from "react";
import DATA from "../data";
import CrewCover from "../ui_components/crew_cover";
import DotNavigation from "../ui_components/dot_navigation";

const Crew = () => {
    const data = DATA.crew;
    const [useCrewMember, setCrewMember] = useState(data[0]);

    return(
        <div id="main">
            <div className="numbered-title"><span>02</span>Meet you crew</div>
            <DotNavigation useItem={useCrewMember} setItem={setCrewMember} data={data} />
            <CrewCover name={useCrewMember.name} />
        </div>
    )
}

export default Crew;