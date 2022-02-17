import React from "react";
import './styles.css'

export default function EspecialistTeam(){
    return(

        <div id='Team'>
            
            <h1>Maiores especialistas do Brasil!</h1>
            
            <p id="line">________</p>

            <div id="InternalDiv">

                <div id="photo">
                    <img src="https://precato.com.br/wp-content/uploads/2021/06/Layer-0-copy-2-1.png" height={700}></img>
                    <h5>Matheus Alvarenga, COO da Precato, maior especialista de precatórios do Brasil.</h5>
                </div>

                <div id="EspecialistText">

                    <p>
                        Contamos com um grande time de especialistas, que vão te atualizar sobre cada detalhe do processo
                        e apresentar todas as altternativas para o recebimento efetivo, com transparência radical.
                    </p>

                    <p>
                        A precato se orgulha em ter gente de verdade para te atender. Isso significa que temos pessoas 
                        preparadas mas que tem problemas de verdade, contas a pagar, família, e que portanto entendem
                        muito bem os seus problemas.
                    </p>

                    <p>
                        Não perca tempo, tire suas dúvidas, e conheça as possibilidades para receber seu precatório
                        apertando no botão abaixo:
                    </p>

                    <div id="button-img">
                        <button> Quero receber uma proposta </button>
                        <img src="https://precato.com.br/wp-content/uploads/2021/07/pag-gatantido.png" height='250'></img>
                    </div>

                </div>

            </div>

        </div>

    )
}