import React, {useState} from 'react'
import Header from './components/Header'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  return (
    <div className="container">
       <div className="app-wrapper">
         <div>
            <Header />
         </div>
         <div>
           <Form
           input= {input}
           setInput={setInput}
           todos={todos}
           setTodos={setTodos} 
           editTodo={editTodo}
           setEditTodo={setEditTodo}                   
           />
           <div>
             <TodoList 
             todos={todos} 
             setTodos={setTodos} 
             setEditTodo={setEditTodo}
             />
           </div>
         </div>
       </div>
    </div>
  )
}

export default App