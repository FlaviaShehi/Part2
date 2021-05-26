import React, { Fragment, useEffect, useState } from 'react'
import './ListCat.css'
import EditTodo from './EditTodo'
import { propTypes } from 'react-bootstrap/esm/Image'
const axios = require('axios')

const ListCategory = () => {
  // const [categories, setCategories] = useState([
  // {
  //     category_id: '',
  //     category_name: '',
  //   },
  // ])

  const [categories, setCategories] = useState('')

  const getCat = async () => {
    try {
      const res = await axios.get('http://localhost:5000/categories')
      // console.log('Kerkesa')

      console.log(res)
      setCategories(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!categories) {
      getCat()
    }
  }, [])

  // fetch('http://localhost:5000/categories', {
  //   method: 'GET',
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .then((d) => {
  //     console.log('datat qe do kalojne ne state')
  //     console.log(d)
  //     setCategories(d)
  //     console.log(' state =>')

  //     console.log(categories)
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error)
  //   })

  // const jsonData = response.json()

  // try {
  //   const response = await fetch('http://localhost:5000/categories')
  //   const jsonData = response.json()
  //   console.log(jsonData)
  //   setCategories(jsonData)
  // } catch (err) {
  //   console.error(err.message)
  // }
  // const { category_name, category_id } = propTypes

  //delete Category

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

  // const getCategories = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/categories')
  //     const jsonData = await response.json()

  //     setCategories(jsonData)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  // useEffect(() => {
  //   console.log('ktu o bos')
  //   console.log(categories)
  // }, [categories])

  // console.log(categories)

  // const getCategories = async () => {
  //   // console.log(e)
  //   try {
  //     const jsonData = await fetch(`http://localhost:5000/categories`, {
  //       method: 'GET',
  //     })
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  // const clickHandler = (category) => {
  //   getCat(category.category_id)
  // }

  // function CategoryButton() {
  //   return (
  //     <Fragment>

  //     </Fragment>
  //   )
  // }

  return (
    <Fragment>
      {categories &&
        categories.map((category) => (
          <button
            className=''
            key={category.category_id}
            value={category.category_id}
            onClick={(category) => {
              getCat(category.target.value)
            }}
          >
            {category.category_name}
          </button>
        ))}
    </Fragment>
  )
}

export default ListCategory
