import React, { useState } from "react";
import PropTypes from 'prop-types'

function useInputValue(defaultValue='') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value: value,
      onChange: event => setValue(event.target.value)
    },
    value: () => value,
    clear: () => setValue(''),
  }
}

function AddTodo({onCreate}) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
        onCreate(input.value())
        input.clear()
    }
  }

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind}></input>
      <button type="submit">Добавить задачу</button>
    </form>
  );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
