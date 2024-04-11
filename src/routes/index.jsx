import { useState } from 'react';
import Logo from "../assets/logo.svg";
import Home from "../routes/00_home.jsx";
import Destination from "../routes/01_destination.jsx";
import Crew from "../routes/02_crew.jsx";
import Technology from "../routes/03_technology.jsx";
import Navbar from "../ui_components/navbar";

const Index = () => {
    const [useIndex, setIndex] = useState(0);
    const pages = [
        Home,
        Destination,
        Crew,
        Technology
    ]

    const Page = ({index}) => {
        console.log(index)
        const [UsePage] = useState(pages[index])

        return (
            UsePage
        )
    }

    return (
    <div className="page">
        <a className="skip-to-content" href="#main">Skip to content</a>
        <header className="primary-header flex">
            <div className="logo">
                    <img src={Logo} alt="" />
            </div>
            <Navbar setPage={setIndex}/>
        </header>
        <Page index={useIndex}/>
    </div>
)}

export default Index;