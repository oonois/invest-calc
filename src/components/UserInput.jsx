

export default function UserInput({onChange, userInput, setUserInput}) {

  

  
  return (
    <section className="max-w-fit px-10 py-5 rounded bg-gradient-to-b from-emerald-600 from-20% via-emerald-700 via-60% to-emerald-800   " >
      <div className="flex justify-evenly gap-1 ">
      <p>
          <label
            className=" block mb-1 font-sans font-medium uppercase"
           htmlFor="">Inversión inicial</label>
          <input 
            className="block rounded-md border-2 border-gray-100 border-opacity-20 mb-3 text-center bg-emerald-900"
            defaultValue={userInput.initialInvestment}
            type="number" 
            required 
            onClick={(e) => onChange('initialInvestment', e.target.value)}
          />
      </p>
        <p>
          <label 
            className="block mb-1 font-sans font-medium uppercase"
            htmlFor="">Inversión Anual</label>
          <input 
            className="block rounded-md border-2 border-gray-100 border-opacity-20 mb-3 text-center bg-emerald-900"
            defaultValue={userInput.annualInvestment}
            type="number" 
            required 
            onClick={(e) => onChange('annualInvestment', e.target.value)}/>
        </p>
      </div>
      <div className="flex justify-evenly gap-1">
      <p>
          <label
            className="block mb-1 font-sans font-medium uppercase" 
            htmlFor="">Expectativas</label>
          <input 
            className="block rounded-md border-2 border-gray-100 border-opacity-20 mb-3 text-center bg-emerald-900"
            defaultValue={userInput.expectedReturn}
            type="number" 
            required 
            onClick={(e) => onChange('expectedReturn', e.target.value)}/>
        </p>
        <p>
          <label
            className="block mb-1 font-sans font-medium uppercase" 
            htmlFor="">Duración</label>
          <input 
            className="block rounded-md border-2 border-gray-100 border-opacity-20 mb-3 text-center bg-emerald-900"
            defaultValue={userInput.duration}
            type="number" 
            required 
            onClick={(e) => onChange('duration', e.target.value)}/>
        </p>

      </div>
    </section>
  )
}
