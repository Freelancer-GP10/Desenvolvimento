import "./css/global.css";
import "./css/img.css";
import "./css/Index.css";
import logobranca from "./img/logo-branca.png";
import logogrande from "./img/logo-grande.png";
import imgservicos from "./img/img-servicos.png";

function Index() {
    return (
        <>
            <div className="background-index"></div>

            <header>
                <div className="imgLogo">
                    <a href="./">
                        <img src={logobranca} alt="" />
                    </a>
                </div>

                <ul>
                    <a href="section-dois"><li>Sobre nós</li></a>
                    <a href="#"><li>Serviços</li></a>
                    <a href="#"><li>Nossos planos</li></a>
                    <a href="#"><li>Contato</li></a>
                </ul>
                <button className="btn-nav"> Entrar</button>

            </header>

            <section>
                <h1>ConecTI</h1>
                <h2>A química da conexão!</h2>


            </section>


            {/* SESSÃO DOIS */}
            <div className="backGradient"></div>

            <section className="section-dois">

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

                                A química da conexão perfeita! <br /></h3>

                        </div>
                    </div>

                </div>

            </section>


            {/* SESSÃO TRÊS */}

            <section className="section-tres">
                <div className="cards-imagem">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                        <div style={{ background: '#024C5E', borderRadius: '10px', padding: '20px', color: 'white', maxWidth: '300px', margin: '10px' }}>
                            <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Workplace</div>
                            <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                                O Workpplace e o nosso ambiente de trabalho integrado onde você pode visualizar, organizar e saber o progresso dos seus serviços                            </div>
                        </div>

                        <div style={{ background: '#024B5C', borderRadius: '10px', padding: '20px', color: 'white', maxWidth: '300px', margin: '10px' }}>
                            <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Service</div>
                            <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                                Em nossa página de Services, você cliente pode tanto cadastrar um serviço como aceitar um serviço
                            </div>
                        </div>

                        <div style={{ background: '#02495A', borderRadius: '10px', padding: '20px', color: 'white', maxWidth: '300px', margin: '10px' }}>
                            <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Pay</div>
                            <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                                Nossa página de pagamento, Pay, é onde garantimos a segurança aos nossos clientes na hora de pagar ou receber por um serviço realizado
                            </div>
                        </div>
                    </div>

                    <div className="img-servicos">
                        <img src={imgservicos} alt="" />
                    </div>
                </div>
            </section>

            {/* SESSÃO QUATRO*/}
            <section className="section-quatro">
            
            <div style={{color: '#204A7B', fontSize: 50, fontFamily: 'Oxanium', fontWeight: '400', wordWrap: 'break-word'}}>Nossos planos</div>

            


            </section>

            <footer>

                
                
            </footer>









        </>
    )
}

export default Index;
