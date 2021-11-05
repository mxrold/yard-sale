import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className="NotFound">
      <div>
        <h1>404</h1>
        <p>Oops! We couldn't find this page</p>
        <Link to="/" className="primary-button">Back home</Link>
      </div>
    </div>
  )
}

export default NotFound