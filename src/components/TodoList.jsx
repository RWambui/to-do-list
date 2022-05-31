import React from 'react'

const TodoList = ({todos, setTodos}) => {
  return (
    <div>
      {todos.map((todos) => (
        <li 
        className="list-item" 
        key={todos.id}
        >

          <input 
          type="text" 
          value={todos.title} 
          className='list' 
          onChange={(e) => e.preventDefault}
          />

        </li>
      ))}
    </div>
  )
}

export default TodoList