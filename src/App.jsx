import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100' style={{height:'100vh' }} >
        <div className='d-flex align-items-center justify-content-center flex-column bg-light rounded p-5' >
            <h3 style={{fontSize:'40px',color:'blue'}}>Counter Application</h3>
            <Counter/>
        </div>
      </div>
    </>
  )
}

export default App
