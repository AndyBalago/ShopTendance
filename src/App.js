import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import { isEmpty } from './components/utils';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';



function App() {
  const products = useSelector((state) => state.productReducer);


  return (
    <BrowserRouter>
    <NavBar>
    
    </NavBar>
      <Routes>
        <Route path='/' element={
          <div className='content'>
            <h1> Liste de produits</h1>
            <div className='contCreer'>
            <Link to='/create' >
              <button className='btnCreer'>Creer produit</button></Link>
              </div>
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
            
            <ProductForm></ProductForm>
          </div>
        }></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
