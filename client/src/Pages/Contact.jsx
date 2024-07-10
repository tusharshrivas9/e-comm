import React, { useState } from 'react';
import images from '../Data/Images';
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";
import axios from 'axios';
import {toast,ToastContainer } from "react-toastify";

const Contact = () => {

  const [text , settext] = useState({
    name:"",
    email:"",
    message:""
  })

  const handelSubmit = (e)=>{
    const name = e.target.name
    const value = e.target.value

    settext({
      ...text,
      [name]:value
    })
  }
 
const handleOnsubmit =async (e)=>{
  e.preventDefault()
  try {
    const response = await axios.post("http://localhost:5433/contact",text)
    if (response.status === 200) {
      toast("Message submitted successfully 📨")
    }
  } catch (error) {
    console.log(error,"error in contact");
    toast.error("Failed to submit message");
  }
}

  return (
    <>
    <Navbar/>
    <Navbar2/>

       <div className="img container-fluid p-0">
     <img src={images.contact} alt="" className='img-fluid w-100' srcset="" />
     </div> 
     <div className=" container mx-5 ms-auto mt-5 ">
       <h1 style={{color:"#2B2B2B"}}>Contact us</h1>
       <p style={{color:"#656565"}} className='w-75'>Lorem ipsum dolor sit amet consectetur. Dignissim curabitur diam quis leo commodo ultrices. Netus aliquam suspendisse suspendisse et commodo nullam tristique nunc aenean.</p>


   <div className="mb-5">
            <form onSubmit={handleOnsubmit} >
          <div className="form-group d-flex gap-4 w-75 ">
           
            <input type="text" className="form-control" name='name' onChange={handelSubmit} value={text.name} id="name" placeholder=" name" />
          
          
            
            <input type="email" className="form-control" name='email' onChange={handelSubmit} value={text.email} id="email" placeholder=" email" />
           </div>
          <div className="form-group mt-3 w-75">
           
            <textarea className="form-control" name='message' onChange={handelSubmit} value={text.message} id="message" placeholder='message' rows={3} defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-dark mt-4 py-2">Submit</button>
          <ToastContainer position='top-center' theme='dark'/>
        </form>
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default Contact
