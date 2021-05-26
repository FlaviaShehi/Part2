import React, { Fragment } from 'react'
import logo1a from './logo1a.svg'
import './page1a.css'
import ListTodo from './ListTodo'
import EditTodo from './EditTodo'

const Page1a = () => {
  return (
    <Fragment>
      <form>
        <img src={logo1a} className='logo1a' />

        <h3>Hello, Welcome</h3>

        <h4>Recently: </h4>

        <tbody>
          {/* <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr> */}

          <ListTodo className='taskuu' />
          {/* <EditTodo /> */}
        </tbody>
      </form>
    </Fragment>
  )
}

export default Page1a
