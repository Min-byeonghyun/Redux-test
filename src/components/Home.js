import React, { useState } from 'react'

export default function Home() {
const[text,setText] = useState('')

  const textChange = (e) => {
    setText(e.target.value);

  }
  const submitForm = (e) => {
    e.preventDefault();
    setText('')
    console.log(text);
  }


  return (
    <>
    <h1>To Do</h1>
    <form onSubmit={submitForm}>
      <input type='text' value={text} onChange={textChange}/>
      <button>추가</button>
      </form>    
    </>
  )
}
