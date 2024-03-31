import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyBotton from './components/MyBotton'

function App() {
  const [count, setCount] = useState(0)

const user = {
  firstName: "sara",
  lastName: 'Doe',
  imgPic: "https://media.istockphoto.com/id/1245949932/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%95%E0%B8%A5%E0%B8%81.jpg?s=612x612&w=is&k=20&c=RivSuYWwwgcnuu69FhiTWx5fmKsFyuUWrU7zdrJULWo=",
}

  return (
    <div className="App">
      <h1>Learn React</h1>
      <p>My name is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} width="150" height="150" alt="" />
      <MyBotton />
    </div>
  )
}

export default App
