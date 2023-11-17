import React from 'react'
import "/home/isaiasrlc/Documentos/Projetos/Desenvolvimento/newWeb/web/src/css/pagamento.css";
import "../css/pagamento.css"
import { MenuLateral } from '../componentes/menu-lateral'

function Pagamento() {
  return (

    <>

      <div className='caixa'>
        <MenuLateral />


        <div className='telaRevisao'>
          <ul class="breadcrumbs">
            <li><a href="/">Service </a></li>
            <li><a href="/">Adicionar Serviço </a></li>
            <li><a href="/categorias/produtos/">Pagamento</a></li>
          </ul>


          <div className='caixa_servico'>

            <p id='titulo_revisao'>Revisão do Serviço</p>

            <input id='ipt_nome' type="text" placeholder='Nome do serviço' />
            <input type="text" id='ipt_tipo' placeholder='Tipo do serviço' />
            <textarea id='descricao' placeholder='Descrição' rows="10"></textarea>
            <input id='ipt_inicio' type="text" placeholder='Data de inicio' />
            <input id='ipt_prazo' type="text" placeholder='Prazo final' />
            <input id='ipt_valor' type="text" placeholder='Valor' />

          </div>
          <button className='realizar_pag'>Realizar Pagamento</button>
        </div>


        <div className='tela_pag'>


          <div className='sombraFormulario'>

            <div className='formulario'>

              <p>Preencha as informações de pagamento</p>

              <div className='linhaSimples'>
                <input placeholder='Numero do Cartão' type="text" />
              </div>

              <div className='linhaDupla'>
                <input placeholder='Data de Vencimento' className='ipt_data' type="text" /> <input placeholder='CVV' type="text" className='ipt_cvv' />
              </div>

              <div className='linhaSimples'>
                <input placeholder='Numero do Títular' type="text" />
              </div>
              <div className='linhaSimples'>
                <input type="text" placeholder='CPF / CPNJ do Titular' />
              </div>


              <button>Salvar</button>

            </div>
          </div>
          <button className='botao_voltar'>Voltar</button>
          <div className="quadrado4"></div>
          <div className="quadrado3"></div>
          <div className="quadrado1"></div>
          <div className="quadrado2"></div>




        </div>



      </div>

    </>









  )
}

export default Pagamento