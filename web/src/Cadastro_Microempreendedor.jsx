import "./css/global.css";
import "./css/img.css";
import "./css/cadastro.css";
import imgLogo from "./img/logo.png"


    // function CadastroMicroempreendedor(){
    //     return(
    //         <>
    //         <section>
    //             <div className="container">

    //                 <a href="./"><img className="imgLogo" src={imgLogo} alt="ConecTI" /></a>

    //                 <div className="form">
    //                     <h2 className="h2-title">Faça <br></br>seu registro!</h2>

    //                     <p className="p-question">Já possui Cadastro? <a className="a-question" href="./">Login</a></p>

    //                     <form action="">
    //                         <input type="text" id="nomeEmpresa" placeholder="Nome da Empresa" />
    //                         <input type="text" id="email" placeholder="E-mail" />
    //                         <input type="password" id="senha" placeholder="Senha" />
    //                     </form>

    //                     <button className="button" id="button">Prosseguir</button>
    //                 </div>
    //             </div>
    //             <div className="cont"></div>
    //         </section>
    //         </>
    //     )
    // }

function CadastroMicroempreendedor2() {
    return (
        <>

            <div className="backGradient"></div>
            
            <section>
                {/* Imagem */}
                <div className="cont2"></div>

                {/* Formulario */}

                <div className="container2">

                    <a href="./"><img className="imgLogo2" src={imgLogo} alt="ConecTI" /></a>

                    <div className="form2">

                    <a href="./" className="a2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    </a>

                        <form action="">
                            <input type="number" id="nomeEmpresa" placeholder="CNPJ" />
                            <input type="text" id="email" placeholder="Ramo" />
                            <input type="number" id="senha" placeholder="Telefone" />
                        </form>

                        <button className="button" id="button">Cadastrar</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CadastroMicroempreendedor2;