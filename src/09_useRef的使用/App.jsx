import React, { memo, useRef, useState } from 'react'

let obj = null

const App = memo(() => {
  const Ref = useRef()
  const [counter, setCounter] = useState(0)
  obj = Ref
  console.log(obj === Ref);// true, 说明useRef创建的ref在组件的整个生命周期内始终指向同一个引用(即同一个对象)

  // 解决闭包陷阱
  const counterRef = useRef(counter) // 创建一个ref对象，并将其current属性初始化为当前计数器的值
  counterRef.current = counter // 更新ref对象的current属性为最新的计数器值

  const increment = useCallback(() => {
    setCounter(counter)
  }, [])


  return (
    <div>
      <h2 ref={Ref}>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App