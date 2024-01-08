// src/components/EstilosGlobais.js
import { createGlobalStyle } from 'styled-components';

const EstilosGlobais = createGlobalStyle`
  :root {
    --cor-primaria: #8e44ad; /* Cor principal em tons de roxo */
    --cor-secundaria: #dcdcdc; /* Cor secundária para contraste */
    --fonte-principal: 'Roboto', sans-serif; /* Fonte principal */
    --cor-fundo: black;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--fonte-principal);
    background-color: var(--cor-fundo);
    color: var(--cor-primaria);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--cor-primaria);
  }

  button {
    background-color: var(--cor-primaria);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin:10px;
    min-width: 30vw;
  }

  .correta{
    background-color: green;
  }

  .incorreta{
    background-color: red;
  }
`;

export default EstilosGlobais;
