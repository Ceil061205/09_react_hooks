import React, { memo, useMemo, useState } from 'react'

function calcNum(num) {
  console.log('再算');
  
  let total = 0
  for (let i = 1; i <= num; i++){
    total += i
  }
  return total
}

const Hello = memo((props) => {
  console.log('hello组件渲染了');
  const { result } = props

  return (<div>hello</div>)
})

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  // useCallback拿的是函数
  //useMemo拿的是返回值 在组件重新被渲染的时候函数不会每次都执行
  let result = useMemo(() => {
    return calcNum(60)
  }, [])

  // useCallback只有在把值传给子组件的时候才会有性能优化
  // useCallback(fn, [])  === useMemo(() => fn, [])

  // 使用useMemo对子组件渲染进行优化,传对象时才有优化一说
  const info = useMemo(() => {
    return { name: 'raven', age: 18 }
  }, [])

  return (
    <div>
      <h2>加算结果{result}</h2>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <Hello result={result} info={info} />
    </div>
  )
})

export default App