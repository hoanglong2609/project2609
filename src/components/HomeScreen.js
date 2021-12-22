
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import ReactPaginate from 'react-paginate';
import '../assets/css/base.css';
import '../assets/css/grid.css';
import '../assets/css/main.css';
import '../assets/css/reponsive.css';
import '../assets/font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css';



const LIMIT = 5;
function HomeScreen () {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getProductData = async () => {
    
      setLoading(true)
      try {
        const res = await axios.get('http://localhost:3600/products', {
          params:{
            limit: LIMIT,
            offset,
          }
        })
        setPosts(res.data.posts);
        setLoading(false);
        setPageCount(Math.ceil(res.data.total / LIMIT))
      } catch (error) {
        console.log(error);
      }
    }
 
    getProductData()
  }, [offset])

  const changePage = (event) => {
    const newOffset = (event.selected * LIMIT);
    setOffset(newOffset);
    console.log(event.selected)
  }
  return (
    <div className ="home-product">
    <div className="row sm-gutter" >
      {posts.map(product =>(
      <ProductCard key={product.id}  product={product}/>)) }
      
    </div>
       <div>

       <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
      />
      </div>
      </div> 

      
    
  )
}

export default HomeScreen
