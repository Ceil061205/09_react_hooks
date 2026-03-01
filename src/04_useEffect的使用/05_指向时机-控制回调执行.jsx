import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 可模拟原来的生命周期函数，但更加强大
  useEffect(() => {
    console.log('组件渲染了 监听 事件 初始化工作')
    return () => {
      console.log('组件卸载了取消监听 清理工作')
    }
  },[])

  useEffect(() => {
    console.log('1')
    return () => {
      console.log('1')
    }
  }, [])
  
  useEffect(() => {
    console.log('2')
    return () => {
      console.log('2')
    }
  }, [])

  useEffect(() => {
    console.log('3')
    return () => {
      console.log('3')
    }
    // 第二个参数该useEffect谁的影响，空数组表示只在组件渲染时执行一次

  }, [count])
  

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
})

export default memo(App)