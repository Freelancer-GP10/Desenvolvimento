import logoimg from "../assets/logo.png";
import "../css/global.css";
import "../css/escolha.css";


function TelaEscolha() {

  return (
    <>

      <a href="./">

        <img src={logoimg} alt="" className="img-logo" />
      </a>

      <div className='texto_cadastro'>

        <span> Como você deseja <br />se registrar?</span>

        <div className='caixa_botao'>

          <div className="div-buttons">
            <button className="button1">Freelancer</button>
            <button className="button2">Microempreendedor</button>
          </div>

        </div>

      </div>
      <div className="quadrado4"></div>
      <div className="quadrado3"></div>
      <div className="quadrado1"></div>
      <div className="quadrado2"></div>
      <div className='circulo_azul2'></div>

    </>
  );
}

export default TelaEscolha;