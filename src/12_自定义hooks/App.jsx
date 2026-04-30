import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  function setTokenHandler() {
    setToken('your-token')
  }

  return (
    <div className='app'>
      <h2>{token}</h2>
      <button onClick={setTokenHandler}>setToken</button>
    </div>
  )
})

export default App