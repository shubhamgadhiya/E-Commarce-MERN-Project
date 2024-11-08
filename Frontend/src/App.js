import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import Home from './Components/User/Home.jsx';
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import Cart from './Components/User/Cart.jsx';
import Dashboard from './Components/Admin/Dashboard.jsx';
import AllUser from './Components/Admin/User.jsx';
import AllProduct from './Components/Admin/Product.jsx';
import './App.css';
import Token from "./ApiCheck/Token.js"
import { jwtDecode } from 'jwt-decode';
import { addUser, logOut } from './redux/userslice';
import axios from 'axios';
import Context from './Context/Context';
import Loader from './ApiCheck/Loader';
import PrivateRoute from './ApiCheck/PrivateRoute';
import PageNotFound from "./Components/PageNotFound";
import Profile from './Components/Auth/Profile.jsx';
import AllProductDetails from './Components/User/ProductDetails.jsx';
import Products from './Components/User/Products.jsx';
import ForgotPassword from './Components/Auth/ForgotPassword.jsx';
import {baseUrl} from "./ApiCheck/Constant.js";
import Footer from './Components/Footer.jsx';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      Token(token);
      const decoded = jwtDecode(token);
      dispatch(addUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem('token');
        dispatch(logOut());
        window.location.href = '/';
      }
    }
  }, [dispatch, token]);
  useEffect(() => {
    if (user.isAuth) {
      if (user.user.role === 'ADMIN') {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/';
      }
    }
  }, []);

  const [count, setCount] = useState(0);

  const fetchCartCount = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/cartcount`);
      const data = response.data.data;
      setCount(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    if(user.user.role === 'USER') {
    fetchCartCount();
    }
  }, [user]);

  return (
    <Context.Provider value={{ count, fetchCartCount }}>
      <Router>
        <Suspense fallback={<Loader />}>
        {user.user.role !== "ADMIN" && <Header /> }
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/product/:id" element={<AllProductDetails />} />
            <Route path="/product" element={<Products />} />

            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Allusers" element={<AllUser />} />
              <Route path="/Allproducts" element={<AllProduct />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {user.user.role !== "ADMIN" && <Footer /> }
        </Suspense>
      </Router>
    </Context.Provider>
  );
};

export default App;
