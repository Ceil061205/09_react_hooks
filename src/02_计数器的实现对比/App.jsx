import React, { memo } from 'react'
import ClassApp from './ClassApp'
import HookAoo from './HookAoo'

const App = memo(() => {
  return (
    <div>
      <h2>class</h2>
      <ClassApp />
      <h2>hook</h2>
      <HookAoo />
    </div>
  )
})

export default App