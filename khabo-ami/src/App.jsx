import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl font-bold underline text-red font-primary'>
        Hello World
      </div>
    </>
  )
}

export default App
