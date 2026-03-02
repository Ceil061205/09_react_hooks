import React, { memo, useState, useCallback, useRef } from 'react'

// props发生改变组件进行重新渲染
const Home = memo((props) => {
  const { add } = props
  console.log('子组件');
  
  return (
    <button onClick={add}>+1</button>
  )
})

const App = memo(() => {
  const [msg, setMsg] = useState('hh')
  const [counter, setCounter] = useState(0)
  // 一般的函数会被定义多次
  // useCallback 是为了解决组件无关子组件信息发生变化 子组件不会被重新渲染 性能优化
  // 传函数给子组件的时候都用useCallback（9.9）

  // const add = useCallback(function() {
  //   setCounter(counter + 1)
  //   console.log('111');
  //   // 如果是空数组 只会执行一次 闭包陷阱 数据不会被更新
  // }, [counter])

  // useRef：在组件多次渲染时会返回同一个值 都不重新渲染
  const countRef = useRef()
  countRef.current = counter
  const add = useCallback(function() {
    setCounter(countRef.current + 1)
    console.log('111');
  }, [])


  return (
    <div>
      <h2>counter:{counter}</h2>
      <button onClick={add}>+1</button>
      <h2>msg:{msg}</h2>
      <button onClick={e => setMsg(msg +'k')}>change</button>
      <Home add={add} />
    </div>
  )
})

export default App