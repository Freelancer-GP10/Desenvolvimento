import React from 'react'
import "./css/contato.css"
import logo_email from "./img/e-mail.png"
import logoimg from "./img/logo.png";

import Footer from './Footer';


function Contato() {
  return (

    <>


      <div className='top'>
        <div className='lado_esquerdo'>
          <a href="./">

            <img src={logoimg} alt="" className="img-logo" />
          </a>
          <div className='mesagem'>
            <span className='principal'>Entre em contato preenchendo todas as informações
              <br />ao lado</span>
            <span className='secundaria'>
              Se preferir, entre em contato através do nosso email
            </span>

            <span className='terciaria'>
              <a href="./">
                <img src={logo_email} alt="" />
              </a>

              <p>  conecti@gmail.com.br</p>

            </span>
          </div>
        </div>

        <div className='lado_direito'>


          <div className='caixa_form_sombra'>
            <div className='caixa_form' >
              <span>Preencha as informações
                abaixo:</span>
              <input type="text" className='ipt_nome' placeholder='Nome completo' />
              <input type="email" className='ipt_email' placeholder='E-mail' />
              <input type="tel" className='ipt_tel' placeholder='Telefone' />
              <textarea name="" id="" cols="30" rows="10" className='ipt_msg' placeholder='Mensagem'></textarea>
              <button className='button_enviar'>Enviar</button>
            </div>

          </div>
          <div className="quadrado3"></div>
          <div className="quadrado1"></div>
          <div className="quadrado2"></div>
          <div className="quadrado4"></div>
        </div>

      </div>

      <Footer/>

    </>



  )
}

export default Contato