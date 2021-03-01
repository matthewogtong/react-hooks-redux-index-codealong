import React from "react";
import { useSelector } from "react-redux"
import ToDo from "./Todo"

function TodoContainer() {

  const todos = useSelector(state => state.todos.entities)

  const displayToDos = todos.map((todo, index) => {
    return (
      <ToDo key={index} text={todo}/>
    )
  })  

  return (
    <ul>{displayToDos}</ul>
  )
}

export default TodoContainer;
