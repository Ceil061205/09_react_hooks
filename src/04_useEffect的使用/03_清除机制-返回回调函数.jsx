import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('组件渲染了 监听 事件 初始化工作')

    // 返回值：回调函数，会在组件重新被渲染或者卸载时执行 增加代码的内聚性
    return () => {
      console.log('组件卸载了取消监听 清理工作')
    }
  })
  

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
})

export default memo(App)