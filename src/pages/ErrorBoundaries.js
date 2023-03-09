import React, { Component } from 'react'
import ErrorTrigger from '../components/ErrorTrigger'

export default class ErrorBoundaries extends Component {
  constructor () {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch (error) {
    // 可以将程序错误信息记录到远端服务器
    console.log('componentDidCatch')
  }
  static getDerivedStateFromError () {
    console.log('getDerivedStateFromError')
    return {
      // 该返回对象会和state 对象进行合并
      hasError: true
    }
  }
  render () {
    if (this.state.hasError) {
      return <>我是备用UI界面</>
    }
    return (
      <>
        <ErrorTrigger />
      </>
    )
  }
}
