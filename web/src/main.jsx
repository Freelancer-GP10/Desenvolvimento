import React from 'react';
import ReactDOM from 'react-dom';

import{ createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Index from "./Index";
import Login from "./Login";
import { CadastroFree, CadastroFree2, CadastroMicro, CadastroMicro2 } from './Cadastro';
import Test from './teste';

const router = createBrowserRouter([
    {
        path: "/teste",
        element: <Test />,
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Cadastro-Previo-Freelancer",
        element: <CadastroFree />
    },
    {
        path: "/Cadastro-Freelancer",
        element: <CadastroFree2 />
    },
    {
        path: "/Cadastro-Previo-Microempreendedor",
        element: <CadastroMicro />
    },
    {
        path: "/Cadastro-Microempreendedor",
        element: <CadastroMicro2 />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>  
         <RouterProvider router={router}/>
    </React.StrictMode>
);