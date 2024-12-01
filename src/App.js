import { useState } from "react";
import {gifs} from './gifs.js';


function App() {
  const [choiseNumber, setChoiseNumber] = useState(null);
  const [isOpen, setisOpen] = useState(false);

  function handleOpenModal() {
    if(choiseNumber) {
      setisOpen(true);
    } else {
      alert('Choose an emotion!')
    }
    
  }

  return (
    <div className="App">
        <select onChange={(e) => setChoiseNumber(e.target.value)}>
          <option value="">Choose an emotion</option>
          {gifs.map((gif, index) => (
            <option key={index} value={index}>{gif.title}</option>
          ))}
        </select>
      <button 
        className="open-modal-btn"
        onClick={handleOpenModal}>
        Generate gif 💫
      </button>
      <div className={`overlay ${isOpen ? "show" : ""}`}>
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setisOpen(false)}>
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
          <img src={gifs[choiseNumber]?.src} alt={gifs[choiseNumber]?.title}/>
        </div>
      </div>
    </div>
  );
}

export default App;
