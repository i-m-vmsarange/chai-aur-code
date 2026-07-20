import React from 'react'
import Card from './components/Card'


const App = () => {
  return <>
    <div  className='text-center text-3xl font-bold p-4 bg-green-500 text-white w-fit rounded-md mx-auto m-4'>Tailwind Test</div>
   <div className="flex">
    <Card channel="Chai Aur Code" buttonText="Click me"/>
    <Card channel="Sheriyans coding school" buttonText="Visit me"/>
   </div>
    </>
}
export default App;