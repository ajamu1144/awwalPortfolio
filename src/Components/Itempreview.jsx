import React from 'react';
// import './ItemPreview.css';

const ItemPreview = ({ itemImage, productPrice, productDescription, productName }) => {
    return (
        <div className="item-card">
            <a href="#">
                <img className="item-image" src={itemImage} alt="product" />
            </a>
            <div className="item-content">
                <a href="#">
                    <h5 className="item-title">{productName}</h5>
                </a>

                {/* Price + Button */}
                <div className="price-row">
                    <span className="price">₦{productPrice}</span>
                    <a href="#" className="add-btn">Add to cart</a>
                </div>

                <p className="item-desc">{productDescription}</p>
            </div>
        </div>
    );
};

export default ItemPreview;
