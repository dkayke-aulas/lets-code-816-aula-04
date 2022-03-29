import { useMemo, useState } from 'react';
import './App.css';

function calculo() {
  let calc = 1;
  for(let i = 1; i < 100000; i++) {
    calc = i * 100;
  }
  return calc + (Math.random() * (1 - 3));
}

function App() {

  const [estado, setEstado] = useState(true);

  const t1 = performance.now();
  const valor = useMemo(() => calculo(), [estado]);
  console.log(performance.now() - t1);

  return (
    <div className="App">

      {valor}
      <button onClick={() => setEstado(e => !e)}>Ok {String(estado)}</button>
    </div>
  );
}

export default App;
