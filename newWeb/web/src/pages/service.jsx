import { MenuLateral } from "../componentes/menu-lateral"
import { PerfilComponente } from "../componentes/perfilComp"
import "../css/service.css";
import "../css/global.css";
import { ServiceComponente } from "../componentes/serviceComponente";

export function Service(){
    return(
        <>
        <MenuLateral />

        <h2 className="h2-title2">Services</h2>

        <PerfilComponente />

        <div className="conteudo">
            <ServiceComponente />
        </div>
        </>
    )
}