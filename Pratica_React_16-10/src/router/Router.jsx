import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cadastro from "../components/Cadastro";
import Listar from "../components/Listar";
import Visualizar from "../components/Visualizar";
import Editar from "../components/Editar";
import Delete from "../components/Delete";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/listar",
        element: <Listar />,
      },
      {
        path: "/visualizar/:id",
        element: <Visualizar />,
      },
      {
        path: "/editar/:id",
        element: <Editar />,
      },
      {
        path: "/delete/:id",
        element: <Delete />,
      },
    ],
  },
]);

export default Router;
