import React, { memo, useState, useRef, forwardRef, useImperativeHandle } from 'react'

const Hello = memo(forwardRef((props, ref) => {

  const inputRef = useRef()

  // 子组件对父组件传入的ref进行处理,控制父组件对子组件的操作
  useImperativeHandle(ref, () => ({
    show() {
      console.log('Hello');
      inputRef.current.focus()
    }
  }));

  return (
    <input ref={inputRef}/>
  )
}))


const App = memo(() => {
  // 都是同一个对象
  const countRef = useRef()
  const [counter, setCounter] = useState(0)

  const helloRef = useRef()
  function handleDOM() {
    helloRef.current.show()
  }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <p ref={countRef}>计数: {counter}</p>
      <Hello ref={helloRef} />
      <button onClick={handleDOM}>show</button>
    </div>
  )
})

export default App