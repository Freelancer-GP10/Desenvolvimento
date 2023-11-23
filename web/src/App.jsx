import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from './pages/index';
import { CadastroMicro } from './pages/cadastro';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  }
]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <CadastroMicro />
    </>
  )
}

export default App
