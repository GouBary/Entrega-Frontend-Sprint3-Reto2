import React, { useState } from 'react'
import styled from 'styled-components';

export default function TodoForm({addTodo}) {

    const [userInput, setUserInput] = useState('');

    const handOnChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (userInput.trim() !== '') {
            addTodo(userInput);
            setUserInput('');
        }
    }

    

  return (
    <div style={{margin:"20", width:"500px"}}>
        <form onSubmit={handleSubmit}>
            <input type='text' value={userInput} onChange={handOnChange}/>
        </form>
    </div>
  )
}
