import { MenuLateral } from "../componentes/menu-lateral"
import { PerfilComponente } from "../componentes/perfilComp"
import "../css/service.css";
import "../css/global.css";
import { ServiceComponente2 } from "../componentes/serviceComponente";
import { Pesquisa } from "../componentes/pesquisa";

export function Workspace(){
    return(
        <>
        <MenuLateral />

        <h2 className="h2-title2">Services</h2>

        <PerfilComponente />
        <Pesquisa />

        <div className="conteudo">
            <ServiceComponente2 />
        </div>
        </>
    )
}