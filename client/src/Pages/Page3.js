import React from 'react';
import about from "../images/about.png"
import { Col, Container, Row } from 'react-grid-system';
import images from '../Data/Images';
import Navbar2 from '../Components/Navbar2';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Page3 = () => {
  return (
    <>
    <Navbar/>
    <Navbar2/>
      <div className="img container-fluid p-0">
     <img src={about} alt="" className='img-fluid w-100' srcset="" />
     </div> 
     <Container className='mt-5'>
      <Row>
        <Col sm={6}>
         <div className="text align-items-center text-align-center my-5 py-5">
          <h1 style={{color:"#656565"}}>About loomkar</h1>
          <p style={{color:"#656565"}}>Lorem ipsum dolor sit amet consectetur. Enim vulputate eleifend pretium sagittis amet laoreet id. Maecenas ac tincidunt lacinia dui in sagittis etiam neque morbi. Adipiscing arcu tincidunt habitant integer porta iaculis congue. Sit consectetur penatibus cras varius turpis.</p>
         </div>
        </Col>
        <Col sm={6}>
          <div className="img">
            <img src={images.abou} alt="" srcset="" />
          </div>
        </Col>
      </Row>
     </Container>
     <Container className="d-flex mt-5">
      <Row className="justify-content-center align-self-center w-100">
        <Col xs={12} md={8} className="text-center">
          <div className="text">
            <h1 style={{color:"#656565"}}>Our Mission & Vision</h1>
            <p  style={{color:"#656565"}}>
              At Loomkar, our mission is to revive and sustain the timeless craft of handloom weaving. We aim to empower artisans by providing them with fair wages, safe working conditions, and the recognition they deserve. By connecting these master weavers with contemporary markets, we strive to create a sustainable ecosystem that benefits both the artisans and our discerning customers.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container fluid className='bg-body-tertiary vh-25'>
    <Row>
      <Col>
      <div className="container text mt-5">
      <h1 style={{color:"#656565"}}>What we offer</h1>
      <p style={{color:"#656565",textAlign:"justify"}} className='w-50' >Loomkar offers a curated collection of handloom products that blend traditional techniques with modern aesthetics. Our range includes:</p>

      </div>
      <div className="imgs d-flex justify-content-center align-items-center mt-3">
        <img src={images.offer} className='w-25 h-25 mx-3' alt="" srcset="" />
        <img src={images.offers} className='w-25 h-25 mx-3' alt="" srcset="" />
        <img src={images.offerss} className='w-25 h-25 mx-3' alt="" srcset="" />
      </div>
      </Col>
    </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default Page3
