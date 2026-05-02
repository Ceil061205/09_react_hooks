import React, { memo } from 'react'
import { useLocalStorage } from './hooks'

const App = memo(() => {
  const [token, setToken] = useLocalStorage()

  function handleSetToken() {
    setToken('your-token')
  }

  return (
    <div className='app'>
      <h2>{token}</h2>
      <button onClick={handleSetToken}>Set Token</button>
      <button onClick={() => setToken('your-token')}>setToken</button>
    </div>
  )
})

export default App