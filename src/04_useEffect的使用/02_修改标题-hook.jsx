import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 放一些额外副作用的代码 组件渲染完成后执行
  useEffect(() => {
    // 网络请求 dom操作 事件监听
    // 组件每次渲染完成后自动执行
    document.title = `你点击了${count}次`
  })
  

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
})

export default memo(App)