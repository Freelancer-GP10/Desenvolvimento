import { MenuLateral } from "../componentes/menu-lateral"
import { PerfilComponente } from "../componentes/perfilComp"
import "../css/service.css";
import "../css/global.css";
import { Pesquisa } from "../componentes/pesquisa";

export function Pay(){
    return(
        <>
        <MenuLateral />

        <h2 className="h2-title2">Pay</h2>

        <PerfilComponente />
        <Pesquisa />
        </>
    )
}