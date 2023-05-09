import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Error from "../components/Error";
import DetailsContact from "../components/DetailsContact";
import Contador from "../components/Contador";
import Formulario from "../components/Formulario";
import GitHub from "../api/GitHub";
import Theme from "../components/Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        element: <Contador />,
      },
      {
        path: "/formulario",
        element: <Formulario />,
      },
      {
        path: "github",
        element: <GitHub />,
      },{
        path:'theme',
        element:<Theme/>
      }
    ],
  },
]);

export default router;
