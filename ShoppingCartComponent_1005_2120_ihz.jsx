// 代码生成时间: 2025-10-05 21:20:48
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of a product
const productShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number
};

// Define the shape of the cart items array
const cartShape = PropTypes.arrayOf(PropTypes.shape(productShape));

// ShoppingCartComponent
const ShoppingCartComponent = ({ products }) => {
    // State to manage cart items
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (product) => {
        // Check if the product is already in the cart
        const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
        
        if (existingProductIndex > -1) {
            // If the product exists, increase its quantity
            const updatedCartItems = cartItems.map((item, index) => {
                if (index === existingProductIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCartItems);
        } else {
            // If the product does not exist, add it to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    
    return (
        <div>
            <h2>Shopping Cart</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

// PropTypes for products prop
ShoppingCartComponent.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(productShape)).isRequired
};

export default ShoppingCartComponent;
