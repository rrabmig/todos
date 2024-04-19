import React from 'react'
import classes from './Todos.module.css'
import TodoList from '../../features/todolist/TodoList'

const Todos = () => {
  let initial = localStorage.getItem('todos')
  if (initial === null) {
    let firsttask = {todos:[{id:1, text:'Взять меня на работу', completed: true}]}
    initial = JSON.stringify(firsttask)
    localStorage.setItem('todos', initial)
  }

  return (
    <div className={classes.todosContainer}>
        <h1 className={classes.title}> todos</h1>
        <TodoList initial={initial}/>
      </div>
  )
}

export default Todos