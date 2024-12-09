import { useState } from "react";
import {questions} from './questions.js';


function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [correctVariants, setCorrectVariants] = useState(0);

  let question = questions[currentStep];

  function handleClickVariant(index){
    setCurrentStep(currentStep + 1);

    if(index === question.correct){
      setCorrectVariants(correctVariants+1);
    }
  }

  function handleClickReset(){
    setCurrentStep(0)
    setCorrectVariants(0)
  }

  return (
    <div className="card">
      { currentStep < questions.length ? 
      (
        <Quiz 
        currentStep = {currentStep}
        question = {question}
        handleClickVariant={handleClickVariant}
      />
      ) :
      (
        <Result
          correctVariants = {correctVariants}
          handleClickReset={handleClickReset}
      />
      )
    }
      
    </div>
  );
}

function Result({correctVariants, handleClickReset}){

  return(
    <div className="result">
      <div className="firework"/>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
      
      <h2>Вы отгадали {correctVariants} ответа из {questions.length}</h2>
      <button onClick={handleClickReset}>Попробовать снова</button>
      
    </div>
  );
}

function Quiz({currentStep, question, handleClickVariant}){
  let progress = Math.round(currentStep / questions.length * 100);

  return(
    <>
      <div className="progress">
      <div className="progress__inner" style={{ width: `${progress}%`}}/>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => handleClickVariant(index)} key={index}>{variant}</li>
        ))}
    </ul>
    </> 
  );
}

export default App;
