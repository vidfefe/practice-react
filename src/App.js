import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <h2 className="">Счетчик:</h2>
      <h1>{counter}</h1>
      <div>
        <button className="minus" onClick={() => setCounter(counter - 1)}>Минус</button>
        <button className="plus"  onClick={() => setCounter(counter + 1)}>Плюс</button>
        <button className="reset"  onClick={() => setCounter(0)}>Очистить</button>
      </div>
    </div>
  );
}

export default App;
