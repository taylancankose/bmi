import React from 'react'
import weight from '../assets/weight-scale.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
  <div className="container-fluid">
    <img src={weight} height='50px' className='mx-3' alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
      </ul>
      <Link to="/" className="nav-link text-white ">Home</Link>
      <Link to='/what-is-bmi' className="nav-link text-white " >What is BMI</Link>
      <Link to='/about' className="nav-link text-white me-5">About</Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar