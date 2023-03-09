import { action, makeObservable, observable } from 'mobx'
import axios from 'axios'

export default class Todo {
  constructor (todo) {
    this.id = todo.id
    this.title = todo.title
    this.isEditing = false
    this.isCompleted = todo.isCompleted || false
    makeObservable(this, {
      title: observable,
      isCompleted: observable,
      isEditing: observable,
      modifyTodoIsCompleted: action.bound,
      modifyTodoIsEditing: action.bound,
      modifyTodoTitle: action.bound
    })
  }

  modifyTodoIsCompleted () {
    this.isCompleted = !this.isCompleted
  }

  modifyTodoIsEditing () {
    this.isEditing = !this.isEditing
  }

  modifyTodoTitle (title) {
    this.title = title
    this.isEditing = false
  }

  // 修改远端服务器数据
  * modifyTodoFromServer (todo) {
    let response = yield axios.put(
      `http://localhost:3001/todos/${todo.id}`,
      todo
    )
    this.title = response.data.title
    this.id = response.data.id
  }
}
