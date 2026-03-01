import React, { memo, useState } from 'react'

const App = memo(() => {
  // useState 返回的是一个数组，第一个元素是当前状态值，第二个元素是一个函数，用来更新这个状态值 不设置初始值，默认是undefined
  // 函数退出后变量会丢失，所以需要用useState来保存状态值

  const [msg, setMsg] = useState('hello world')
  const [banners, setBanners] = useState([])

  function changeMsg() {
    setMsg('hello react2')
  }

  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={() => setMsg('hello react')}>更新</button>
      <button onClick={changeMsg}>xiugai</button>
    </div>
  )
})

export default memo(App)