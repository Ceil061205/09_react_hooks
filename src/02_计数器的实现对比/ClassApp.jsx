import React, { PureComponent } from 'react'

export class ClassApp extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1>ClassApp</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>增加</button>
        
      </div>
    )
  }
}

export default ClassApp