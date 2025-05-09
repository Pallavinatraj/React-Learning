import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleDeposite = (amt) => {
    setCount(count + amt)
    setCount(count + amt)
    setCount(count + amt)
    setCount(count + amt)

  }
  const handleWithdraw = () => {
    setCount(prev => prev - 100);

  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => handleDeposite(100)}>Deposit 100</button>
      <button onClick={handleWithdraw}>Withdraw 100</button>
    </>
  )
}

export default App

