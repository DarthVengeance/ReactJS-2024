import { useState } from 'react';
import './App.css';
import {Button} from './components/button.jsx';


function exibirMensagem() {
  alert ('Parábens, agora você é Palmerense!');
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Button texto="Ver meu Time" mensagem= {exibirMensagem()}> </Button>

    </>
  )
}

export default App
