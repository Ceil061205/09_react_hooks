import React, { memo, useMemo, useState } from 'react'

function calcNum(num) {
  console.log('再算');
  
  let total = 0
  for (let i = 1; i <= num; i++){
    total += i
  }
  return total
}

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  // useCallback拿的是函数
  //useMemo拿的是返回值 
  let result = useMemo(() => {
    return calcNum(60)
  }, [])

  return (
    <div>
      <h2>加算结果{result}</h2>
      <button>+1</button>
    </div>
  )
})

export default App