import { useState } from 'react'
import '../css/perfil.css'
import { MenuLateral } from '../componentes/menu-lateral'
import editicon from '../assets/edit.png'


export default function PerfilMicro() {

    const patterns = {
        CPF_9: /^(\d{3})(\d{3})(\d{3})(\d{0,2})/,
        CPF_6: /^(\d{3})(\d{3})/,
        CPF_3: /^(\d{3})/,

        CEP: /^(\d{5})/,

        TEL_2: /^(\d{2})(\d{5})/,
        TEL_1: /^(\d{2})/,
    }

    // let nameOkay = false
    let cpfOkay = false

    //Mascara para o nome, não permite números
    function maskName(event) {
        let name = event.target.value.replace(/\d+/g, "")
        in_name.value = name
    }

    // Mascara pro CPF 
    function maskCPF(event) {
        //Recebe o que vem da input e limpa se não for número
        let cpf = event.target.value.replace(/\D+/g, "").trim()

        if (cpf.length > 11) {
            // document.getElementById('cpf-error').style.display = 'block'
            cpf = event.target.value = ''
        } else {
            // document.getElementById('cpf-error').style.display = 'none'

            if (/^(\d)\1{10}$/.test(cpf)) {
                cpfOkay = true
            } else {
                cpfOkay = false
            }

            if (cpf.length > 9) {
                cpf = cpf.replace(patterns.CPF_9, "$1.$2.$3-$4")
            } else if (cpf.length > 6) {
                cpf = cpf.replace(patterns.CPF_6, "$1.$2.")
            } else if (cpf.length > 3) {
                cpf = cpf.replace(patterns.CPF_3, "$1.")
            }
        }
        //Verifica se são todos números iguais (ex: 000.0000.000-00)
        in_cpf.value = cpf
    }

    const [applyMask, setApplyMask] = useState(true);

    function maskTel(event) {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                setApplyMask(!applyMask)
            }
        });
        if (applyMask) {
            let tel = event.target.value.replace(/\D+/g, "").trim()

            if (tel.length > 11) {
                // document.getElementById('tel-error').style.display = 'block'
            } else {
                // document.getElementById('tel-error').style.display = 'none'

                if (tel.length > 6) {
                    tel = tel.replace(patterns.TEL_2, "($1)$2-")
                } else if (tel.length > 1) {
                    tel = tel.replace(patterns.TEL_1, "($1)")
                }
            }

            in_phone.value = tel;
        }
    }

    return (
        <>

            <MenuLateral />

            <section className="main-perfil">
                <a href="" className='main-perfil__voltar'>{'< Voltar'}</a>

                <div className="main-perfil__esquerda">
                    <div className="perfil-esquerda__infos">
                        <div className="info email">
                            <p>Microempreendedor</p>
                            <span>microempreendedor@exemplo.com</span>
                        </div>
                        <div className="info photo">
                            <div src="" alt="" className="photo" />
                        </div>
                        <div className="info password">
                            <p>Senha</p>
                            <span>*************</span>
                        </div>
                        <div className="info button">
                            <button> <img src={editicon} alt="icone de edição" /> Editar</button>
                        </div>
                    </div>
                    <div className="perfil-esquerda__dialog">
                        <div className='dialog__texts'>
                            <p>Olá empresário!</p>
                            <p>Seus pagamentos são nossa prioridade quando o
                                assunto é segurança!</p>

                            <p>Você pode tanto atualizar as formas de pagamento
                                que você utiliza quanto baixar o relatório de todos os
                                seus pagamentos! </p>
                        </div>
                        <div className="dialog__buttons">
                            <button>Atualizar</button>
                            <button>Baixar</button>
                        </div>
                    </div>
                </div>


                <div className="main-perfil__direita">
                    <div className="direita">
                        <form action="" className="direita-form">
                            <fieldset>Dados privados da empresa</fieldset>
                            <div className="row">
                                <input type="text" placeholder='Nome empresa' id='in_name' onKeyUp={maskName} />
                                <input type="text" placeholder='CNPJ' id='in_cpnj' />
                            </div>
                            <div className="row">
                                <input type="text" placeholder='Telefone' id='in_phone' onChange={maskTel} maxLength={14} />
                            </div>
                            <input type="email" placeholder='E-mail' />
                            <input type="text" placeholder='Ramo' />

                            <div className="forms-buttons">
                                <button>Cancelar</button>
                                <button type='submit'>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='quad1 quad' />
                <div className='quad2 quad' />
                <div className='quad3 quad' />
                <div className='quad4 quad' />
            </section>
        </>
    )

}