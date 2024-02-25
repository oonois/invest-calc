import { data } from 'autoprefixer';
import {calculateInvestmentResults, formatter} from '../utils/investment.js'

export default function Resultados({input}) {

 const dataResultados = calculateInvestmentResults(input);
 const initialInvestment = dataResultados[0].valueEndOfYear - dataResultados[0].interest - dataResultados[0].annualInvestment
  console.log(dataResultados)
  return (
    <table id="result" className='mt-10 min-w-full text-sm text-center font-light'>
      <thead>
        <tr className='text-emerald-400 text-sm'>
          <th>Año</th>
          <th>Valor de inversión</th>
          <th>Intereses (año)</th>
          <th>interes total</th>
          <th>Capital invertido</th>
        </tr>
      </thead>
      <tbody>
        {dataResultados.map(yearData => {

          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInv = yearData.valueEndOfYear - totalInterest

          return <tr key={yearData.year} className='text-center'>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInv)}</td>
          </tr>
        })}
      </tbody>
      
    </table>
  )
}
