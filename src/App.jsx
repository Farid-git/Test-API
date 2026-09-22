import { useState } from 'react'
import Cheremsha from './assets/Cheremsha.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={Cheremsha} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>ООО "Черемша"</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Нажми на меня {count}
        </button>
      </section>

    </>
  )
}

export default App
