import React from 'react'

const TodoList = ({todos, setTodos, setEditTodo }) => {

  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  
  const completedTask = (todo) => {
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id) {
          return {...item, completed: !item.completed}
        }
        return item 
      })
    )
  }

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
  }

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id} >
          <input 
            type="text" 
            value={todo.title} 
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault}
          />
          <button className="button-complete task-button">
            <i className="fa fa-check-circle" onClick={() => completedTask(todo)}></i>
          </button>
          <button className="button-edit task-button">
            <i className="fa fa-edit" onClick={() => handleEdit(todo)}></i>
          </button>
          <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
            <i className="fa fa-trash"></i>
          </button>
        </li>
      ))}
    </div>
  )
}

export default TodoList