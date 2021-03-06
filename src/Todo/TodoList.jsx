import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
  let styles = {
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
  };
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem 
          key={todo.id} 
          index={index} 
          todo={todo}
          onChange={props.onToggle} 
      />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
