// import React, { useState } from 'react'
// import Navbar from '../Components/Navbar'
// import Navbar2 from '../Components/Navbar2'
// import Footer from '../Components/Footer'
// import axios from 'axios'

// const Admin = () => {

//     const [product , setProduct] = useState("")

//     const [inp , setInp] = useState({
//         name:"",
//         cost:""
//     })

//     const handelinp =  (e)=>{
//       const name = e.target.name
//       const value = e. target.value

//       setInp({
//         ...inp,
//         [name]:value
//       })
//     }
    
//     const handleImage = (e)=>{
//         const file = e.target.files[0]

//         transformfile(file)
//     }

//     const transformfile = (file)=>{

//         const reader = new FileReader()
    
//         if (file) {
//             reader.readAsDataURL(file)
//             reader.onloadend = ()=>{
//                 setProduct(reader.result)
//             }
            
//         }else{
//             setProduct("")
//         }
//     }

//     const handleSubmit = async (e)=>{
//      e.preventDefault()

//      try {
//         const product = await axios.post("http://localhost:5433/uploads")
//      } catch (error) {
        
//      }
//     }

//   return (
//     <>
//     <Navbar/>
//     <Navbar2/>
    
//     <div className="p-2 mb-5 mt-5 bg-body-tertiary">
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-6 text-center">
//         <div className="col-lg-6">
//           <form action="/action" onSubmit={handleSubmit}>
//             <h1>create product photo</h1>
//             <div className="row mb-3">
//               <div className="col">
//                 <input
//                   type="file"
//                   id="myFile"
//                   className="form-control border"
//                   accept="photo/*"
//                   onChange={handleImage}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col">
//                 <input
//                   type="text"
//                   name="name"
//                   value={inp.name}
//                   onChange={handelinp}
//                   className="form-control"
//                   placeholder="brand name"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col">
//                 <input
//                   type="number"
//                   name='cost'
//                   value={inp.cost}
//                   onChange={handelinp}
//                   className="form-control"
//                   placeholder="cost"
//                 />
//               <button className='btn btn-primary mt-4'>submit </button>
//               </div>
//             </div>

//           </form>
//         </div>
//       </div>
//       <div className="col-lg-6 text-center">
//         <h1>photo preview</h1>
//         <img src={product} className="border img-fluid w-50" alt="" />
//       </div>
//     </div>
//   </div>
// </div>


//     <Footer/>
//     </>
//   )
// }

// export default Admin


// import React, { useState } from 'react'
// import Navbar from '../Components/Navbar'
// import Navbar2 from '../Components/Navbar2'
// import Footer from '../Components/Footer'
// import axios from 'axios';
// import { ToastContainer ,toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Admin = () => {
//   const [product, setProduct] = useState("")
//   const [inp, setInp] = useState({
//     name: "",
//     cost: ""
//   })

//   const handelinp = (e) => {
//     const name = e.target.name
//     const value = e.target.value

//     setInp({
//       ...inp,
//       [name]: value
//     })
//   }

//   const handleImage = (e) => {
//     const file = e.target.files[0]
//     transformfile(file)
//   }

//   const transformfile = (file) => {
//     const reader = new FileReader()

//     if (file) {
//       reader.readAsDataURL(file)
//       reader.onloadend = () => {
//         setProduct(reader.result)
//       }
//     } else {
//       setProduct("")
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const { name, cost } = inp

//     try {
//       const response = await axios.post("http://localhost:5433/uploads", {
//         name,
//         cost,
//         photo: product
//       })
//       if (response.status === 200) {
//         toast("submitted sucessfully")
//       }
//       console.log('Product saved:', response.data)
//     } catch (error) {
//       console.error('Error saving product:', error)
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <Navbar2 />
//       <div className="p-2 mb-5 mt-5 bg-body-tertiary">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 text-center">
//               <div className="col-lg-12">
//                 <form onSubmit={handleSubmit}>
//                   <h1>create product photo</h1>
//                   <div className="row mb-3">
//                     <div className="col">
//                       <input
//                         type="file"
//                         id="myFile"
//                         className="form-control border"
//                         accept="photo/*"
//                         onChange={handleImage}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col">
//                       <input
//                         type="text"
//                         name="name"
//                         value={inp.name}
//                         onChange={handelinp}
//                         className="form-control"
//                         placeholder="brand name"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col">
//                       <input
//                         type="number"
//                         name="cost"
//                         value={inp.cost}
//                         onChange={handelinp}
//                         className="form-control"
//                         placeholder="cost"
//                       />
//                     </div>
//                   </div>
//                   <button className="btn btn-primary mt-4">submit</button>
//                 </form>
//                   <ToastContainer/>
//               </div>
//             </div>
//             <div className="col-lg-6 text-center">
//               <h1>photo preview</h1>
//               <img src={product} className="border img-fluid w-50" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Admin




import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
import axios from 'axios';



const Admin = () => {
  const [product, setProduct] = useState("")
  const [products, setProducts] = useState([]) // State to store fetched products
  const [inp, setInp] = useState({
    name: "",
    cost: ""
  })


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

  const handleInp = (e) => {
    const { name, value } = e.target
    setInp({
      ...inp,
      [name]: value
    })
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    transformFile(file)
  }

  const transformFile = (file) => {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setProduct(reader.result)
      }
    } else {
      setProduct("")
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, cost } = inp

    try {
      const response = await axios.post("http://localhost:5433/uploads", {
        name,
        cost,
        photo: product
      })

      if (response.status === 200) {
        console.log('Product saved:', response.data)
        
        
      } else {
        console.error('Error saving product:', response.data.msg)
      }
    } catch (error) {
      console.error('Error saving product:', error)
    }
  }

  const handleR = async (productId)=>{
    try {
      const response = await axios.delete(`http://localhost:5433/uploads/${productId}`);
      if (response.status === 200) {
        setProducts(products.filter(product => product._id !== productId));
        console.log('Product deleted:', response.data);
      } else {
        console.error('Error deleting product:', response.data.msg);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
  return (
    <>
      <Navbar />
      <Navbar2 />
    
      <div className="p-2 mb-5 mt-5 bg-body-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="col-lg-6">
                <form action="/action" onSubmit={handleSubmit}>
                  <h1>create product</h1>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="file"
                        id="myFile"
                        className="form-control border"
                        accept="image/*"
                        onChange={handleImage}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        name="name"
                        value={inp.name}
                        onChange={handleInp}
                        className="form-control"
                        placeholder="brand name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="number"
                        name='cost'
                        value={inp.cost}
                        onChange={handleInp}
                        className="form-control"
                        placeholder="cost"
                      />
                      <button className='btn btn-primary mt-4'>submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <h1>photo preview</h1>
              <img src={product} className="border img-fluid w-50" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2>Product List</h2>
              <div className="list-group">
                {products.map((product, index) => (
                  <div key={index} className="list-group-item">
                    <img src={product.photo} alt={product.name} className="img-thumbnail w-25" />
                    <h4>{product.name}</h4>
                    <p>rs{product.cost}</p>
                    <button className='btn btn-primary' onClick={()=>handleR(product._id)}>Remove</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Admin
