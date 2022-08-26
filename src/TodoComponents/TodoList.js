import TodoListItem from "./TodoListItem"

function TodoList({todos, onRemove, onToggle}) {
  return(
    <div>
      {
      todos.map(todo => (
        <TodoListItem {...todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} /> 
    ))}
    </div>
   
  )
}

export default TodoList