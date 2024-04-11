import { NavLink } from "react-router-dom";

const LargeButton = () => (
    <NavLink to="/destination">
        <div className="large-button uppercase text-dark bg-white ">Explore</div>
    </NavLink>
)

export default LargeButton;