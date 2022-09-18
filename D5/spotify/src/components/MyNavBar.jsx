import React from 'react'
import { Button, Form, NavbarBrand  } from 'react-bootstrap'
import { FaHome, FaBookOpen } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getArtAction } from '../components/redux/actions'
import { Link } from 'react-router-dom'

const MyNavBar = () => {

  const [query, setQuery] = useState('')
    
  const dispatch = useDispatch()

  const handleChange = (e) => {
      setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch(getArtAction(query))
      console.log(query);
  }
  return (
    <nav
    className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between align-items-start"
    id="sidebar"
  >
    <div >
      <Link to='/' className="navbar-brand">
        <img
          src="../logo/Spotify_Logo.png"
          alt="Spotify_Logo"
          width="131"
          height="40"
        />
      </Link>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <ul className='list-link'>
            <Link to={'/'}>
              <li>
              <a className="nav-item nav-link "
                ><FaHome /> Home
              </a>
              </li>
            </Link>
            <li>
              <a className="nav-item nav-link" href="#"
                ><FaBookOpen /> Your
                Library 
              </a>
            </li>
            <li>
              <Form onSubmit={handleSubmit} className="input-group mt-3 mr-3">
                <input
                  value={query}
                  onChange={handleChange}
                  type="text"
                  className="form-control mb-2"
                  id="searchField"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div
                  className="input-group-append"
                  style={{'marginbottom': '4%'}}
                >
                  <button
                    v/* ariant='dark' */
                    className="btn btn-outline-secondary "
                    type="submit"
                    id="button-addon1"
                  >
                    GO
                  </button>
                </div>
              </Form>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="nav-btn">
      <Button variant='light' className="btn signup-btn" type="button">Sign Up</Button>
      <Button variant='dark' className="btn login-btn" type="button">Login</Button><br/>
      <a href='#'>Cookie Policy</a> |
      <a href='#'> Privacy</a>
    </div>
  </nav>
  )
}

export default MyNavBar
