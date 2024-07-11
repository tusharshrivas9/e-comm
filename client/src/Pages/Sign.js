import React, { useState } from 'react';
import about from "../images/about.png";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Sign = () => {
  const [first , setFirst] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    address:""

})

const handelInp = (e)=>{

    const name = e.target.name
    const value = e.target.value

    setFirst({
        ...first,
        [name]:value
    })
}

const navigate = useNavigate()

const register = async(e)=>{
e.preventDefault()
try {
    const response = await axios.post("http://localhost:5433/register",first)
    console.log(response,"register");
    if (response.status === 200) {
        navigate('/login')
    }else{
        alert("register fails")
    }  
} catch (error) {
   console.log(error,"axios signin");  
}

}
 
  return (
    <>
 {/* Section: Design Block */}
<section className="text-center">
  {/* Background image */}
  <img src={about} alt='about' className="p-5 bg-image w-100" style={{height: 300}} />
  {/* Background image */}
  <div className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary" style={{marginTop: '-100px', backdropFilter: 'blur(30px)'}}>
    <div className="card-body py-5 px-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Sign up </h2>
          <form onSubmit={register}>
            {/* 2 column grid layout with text inputs for the first and last names */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input type="text" name='name' value={first.name} onChange={handelInp} id="form3Example1" className="form-control" />
                  <label className="form-label" htmlFor="form3Example1">Name</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input type="phone" name='phone' value={first.phone} onChange={handelInp} id="form3Example2" className="form-control" />
                  <label className="form-label" htmlFor="form3Example2">phone</label>
                </div>
              </div>
              {/* Email input */}
              <div className="col-md-6 mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input type="email" name='email' value={first.email} onChange={handelInp} id="form3Example2" className="form-control" />
                  <label className="form-label" htmlFor="form3Example2">Email</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input type="password" name='password' value={first.password} onChange={handelInp} id="form3Example2" className="form-control" />
                  <label className="form-label" htmlFor="form3Example2">password</label>
                </div>
              </div>
              
            </div>
            
           
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" name='address' value={first.address} onChange={handelInp} id="form3Example4" className="form-control" />
              <label className="form-label" htmlFor="form3Example4">Address</label>
            </div>
           
         
            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
              Sign up
            </button>
            <p>Already have an account? <Link to={"/login"} className="link-info">Login</Link></p>
           
          </form>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  )
}

export default Sign
