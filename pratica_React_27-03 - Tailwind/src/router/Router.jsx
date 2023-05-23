import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Error404 from "../components/Error404";
import Home from "../components/Home";
import Contact from "../components/Contact";
import DetailsContact from "../components/DetailsContact";
import Contatodor from "../components/Contatodor";
import Formulario from "../components/Formulario";
import GitHub from "../api/GitHub";
import Theme from "../components/Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contact/:id",
        element: <DetailsContact />,
      },
      {
        path: "/contador",
        element: <Contatodor />,
      },
      {
        path: "formulario",
        element: <Formulario />,
      },
      {
        path: "/github",
        element: <GitHub />,
      },
      {
        path: "/theme",
        element: <Theme />,
      },
    ],
  },
]);

export default router;
