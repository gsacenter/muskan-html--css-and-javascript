import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const cartIsEmpty = Object.values(cartItems).every(quantity => quantity === 0);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {!cartIsEmpty ? (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item" key={item._id} >
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr />
                </div>

              );
            }
            return null;
          })
        ) : (
          <p className="cart-empty">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
