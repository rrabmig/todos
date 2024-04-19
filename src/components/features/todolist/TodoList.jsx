import React, { useEffect, useMemo, useState } from 'react'
import classes from './TodoList.module.css'
import Task from '../../entities/task/Task'
import UI from './ui/UI'
import Modal from '../../entities/Modal/Modal'

const TodoList = ({initial}) => {
    const [newTask, setNewtask] = useState('')
    const [taskList, setTaskList] = useState((JSON.parse(initial)).todos)
    const [filter, setFilter] = useState('All')
    const [filteredTask, setFilteredTask] = useState('')

    const TodosLeft = useMemo(()=> taskList.reduce(
        (left, task)=>task.completed ? left : left + 1, 0),[ taskList])
    
    useEffect(()=>{
        switch (filter) {
            case 'All':
                setFilteredTask(taskList)
                break
            case 'Active':
                setFilteredTask(taskList.filter(task => task.completed === false))
                break
            case 'Completed':
                setFilteredTask(taskList.filter(task => task.completed === true))
                break
            default:
                setFilteredTask(taskList)
        }
        let toStorage = {todos: taskList}
        toStorage = JSON.stringify(toStorage)
        localStorage.setItem('todos', toStorage)
    }, [filter, taskList])

    function addNewTask (e) {
        if (e.keyCode === 13) {
            setTaskList(prev => [{id:Date.now(), text:e.target.value, completed:false}, ...prev])
            setNewtask('')
        }
    }

    function markCompleted(e) {
        setTaskList(taskList.map(task => task.id === +e.target.id ? { ...task, completed: !task.completed} : task))
    }

    function clearCompleted () {
        setTaskList(taskList.filter(task => task.completed === false))
    }

  return (
    <div className={classes.TodoList}>
        <input
            className={classes.input}
            type='text'
            placeholder=' > What needs to be done?'
            value={newTask}
            onKeyDown={addNewTask}
            onChange={(e)=>{setNewtask(e.target.value) }}
        />
        <div className={classes.list}>
            {filteredTask.length === 0
            ? <Modal filter={filter}/>
            :filteredTask.map((task)=>
            <Task
            markCompleted={markCompleted}
                key={task.id}
                id={task.id}
                text={task.text}
                completed={task.completed}
            />
            )}
        </div>
        <UI TodosLeft={TodosLeft} setFilter={setFilter} filter={filter} clearCompleted={clearCompleted}/>
    </div>
  )
}

export default TodoList