import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const  [todos , settodos] = useState(["test"])
  const  inputref= useRef()
  const  handleddtod =() => {
    const text = inputref.current.value;
    settodos([...todos,text])
    inputref.current.value=""
  }
  return (
    <>
    <div className='app'>
<h1> to do list         </h1>
<div className='todo'>

<ul>
{todos.map((item)=>{
  return <li>{item}</li>
  
}

)}
</ul>
<input ref={inputref } placeholder = "enter item .."  />
<button onClick={handleddtod}    >add</button>
</div>
</div>

    </>

  
)}

export default App
