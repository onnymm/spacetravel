import { useState } from "react";

const Navbar = () => {
    const [useNavbarShow, setNavbarShow] = useState(false);

    const activate = () => {
        setNavbarShow(!useNavbarShow)
    }


    return (
    <>
        <button
            className={`mobile-nav-toggle ${useNavbarShow ? "opened" : ""}`}
            aria-controls="primary-navigation"
            aria-expanded="false"
            onClick={activate}
        >
            <span className="sr-only">
                Menu
            </span>
        </button>

        <nav style={{margin: 0}}>
            <ul id="primary-navigation" className={`primary-navigation underline-indicators flex ${useNavbarShow ? "visible" : ""}`}>
                <li className="active"><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span aria-hidden="true">00</span>Home</a></li>
                <li><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span aria-hidden="true">01</span>Destination</a></li>
                <li><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span aria-hidden="true">02</span>Crew</a></li>
                <li><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span aria-hidden="true">03</span>Technology</a></li>
            </ul>
        </nav>
    </>
)}

export default Navbar;