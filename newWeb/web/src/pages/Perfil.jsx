import "../css/perfil.css";
import { MenuLateral } from "../componentes/menu-lateral";

export function Perfil() {
  return (
    <>
      <MenuLateral />

      <div className="main">
        <div className="section-esquerda">
          <h2>
            <a href="#">Voltar</a>
          </h2>

          <div className="card-perfil">
            <div className="card-portfolio"></div>
          </div>
        </div>

        <div className="section-direita">
          <div className="card-dados"></div>
        </div>
      </div>
    </>
  );
}
