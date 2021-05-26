const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//Routes

//create a todo

app.post('/todos', async (req, res) => {
  try {
    const { task_name, category_id, notes, date } = req.body

    // console.log(category_id)

    const newTodo = await pool.query(
      'INSERT INTO todo(task_name,category_id, notes, date) VALUES($1,$2,$3,$4) RETURNING *',
      [task_name, category_id, notes, date]
    )

    res.json(newTodo)
  } catch (err) {
    console.error(err.message)
  }
})

//get all tdos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo ')
    res.json(allTodos.rows)
  } catch (err) {
    console.error(err.message)
  }
})

//get a todo

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])

    res.json(todo.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

//update todo

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { notes } = req.body
    const updateTodo = await pool.query(
      'UPDATE todo SET notes = $1  WHERE todo_id=$2',
      [notes, id]
    )

    res.json('Todo was updated.')
  } catch (err) {
    console.error(err.message)
  }
})

//delete a todo

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [
      id,
    ])

    res.json('Todo was deleted.')
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5001, () => {
  console.log('server has started on port 5001')
})
