import React, { useState } from 'react';
import "./Carousal.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './UserContext';


const Login = () => {
  // const [userAuth,setuserAuth] = useAuth() 
  const [inp , setInp] = useState({
    email:"",
    password:""
  })
  
  const navigate = useNavigate()

  const handelInp = (e)=>{
  const name  = e.target.name
  const value = e.target.value

  setInp({
    ...inp,
    [name]:value
  })
     
  }

  const login = async (e)=>{
  e.preventDefault()
  try {
    const res = await axios.post("http://localhost:5433/login",inp)
    console.log(res,"response login");
    if (res.status === 200) {
      // const res_data = res.data.token
      // console.log(res_data,"hello");
      localStorage.setItem("token",res.data.token)
      navigate("/page")
    }
    else{
      alert("login fails")
    }
  } catch (error) {
    console.log(error,"login error"); 
  }
  }

  return (
    <>
    <section className="vh-50">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 text-black">
        <div className="  ms-xl-4">
         
          <span className="h1 fw-bold mb-0">Loomkar</span>
        </div>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form style={{width: '23rem'}} onSubmit={login}>
            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Log in</h3>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" name='email' value={inp.email} onChange={handelInp} id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form2Example18">Email address</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" name='password' value={inp.password} onChange={handelInp} id="form2Example28" className="form-control form-control-lg" />
              <label className="form-label"  htmlFor="form2Example28">Password</label>
            </div>
            <div className="pt-1 mb-4">
              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-lg btn-block" type="submit">Login</button>
            </div>
           
            <p>Don't have an account? <Link to={"/"} className="link-info">Register here</Link></p>
          </form>
        </div>
      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://content.jdmagicbox.com/comp/valsad/c2/9999px260.x260.180217020957.r3c2/catalogue/global-desi-women-clothing-store-valsad-ujftgiq5bj.jpg" alt="Login " className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Login
