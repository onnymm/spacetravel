import { Outlet } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import Navbar from "../ui_components/navbar";
// import Home from './00_home.jsx.jsx';
// import Destination from "./01_destination.jsx";

const Index = () => (
    <div className="page">
        <a className="skip-to-content" href="#main">Skip to content</a>
        <header className="primary-header flex">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
                
        <Navbar />
        </header>
        <Outlet />
        {/* <Home /> */}
        {/* <Destination /> */}
    </div>
)

export default Index;