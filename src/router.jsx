import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/00_home.jsx";
import Destination from "./routes/01_destination.jsx";
import Crew from "./routes/02_crew.jsx";

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
                }
            ]
        }
    ]
)

export default router;