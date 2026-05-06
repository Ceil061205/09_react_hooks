import React, { memo, useRef } from 'react'

const App = memo(() => {
  const Ref = useRef()
  const inputRef = useRef()
  function showTitleDom() {
    console.log(Ref.current, inputRef.current)
    inputRef.current.focus()
  }
  return (
    <div>
      <h2 ref={Ref}>hello</h2>
      <input type="text" ref={inputRef} />
      <button onClick={showTitleDom}>查看title</button>
    </div>
  )
})

export default App