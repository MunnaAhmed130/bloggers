import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/history",
                element: <ReadingHistory />,
            },
        ],
    },
]);

export default routes;
