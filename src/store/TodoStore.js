import { action, computed, flow, observable, makeObservable } from 'mobx'
import axios from 'axios'
import Todo from './Todo'

export default class TodoStore {
  constructor () {
    this.todos = []
    this.filterCondition = 'All'

    makeObservable(this, {
      todos: observable,
      filterCondition: observable,
      loadTodos: flow,
      addTodo: action.bound,
      createdId: action.bound,
      removeTodo: action.bound,
      unCompletedTodosCount: computed,
      changeFilterCondition: action.bound,
      filterTodos: computed,
      clearCompletedTodos: action.bound
    })
    this.loadTodos()
  }
  * loadTodos () {
    let response = yield axios.get('http://localhost:3001/todos')
    response.data.forEach(todo => this.todos.push(new Todo(todo)))
  }

  addTodo (title) {
    this.todos.push(new Todo({ title, id: this.createdId() }))
  }
  // 创建自增ID
  createdId () {
    console.log(this.todos.length)
    if (!this.todos.length) return 1
    return this.todos.reduce((id, todo) => (id < todo.id ? todo.id : id), 0) + 1
  }

  removeTodo (id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  get unCompletedTodosCount () {
    return this.todos.filter(todo => !todo.isCompleted).length
  }

  changeFilterCondition (condition) {
    this.filterCondition = condition
  }
  get filterTodos () {
    switch (this.filterCondition) {
      case 'Active':
        return this.todos.filter(todo => !todo.isCompleted)
      case 'Completed':
        return this.todos.filter(todo => todo.isCompleted)

      default:
        return this.todos
    }
  }

  clearCompletedTodos () {
    this.todos = this.todos.filter(todo => !todo.isCompleted)
  }
}
