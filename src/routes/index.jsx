import Logo from "../assets/logo.svg";
import Navbar from "../ui_components/navbar";
import Destination from "./01_destination.jsx";

const Index = () => (
    <div className="home">
        <a className="skip-to-content" href="#main">Skip to content</a>
        <header className="primary-header flex">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            
            <Navbar />
        </header>
        <Destination />
    </div>
)

export default Index;