import React from 'react'
function TodoEditing ({ todo }) {
  const { modifyTodoIsEditing, title } = todo
  return <label onDoubleClick={modifyTodoIsEditing}>{title}</label>
}

export default TodoEditing
