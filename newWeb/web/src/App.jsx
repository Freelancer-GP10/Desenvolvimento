import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { CadastroFree, CadastroFree2, CadastroMicro, CadastroMicro2 } from './pages/Cadastro';
import TelaEscolha from './pages/Escolha.jsx';
import Index from './pages/Index';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
      path: "/cadastro-previo-freelancer",
      element: <CadastroFree />,
  },
  {
    path: "/cadastro-freelancer",
    element: <CadastroFree2 />,
  },
  {
    path: "/cadastro-previo-empresa",
    element: <CadastroMicro />,
},
{
  path: "/cadastro-empresa",
  element: <CadastroMicro2 />,
},
{
  path: "/cadastro",
  element: <TelaEscolha />,
},
{
  path: "/login",
  element: <Login />,
},
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
