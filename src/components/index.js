import React, { Component } from 'react'

export default class index extends Component {
  constructor () {
    super()
    // 方法一：（推荐使用）
    // 构造函数只执行一次，所以函数this 指向更正的代码也只执行一次。
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    console.log(this)
  }
  render () {
    // 方式二：跟内联函数类似，不推荐，应避免使用
    // 问题：render 放啊每次执行时都会调用bind方法生成新的函数实例。
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>按钮</button>
      </>
    )
  }
}
