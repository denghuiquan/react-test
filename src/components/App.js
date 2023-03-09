import React, { Component } from 'react'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      person: {
        name: '张三',
        age: 20,
        job: 'waiter'
      }
    }
  }
  render () {
    const { name, age, job } = this.state.person
    return (
      <>
        <p>
          {name} {age} {job}
        </p>
        <button
          onClick={() =>
            this.setState({
              ...this.state,
              // 这里的person 数据结构应该和原来的保持一致，避免数据丢失
              // person: {
              //   age: 30
              // }
              person: {
                ...this.state.person,
                age: 30
              }
            })
          }
        >
          更新信息
        </button>
      </>
    )
  }
}
