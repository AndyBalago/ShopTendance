import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import { isEmpty } from './components/utils';
import ProductForm from './components/ProductForm';

function App() {
  const products = useSelector( (state) => state.productReducer);


  return (
    <div className="App">
      <div className='content'>
      <h1> Liste de produits</h1>
        <div className='productsContainer'> 
        {!isEmpty (products) && products.map((product, index) => (
          <Product product={product} key={index}></Product>
        ))}
        </div>
        <div className='formContainer'>
          <ProductForm></ProductForm>
        </div>
      </div>
    </div>
  );
}

export default App;
