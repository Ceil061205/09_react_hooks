import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  useEffect(() => {
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