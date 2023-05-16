import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Error from "../componentes/Error";
import Home from "../componentes/Home";
import Contact from "../componentes/Contact";
import DetailsContact from "../componentes/DetailsContact";
import Contador from "../componentes/Contador";
import Formulario from "../componentes/Formulario";
import GitHub from "../api/GitHub";
import Theme from "../componentes/Theme";

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
      },{
        path:'/contact/:id',
        element:<DetailsContact/>
      }, {
        path:'/contador',
        element:<Contador/>
      },{
        path:'/formulario',
        element:<Formulario/>
      },{
        path:'/github',
        element:<GitHub/>
      },{
        path:'/theme',
        element:<Theme/>
      }
    ],
  },
]);

export default router;
