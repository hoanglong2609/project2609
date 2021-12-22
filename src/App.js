import './assets/css/base.css';
import './assets/css/grid.css';
import './assets/css/main.css';
import './assets/css/reponsive.css';
import './assets/font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css';
// import dataProducts from 'http://localhost:4000/getData';
import axios from 'axios';
// import HeaderNavbar from './components/HeaderNavbarIcon';
// import HeaderSortBar from './components/HeaderSortBar';
// import HeaderWithSearch from './components/HeaderWithSearch';
import React, { useEffect, useState } from 'react';
// import Category from './components/Category';
// import HomeFilter from './components/HomeFilter';
// import MobileCategory from './components/MobileCategory';
// import Pagination from './components/Pagination';
// import ProductCard from './components/ProductCard';
// import HomeScreen from './components/HomeScreen';
// import ProductScreen from './components/ProductScreen';

import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';
import HeaderNavbarLogo from './components/HeaderNavbarLogo';
import HeaderNavbarList from './components/HeaderNavbarList';
import HeaderNavbarIcon from './components/HeaderNavbarIcon';
import HeaderMobileBars from './components/HeaderMobileBars';
import HeaderMobileLogo from './components/HeaderMobileLogo';
import LoginMobile from './components/LoginMobile';
import Banner from './components/Banner';
import BannerBtn from './components/BannerBtn';
import SectionWrapper from './components/SectionWrapper';
import Video from './components/Video';
import Review from './components/Review';
import Footer from './components/Footer';

// const LIMIT = 5;

function App () {
  // const [posts, setPosts] = useState([])
  // const [loading, setLoading] = useState(false);
  // const [offset, setOffset] = useState(0);
  // const [pageCount, setPageCount] = useState(0);
  

  // useEffect(() => {
  //   const getProductData = async () => {
    
  //     setLoading(true)
  //     try {
  //       const res = await axios.get('http://localhost:3600/products', {
  //         params:{
  //           limit: LIMIT,
  //           offset,
  //         }
  //       })
  //       setPosts(res.data.posts);
  //       setLoading(false);
  //       setPageCount(Math.ceil(res.data.total / LIMIT))
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
 
  //   getProductData()
  // }, [offset])
 
  // if (loading && posts.length === 0) {
  //   return <h2>Loading...</h2>
  // }


  // const changePage = (event) => {
  //   const newOffset = (event.selected * LIMIT);
  //   setOffset(newOffset);
  //   console.log(event.selected)
  // }

  return(
    <BrowserRouter>
    <div className="app">
      <header className="header grid">
          <nav className="header__navbar">
              <HeaderNavbarLogo/>
              <HeaderNavbarList/>
              <HeaderNavbarIcon/>
              <HeaderMobileBars/>
              <HeaderMobileLogo/>
              <LoginMobile/>
          </nav>
      </header>
      <div className="container grid">   
          <Banner/>
          <BannerBtn/>
          <SectionWrapper/>
          <Video/>
          <Review/>     
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;
