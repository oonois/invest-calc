import logo from '../assets/calculation.svg'

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-between p-5'>
      <img className='w-20 m-5 drop-shadow-md ' src={logo} alt="logo calculadora" />
      <h1 className="text-center text-3xl uppercase pt-50 font-bold opacity-70">Calculadora de Inversión</h1>

    </header>
  )
  
}
