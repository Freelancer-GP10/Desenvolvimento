import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { CadastroFree, CadastroFree2, CadastroMicro, CadastroMicro2 } from './pages/Cadastro';
import TelaEscolha from './pages/Escolha.jsx';
import Index from './pages/Index';
import Login from './pages/Login';
import { MenuLateral } from './componentes/menu-lateral.jsx';
import { Perfil } from './pages/Perfil.jsx';
import { Service } from './pages/service.jsx';
import { Workspace } from './pages/Workspace.jsx';
import { Pay } from './pages/Pay.jsx';


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
{
  path: "/menu",
  element: <MenuLateral />,
},
{
  path: "/perfil",
  element: <Perfil />
},
{
  path: "/service",
  element: <Service />
},
{
  path: "/workspace",
  element: <Workspace />
},
{
  path: "/pay",
  element: <Pay />
}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
