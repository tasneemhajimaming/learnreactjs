import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyBotton from './components/MyBotton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Learn React</h1>
      <MyBotton />
    </div>
  )
}

export default App
