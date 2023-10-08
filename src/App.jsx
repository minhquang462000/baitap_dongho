import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Time from './component/time'
import BtnTime from './component/btn'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col w-[500px] gap-5'>
      <p>Bai1</p>
    <Time></Time>
    <BtnTime></BtnTime>
    </div>
     
    </> 
  )
}

export default App
