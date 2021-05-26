import React, { Fragment, useEffect, useState } from 'react'
import './ListTodo.css'
import EditTodo from './EditTodo'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Button } from 'react-bootstrap'

const ListTodo = () => {
  const [todos, setTodos] = useState([])

  //deleteTodo

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
        method: 'DELETE',
      })

      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5001/todos')
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  console.log(todos)
  return (
    <Fragment>
      <>
        {todos.map((todo) => (
          <div>
            {todo.task_name}

            <Button key={todo.todo_id} variant='primary'>
              <EditTodo />
            </Button>

            <button
              className='btn btn-danger'
              key={todo.todo_id}
              onClick={() => deleteTodo(todo.todo_id)}
            >
              Delete
            </button>
          </div>
        ))}
      </>
    </Fragment>
  )
}

export default ListTodo
