import axios from 'axios';

import { Link, useParams } from 'react-router-dom';
import '../assets/css/detail.css';
import React, { useEffect, useState } from 'react';

function ProductScreen () {

  const {productId} = useParams();
  const[product, setProduct] =useState([])
  useEffect(() => {
    axios.get(`http://localhost:3600/products/${productId}`)
            .then(response => {
              console.log(response)
                setProduct(response.data)
            })
    
  }, [])
  return (
    <div>
      <div className="back-to-result">
      <Link to ="/products" style={{textDecoration :'none'}}>
        <button className=" btn btn--primary">Back To Result </button>
          
      </Link> 
      </div>
      <div className="details">
            <div className="details-image">
              <img src={product.image_url} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
               
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Price: ${product.price}</li>
                <li>
                  Status: {product.description}
                </li>
                <li>
                  Select:<select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </li>
                <li>
                    <button>
                      Add to Cart
                    </button>                
                </li>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default ProductScreen
