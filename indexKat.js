const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//Routes

//create a category

app.post('/categories', async (req, res) => {
  try {
    const { category_name } = req.body

    const newCategory = await pool.query(
      'INSERT INTO category(category_name) VALUES($1) RETURNING *',
      [category_name]
    )

    res.json(newCategory)
  } catch (err) {
    console.error(err.message)
  }
})

//get all categories

app.get('/categories', async (req, res) => {
  try {
    const allCategories = await pool.query('SELECT * FROM category ')
    res.json(allCategories.rows)
  } catch (err) {
    console.error(err.message)
  }
})

//get a todo

app.get('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params
    const category = await pool.query(
      'SELECT * FROM category WHERE category_id = $1',
      [id]
    )

    res.json(category.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

//update todo

app.put('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { category_name } = req.body
    const updateTodo = await pool.query(
      'UPDATE category SET category_name = $1 WHERE category_id=$2',
      [category_name, id]
    )

    res.json('Category was updated.')
  } catch (err) {
    console.error(err.message)
  }
})

//delete a todo

app.delete('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await pool.query(
      'DELETE FROM category WHERE category_id = $1',
      [id]
    )

    res.json('Category was deleted.')
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log('server has started on port 5000')
})
