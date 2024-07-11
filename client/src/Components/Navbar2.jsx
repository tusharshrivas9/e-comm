import React from 'react'
import "../Components/Navbar.css"
import { Link } from 'react-router-dom';
const Navbar2 = () => {
  return (
    <>
      
      <div className="container-fluid w-100 bg-body-tertiary">

      <div className="d-flex justify-content-center">

        <ul className='d-flex list-unstyled text-decoration-none'>
            <Link to={"/page"} className='mx-3  text-decoration-none text-secondary'>Home</Link>
            <Link to={"/product"} className='mx-3 text-decoration-none text-secondary'>Products</Link>
            <Link to={"/about"} className='mx-3 text-decoration-none text-secondary'>About us</Link>
            <Link to={"/contact"} className='mx-3 text-decoration-none text-secondary'>Contact us</Link>
        </ul>
      </div>
      </div>
      
    </>
  )
}

export default Navbar2
