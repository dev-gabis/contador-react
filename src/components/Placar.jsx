import React, { useState } from "react";

import "./Placar.css"

export default function Placar(props) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function cleanCounter() {
    setCounter(counter - counter);
  }

  return (
    <div className="Placar">
      <h1>Você clicou {counter} vezes :)</h1>
      <button onClick={increment}>Mais 1</button>
      <button onClick={cleanCounter}>Limpar</button>
      <hr />
    </div>
  );
}