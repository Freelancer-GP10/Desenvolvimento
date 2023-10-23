import "./css/Login.css";
import "./css/global.css";
import "./css/img.css";
import fundologin from "./img/background-login.png";
import logopreta from "./img/logo.png";
import LoginJS from "./js/login";



export function Login(){
  return (
    <>
     <div className="backGradient"></div>
      <section>
        {/* Imagem */}
        <img className="fundologin" src={fundologin} alt="ConecTI" />

        {/* Formulario */}

        <div className="container2">

          <a href="./"><img className="logopreta" src={logopreta} alt="ConecTI" /></a>

          <div className="form2">

            <h1>Faça seu <br /> Login! <br /></h1>
            <h2>Não possui cadastro? <a href="./">Cadastre-se</a></h2>

            <form action="">
              <input type="text" id="nomeEmail" placeholder="Email" />
              <input type="password" id="senha" placeholder="Senha" />
            </form>

            <h2>Deseja manter logado? <input type="checkbox" id="myCheckbox" className="checkbox" /></h2>
            <button className="button" id="button" onClick={LoginJS}>Login</button>

            <h2>Deseja manter logado? <input type="checkbox" id="myCheckbox" className="checkbox-login" /></h2>
            <button className="button" id="button">Login</button>
          
          </div>
        </div>
      </section>
    </>
  )
}
