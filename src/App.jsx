import { useState } from 'react'
import './App.css'
import Competitors from "./components/main/Competitors.jsx"
import Header from './components/Header/Header.jsx'
import Timer from './components/Timer/Timer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Timer/>
    <Competitors/>
    </>
  )
}

export default App
