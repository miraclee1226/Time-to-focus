import TodoListItem from "./TodoListItem"

function TodoList({todos, onRemove, onToggle, addDone, removeDone, }) {
  return(
    <div>
      {
      todos.map(todo => (
        <TodoListItem {...todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} addDone={addDone} removeDone={removeDone} /> 
    ))}
    </div>
   
  )
}

export default TodoList