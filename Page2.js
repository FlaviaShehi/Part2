import React, { Fragment, useState, useEffect, Component } from 'react'
import './page2.css'
// import logo2 from './logo2.svg'
// import logo2a from './logo2a.svg'
import { Container, Row, Col } from 'react-grid-system'

import ListTodo from './ListTodo'
import ListCategory from './ListCategory'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'
import Scroll from './Scroll.js'
import { propTypes } from 'react-bootstrap/esm/Image'
import EditTodo from './EditTodo'

const Page2 = () => {
  const [categories, setCategories] = useState([])
  const [todos, setTodos] = useState([])

  //deleteTodo

  const deleteCategory = async (id) => {
    try {
      const deleteCategory = await fetch(
        `http://localhost:5000/categories/${id}`,
        {
          method: 'DELETE',
        }
      )

      setCategories(
        categories.filter((category) => category.category_id !== id)
      )
    } catch (err) {
      console.error(err.message)
    }
  }

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/categories')
      const jsonData = await response.json()

      setCategories(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  console.log(categories)

  // ListTodo

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
        method: 'DELETE',
      })

      setCategories(categories.filter((todo) => todo.todo_id !== id))
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
      <form>
        <header>
          <ListCategory />
          <br />
          <br />
          <Dropdown as={ButtonGroup}>
            <Button variant='success' className='deletecat'>
              Delete Category
            </Button>

            <Dropdown.Toggle
              split
              variant='success'
              id='dropdown-split-basic'
            />
            <Dropdown.Menu>
              {categories.map((cat) => (
                <Dropdown.Item
                  href='#/action-1'
                  key={cat.category_id}
                  onClick={() => deleteCategory(cat.category_id)}
                >
                  {cat.category_name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <br />
          <ListTodo />
          {/* <EditTodo /> */}
        </header>
      </form>
    </Fragment>
  )
}

export default Page2
