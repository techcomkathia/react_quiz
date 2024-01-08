// src/components/Inicio.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerPergunta } from './AppStyles';


function Home() {
  return (
    <Container>
    <div>
      <h2>FRONT QUIZ</h2>
      <p>Bem-vindo ao Quiz sobre HTML, CSS e JavaScript!</p>

      <p>Clique no botão abaixo para começar:</p>

      <Link to="/quiz">
        <button>Iniciar Quiz</button>
      </Link>

    </div>
    </Container>
  );
}

export default Home;
