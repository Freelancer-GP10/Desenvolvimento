import "../css/global.css";
import "./css/cards.css";

export function CardWorkspace(){
    return(
        <>
            <div className="card workplace">
                <h4 className="h4-22">Workplace</h4>
                <p className="p-14">O Workpplace e o nosso ambiente de <br />
                    trabalho integrado onde você pode <br />
                    visualizar, organizar, e saber o progresso <br />
                    de cada serviço seu.</p>
            </div>
        </>
    )
}

export function CardService(){
    return(
        <>
            <div className="card service">
                <h4 className="h4-22">Service</h4>
                <p className="p-14">Em nossa página de services, nossos <br />
                    clientes podem tanto cadastrar um <br />
                    serviço, como aceitar um serviço!</p>
            </div>
        </>
    )
}

export function CardPay(){
    return(
        <>
            <div className="card pay">
                <h4 className="h4-22">Pay</h4>
                <p className="p-14">Nossa página de pagamento, e o local <br />
                            onde garantimos a segurança aos <br />
                            nossos clientes na hora de pagar ou até <br />
                            mesmo receber por um serviço realizado!</p>
            </div>
        </>
    )
}