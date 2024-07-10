// import React from 'react';
// import images from '../Data/Images';
// import "../Components/Navbar.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { setSearchTerm } from '../Redux/searchSlice';
 

// const Navbar = () => {
//   const items = useSelector((state)=>state.cart)

//   const dispatch = useDispatch();

//   const handleSearchChange = (event) => {
//     dispatch(setSearchTerm
      
//       (event.target.value));
//   };

//   return (
//     <>
    
//     <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid mx-5">
    
//     <div className="continer navicon">
//         <img src={images.nav_bar} alt="" srcset="" />
//     </div>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">  
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       </ul>
//       <form className="d-flex m-2 " role="search">
//         <input className="form-control  mx-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} />
//         <div className="prof d-flex ">
//         <img src={images.profile_icn} className='mx-3' alt="" srcset="" />
     
//         <img src={images.shopping} alt=""  srcset=""  />
//         <NavLink to={"/cart"} className="text-decoration-none"> <h5 className=' text-secondary list-unstyled'>{items.length}</h5></NavLink>
        
//         </div>
//       </form>
     
//     </div>
//   </div>
// </nav>

//     </>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import images from '../Data/Images';
import "../Components/Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setSearchTerm } from '../Redux/searchSlice';


const Navbar = () => {
  const items = useSelector((state) => state.cart.cart);
  console.log(items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleLogout = async () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem("cart");
    
    sessionStorage.removeItem('token');
   
   
    
 
    
   navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-5">
          <div className="continer navicon">
            <img src={images.nav_bar} alt="navbar icon" />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex m-2 " role="search">
              <input
                className="form-control mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchChange}
              />
              <div className="prof d-flex ">
                <div className="dropdown">
                  <img
                    src={images.profile_icn}
                    className="mx-3 dropdown-toggle"
                    alt="profile icon"
                    id="dropdownMenuButton"
                    aria-expanded="false"
                    onClick={toggleDropdown}
                    style={{ cursor: 'pointer' }}
                  />
                  <ul
                    className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                    aria-labelledby="dropdownMenuButton"
                    style={{ right: 0, left: 'auto' }}
                  >
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
                
                <NavLink to="/cart" className="text-decoration-none position-relative">
                  <img src={images.shopping} alt="shopping cart" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {items.length}
                    <span className="visually-hidden">cart items</span>
                  </span>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
