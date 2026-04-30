import React, { memo, useEffect, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function showRef() {
    console.log(titleRef.current);
    inputRef.current.focus();
  }

  return (
    <div>
      <h2 ref={titleRef}>useRef的使用</h2>
      <input type='text' ref={inputRef} />
      <button onClick={showRef}>查看</button>
    </div>
  )
})

export default App