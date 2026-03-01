import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)
  document.title = count

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
})

export default memo(App)