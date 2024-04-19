import React from 'react'
import classes from './Task.module.css'

const Task = ({id, text, completed, markCompleted}) => {
  return (
    <div 
        id = {id}
        className={classes.Task}
        onClick = {markCompleted}
    >
      <div
        id = {id} 
        className={[classes.circle, (completed? classes.mark :'')].join(' ')}
        onClick = {markCompleted}  
      />
      <div 
        className={[classes.text, (completed? classes.completed :'')].join(' ')}
        id = {id}
        onClick = {markCompleted}  
      >
        {text}
      </div>
    </div>
  )
}

export default Task