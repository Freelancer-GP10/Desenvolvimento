// import CadastroMicroempreendedor from "../Cadastro_Microempreendedor";
// import CadastroMicroempreendedor2 from "../Cadastro_Microempreendedor";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "../Login";
import Tela_Escolha from "../Tela_Escolha";

function App (){
    return(
        <>
            <Tela_Escolha/>

            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/Cadastro/Microempreendedor" element={<CadastroMicroempreendedor />}/>
                </Routes>
            </BrowserRouter> */}
        </>
    );
}

export default App;
