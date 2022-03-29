import { useCallback, useState } from 'react';
import './App.css';

const set = new Set();

function App() {

  const [estado, setEstado] = useState(0);

  const handleClick = useCallback(() => {
    setEstado(e => e + 1);
  }, []);

  set.add(handleClick);
  console.log(set);

  return (
    <div className="App">

      <p>Callback</p>
      <button onClick={handleClick}>Ok {estado}</button>
    </div>
  );
}

export default App;
