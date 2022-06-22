import React from 'react'
import TodoItem from './TodoItem'



export default function TodoList({todos,onComplete,onDeleteItem}) {
  return (
    <div>{
          todos.map((todo, index)=>(
            <TodoItem key={`todo-${index}`} todo={todo} onComplete={onComplete} onDeleteItem ={onDeleteItem}/>
          ))
       
          }
    </div>
  )
}
