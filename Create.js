import React, { Fragment, useState } from 'react'
import './create.css'
import ListCategory from './ListCategory'
import logo1 from './logo1.svg'
import { propTypes } from 'react-bootstrap/esm/Image'

const Create = () => {
  const [description, setDescription] = useState({
    task_name: 'New Task',
    notes: 'Notes for the task',
    date: '',
    category_id: '',
  })

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { description }

      const response = await fetch('http://localhost:5001/todos', {
        method: 'POST',
        header: { ' Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      window.location = '/'
      console.log(response)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <table>
        <h2 className='text-center '>
          Create <br /> New Task
        </h2>
        <input
          type='text-center'
          className='text-center'
          className='textt'
          name='description'
          placeholder='Task name..'
          value={description.task_name}
          onChange={(e) => setDescription(e.target.value)}
        />
      </table>
      <div
        className='logo1'
        style={{
          background: `url(${logo1})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h4 className='text1 '> Notes</h4>
        <br />
        <br />
        <input
          type='text'
          placeholder='notes for the task'
          value={description.notes}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <h4 className='text1'>Date</h4>
        <br />
        <br />
        <br />
        <input
          type='date'
          className='date-center'
          value={description.date}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <br />
        <br />
        <h4 className='category'>Category</h4> <br />
        <ListCategory {...propTypes} id={propTypes.category_id} />
        <br />
        <br />
        <button className='createbutton' onClick={onSubmitForm}>
          Create Task
        </button>
      </div>
    </Fragment>
  )
}

export default Create
