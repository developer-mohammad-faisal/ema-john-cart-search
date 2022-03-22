import React from 'react';

const Cart = ({cart}) => {
  return (
    <div>
           <h5>Update Summary</h5>
            <p>Product Item: {cart.length}</p>
    </div>
  );
};

export default Cart;