import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CadastroFree, CadastroFree2, CadastroMicro, CadastroMicro2 } from './pages/Cadastro';
import TelaEscolha from './pages/Escolha.jsx';
import Index from './pages/Index';
import Login from './pages/Login';
import { MenuLateral } from './componentes/menu-lateral.jsx';
import { Service } from './pages/service.jsx';
import { Workspace } from './pages/Workspace.jsx';
import { Pay } from './pages/Pay.jsx';
<<<<<<< HEAD
import Contato from './pages/Contato.jsx';
=======
import PerfilFreela from './pages/PerfilFreela.jsx';
import PerfilMicro from './pages/PerfilMicro.jsx';

import Pagamento from './pages/Pagamento.jsx';
>>>>>>> 99ed2e7b84c6330e35b13159c62ef39ba8293dc4


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
<<<<<<< HEAD
    path: "/contato",
    element: <Contato />,
  },
  {
      path: "/cadastro-previo-freelancer",
      element: <CadastroFree />,
=======
    path: "/cadastro-previo-freelancer",
    element: <CadastroFree />,
>>>>>>> 99ed2e7b84c6330e35b13159c62ef39ba8293dc4
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
    path: "/perfil-freela",
    element: <PerfilFreela />
  },
  {
    path: "/perfil-micro",
    element: <PerfilMicro />
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
  },
  {
    path: "/pagamento",
    element: <Pagamento />
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
