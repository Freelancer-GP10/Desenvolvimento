import React, { useState } from 'react';

import imgWorkspace from '../assets/img-workspace.png';
import imgService from '../assets/img-services.png';
import imgPay from '../assets/img-pay.png';


const Cards = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (cardName) => {
        setSelectedCard(cardName);
    };

    return (
        <div className="cards-container">
            <div className="cards-row" style={{ display: 'flex', justifyContent: 'center' }}>
                {/* CARD WORKSPACE*/}
                <div
                    className="card"
                    style={{
                        background: '#024C5E',
                        borderRadius: '10px',
                        padding: '20px',
                        color: 'white',
                        maxWidth: '300px',
                        height: '140px',
                        margin: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleCardClick('workspace')}
                >
                    <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Workspace</div>
                    <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                        O Workspace é o nosso ambiente de trabalho integrado onde você pode visualizar, organizar e saber o progresso dos seus serviços
                    </div>
                </div>

                {/* CARD SERVICE */}
                <div
                    className="card"
                    style={{
                        background: '#024C5E',
                        borderRadius: '10px',
                        padding: '20px',
                        color: 'white',
                        maxWidth: '300px',
                        height: '140px',
                        margin: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleCardClick('service')}
                >
                    <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Services</div>
                    <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                        Em nossa página de Services, você cliente pode tanto cadastrar um serviço como aceitar um serviço
                    </div>
                </div>

                {/* CARD PAY */}
                <div
                    className="card"
                    style={{
                        background: '#024C5E',
                        borderRadius: '10px',
                        padding: '20px',
                        color: 'white',
                        maxWidth: '300px',
                        height: '140px',
                        margin: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleCardClick('pay')}
                >
                    <div style={{ fontSize: '22px', fontFamily: 'Oxanium', fontWeight: '400' }}>Pay</div>
                    <div style={{ fontSize: '14px', fontFamily: 'Oxanium', fontWeight: '400' }}>
                        Nossa página de pagamento, Pay, é onde garantimos a segurança dos nossos clientes na hora de pagar ou receber por um serviço realizado
                    </div>
                </div>
            </div>

            {/* Renderizar imagem condicionalmente */}
            <div className="img-services" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                {selectedCard === 'workspace' && (
                    <img src={imgWorkspace} alt="Workspace" style={{ width: '1000px', height: '500px' }} className="rounded-image" />
                )}
                {selectedCard === 'service' && (
                    <img src={imgService} alt="Service" style={{ width: '1000px', height: '500px', borderRadius: '8px' }} className="rounded-image" />
                )}
                {selectedCard === 'pay' && (
                    <img src={imgPay} alt="Pay" style={{ width: '1000px', height: '500px', borderRadius: '8px' }} className="rounded-image" />
                )}
            </div>
        </div>
    );
};

export default Cards;
