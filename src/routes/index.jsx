import { Outlet } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import Navbar from "../ui_components/navbar";

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
    </div>
)

export default Index;