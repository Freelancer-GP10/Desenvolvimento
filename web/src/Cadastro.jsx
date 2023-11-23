import "./css/global.css";
import "./css/img.css";
import "./css/cadastro.css";
import imgLogo from "./img/logo.png"
import { cadastroFree, cadastroFree2, cadastroMicro, cadastroMicro2 } from "./js/cadastro";


export function CadastroMicro(){
    return(
        <>
            <div className="backGradient"></div>
            
            <section>
                <div className="container">

                    <a href="./"><img className="imgLogo" src={imgLogo} alt="ConecTI" /></a>

                    <div className="form">
                        <h2 className="h2-title">Faça <br></br>seu registro!</h2>

                        <p className="p-question">Já possui Cadastro? <a className="a-question" href="./">Login</a></p>

                        <form action="">
                            <input type="text" id="emailMicro" placeholder="E-mail" />
                            <input type="password" id="senhaMicro" placeholder="Crie uma senha" />
                            <input type="password" id="senhaMicro2" placeholder="Confirmar Senha" />
                        </form>

                        <button className="button" id="button" onClick={cadastroMicro}>Prosseguir</button>
                    </div>
                </div>
                <div className="cont"></div>
            </section>
        </>
    )
}

export function CadastroMicro2(){
    return(
        <>
        <div className="backGradient"></div>
            
            <section>
                {/* Imagem */}
                <div className="cont2"></div>

                {/* Formulario */}

                <div className="container2">

                    <a href="./"><img className="imgLogo2" src={imgLogo} alt="ConecTI" /></a>

                    <div className="form2Micro">

                    <a href="./" className="a2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="#204A7B" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    </a>

                        <form className="formMicro2" action="">
                            <input className="inputInfoMicro" type="number" id="nomeEmpresa" placeholder="Nome da Empresa" />
                            <input className="inputInfoMicro" type="number" id="cnpj" placeholder="CNPJ" />
                            <input className="inputInfoMicro" type="text" id="ramo" placeholder="Ramo" />
                            <input className="inputInfoMicro" type="number" id="telefone" placeholder="Telefone" />
                        </form>

                        <button className="button" id="button" onClick={cadastroMicro2}>Cadastrar</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export function CadastroFree(){
    return (
        <>
        <div className="backGradient"></div>
        
        <section>
            <div className="container">
                <a href="./"><img className="imgLogo" src={imgLogo} alt="ConecTI" /></a>
    
                   <div className="form">
                       <h2 className="h2-title">Faça <br></br>seu registro!</h2>
    
                       <p className="p-question">Já possui Cadastro? <a className="a-question" href="./Login">Login</a></p>
    
                       <form className="formFre2" action="">
                           <input type="text" id="emailFree" placeholder="E-mail" />
                           <input type="password" id="senhaFree" placeholder="Crie uma senha" />
                           <input type="password" id="senhaFree2" placeholder="Confirmar Senha" />
                       </form>
    
                       <button className="button" id="button" onClick={cadastroFree}>Prosseguir</button>
                   </div>
            </div>
    
               <div className="cont"></div>
        </section>
        </>
    )
}

export function CadastroFree2(){
    return(
        <>
        <div className="backGradient2"></div>
            
            <section>              
                {/* Formulario */}

                <div className="container2">

                    <a href="./main"><img className="imgLogo" src={imgLogo} alt="ConecTI" /></a>

                    <div className="form2">

                    <a href="./Cadastro-Freelancer" className="a2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="#204A7B" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    </a>

                        <form className="formFre2" action="">
                        <input className="inputNome" type="text" id="nome" placeholder="Nome" />
                           <input className="inputNome" type="text" id="sobrenome" placeholder="Sobrenome" />
                            <input className="inputInfo2" type="text" id="cpf" placeholder="CPF" />
                            <input className="inputInfo2" type="text" id="telefoneFree" placeholder="Telefone" />
                            <input type="stext" id="areaAtuacao" placeholder="Area de Atuação" />
                            <input type="text" id="linguagemDominio" placeholder="Linguagens de Dominio" />
                            <input type="text" id="formacao" placeholder="Formação" />
                        </form>

                        <button className="button" id="button" onClick={cadastroFree2}>Cadastrar</button>
                    </div>
                </div>

                {/* imagem */}

                <div className="cont3"></div>
            </section>
        </>
    )
}
