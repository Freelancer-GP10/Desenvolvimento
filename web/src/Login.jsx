import React from "react";
import "./css/Login.css";
import "./css/global.css";
import loginimg from "./img/login-img.png";
import logoimg from"./img/logo.png";

function Login(){
    return(
        <>
        <div className="container">
            <div className="container-direita">
          
        <img src={loginimg} alt="" className="img-login"/>
        
        <form>
          <header className="header">

            <a href="./">
                <img src={logoimg} alt="" className="img-logo" />
            </a> 
            
          <h1>Faça seu <p> Login! </p></h1>
            <h2>Não possui cadastro? <a href="./">Cadastre-se</a></h2> 

          </header>

          {/* Input email */}
          <div className="inputContainer">
            <label htmlFor="sobrenome"></label>
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>

          {/* Input senha */}
          <div className="inputContainer">
            <label htmlFor="senha"></label>
            <input type="password" name="senha" id="senha" placeholder="Senha" />
          </div>

          <h2>Deseja manter logado? <input type="checkbox" id="myCheckbox" className="checkbox"/></h2>
          <button className="button">Login</button>

        </form>
      </div>
    </div>
        </>
    )
}

export default Login;