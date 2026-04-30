import React, { memo, useLayoutEffect, useEffect, useState } from 'react'

const App = memo(() => {

  // dom展示之后调
  useEffect(() => {
    console.log('3useEffect');
    // 屏幕上有闪
    // if( count === 0) {
    //   setCount(Math.floor(Math.random() * 1000))
    // }
  })
  // dom展示之前调
  useLayoutEffect(() => {
    console.log('2useLayoutEffect');
    if( count === 0) {
      setCount(Math.floor(Math.random() * 1000))
    }
  })

  console.log('1apprender');
  

  const [count, setCount] = useState(550)

  return (
    <div>
      <h2>App{count}</h2>
      <button onClick={() => setCount(0)}>0</button>
    </div>
  )
})

export default App