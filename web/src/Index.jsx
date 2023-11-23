import "./css/global.css";
import "./css/img.css";
import "./css/Index.css";
import logobranca from "./img/logo-branca.png";
import logogrande from "./img/logo-grande.png";
import imgservicos from "./img/img-servicos.png";

import iconfone from "./img/icon-foninho.png"
import iconbalao from "./img/icon-balaozinho.png"

import iconinsta from "./img/icon-insta.png";
import icontwitter from "./img/icon-twitter.png";
import iconface from "./img/icon-face.png";

import iconsim from "./img/icon-sim.png";
import iconnao from "./img/icon-nao.png";

function Index() {
    return (
        <>
            <div className="background-index">
                <section className="section-principal">
                    <header>
                        <div className="imgLogo">
                            <a href="./">
                                <img src={logobranca} alt="" />
                            </a>
                        </div>

                        <ul>
                            <a href="#section-dois"><li>Sobre nós</li></a>
                            <a href="#"><li>Serviços</li></a>
                            <a href="#"><li>Nossos planos</li></a>
                            <a href="#"><li>Contato</li></a>
                        </ul>
                        <button className="btn-nav"> Entrar</button>
                    </header>

                    <section className="section-slogan">
                        <h1>ConecTI</h1>
                        <h2>A química da conexão!</h2>
                    </section>

                    {/* SESSÃO DOIS */}
                    <div className="backGradient"></div>
                    <section className="section-dois">

                        {/* QUADRADOS */}
                            <div className="quadrado-grupo">
                                <div className="quadrado quadrado4-dois"></div>
                                <div className="quadrado quadrado3-dois"></div>
                                <div className="quadrado quadrado1-dois"></div>
                                <div className="quadrado quadrado2-dois"></div>
                            </div>

                        <div className="conteudo-central">
                            <div className="caixa-central">
                                <div className="logo-grande">
                                    <img src={logogrande} alt="" />
                                </div>
                                <div className="texto-direita">
                                    <h3>Nós, da ConecTI, buscamos unir profissionais<br />
                                        Freelancers à microempreendedores,<br />
                                        realizando o melhor e mais perfeito match!<br />
                                        Para assim, realizar tarefas com eficácia e<br />
                                        excelência, criando assim...<br />
                                        <br />
                                        A química da conexão perfeita! <br />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SESSÃO TRÊS */}
                    <div className="backGradient"></div>
                    <section className="section-tres">
                        <div className="cards-imagem">
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                                <div style={{ background: '#024C5E', borderRadius: '10px', padding: '20px', color: 'white', maxWidth: '300px', height: '140px', margin: '10px' }}>
                                    <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Workplace</div>
                                    <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                                        O Workplace é o nosso ambiente de trabalho integrado onde você pode visualizar, organizar e saber o progresso dos seus serviços
                                    </div>
                                </div>

                                <div style={{ background: '#024B5C', borderRadius: '10px', padding: '20px', color: 'white', maxWidth: '300px', height: '140px', margin: '10px' }}>
                                    <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Service</div>
                                    <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                                        Em nossa página de Services, você cliente pode tanto cadastrar um serviço como aceitar um serviço
                                    </div>
                                </div>

                                <div style={{ background: '#02495A', borderRadius: '10px', padding: '20px', color: 'white', maxWidth: '300px', height: '140px', margin: '10px' }}>
                                    <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Pay</div>
                                    <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                                        Nossa página de pagamento, Pay, é onde garantimos a segurança dos nossos clientes na hora de pagar ou receber por um serviço realizado
                                    </div>
                                </div>
                            </div>

                            <div className="img-servicos">
                                <img src={imgservicos} alt="" />
                            </div>
                        </div>
                        {/* QUADRADOS */}
                        <div className="quadrado-grupo3">
                            <div className="quadrado3 quadrado4-tres"></div>
                            <div className="quadrado3 quadrado3-tres"></div>
                            <div className="quadrado3 quadrado1-tres"></div>
                            <div className="quadrado3 quadrado2-tres"></div>
                        </div>
                    </section>

                    {/* SESSÃO QUATRO */}
                    <div className="backGradient"></div>
                    <section className="section-quatro">
                        <div className="section-pagina">
                            <div className="titulo-planos">
                                <h5>Nossos planos</h5>
                            </div>
                            {/* CARDS */}
                            <div className="grupo-cards">
                                <div className="card">
                                    <h2>Básico</h2>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /> <h4>Acesso ao Workspace, Services e Pay  </h4> <b />
                                    </div>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /><h4> 2 avaliações mensais de portifólio<br /></h4>
                                    </div>
                                    <div className="icone">
                                        <img src={iconnao} alt="" className="icone-nao" /> <h4>Avaliação mais rápida de portifólio<br /></h4>
                                    </div>
                                    <div className="icone">
                                        <img src={iconnao} alt="" className="icone-nao" /> <h4> Prioridade na indicação para empresas / microempreendedores </h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconnao} alt="" className="icone-nao" /> <h4> Acesso a um email com cursos da Alura </h4><br />
                                    </div>
                                </div>

                                <div className="card">
                                    <h2>Premium</h2>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /><h4>Acesso ao Workspace, Services e Pay </h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /> <h4>2 avaliações mensais de portfólio</h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /><h4>Avaliação mais rápida de portfólio</h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconnao} alt="" className="icone-nao" /> <h4>Prioridade na indicação para empresas / microempreendedores</h4> <br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconnao} alt="" className="icone-nao" /> <h4>Acesso a um email com cursos da Alura</h4> <br />
                                    </div>
                                </div>

                                <div className="card">
                                    <h2>Ultra</h2>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /> <h4>Acesso ao Workspace, Services e Pay </h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /> <h4>2 Avaliações mensais de portfólio</h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /> <h4>Avaliação mais rápida de portfólio</h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /> <h4>Prioridade na indicação para empresas / microempreendedores</h4><br />
                                    </div>
                                    <div className="icone">
                                        <img src={iconsim} alt="" className="icone-sim" /> <h4>Acesso a um email com cursos da Alura</h4><br />
                                    </div>
                                </div>
                                {/* QUADRADOS */}
                                <div className="quadrado-grupo4">
                                    <div className="quadrado4 quadrado4-quatro"></div>
                                    <div className="quadrado4 quadrado3-quatro"></div>
                                    <div className= "quadrado4 quadrado1-quatro"></div>
                                    <div className="quadrado4 quadrado2-quatro"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* FOOTER */}
                <footer>
                    <div className="logofooter">
                        <div className="coluna-logo">
                            <a href="./">
                                <img src={logobranca} alt="" />
                            </a>
                            <h2>A química da conexão perfeita!</h2>
                        </div>
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
                                <img src={iconfone} alt="" /> Central de ajuda
                            </a>
                            <a href="#">
                                <img src={iconbalao} alt="" /> Contato
                            </a>
                        </div>
                        <div className="coluna-tres">
                            <h2><b>Nossas redes</b></h2>
                            <a href="#"> <img src={iconinsta} alt="" className="icone-instagram" /></a>
                            <a href="#"> <img src={icontwitter} alt="" className="icone-twitter" /> </a>
                            <a href="#"> <img src={iconface} alt="" className="icone-facebook" /></a>
                            <i className="bi bi-headset"></i>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    )
}

export default Index;
