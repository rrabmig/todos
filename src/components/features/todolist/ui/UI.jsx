import React from 'react'
import classes from './UI.module.css'

const UI = ({TodosLeft, setFilter , filter, clearCompleted}) => {
  return (
    <div className={classes.UI}>
            <div>
                {TodosLeft} items left
            </div>
            <div>
                <button
                    className={[classes.button, (filter === 'All'? classes.active:'')].join(' ')}
                    onClick={()=>setFilter('All')}
                    >
                    All
                </button>
                <button
                    className={[classes.button, (filter === 'Active'? classes.active:'')].join(' ')}
                    onClick={()=>setFilter('Active')}
                >
                    Active
                </button>
                <button
                    className={[classes.button, (filter === 'Completed'? classes.active:'')].join(' ')}
                    onClick={()=>setFilter('Completed')}
                >
                    Completed
                </button>
            </div>
            <button
                onClick={clearCompleted}
                className={classes.button}
            >
                Clear completed
            </button>
        </div>
  )
}

export default UI