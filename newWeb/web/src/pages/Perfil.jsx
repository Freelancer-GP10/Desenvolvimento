import "../css/perfil.css";
import { MenuLateral } from "../componentes/menu-lateral";
import iconperfil from "../assets/icon-user.svg";
import iconedit from "../assets/edit.png";

export function Perfil() {
  return (
    <>

      <MenuLateral />
      <div className="main">

        <span className="texto-voltar">
          <a href="#">&lt; Voltar</a>
        </span>

        {/* LADO ESQUERDO */}
        {/* CARD AZUL DO PERFIL */}
        <div className="card-perfil">

          <div className="perfil-cima">

            <h2 className="class-nome">Exemplo</h2>

            <h3 className="class-email"> exemplo@exemplo.com</h3>

          </div>

          <img class="icon-perfil" src={iconperfil} alt="Usuário" />


          <div className="perfil-embaixo">

            <div className="div-embaixo-left">

              <h2> Senha </h2>
              <h3> ****************** </h3>

              <button className="button-editar" id="btn-editar" onClick> Editar</button>
              {/* <img class="icon-perfil" src={iconedit} alt="Usuário" /> */}
            </div>


          </div>

        </div>


        {/* GUARDA PORTFÓLIO */}
        <div className="caixa-portfolio">
          <div className="perfilfree-frame145">
            <span className="perfilfree-text34">
              <span>Olá Freelancer, Seu Portifólio?</span>
            </span>
            <span className="perfilfree-text36">
              <span>
                <span>
                  Guardamos seu portifólio para que possamos fazer
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>analises e indicar onde deve estar melhorando!</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Você pode realizar a atualização dele ou até mesmo</span>
                <br></br>
                <span>
                  baixar o seu portifólio que temos guardado!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </div>

          <div className="div-btns">

            <div className="btn-att-salvar">
              <button className="btns" id="btn-att" onClick>Atualizar</button>
            </div>

            <div className="btn-att-salvar">
              <button className="btns" id="btn-baixar" onClick>Baixar</button>

            </div>
          </div>
        </div>

        {/* LADO DIREITO */}
        {/* DADOS PESSOAIS */}
        <div className="div-dados">
          <span className="form">
            <span>Dados Pessoais</span>
          </span>

          <div className="inputs">
            <input type="text" id="nome" placeholder="Nome" />
            <input type="text" id="sobrenome" placeholder="Sobrenome" />
            <input type="text" id="cpf" placeholder="CPF" />
            <input type="text" id="telefone" placeholder="Telefone" />
            <input type="email" id="email" placeholder="E-mail" />
            <input type="text" id="areaAtuacao" placeholder="Área de Atuação" />
            <input type="text" id="linguagemDominio" placeholder="Linguagem de Domínio" />
            <input type="text" id="formacao" placeholder="Formação" />



              <button className="perfilfree-text18" id="btn-cancelar" onClick>Cancelar</button>
      
              <button className="perfilfree-text18" id="btn-salvar" onClick>Salvar</button>
           

          </div>
        </div>
      </div>
    </>
  )
}
