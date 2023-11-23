import{ createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Login from "../Login";
// import teste from '../teste';
// import { CadastroFree, CadastroFree2, CadastroMicro, CadastroMicro2 } from '../Cadastro';
import Teste from '../teste';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Teste />
    }
    // {
    //     path: "Login",
    //     element: <Login />
    // },
    // {
    //     path: "Cadastro-Previo-Freelancer",
    //     element: <CadastroFree />
    // },
    // {
    //     path: "Cadastro-Freelancer",
    //     element: <CadastroFree2 />
    // },
    // {
    //     path: "Cadastro-Previo-Microempreendedor",
    //     element: <CadastroMicro />
    // },
    // {
    //     path: "Cadastro-Microempreendedor",
    //     element: <CadastroMicro2 />
    // }
])

function App (){
    return(
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
