import { useEffect, useState } from 'react';
import './App.css';

function Comp() {

  useEffect(() => {
    console.log("corpo do effect");

    function eventoDeScroll () {
      return false;
    }

    window.addEventListener("scroll", eventoDeScroll);

    const unmount = () => {
      console.log("Saiu")
      window.removeEventListener("scroll", eventoDeScroll);
    };

    return unmount;

  }, []);

  return <><p>Eu sou a lenda!</p></>;
}


function App() {

  const [estado, setEstado] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setEstado((est) => !est)}>Ok {String(estado)}</button>
      {estado && <Comp />}
    </div>
  );
}

export default App;
