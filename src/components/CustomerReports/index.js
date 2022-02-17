import React from 'react';
import './styles.css';

export default function CustomerReports(){
    return(
        <div id='container'>
            <h1>Gente que saiu da fila e foi viver a vida!</h1>

            <div id='flex'>

                <div class='InternDiv'>
                    
                    <div id='info'>
                        <div>
                            <h3>Albino Noleto dos Santos</h3>
                            <img id='location-icon' src='https://www.seekpng.com/png/detail/787-7875689_png-file-svg-location-icon-svg.png' height={20}></img>
                            <p class='location'>Valparaíso de Goiás/GO</p>
                        </div>
                        <img class='photo-person' src='https://precato.com.br/wp-content/uploads/2021/05/albino.png' height={130}></img>
                    </div>  

                    <p class='texto'>
                        "Fiz uma negociação com eles do precatório da minha aposentadoria especial. Enviei meus 
                        documentos, deu tudo certo e recebi os valores combinados. Fui muito bem atendido e a 
                        empresa cumpriu as suas obrigações.Todos os meus problemas foram resolvodos! Recomento sem medo!"
                    </p>
                </div>

                
                <div class='InternDiv'>
                    
                    <div id='info'>
                        <div>
                            <h3>Wellington Silveiro da Silva</h3>
                            <img id='location-icon' src='https://www.seekpng.com/png/detail/787-7875689_png-file-svg-location-icon-svg.png' height={20}></img>
                            <p>Cotriguaçu/MT</p>
                        </div>
                        <img class='photo-person' align='right' src='https://precato.com.br/wp-content/uploads/2021/05/wellington.png' height={130}></img>
                    </div> 

                    <p class='texto'>
                        "Primeiramente, gostaria de parebenizar a profissional que me atendeu por toda sua atenção e 
                        prestatividade. Agradeço à empresa por sua idoneidade e compromisso  com seus clientes. Deixo aqui meus
                        agradecimento pelo excelente serviço prestado."
                    </p>
                </div>

                <div class='InternDiv'>
                    
                  <div id='info'>
                        <div>
                            <h3>Airis Gomes de Barros</h3>
                            <img id='location-icon' src='https://www.seekpng.com/png/detail/787-7875689_png-file-svg-location-icon-svg.png' height={20}></img>
                            <p>Botucatu/SP</p>
                        </div>
                        <img class='photo-person' src='https://precato.com.br/wp-content/uploads/2021/05/alris-gomes.png' height={130}></img>
                    </div> 

                    <p class='texto'>
                        "A empresa fez um trabalho de aquisição de Precatórios pertencentes à minha mãe com resultado
                        totalmente satisfatório. Os responsáveis demonstraram sempre muita competência, responsabilidade
                        e ética. Eu e minha família, em nome da minha mãe, damos testemunhos de se tratar de uma empresa 
                        honrada e séria."
                    </p>
                </div>

                <div class='InternDiv'>
                   
                  <div id='info'>
                        <div>
                            <h3>Maria do Carmo Gonçalves</h3>
                            <img id='location-icon' src='https://www.seekpng.com/png/detail/787-7875689_png-file-svg-location-icon-svg.png' height={20}></img>
                            <p>Comodoro/MT</p>
                        </div>
                        <img class='photo-person' src='https://precato.com.br/wp-content/uploads/2021/05/maria-do-carmo.png' height={130}></img>
                    </div> 

                    <p class='texto'>
                        "Muito obrigada pelo que fizeram por mim. No início, achei que era um trote. Graças a Deus não era!
                        Com o dinheiro que caiu na minha conta, comprei um carro e estou reformando a minha casa. Foi muito
                        bom negociar com vocês!"
                    </p>
                </div>

            </div>
        </div>
    )
}