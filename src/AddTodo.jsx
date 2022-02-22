import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function AddTodo({onCreate}) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()
    
    if (value.trim()) {
        onCreate(value)
        setValue('')
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)}></input>
      <button type="submit">Добавить дело</button>
    </form>
  );
}

AddTodo.propTypes={
    onCreate: PropTypes.func.isRequired
}
