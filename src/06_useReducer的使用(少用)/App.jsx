import React, { memo, useState, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 }
    default :
      return state
  }
}

const App = memo(() => {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, {counter: 0})

  return (
    <div>
      {/* <h2>count{count}</h2>
      <button onClick={e => setCount(count +1)}>+1</button> */}

      <h2>{state.count}</h2>
      <button onClick={e => dispatch('add')}>+1</button>
    </div>
  )
})

export default App