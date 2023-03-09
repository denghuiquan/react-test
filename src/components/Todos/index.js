import React from 'react'
import TodoApp from './TodoApp'
import TodoHeader from './Header'
import TodoFooter from './Footer'
import TodoMain from './Main'

export default function (props) {
  return (
    <TodoApp>
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </TodoApp>
  )
}
