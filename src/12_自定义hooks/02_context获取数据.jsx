import React, { memo, useState } from 'react'
import { useUserToken } from './hooks'

const App1 = memo(() => {
  const { user, token } = useUserToken()

  return (
    <div>
      <p>App1</p>
      <p>User: {user.name}</p>
      <p>Token: {token}</p>
    </div>
  )
})

const App2 = memo(() => {
  const { user, token } = useUserToken()

  return (
    <div>
      <p>App2</p>
      <p>User: {user.name}</p>
      <p>Token: {token}</p>
    </div>
  )
})


const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      <h2>app</h2>
      <button onClick={e => setIsShow(!isShow)}>点击</button>
      {isShow && <App1 />}
      {isShow && <App2 />}
    </div>
  )
})

export default App