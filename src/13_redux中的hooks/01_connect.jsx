import React, { memo } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from './store/modules/counter'


const App = memo((props) => {

  const { counter, addNumber, subNumber } = props
  function handleAdd(num, isAdd) {
    if (isAdd) {
      addNumber(num)
    } else {
      subNumber(num)
    }
  } 

  return (
    <div>
      <div>App{counter}</div>
      <button onClick={() => handleAdd(1, true)}>+1</button>
      <button onClick={() => handleAdd(1, false)}>-1</button>
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    counter: state.counter.count,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(incrementAction(num))
  },
  subNumber(num) {
    dispatch(decrementAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)