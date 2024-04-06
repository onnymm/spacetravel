const Navbar = () => (
    <>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only">Menu</span></button>
        <nav>
            <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                <li className="active"><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span>00</span>Home</a></li>
                <li><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span>01</span>Destination</a></li>
                <li><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span>02</span>Crew</a></li>
                <li><a className="uppercase text-white ff-sans-cond letter-spacing-2" href="#"><span>03</span>Technology</a></li>
            </ul>
        </nav>
    </>
)

export default Navbar;