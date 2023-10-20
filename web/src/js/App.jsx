
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { CadastroFree } from "../Cadastro_Freelancer";
// import { CadastroMicroempreendedor } from "../Cadastro_Microempreendedor";
// import CadastroMicro from "../Cadastro_Microempreendedor";
// import { CadastroMicro2 } from "../Cadastro";

// import CadastroMicroempreendedor2 from "../Cadastro_Microempreendedor";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "../Login";

// import CadastroMicroempreendedor2 from "../Cadastro_Microempreendedor";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
 //import Tela_Escolha from "../Tela_Escolha";
import Contato from "../Contato";
import Footer from "../Footer";

function App (){
    return(
        <>
            {/* <CadastroFree/> */}

            {/* <CadastroMicro2 /> */}

            {/* <Login/> */}

            <Contato/>

            {/* <Index/> */}

            {/*<BrowserRouter>
                <Routes>
                    <Route path="/Cadastro-Freelancer" element={<CadastroFree />}></Route>
                   <Route path="/Cadastro/Microempreendedor" element={<CadastroMicroempreendedor />}/> 
                </Routes>
            </BrowserRouter>*/}

        </>
    );
}

export default App;
