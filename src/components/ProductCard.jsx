import React from 'react';
import '../ProductCard.css';

const ProductCard = ({ product }) => {
  const { image, category, title, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-category">{category}</p>
      <h2 className="product-title">{title}</h2>
      <div className="product-footer">
        <p className="product-price">${price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
