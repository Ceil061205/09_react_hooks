import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = { 
        count: 0
     }
  }
  componentDidMount() {
    // 这里不会同步更新标题
    document.title = `当前计数为${this.state.count}`
  }
  componentDidUpdate() {
    document.title = `当前计数为${this.state.count}`
  }
  render() {
    return (
      <div>
        <h1>计数器</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
      </div>
    )
  }
}

export default App