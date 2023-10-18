import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import { isEmpty } from './components/utils';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



function App() {
  const products = useSelector((state) => state.productReducer);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className='content'>
            <h1> Liste de produits</h1>
            <Link to='/create' className='btnCreer'><button>Creer produit</button></Link>
            <div className='productsContainer'>
              {!isEmpty(products) && products.map((product, index) => (
                <Product pa product={product} key={index}></Product>
              ))}
            </div>
          </div>
        }>
        </Route>
        <Route path='/create' element={
          <div className='formContainer'>
            <Link to='/' className='btnCreer'><h2>HOME</h2></Link>
            <ProductForm></ProductForm>
          </div>
        }></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
