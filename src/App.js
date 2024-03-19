// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import Slider from "./components/layout/header/MainMenu";
// import Banner from "./components/layout/Banner";
// import Productlist from "./components/product/ProductList";
// import Wishlist from "./components/pages/Wishlist";
// import Login from "./components/pages/Login";
// import Cart from "./components/pages/Cart";
// import Dashboard from "./components/pages/Dashboard";
// import Order from "./components/pages/Order";
// import ProductDetail from "./components/product/ProductDetail";


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const handleToggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   return (
  
//     <Router>
           

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout>
            
//               <Slider />
//               <Banner />
//               <Productlist />
//             </Layout>
//           }
//         />
//         <Route
//           path="/wishlist"
//           element={
//             <Layout>
//               <Wishlist />
//             </Layout>
//           }
//         />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route
//           path="/cart"
//           element={
//             <Layout>
//               <Cart />
//             </Layout>
//           }
//         />
//         <Route path="/dashboard" element={<Dashboard />}/>
//         <Route path="/order" element={<Order />} />
//         <Route
//           path="/order"
//           element={
//             <Layout>
//               <Order />
//             </Layout>
//           }
//           />
//           <Route path="/visibilityicon" element={<VisibilityIcon />} /> 
//         <Route path="/productdetail" element={<ProductDetail />} />
//         <Route
//           path="/productdetail"
//           element={
//             <Layout>
//               <ProductDetail/>
//             </Layout>
//           }
//           />
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;

