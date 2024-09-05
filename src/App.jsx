import { useState } from 'react';
import './App.css';
import {Button} from './components/button.jsx';

function App() {
  function exibirMensagem() {
    alert ('Parábens, agora você é Palmerense!');
  }
  return (
    <> 
      <Button texto="Ver meu Time" mensagem={exibirMensagem}></Button>
    </>
  )
}

export default App
