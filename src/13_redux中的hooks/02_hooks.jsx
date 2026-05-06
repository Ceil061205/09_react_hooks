import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from './store/modules/counter'


const App = memo((props) => {
  const { count } = useSelector((state) => ({ count: state.counter.count }))
  const dispatch = useDispatch()
  function handleAdd(num, isAdd = true) {
    if (isAdd) {
      dispatch(incrementAction(num))
    } else {
      dispatch(decrementAction(num))
    }
  } 

  return (
    <div>
      <div>App{count}</div>
      <button onClick={() => handleAdd(1, true)}>+1</button>
      <button onClick={() => handleAdd(1, false)}>-1</button>
    </div>
  )
})

export default App