import React, { useState } from 'react'


const App = () => {
  const [color, setColor] = useState("Olive");
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center text-white bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl shadow-lg bg-white text-black ">
          <button onClick={()=>setColor("Red")} className="px-3 py-1 bg-red-700 rounded-full text-white cursor-pointer">Red</button>
          <button onClick={()=>setColor("Green")} className="px-3 py-1 bg-green-700 rounded-full text-white cursor-pointer">Green</button>
          <button onClick={()=>setColor("blue")} className="px-3 py-1 bg-blue-700 rounded-full text-white cursor-pointer">Blue</button>
          <button onClick={()=>setColor("black")} className="px-3 py-1 bg-black rounded-full text-white cursor-pointer">Black</button>
          <button onClick={()=>setColor("Grey")} className="px-3 py-1 bg-gray-400 rounded-full text-white cursor-pointer">Grey</button>
          <button onClick={()=>setColor("#C4B4FF")} className="px-3 py-1 bg-violet-300 rounded-full text-white cursor-pointer">Lavender</button>
          <button onClick={()=>setColor("#808000")} className="px-3 py-1 bg-[#808000] rounded-full text-white cursor-pointer">Olive</button>
          <button onClick={()=>setColor("#560591")} className="px-3 py-1 bg-[#560591] rounded-full text-white cursor-pointer">Indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App