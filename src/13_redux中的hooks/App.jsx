import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { incrementAction, decrementAction, changeMessageAction } from './store/modules/counter'

// memo包裹的组件只有props发生改变才会重新渲染,如果props没有改变,就不会重新渲染
const Test = memo((props) => {
  console.log('test');
  return <div>test</div>
})

const Home = memo((props) => {
  // useSelector会监听整个state
  const { message } = useSelector((state) => ({ message: state.counter.message }), shallowEqual)
  console.log('222');
  const dispatch = useDispatch()

  function handleChangeMessage() {
    dispatch(changeMessageAction('hello world'))
  }
  

  return (
    <div>home{message}
      <button onClick={handleChangeMessage}>Click me</button>
    </div>
  )
})


const App = memo((props) => {
  // shallowEqual浅比较,如果组件中用到的对象的属性值没有改变,就不会重新渲染组件,如果对象的属性值改变了,就会重新渲染组件
  const { count } = useSelector((state) => ({ count: state.counter.count }), shallowEqual)
  const dispatch = useDispatch()
  function handleAdd(num, isAdd = true) {
    if (isAdd) {
      dispatch(incrementAction(num))
    } else {
      dispatch(decrementAction(num))
    }
  } 
  console.log('app');
  
  return (
    <div>
      <div>App{count}</div>
      <button onClick={() => handleAdd(1, true)}>+1</button>
      <button onClick={() => handleAdd(1, false)}>-1</button>
      <Home />
      <Test />
    </div>
  )
})

export default App