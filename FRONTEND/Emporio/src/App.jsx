import { useState } from 'react'
import Product from './Pages/Product'
import './App.css'
import Landing from './Pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
      <Product />
    </>
  )
}

export default App
