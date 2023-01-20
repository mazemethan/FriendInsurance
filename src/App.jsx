import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styled from 'styled-components'
import Logo from'./pic/logo.png'
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-[red]">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Logo} className="logo" alt="pn logo" />
        </a>
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <Button>holy shit</Button>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
