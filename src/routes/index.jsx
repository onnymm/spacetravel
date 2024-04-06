import Logo from "../assets/logo.svg";
import LargeButton from "../ui_components/large-button";
// import Navbar from "../ui_components/navbar";

const Index = () => (
    <main className="home">
        <header className="primary-header flex">
            <div>
                <img src={Logo} alt="" />
            </div>
            
            {/* <Navbar /> */}
        </header>
        <div className="grid-container">
            <div>
                <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
                <span className="d-block fs-900 ff-serif text-white">Space</span></h1>
                <p>{"Let's face it, if you want to go to space, you might as well genuinely go to outer space and now hover kind of on the edge of it. Well, sit back, and relax because we'll give you a truly out of this world experience!"}</p>
            </div>
            <div>
                <LargeButton />
            </div>
        </div>
    </main>
)

export default Index;