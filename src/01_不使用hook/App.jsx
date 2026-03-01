import React, { PureComponent } from 'react'

export class Hello extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: 'hhhh1'
    }
  }
  changeName() {
    this.setState({
      name: 'hhhh3'
    })
  }
  render() {
    const { name } = this.state
    return (
      <div>
        <h2>{ name }</h2>
        <button onClick={e => this.changeName() }>改变名字</button>
      </div>
    )
  }
}

function Hello2(props) {
  let name = 'h2'
  // 函数组件缺陷
  // 1.无法直接修改数据，组件不会被重新渲染
  // 2.如果重新渲染了，函数会被重新执行，第二次执行时，name会被重新赋值
  // 3.本编写生命周期的回调


  return (
    <div>
      <h2>{ name }</h2>
    </div>
  )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Hello />
        <hr />
        <Hello2 />
      </div>
    )
  }
}

export default App