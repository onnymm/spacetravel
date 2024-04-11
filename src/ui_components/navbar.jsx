import { useState } from "react";


const Navbar = ({setPage}) => {

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
                        className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">00</span>Home</li>
                    <li 
                        id={1}
                        onClick={changePage}
                        className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">01</span>Destination</li>
                    <li 
                        id={2}
                        onClick={changePage}
                        className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">02</span>Crew</li>
                    <li  
                        id={3}
                        onClick={changePage}
                        className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">03</span>Technology</li>
            </ul>
        </nav>
    </>
)}

export default Navbar;