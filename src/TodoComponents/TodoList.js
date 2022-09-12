import React from "react"
import TodoListItem from "./TodoListItem"

function TodoList({todos, setTodos, onRemove, onToggle, addDone, removeDone}) {
  return(
    <div>
      {
        todos.map(todo => (
          <TodoListItem {...todo} key={todo.id} todos={todos} setTodos={setTodos} onRemove={onRemove} onToggle={onToggle} addDone={addDone} removeDone={removeDone} />         
        )
        )
      }
    </div>
  )
}

export default React.memo(TodoList);