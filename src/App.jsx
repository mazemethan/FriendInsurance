import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import styled from 'styled-components'
import Logo from'./pic/logo.png'
import Main from'./page/main.jsx';
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
    <>
    <div>
      {/* <Main/>  */}
        
    </div>
  </>
  );
  
}

export default App
