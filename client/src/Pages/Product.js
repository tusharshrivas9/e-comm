// import React, { useEffect, useState } from 'react';
// import images from '../Data/Images';
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Footer from '../Components/Footer';
// import "./Carousal.css";
// import { SideBySideMagnifier } from "react-image-magnifiers";
// import { useDispatch, useSelector } from 'react-redux';
// import {remove,add,decrement} from "../Redux/CartSlice";
// import {loadStripe} from '@stripe/stripe-js';
// import axios from "axios"



// const Product = () => {
//   const cartitems = useSelector((state) => state.cart.cart);
  
//   const [total , setTotal] = useState(0)

//   const totalPrice = ()=>{
//     let total = 0
//     cartitems.map((ele,idx)=>{
//         total = ele.cost * ele.qty + total
//     })
//     setTotal(total)
//   }

//   useEffect(()=>{
//     totalPrice()
//   },[totalPrice])

//   const dispatch = useDispatch()

//   const handleRem = (id)=>{
//     dispatch(remove(id))
//   }

//   // cart quantity increment
// const handleInc = (ev)=>{
//   dispatch(add(ev))
// }

// // cart quantity decrement
// const handledec = (ev)=>{
//   dispatch(decrement(ev))
// }

// // payment
// const makePayment = async()=>{
// const stripe = await loadStripe("pk_test_51PZCUMRu7RWcdTVnD2hwN6jYZVJAfdMZjMXXz8S5uBuyAEFMTSjzz1vxFNXWIA6uEPOu5PRpz3MHROEkvvkEK6bR00Y2ptkJr0")

// const body = {
//   products: cartitems
// } 

// const headers = {
//   "Content-Type": "application/json",
// }

// try {
//   const response = await axios.post('http://localhost:5433/create-checkout-session', body, { headers });
//   console.log(response.data);

//   const session = response.data;

//   const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//   });

//   if (result.error) {
//       console.error(result.error.message);
//   }
// } catch (error) {
//   console.log(error,"err in payment");
// }

// }
// useEffect(()=>{
//   makePayment()
// },[total])
//   return (
//     <>
//       <Navbar />
//       <Navbar2 />
//       <div className="container mt-5">
//         {
//           cartitems.length > 0 ? (
//             cartitems.map((item, index) => (
//               <div key={index} className="row">
//                 <div className="col-lg-6 mb-5">
//                   <SideBySideMagnifier
//                     imageSrc={item.photo || images.produ}
//                     imageAlt="Example"
//                     largeImageSrc={item.photo || images.produ}
//                   />
//                   <div className="row mt-4">
//                     <div className="col-lg-4">
//                       <img src={item.photo || images.pro1} alt="" className='img-fluid' />
//                     </div>
//                     <div className="col-lg-4">
//                       <img src={item.photo || images.pro1} alt="" className='img-fluid' />
//                     </div>
//                     <div className="col-lg-4">
//                       <img src={item.photo || images.pro1} alt="" className='img-fluid' />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   <h1>{item.name}</h1>
//                   <p>{item.cost}/- (Tax Included)</p>
//                   <p className='text-secondary w-75'>
//                     Lorem ipsum dolor sit amet consectetur. Eu enim parturient pretium massa. Magnis est neque sed diam massa. Scelerisque nisl volutpat turpis maecenas facilisis nullam.
//                   </p>
//                   <h3 className='mt-3'>Size</h3>
//                   <div className="row w-25 mx-1">
//                     <p className='col box mx-1'>S</p>
//                     <p className='col box mx-1'>M</p>
//                     <p className='col box mx-1'>L</p>
//                   </div>
//                   <div className="btn mt-5">
                    

                   
//                     <button className='btn btn-dark text-white py-2 mx-2' onClick={()=>handleRem(item.id)} >Remove</button>
//                     <div className="product-qty mt-2">
//                       <button type='button' className='btn btn-dark mx-2' onClick={()=>handleInc(item)}><h6>+</h6></button>
//                       <input type="text"  className='input-box w-25 mx-2' placeholder='qty' value={item.qty}/>
//                       <button type='button' className='btn btn-dark mx-2' onClick={()=>handledec(item)}><h6>-</h6></button>
//                     </div>
                    
                       
                      
//                   </div>
//                   <hr />
//                   <div className="row w-75 mx-1">
//                     <h5 className='col-lg-6 '>Details</h5>
//                     <p className='col-lg-6 '>Shipping and return details</p>
//                   </div>
//                   <div className="row w-75 mx-1">
//                     <h5 className='col-lg-6 '>Material:</h5>
//                     <p className='col-lg-6 '>100% Pure Silk Weaving</p>
//                   </div>
//                   <div className="row w-75 mx-1">
//                     <h5 className='col-lg-6 '>Weaving Technique:</h5>
//                     <p className='col-lg-6 '>Handloom</p>
//                   </div>
//                   <div className="row w-75 mx-1">
//                     <h5 className='col-lg-6 '>Dimensions:</h5>
//                     <p className='col-lg-6 '>70 inches x 20 inches</p>
//                   </div>
//                   <div className="row w-75 mx-1">
//                     <h5 className='col-lg-6 '>Weight:</h5>
//                     <p className='col-lg-6 '>150 grams</p>
//                   </div>
//                   <div className="row w-75 mx-1">
//                     <h5 className='col-lg-6 '>Color:</h5>
//                     <p className='col-lg-6 '>Available in various vibrant colors (Red, Blue, Green, Yellow, Black)</p>
//                   </div>
//                   <div className="row w-75 mx-1">
//                     <h5 className='col-lg-6 '>Pattern:</h5>
//                     <p className='col-lg-6 '>Traditional motifs with a modern twist</p>
//                   </div>
//                   <hr />
//                   <div className="btn">
                 
//                   <h1>total amount Rs:{item.qty * item.cost}</h1>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart</p>
//           )
//         }
//         <div className="container">
//   <div className="text-end">
//     <h1>Total price: Rs {total}</h1>
//   </div>
//   <div className="text-end">
//     <button className='btn btn-dark text-white py-2 mx-2' onClick={makePayment}>Buy now</button>
//   </div>
// </div>

//         </div>
//       <Footer />
//     </>
//   );
// }

// export default Product;











import React, { useEffect, useState } from 'react';
import images from '../Data/Images';
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';
import "./Carousal.css";
import { SideBySideMagnifier } from "react-image-magnifiers";
import { useDispatch, useSelector } from 'react-redux';
import { remove, add, decrement } from "../Redux/CartSlice";
import { loadStripe } from '@stripe/stripe-js';

const Product = () => {
  const cartitems = useSelector((state) => state.cart.cart || []); // Ensure cartitems is an array
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    cartitems.forEach((ele) => {
      total += ele.cost * ele.qty;
    });
    setTotal(total);
  };

  useEffect(() => {
    totalPrice();
  }, [cartitems]);

  const handleRem = (id) => {
    dispatch(remove(id));
  };

  // Cart quantity increment
  const handleInc = (ev) => {
    dispatch(add(ev));
  };

  // Cart quantity decrement
  const handleDec = (ev) => {
    dispatch(decrement(ev));
  };

  // Payment
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PZCUMRu7RWcdTVnD2hwN6jYZVJAfdMZjMXXz8S5uBuyAEFMTSjzz1vxFNXWIA6uEPOu5PRpz3MHROEkvvkEK6bR00Y2ptkJr0");

    const body = {
      products: cartitems
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch('http://localhost:5433/create-checkout-session', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error);
    }
  };

  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="container mt-5">
        {
          cartitems.length > 0 ? (
            cartitems.map((item, index) => (
              <div key={index} className="row">
                <div className="col-lg-6 mb-5">
                  <SideBySideMagnifier
                    imageSrc={item.photo || images.produ}
                    imageAlt="Example"
                    largeImageSrc={item.photo || images.produ}
                  />
                  <div className="row mt-4">
                    <div className="col-lg-4">
                      <img src={item.photo || images.pro1} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-4">
                      <img src={item.photo || images.pro1} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-4">
                      <img src={item.photo || images.pro1} alt="" className='img-fluid' />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h1>{item.name}</h1>
                  <p>{item.cost}/- (Tax Included)</p>
                  <p className='text-secondary w-75'>
                    Lorem ipsum dolor sit amet consectetur. Eu enim parturient pretium massa. Magnis est neque sed diam massa. Scelerisque nisl volutpat turpis maecenas facilisis nullam.
                  </p>
                  <h3 className='mt-3'>Size</h3>
                  <div className="row w-25 mx-1">
                    <p className='col box mx-1'>S</p>
                    <p className='col box mx-1'>M</p>
                    <p className='col box mx-1'>L</p>
                  </div>
                  <div className="btn mt-5">
                    <button className='btn btn-dark text-white py-2 mx-2' onClick={() => handleRem(item.id)}>Remove</button>
                    <div className="product-qty mt-2">
                      <button type='button' className='btn btn-dark mx-2' onClick={() => handleInc(item)}><h6>+</h6></button>
                      <input type="text" className='input-box w-25 mx-2' placeholder='qty' value={item.qty} readOnly />
                      <button type='button' className='btn btn-dark mx-2' onClick={() => handleDec(item)}><h6>-</h6></button>
                    </div>
                  </div>
                  <hr />
                  <div className="row w-75 mx-1">
                    <h5 className='col-lg-6 '>Details</h5>
                    <p className='col-lg-6 '>Shipping and return details</p>
                  </div>
                  <div className="row w-75 mx-1">
                    <h5 className='col-lg-6 '>Material:</h5>
                    <p className='col-lg-6 '>100% Pure Silk Weaving</p>
                  </div>
                  <div className="row w-75 mx-1">
                    <h5 className='col-lg-6 '>Weaving Technique:</h5>
                    <p className='col-lg-6 '>Handloom</p>
                  </div>
                  <div className="row w-75 mx-1">
                    <h5 className='col-lg-6 '>Dimensions:</h5>
                    <p className='col-lg-6 '>70 inches x 20 inches</p>
                  </div>
                  <div className="row w-75 mx-1">
                    <h5 className='col-lg-6 '>Weight:</h5>
                    <p className='col-lg-6 '>150 grams</p>
                  </div>
                  <div className="row w-75 mx-1">
                    <h5 className='col-lg-6 '>Color:</h5>
                    <p className='col-lg-6 '>Available in various vibrant colors (Red, Blue, Green, Yellow, Black)</p>
                  </div>
                  <div className="row w-75 mx-1">
                    <h5 className='col-lg-6 '>Pattern:</h5>
                    <p className='col-lg-6 '>Traditional motifs with a modern twist</p>
                  </div>
                  <hr />
                  <div className="btn">
                    <h1>Total amount Rs: {item.qty * item.cost}</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart</p>
          )
        }
        <div className="container">
          <div className="text-end">
            <h1>Total price: Rs {total}</h1>
          </div>
          <div className="text-end">
            <button className='btn btn-dark text-white py-2 mx-2' onClick={makePayment}>Buy now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;



