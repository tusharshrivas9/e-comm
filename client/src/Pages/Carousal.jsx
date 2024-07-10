import React, { useState,useEffect } from 'react';
import images from '../Data/Images';
import { Col, Container, Row } from "react-grid-system";
import "../Components/Navbar.css";
import axios from "axios";
import { add } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const Carousal = () => {

  const [kurti , setKurti] = useState([]);

  const [kurtione , setKurtione] = useState([]);

  const dispatch = useDispatch()

  useEffect(()=>{

    const fetchKurti = async ()=>{
     try {
      const response = await axios.post("http://localhost:5433/kurti");
      setKurti(response.data)
     } catch (error) {
      console.log(error,"error in fetching kurti");
     }
    }
     fetchKurti()
  },[])

  useEffect(()=>{

    const fetchKurtione = async ()=>{
     try {
      const response = await axios.post("http://localhost:5433/kurti1");
      setKurtione(response.data)
     } catch (error) {
      console.log(error,"error in fetching kurti");
     }
    }
     fetchKurtione()
  },[])

const handleadd = (item)=>{
  dispatch(add(item))
  toast("Added to your cart 🛒")
}
  
 
  return (
    <>
   
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images.carsol} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={images.carsol} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={images.carsol} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <img src={images.left} alt='prev' className='bg-white rounded-circle fs-1' aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button  alt='prev' className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <img src={images.right}  alt='right' className='bg-white rounded-circle' aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <div className="container-fluid mt-5">
  <div className="row justify-content-center align-items-center">
    <div class="col text-center">
      <h1>Our featured products</h1>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur. Dui dui orci turpis mi at tempor nisl ullamcorper etiam.</p>
    </div>
  </div>
</div>


      <Container fluid className='mx-5'>
        <Row className="justify-content-center">
          {
            kurti.map((item, index) => (
              <Col md={3} sm={6} xs={12} key={index} className="mb-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img className="card-img-top" src={item.photo} alt="Card" />
                  <div className="card-body d-flex justify-content-between align-items-center my-1">
                    <p className="card-text m-0">{item.name}</p>
                    <p className="card-text m-0">{item.cost}</p>
                  </div>
                  <button className='bg-dark text-white py-2' onClick={()=>handleadd(item)}>Add to cart</button>
                  <ToastContainer position='top-center' theme='dark'/>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>

      
         <div className="imga container-fluid p-0 mt-3 position-relative">
        <img src={images.Fram} alt="" className="img-fluid w-100" />
        <div 
          className="middle position-absolute top-50 start-50 translate-middle text-center" 
          style={{ 
            color: "white",
            background: "linear-gradient(169deg, rgba(234, 255, 254, 0.20) 0%, rgba(201, 229, 241, 0.20) 97.46%)",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h1>Handloom Products</h1>
          <p >
            Handloom products, celebrated for their intricate craftsmanship and cultural heritage, 
            exemplify the rich traditions and skilled artistry passed down through generations. 
            These handmade textiles, ranging from vibrant sarees and shawls to exquisite carpets 
            and tapestries, are not only a testament to the weaver's dedication and expertise but 
            also a symbol of sustainable and ethical fashion.
          </p>
        </div>
      </div>



      <div className="container-fluid mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col text-center">
            <h1>Our kurti collections</h1>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur. Dui dui orci turpis mi at tempor nisl ullamcorper etiam.</p>
          </div>
        </div>

      </div>

      <Container fluid className='mx-5'>
        <Row className="justify-content-center">
          {
            kurtione.map((item, index) => (
              <Col md={3} sm={6} xs={12} key={index} className="mb-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img className="card-img-top" src={item.photo} alt="Card" />
                  <div className="card-body d-flex justify-content-between align-items-center my-1">
                    <p className="card-text m-0">{item.name}</p>
                    <p className="card-text m-0">{item.cost}</p>
                  </div>
                  <button className='bg-dark text-white py-2' onClick={()=>handleadd(item)}>Add to cart</button>
                  <ToastContainer position='top-center' theme='dark'/>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>



     
      <div className="imga container-fluid p-0 mt-3 position-relative">
        <img src={images.manwork} alt="" className="img-fluid w-100" />
        <div 
          className="middle position-absolute top-50 start-50 translate-middle text-center" 
          style={{ 
            color: "white",
            background: "linear-gradient(169deg, rgba(234, 255, 254, 0.20) 0%, rgba(201, 229, 241, 0.20) 97.46%)",
            padding: "20px",
            borderRadius: "10px",
            
          }}
        >
          <h1>Meet the Craftsman</h1>
          <p >
          Handloom craftsmen, the unsung heroes of the textile industry, dedicate their lives to mastering the ancient art of weaving, often beginning their training at a young age. With a deep understanding of traditional techniques and an eye for intricate details, they create stunning fabrics that showcase both their skill and cultural heritage.
          </p>
        </div>
      </div>

     <div className="container mt-5">
      <div className=" container row bg-light ">
        <div className="col-lg-6 mt-4 mb-4">
        <img src={images.owner} className='w-100' alt="" srcset="" />
        </div>
        <div className="col-lg-6 mt-4 mb-4">
        <h1>Meet the owner</h1>
            <p style={{color:"#656565"}} className='w-75' >Welcome to our handloom clothing haven! I'm Sonia Singh, the proud owner and passionate curator of this unique collection.Growing up, I was surrounded by the vibrant colors and intricate patterns of handwoven fabrics, which sparked my lifelong love for these timeless treasures. Inspired by the skilled artisans who dedicate their lives to perfecting this ancient craft, I established this platform to celebrate their artistry and provide them with the recognition they deserve.</p>
            <button className='bg-dark text-white'>About us</button>
        </div>
      </div>
     </div>





      <div className=" p-2 mb-5 mt-5 bg-body-tertiary ">
      <div className="container-fluid row ">
        <div className="img1 text-center col-lg ">
          <img src={images.truck} alt="" srcset="" />
          <p>Free Shipping</p>
        </div>
        <div className="img2 text-center col-lg">
          <img src={images.head} alt="" srcset="" />
          <p>Dedicated support</p>
        </div>
        <div className="img3 text-center col-lg">
          <img src={images.pen} alt="" srcset="" />
          <p>Cultural Heritage</p>
        </div>
        <div className="img4 text-center col-lg">
          <img src={images.money} alt="" srcset="" />
          <p>Cash on Delivery</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Carousal
