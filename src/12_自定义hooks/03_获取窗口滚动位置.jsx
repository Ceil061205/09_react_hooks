import React, { memo, useState, useEffect } from 'react'
import { useScrollPosition } from './hooks'
import './style.css'

const App1 = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()

  return (
    <div>
      <p>App1</p>
      <p>水平滚动：{scrollX}</p>
      <p>垂直滚动：{scrollY}</p>
    </div>
  )
})

const App2 = memo(() => {
  return (
    <div>
      <p>App2</p>
    </div>
  )
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  return (
    // 👇 给页面加高度，让页面可以滚动（测试用）
    <div className="app" style={{ height: '2000px' }}>
      <h2>app</h2>
      <button onClick={e => setIsShow(!isShow)}>点击</button>
      {isShow && <App1 />}
      {isShow && <App2 />}
    </div>
  )
})

export default App