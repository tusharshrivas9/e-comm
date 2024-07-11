import React, { useEffect, useState } from 'react';
import ima from "../images/image2.png"
// import dupattaData from '../Data/Dupatta';
// import dataTwo from '../Data/item2';
import { Col, Container, Row } from "react-grid-system";
// import bagsData from '../Data/Bags';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import axios from 'axios';
import { add } from '../Redux/CartSlice';
import { useDispatch} from 'react-redux';
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Page2 = () => {

  const [collect , setCollect] = useState([])

  const [dupatta  ,  setDupatta] = useState([])

  const [bags , setBags] = useState([])

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5433/uploads")
        setProducts(response.data.products) // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])




  const dispatch = useDispatch()

  useEffect(()=>{

    const fetchCollection =async ()=>{
      try {
        const response = await axios.post("http://localhost:5433/kurti1")
       
       setCollect(response.data)
      } catch (error) {
        console.log(error,"error in page2 fetching");
      }
      
    }
    fetchCollection()

  },[])


  useEffect(()=>{
    const fetchDupatta = async()=>{
      try {
        const response = await axios.post("http://localhost:5433/dupatta")
        setDupatta(response.data)
      } catch (error) {
        console.log(error,"error in dupatta page2");
      }
      
    }
    fetchDupatta()
  },[])
  
  useEffect(()=>{
    const fetchbags = async ()=>{
      try {
        const response  = await axios.post("http://localhost:5433/bags")
        setBags(response.data)
      } catch (error) {
        console.log(error,"error in bags");
      }
    }
    fetchbags()
  },[])

  const handleadd = (item)=>{
    dispatch(add(item))
    toast("Added to your cart")
  }
  

 


  return (
    <>
    <Navbar/>
    <Navbar2/>
   
     <div className="img container-fluid p-0">
     <img src={ima} alt="" className='img-fluid w-100' srcset="" />
     </div> 
    <Container fluid className='mx-5'>
     <div className="mx-5 ms-auto mt-5 ">
       <h1 style={{color:"#2B2B2B"}}>Our kurti collection</h1>
       <p style={{color:"#656565"}}>Lorem ipsum dolor sit amet consectetur. Dui dui orci turpis mi at tempor nisl ullamcorper etiam.</p>
     </div>
    <Row className="justify-content-center mt-5 ">
          {
            collect.map((item, index) => (
              <Col md={3} sm={6} xs={12} key={index} className="mb-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img className="card-img-top" src={item.photo} alt="Card" />
                  <div className="card-body d-flex justify-content-between align-items-center my-1">
                    <p className="card-text m-0">{item.name}</p>
                    <p className="card-text m-0">{item.cost}</p>
                  </div>
                  <button className=' text-dark py-2' onClick={()=>handleadd(item)} >Add to cart</button>
                  <ToastContainer position='top-center' theme='dark'/>
                </div>
              </Col>
            ))
          }
        </Row>
        <div className="btn d-flex justify-content-center">
        <button className='bg-dark text-white py-2 px-4 p-4'>View All</button>
        </div>
    </Container>
    <Container fluid className='mx-5'>
     <div className="mx-5 ms-auto mt-5 ">
       <h1 style={{color:"#2B2B2B"}}>Our Dupatta collection</h1>
       <p style={{color:"#656565"}}>Lorem ipsum dolor sit amet consectetur. Dui dui orci turpis mi at tempor nisl ullamcorper etiam.</p>
     </div>
    <Row className="justify-content-center mt-5 ">
          {
            dupatta.map((item, index) => (
              <Col md={3} sm={6} xs={12} key={index} className="mb-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img className="card-img-top" src={item.photo} alt="Card" />
                  <div className="card-body d-flex justify-content-between align-items-center my-1">
                    <p className="card-text m-0">{item.name}</p>
                    <p className="card-text m-0">{item.cost}</p>
                  </div>
                  <button className=' text-dark py-2' onClick={()=>handleadd(item)}>Add to cart</button>
                </div>
              </Col>
            ))
          }
          
        </Row>
    <Row className="justify-content-center mt-5 ">
          {
            products.map((item, index) => (
              <Col md={3} sm={6} xs={12} key={index} className="mb-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img className="card-img-top" src={item.photo} alt="Card" />
                  <div className="card-body d-flex justify-content-between align-items-center my-1">
                    <p className="card-text m-0">{item.name}</p>
                    <p className="card-text m-0">{item.cost}</p>
                   {
                    console.log(typeof(item.price))
                   }
                    
                  </div>
                  <button className=' text-dark py-2' onClick={()=>handleadd(item)}>Add to cart</button>
                </div>
              </Col>
            ))
          }
          
        </Row>
   
        <div className="btn d-flex justify-content-center">
        <button className='bg-dark text-white py-2 px-4 p-4'>View All</button>
        </div>
    </Container>
    <Container fluid className='mx-5'>
     <div className="mx-5 ms-auto mt-5 ">
       <h1 style={{color:"#2B2B2B"}}>Our Bags collection</h1>
       <p style={{color:"#656565"}}>Lorem ipsum dolor sit amet consectetur. Dui dui orci turpis mi at tempor nisl ullamcorper etiam.</p>
     </div>
    <Row className="justify-content-center mt-5 ">
          {
            bags.map((item, index) => (
              <Col md={3} sm={6} xs={12} key={index} className="mb-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img className="card-img-top" src={item.photo} alt="Card" />
                  <div className="card-body d-flex justify-content-between align-items-center my-1">
                    <p className="card-text m-0">{item.name}</p>
                    <p className="card-text m-0">{item.cost}</p>
                  </div>
                  <button className=' text-dark py-2' onClick={()=>handleadd(item)} >Add to cart</button>
                  <ToastContainer position='top-center' theme='dark'/>
                </div>
              </Col>
            ))
          }
        </Row>
        <div className="btn d-flex justify-content-center">
        <button className='bg-dark text-white py-2 px-4 p-4'>View All</button>
        </div>
    </Container>
    <div className="container mt-5 mb-5">

    </div>
    <Footer/>
    </>
  )
}

export default Page2
