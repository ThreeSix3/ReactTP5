import './App.css';
import { useState } from 'react';



function App() {
  
  const [numero, setNumero] = useState(0);
  
  return (
    <div>
      <p>Contador: {numero} </p>
      <button onClick={() => setNumero(numero + 1)}>Sumar</button>
      <button onClick={() => setNumero(numero - 1)}>Restar</button>
    </div>
  );
}








export default App;
