import React from 'react';
// import "/home/isaiasresende/Documentos/Projetos/Producao/web/src/css/Tela_escolha.css";
import logoimg from"./img/logo.png";
import TelaEscolha from "./css/Tela_Escolha.css";




function Tela_Escolha() {

  return (
    <>


      <div className="body">
      <a href="./">
                <img src={logoimg} alt="" className="img-logo" />
            </a> 
        <div className='texto_cadastro'>

          <span>Como você deseja <br />se registrar?</span>

          <div className='caixa_botao'>
            <button className="button">Freelancer</button>
            <button className="button">Microempreendedor</button>
          </div>

        </div>
          <div className="quadrado4"></div>
          <div className="quadrado3"></div>
          <div className="quadrado1"></div>
          <div className="quadrado2"></div>
          <div className='circulo_azul2'></div>



      </div>

    </>
  )
}

export default Tela_Escolha