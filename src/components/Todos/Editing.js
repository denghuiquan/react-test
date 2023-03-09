import React, { useEffect, useRef } from 'react'
function Editing ({ todo }) {
  const ref = useRef(null)
  const { modifyTodoIsEditing, modifyTodoTitle, title, isEditing } = todo
  useEffect(() => {
    if (isEditing) {
      ref.current.focus()
    }
  }, [isEditing])

  return (
    <input
      ref={ref}
      contentEditable={isEditing}
      onDoubleClick={modifyTodoIsEditing}
      onBlur={() => modifyTodoTitle(ref.current.value)}
      className='edit'
      defaultValue={title}
    />
  )
}

export default Editing
