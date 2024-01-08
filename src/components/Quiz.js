// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { ContainerPergunta, Container, ContainerAlternativas } from './AppStyles';

function Quiz() {
  let [ perguntas, setPerguntas] = useState([])
  

  useEffect(()=>{
    fetch('http://localhost:3001/perguntas').
    then(resposta=> resposta.json()).
    then(dados => setPerguntas(dados),[])
  })



  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarPontuacao, setMostrarPontuacao] = useState(false);


  const handleClickResposta = (opcaoSelecionada) => {
    if (opcaoSelecionada === perguntas[perguntaAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaPergunta = perguntaAtual + 1;

    if (proximaPergunta < perguntas.length) {
      setPerguntaAtual(proximaPergunta);
    } else {
      setMostrarPontuacao(true);
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setMostrarPontuacao(false);
  };

  return (
    <Container>
      {mostrarPontuacao ? 
      (
        <div className="secao-pontuacao">
          <h2>Você acertou {pontuacao} de {perguntas.length} perguntas!</h2>
          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
        </div>
      ) : 
      (
        
      <ContainerPergunta>
        <div >
          <h2>Pergunta {perguntaAtual + 1}</h2>
          {perguntas[perguntaAtual] ? (
            <p>{perguntas[perguntaAtual].pergunta}</p>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
        <ContainerAlternativas>
          {perguntas[perguntaAtual]?.opcoes.map((opcao, indice) => (
            <button key={indice} onClick={() => handleClickResposta(opcao)}>
              {opcao}
            </button>
          ))}
        </ContainerAlternativas>
    </ContainerPergunta>
      )}

    </Container>
  );
}

export default Quiz;
