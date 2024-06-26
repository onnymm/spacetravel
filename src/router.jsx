import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DesignSystem from './design-system.jsx';
import Home from "./routes/00_home.jsx";
import Destination from "./routes/01_destination.jsx";
import Crew from "./routes/02_crew.jsx";
import Technology from "./routes/03_technology.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/destination",
                    element: <Destination />
                },
                {
                    path: "/crew",
                    element: <Crew />
                },
                {
                    path: "/technology",
                    element: <Technology />
                }
            ]
        },
        {
            path: "/design_system",
            element: <DesignSystem />
        }
    ]
)

export default router;