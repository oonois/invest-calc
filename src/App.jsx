import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Resultados from "./components/Resultados"

import { useState } from "react"

function App() {
  
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleCambios(inputId, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputId]: +newValue
      }
    })
  }



  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        onChange={handleCambios}
      />  
      {!inputIsValid && <p className="font-bold text-center mt-10 text-red-700">Inserta una duración mayor a 0</p>}
      {inputIsValid && <Resultados input={userInput} /> }
    </>
  )
}

export default App
