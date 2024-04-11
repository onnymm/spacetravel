import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [useNavbarShow, setNavbarShow] = useState(false);

    const activate = () => {
        setNavbarShow(!useNavbarShow)
    }

    const close = () => {
        setNavbarShow(false)
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
                <NavLink to={"/home"} onClick={close}>
                    <li className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">00</span>Home</li>
                </NavLink>
                <NavLink to={"/destination"} onClick={close}>
                    <li className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">01</span>Destination</li>
                </NavLink>
                <NavLink to={"/crew"} onClick={close}>
                    <li className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">02</span>Crew</li>
                </NavLink>
                <NavLink to={"/technology"} onClick={close}>
                    <li className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">03</span>Technology</li>
                </NavLink>
            </ul>
        </nav>
    </>
)}

export default Navbar;