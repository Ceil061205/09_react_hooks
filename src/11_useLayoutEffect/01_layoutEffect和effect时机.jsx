import React, { memo, useLayoutEffect, useEffect, useState } from 'react'

const App = memo(() => {

  // dom展示之后调
  useEffect(() => {
    console.log('3useEffect');
  })
  // dom展示之前调
  useLayoutEffect(() => {
    console.log('2useLayoutEffect');
  })

  console.log('1apprender');
  

  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>App{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App