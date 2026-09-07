// import { createBrowserRouter } from "react-router-dom";
// import PainelCadastrarAutomovel from "./pages/PainelCadastrarAutomovel";

// export const routes = createBrowserRouter([
//     {
//         path: "/teste",
//         element: <PainelCadastrarAutomovel/>,
//         errorElement: <div>Error</div>,
//     }
// ])

import { createBrowserRouter } from "react-router-dom";

import PainelAutomovel from "./pages/PainelAutomovel";
import PainelCadastrarAutomovel from "./pages/PainelCadastrarAutomovel";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <PainelAutomovel />,
        errorElement: <div>Erro!</div>,
    },
    {
        path: "/cadastrar-automovel",
        element: <PainelCadastrarAutomovel />,
    }
]);