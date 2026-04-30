import React, { memo, useEffect, useState } from 'react'

// 自定义hooks必须以use开头
function useLog(cName) {
  useEffect(() => {
    console.log(`${cName}组件渲染了`);

    return () => {
      console.log(`${cName}组件卸载了`);
    }
  }, [])
}

const App1 = memo(() => {
  useLog('App1')
  return (
    <div>App1</div>
  )
})

const App2 = memo(() => {
  useLog('App2')
  return (
    <div>App2</div>
  )
})


const App = memo(() => {
  useLog('App')
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      <h2>app</h2>
      <button onClick={e => setIsShow(!isShow)}>点击</button>
      {isShow && <App1 />}
      {isShow && <App2 />}
    </div>
  )
})

export default App