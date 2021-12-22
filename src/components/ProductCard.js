import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product}) => {
  return (
<div key ={product.id } className="col l-2-4 m-4 c-6">
  <Link to={'/products/' + product.id} className="home-product-item">
    <div className="home-product-item__img" style={{backgroundImage: `url(${product.image_url})`}} />
    <h4 className="home-product-item__name">{product.name}</h4>
    <div className="home-product-item__price">
      <span className="home-product-item__price-old">{product.price}</span>
      <span className="home-product-item__price-current">998.000đ</span>
    </div>
    <div className="home-product-item__action">
      <span className="home-product-item__like home-product-item__like--liked">
        <i className="home-product-item__like-icon-empty far fa-heart" />
        <i className="home-product-item__like-icon-fill fas fa-heart" />
      </span>
      <div className="home-product-item__rating">
        <i className="home-product-item__star fas fa-star" />
        <i className="home-product-item__star fas fa-star" />
        <i className="home-product-item__star fas fa-star" />
        <i className="home-product-item__star fas fa-star" />
        <i className="fas fa-star" />
      </div>
      <span className="home-product-item__sold">Đã bán 88</span>
    </div>
    <div className="home-product-item__origin">
      <span className="home-product-item__brand">Whoo</span>
      <span className="home-product-item__origin-name">Hà Nội</span>
    </div>
    <div className="home-product-item__favourite">
      <i className="fas fa-check" />
      <span className>Yêu Thích</span>
    </div>
    <div className="home-product-item__sale-off">
      <span className="home-product-item__sale-off-parcent">
        17%
      </span>
      <span className="home-product-item__sale-off-label">GIẢM</span>
    </div>
  </Link>                               
</div>
  )
}

export default ProductCard


// import React, { Component } from 'react';

// class Product extends Component {
//     render() {
//         return (
{/* <div className="col l-2-4 m-4 c-6">
  <a className="home-product-item">
    <div className="home-product-item__img" style={{backgroundImage: `url(${this.props.image_url})`}} />
    <h4 className="home-product-item__name">{this.props.name}</h4>
    <div className="home-product-item__price">
      <span className="home-product-item__price-old">{this.props.price}</span>
      <span className="home-product-item__price-current">998.000đ</span>
    </div>
    <div className="home-product-item__action">
      <span className="home-product-item__like home-product-item__like--liked">
        <i className="home-product-item__like-icon-empty far fa-heart" />
        <i className="home-product-item__like-icon-fill fas fa-heart" />
      </span>
      <div className="home-product-item__rating">
        <i className="home-product-item__star fas fa-star" />
        <i className="home-product-item__star fas fa-star" />
        <i className="home-product-item__star fas fa-star" />
        <i className="home-product-item__star fas fa-star" />
        <i className="fas fa-star" />
      </div>
      <span className="home-product-item__sold">Đã bán 88</span>
    </div>
    <div className="home-product-item__origin">
      <span className="home-product-item__brand">Whoo</span>
      <span className="home-product-item__origin-name">Hà Nội</span>
    </div>
    <div className="home-product-item__favourite">
      <i className="fas fa-check" />
      <span className>Yêu Thích</span>
    </div>
    <div className="home-product-item__sale-off">
      <span className="home-product-item__sale-off-parcent">
        17%
      </span>
      <span className="home-product-item__sale-off-label">GIẢM</span>
    </div>
  </a>                               
</div> */}

//         );
//     }
// }

// export default Product;