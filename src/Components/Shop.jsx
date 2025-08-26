import React, { useState } from 'react'
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import Itempreview from './Itempreview.jsx';
// import './shop.css'; // import css file

const Shop = () => {
    const [showForm, setShowForm] = useState(false);
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        desc: "",
        image: "",
    });

    const formShow = () => setShowForm(!showForm);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price || !formData.desc || !formData.image) {
            alert("Please fill all fields and add an image!");
            return;
        }

        setItems([...items, { ...formData, id: Date.now() }]);
        setFormData({ name: "", price: "", desc: "", image: "" });
    };

    return (
        <div className="shop-container">
            {/* Toggle button */}
            <button type="button" onClick={formShow} className="toggle-btn">
                {!showForm ? 'Add Item' : 'Remove Form'}
                <FaCartPlus />
            </button>

            {/* Form */}
            {showForm && (
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="inputs">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" value={formData.price} onChange={handleChange} required />
                    </div>

                    <div className="inputs">
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc" value={formData.desc} onChange={handleChange} required></textarea>
                    </div>

                    <div className="inputs">
                        <label htmlFor="image">Product Image</label>
                        <input type="file" id="image" accept="image/*" onChange={handleImageChange} required />
                    </div>

                    {/* Image preview before submit */}
                    {formData.image && (
                        <div className="preview">
                            <p>Preview:</p>
                            <img src={formData.image} alt="preview" className="preview-img" />
                        </div>
                    )}

                    <button type="submit" className="submit-btn">Add Product</button>
                </form>
            )}

            {/* Product items */}
            {items.length !== 0 ? (
                <div className="allItems">
                    {items.map((item) => (
                        <Itempreview
                            key={item.id}
                            itemImage={item.image}
                            productPrice={item.price}
                            productName={item.name}
                            productDescription={item.desc}
                        />
                    ))}
                </div>
            ) : (
                <div className="noItems">
                    <h1>Your shopping cart is empty</h1>
                    <FaShoppingCart size={60} />
                </div>
            )}
        </div>
    )
}

export default Shop;
