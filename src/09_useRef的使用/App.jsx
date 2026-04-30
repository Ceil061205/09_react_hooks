import React, { memo, useState, useRef, forwardRef } from 'react'

const Hello = memo(forwardRef((props, ref) => {
  return (
    <h2 ref={ref}>Hello</h2>
  )
}))


const App = memo(() => {
  // 都是同一个对象
  const countRef = useRef()
  const [counter, setCounter] = useState(0)

  const helloRef = useRef()

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <p ref={countRef}>计数: {counter}</p>
      <Hello ref={helloRef} />
      <button onClick={() => console.log(helloRef.current)}>show</button>
    </div>
  )
})

export default App