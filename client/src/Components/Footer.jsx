import React from 'react'
import images from '../Data/Images'



const Footer = () => {
  return (
    <>
    {/* Footer */}
<footer className="text-center text-lg-start text-muted "  style={{backgroundColor:"#2B2B2B"}}>
 
 
  
  <section className>
    <div className="container text-center text-md-start mt-5 ">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 mt-4 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold d-flex align-items-center mb-4 ">
           <img src={images.foo} style={{height:"61px"}} alt="" srcset="" />
          </h6>
          <p style={{color:"#F5F5F5"}}>
          Lorem ipsum dolor sit amet consectetur. Tempor est pellentesque lectus scelerisque cursus sollicitudin. Arcu urna in at semper posuere in vitae malesuada maecenas. Lobortis purus vulputate augue euismod cras semper nibh in tristique. Volutpat donec dictum in vitae nisi mattis.
          </p>
        </div>
        {/* Grid column */}
       
        <div className="col-md-2 col-lg-2 col-xl-2 mt-5 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 text-white" style={{color:"#F5F5F5"}}>
            Products
          </h6>
          <p className='' style={{color:"#F5F5F5"}}>
            <a href="#!" className="text-reset text-decoration-none">Kurtis </a>
          </p>
          <p className='' style={{color:"#F5F5F5"}}>
            <a href="#!" className="text-reset text-decoration-none" >Sarees</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-5 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 text-white" style={{color:"#F5F5F5"}}>
          Important links
          </h6>
          <p className='text-white '>
            <a href="#!" className="text-reset text-decoration-none " style={{color:"#F5F5F5"}}>Home</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset list-unstyled text-decoration-none" style={{color:"#F5F5F5"}}>Products</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset list-unstyled text-decoration-none" style={{color:"#F5F5F5"}}>About us</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset list-unstyled text-decoration-none" style={{color:"#F5F5F5"}}>Contact us</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-5 mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 " style={{color:"#F5F5F5"}}>Contact us</h6>
          <p className='text-white'><i className="text-left me-3" style={{color:"#F5F5F5"}}/>Shop no. 359-B, Beside natural ice creams, Samta Colony, Raipur (C.G)</p>
          <p  style={{color:"#F5F5F5"}}>
            <i className="fas me-3" />
            +91 96305-60356
          </p>
          
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
</footer>
{/* Footer */}


    </>
  )
}

export default Footer
