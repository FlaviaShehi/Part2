import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import './App.css'

// //components
import Page1 from './components/Page1'
import ListTodo from './components/ListTodo'
import Page2 from './components/Page2'
import Create from './components/Create'
import Page1a from './components/Page1a'

const App = () => {
  return (
    <Fragment>
      {' '}
      <nav class='navbar-nav s-auto'>
        <div class='container-fluid'>
          <div class='navbar-header'>
            <div class='topnav-right'>
              <a>
                <b>This is a notebook</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Container>
        <Row>
          <Col lg={3}>
            <br /> <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <button className='butonii1'>-Add New</button>
            <br /> <br />
            <button className='butonii2'>-All Tasks</button>
          </Col>

          <Col lg={6}>
            <Page2 />
          </Col>

          <Col lg={3}></Col>
        </Row>
      </Container>
    </Fragment>
  )
}
export default App
