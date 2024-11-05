import About from "../pages/about/About";
import Home from "../pages/home/Home";

export const rootRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Home />,
  },
];
