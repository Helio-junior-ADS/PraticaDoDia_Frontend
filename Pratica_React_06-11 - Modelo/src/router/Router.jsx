import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Lista from "../components/Lista";
import Visualizar from "../components/Visualizar";
import Atualizar from "../components/Atualizar";
import Apagar from "../components/Apagar";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/lista",
        element: <Lista />,
      },
      {
        path: "/visualizar/:id",
        element: <Visualizar />,
      },
      {
        path: "/atualizar/:id",
        element: <Atualizar />,
      },
      {
        path: "/apagar/:id",
        element: <Apagar />,
      },
    ],
  },
]);

export default Router;
