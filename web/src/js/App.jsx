import{ createBrowserRouter,RouterProvider} from 'react-router-dom'
import Index from "../Index";
import Login from "../Login";
import { CadastroFree, CadastroFree2, CadastroMicro, CadastroMicro2 } from '../Cadastro';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "Login",
        element: <Login />
    },
    {
        path: "Cadastro-Previo-Freelancer",
        element: <CadastroFree />
    },
    {
        path: "Cadastro-Freelancer",
        element: <CadastroFree2 />
    },
    {
        path: "Cadastro-Previo-Microempreendedor",
        element: <CadastroMicro />
    },
    {
        path: "Cadastro-Microempreendedor",
        element: <CadastroMicro2 />
    }
])

function App (){
    return(
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
