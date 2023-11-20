import React from 'react'
import { MenuLateral } from '../componentes/menu-lateral'
import "/home/isaiasrlc/Documentos/Projetos/Desenvolvimento/newWeb/web/src/css/cadastroServico.css"

function CadastroServico() {
  return (

    <>
      <div className='corpo'>
        <MenuLateral />

        <div className='principal'>

          <div className='caixa_bread'>
            <ul class="breadcrumbs">
              <li><a href="/">Service</a></li>
              <li><a href="/">Adicionar Serviço</a></li>
            </ul>
          
          </div>

            <button className='aab'>Voltar</button>


          <div className='caixa_formulario'>
            <div className='linha_inicio'>
              <input type="text" placeholder='Nome do serviço' id="ipt_nome_servico" />
              <input type="date" placeholder='Data de início' name="" id="ipt_data_inicio" />
            </div>

            <div className='linha_simples'>
              <select name="" id=""  >
                <option value="">Tipo de serviço</option>
                <option value="">aaa</option>
                <option value="">vvv</option>
              </select>
            </div>


            <div className='linha_simples'>
              <textarea name="" id="" cols="30" rows="10" placeholder='Descrição'></textarea>
            </div>

            <div className='linha_final'>

              <input type="text" placeholder='Valor' />
              <input type="date" placeholder='Prazo' />
            </div>


          </div>

          <button className='botao_cadastrar'>Cadastrar serviço</button>
        
        </div>
<div className='quadradros'>

<div className="quadrado4"></div>
          <div className="quadrado3"></div>
          <div className="quadrado1"></div>
          <div className="quadrado2"></div>
</div>
        

      </div>
    </>

  )
}

export default CadastroServico