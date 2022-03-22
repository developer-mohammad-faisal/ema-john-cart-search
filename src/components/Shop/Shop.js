import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

  const [products, setProducts] = useState([])
  useEffect( () => {

    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))

  } , [])

  const [cart, setCart] = useState([])
  const AddToCartHandler = product => {
    const newCart = [...cart, product]
    setCart(newCart)
  }

  return (
    <div className='shop-container'>
        <div className="product-container">
          {
            products.map(product => <Product 
              AddToCartHandler={AddToCartHandler} 
              key={product.id} 
              product={product} 
              ></Product>)
          }
        </div>
        <div className="cart-container">
         <Cart cart={cart}></Cart>
        </div>
    </div>
  );
};

export default Shop;