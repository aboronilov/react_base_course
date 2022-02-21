import React from 'react'
import PropTypes from 'prop-types';

function TodoItem({todo, index}) {
  return (
    <li>
        <strong>{index + 1}</strong>
        {todo.title}
    </li>
  )
}

TodoItem.propTypes = {
    index: PropTypes.number,
    todo: PropTypes.object.isRequired
}

export default TodoItem;
