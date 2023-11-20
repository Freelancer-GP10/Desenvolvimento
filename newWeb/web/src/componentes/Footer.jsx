// // import "./css/global.css";

// import "./css/img.css";

// // import logobranca from "./img/logo-branca.png";

// // import logogrande from "./img/logo-grande.png";

// // import imgservicos from "./img/img-servicos.png";




// // import iconfone from "./img/icon-foninho.png"

// // import iconbalao from "./img/icon-balaozinho.png"




// // import iconinsta from "./img/icon-insta.png";

// // import icontwitter from "./img/icon-twitter.png";

// // import iconface from "./img/icon-face.png";




// // import iconsim from "./img/icon-sim.png";

// // import iconnao from "./img/icon-nao.png";







// export function Footer() {

//   return (

//          <footer>

//                 <div className="logofooter">




//                     <div className="coluna-logo">

//                         <a href="./">

//                             <img src={"./"} alt="" />

//                         </a>

//                         <h2>A química da conexão perfeita!</h2>

//                     </div>




//                 </div>




//                 <div className="colunas">




//                     <div className="coluna-um">

//                         <h2><b>Comece agora mesmo!</b></h2>

//                         <a href="#">Cadastre-se</a>

//                         <a href="#">Freelancer</a>

//                         <a href="#">Microempreendedor</a>

//                     </div>




//                     <div className="coluna-dois">

//                         <h2><b>Atendimento 24h</b></h2>

//                         <a href="#">

//                             <img src={"./"} alt="" /> Central de ajuda

//                         </a>

//                         <a href="#">

//                             <img src={"./"} alt="" /> Contato

//                         </a>

//                     </div>




//                     <div className="coluna-tres">

//                         <h2><b>Nossas redes</b></h2>

//                         <a href="#"> <img src={"./"} alt="" className="icone-instagram" /></a>

//                         <a href="#"> <img src={"./"} alt="" className="icone-twitter" /> </a>

//                         <a href="#"> <img src={"./"} alt="" className="icone-facebook" /></a>

//                     </div>

//                 </div>

//             </footer>

//   )

// }

import '../css/comp/footer.css'

export function Footer(){
    return(
        <>
            <div className="logofooter"></div>

            <div className="coluna-logo">
                        <a href="./">
                             <img src={"./"} alt="" />

                         </a>
                <h2>A química da conexão perfeita!</h2>
            </div>

            <div className="colunas">




                     <div className="coluna-um">

                         <h2><b>Comece agora mesmo!</b></h2>

                         <a href="#">Cadastre-se</a>

                         <a href="#">Freelancer</a>

                         <a href="#">Microempreendedor</a>

                     </div>




                     <div className="coluna-dois">

                         <h2><b>Atendimento 24h</b></h2>

                         <a href="#">

                             <img src={"./"} alt="" /> Central de ajuda

                         </a>

                         <a href="#">

                             <img src={"./"} alt="" /> Contato

                         </a>

                     </div>




                     <div className="coluna-tres">

                         <h2><b>Nossas redes</b></h2>

                         <a href="#"> <img src={"./"} alt="" className="icone-instagram" /></a>

                         <a href="#"> <img src={"./"} alt="" className="icone-twitter" /> </a>

                         <a href="#"> <img src={"./"} alt="" className="icone-facebook" /></a>

                     </div>

                 </div>
        </>
    )
}