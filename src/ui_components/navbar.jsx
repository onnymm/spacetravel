import { useState } from "react";


const Navbar = ({setPage, useIndex}) => {
    console.log("index navbar", useIndex)

    const [useNavbarShow, setNavbarShow] = useState(false);

    const activate = () => {
        setNavbarShow(!useNavbarShow)
    }

    const changePage = (e) => {
        setPage(e.target.id)
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
                    <li 
                        id={0}
                        onClick={changePage}
                        className={`${(useIndex === '0') ? "active" : ""} uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true" id={0}>00</span>Home</li>
                    <li 
                        id={1}
                        onClick={changePage}
                        className={`${(useIndex === '1') ? "active" : ""} uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true" id={1}>01</span>Destination</li>
                    <li 
                        id={2}
                        onClick={changePage}
                        className={`${(useIndex === '2') ? "active" : ""} uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true" id={2}>02</span>Crew</li>
                    <li  
                        id={3}
                        onClick={changePage}
                        className={`${(useIndex === '3') ? "active" : ""} uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true" id={3}>03</span>Technology</li>
            </ul>
        </nav>
    </>
)}

export default Navbar;