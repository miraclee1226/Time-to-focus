import React from "react"
import TodoListItem from "./TodoListItem"

function TodoList({todos, onRemove, onToggle, addDone, removeDone, checkedList}) {
  return(
    <div>
      {
        todos.map(todo => (
          <TodoListItem {...todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} addDone={addDone} removeDone={removeDone} addDone={addDone} />         
        )
        )
      }
    </div>
   
  )
}

export default React.memo(TodoList);