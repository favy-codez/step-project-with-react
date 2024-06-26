import { useState } from 'react';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 1; so because we want it to be dynamic we make use of useState
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function prevButton(){
    // the array only has 3 items, so anything below 1 doesn't make sense
    if (step > 1) setStep(step - 1);
  }

  function nextButton(){
    if (step < 3) setStep(step + 1);
    // but if we want it to update twice. its always best practice to use a callback fxn when 
    // we want to update state based on the current value of the state
    
    // if (step < 3) {
    //   // instead of 
    //   setStep(step + 1);
    //   // we do this instead
    //   setStep((s) => s + 1);
    //   setStep((s) => s + 1);
    // }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div> */}
            
            {/* there is no longer need for a ternary operator */}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          {/* Dynamically accesses an element from the messages array using the
          current step value, adjusted by -1 to account for zero-based indexing. */}

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={prevButton}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // passing in the fxn value, calling it would require adding ()
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
