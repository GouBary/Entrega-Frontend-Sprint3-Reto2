import React from 'react'
import styled  from 'styled-components'




export default function TodoItem({todo,onComplete,onDeleteItem}) {


  const Btn1=styled.button`
  font-family: 'Roboto', sans-serif;
  font-size:30px;
  border:none;
  margin-left:350px;
  background-color:transparent;
  color:RGB(84,86,111);
`;
 
  const getStyle = () => {
    return {
        textDecoration: todo.completed ? 'line-through' : 'none',
        margin: '50px 5px',
    }
  }


  return (
    <div style= {getStyle()}>
        <input type='checkbox' checked={todo.completed} 
        onChange ={() => onComplete(todo.id)}/>
        {todo.task }
        <Btn1 className='add-btn' onClick={ () => onDeleteItem(todo.id)}>X</Btn1>
    </div>
  )
}
