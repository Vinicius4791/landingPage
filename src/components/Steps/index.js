import React from 'react';
import './styles.css';

export default function Steps(){

    return(
        
        <div id='Step'>
            <div id='LeftCol'>
                <img src='https://precato.com.br/wp-content/uploads/2021/07/iPhone-X.png' height={700}></img>
            </div>

            <div id='RightCol'>
                <h1>Como funciona</h1>

                <h4>Passo 1 - Proposta</h4>
                <p>Faremos uma proposta personalizada para você avaliar com calma e esclarecer suas dúvidas.</p>

                <h4>Passo 2 - Formalização</h4>
                <p>Analisamos a documentação e agendaremos no cartório mais próximo da sua casa a assinatura do contrato, 
                    presencialmente. Um representante nosso acompanhará cada detalhe.</p>

                <h4>Passo 3 - Pagamento</h4>
                <p>Contrato assinado, em até 24 horas o dinheiro estará na sua conta.</p>

                <div id='botao'>
                    <button> Quero antecipar com segurança </button>
                </div>
                
            </div>

        </div>

    )
}