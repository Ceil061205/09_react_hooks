import React, { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './context'

const App = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext((ThemeContext))


  return (
    <div>
      <h2>user-{user.name}</h2>
      <h2>theme-{theme.age}</h2>
    </div>
  )
})

export default App