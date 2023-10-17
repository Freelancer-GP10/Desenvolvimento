// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CadastroFree } from "../Cadastro_Freelancer";
// import { CadastroMicroempreendedor } from "../Cadastro_Microempreendedor";






function App (){
    return(
        <>
            <CadastroFree/>

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
