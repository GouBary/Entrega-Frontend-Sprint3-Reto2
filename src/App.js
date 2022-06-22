import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import styled from 'styled-components'
import data from './data.json'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './index.css'




function App() {
  

  const[todos,setTodos] = useState(data);

  const onComplete = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id)  {
        todo.completed = !todo.completed
      }
      return todo
    }
    ))}
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
   
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  
const onDeleteItem = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id))
}

const addTodo = (newTodo) => {
  let newItem = { id: todos.length + 1, task: newTodo, completed: false }
  setTodos([...todos, newItem])
  }; 

 
  return (
    
    
    <div className="app" data-theme={theme}>
      
      <div className='login'>
      
        <h1> TODO {tab} {tab} {tab} {tab} {tab} {tab}<i onClick={switchTheme} class='fas fa-toggle-on '></i></h1>
       
        <div className='container'>
        <TodoForm addTodo={addTodo} />
        
         </div>
       
       </div>
       
       <div className='container2'>
          
          <TodoList todos ={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
          
         </div>
        
       
       
      
      
    </div>
  );
}

export default App;