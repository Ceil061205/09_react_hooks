import React, { memo, useState } from 'react'

// 普通函数不能使用hooks
// 必须use开头才能被识别为hooks函数
function useFoo() {
  const [msg] = useState('hello111')
  return msg
}

const HookAoo = memo(() => {
  // 只能在顶层用hooks，不能在循环、条件判断中使用hooks
  const [counter, setCounter] = useState(100)


  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <hr />
      <h2>{useFoo()}</h2>
    </div>
  )
})

export default memo(HookAoo)