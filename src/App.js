import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import { isEmpty } from './components/utils';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import FilteredProducts from './components/FilteredProducts';


function App() {
  const products = useSelector((state) => state.productReducer);

 if (isEmpty(products)){
  return <div>Loading...</div>
 }
 
  return (
    <BrowserRouter>
    <NavBar>
    
    </NavBar>
      <Routes>
        <Route path='/' element={
          <div className='content'>
            <h1> Liste de produits</h1>
            <div className='productsContainer'>
              {!isEmpty(products) && products.map((product, index) => (
                <Product  product={product} key={index}></Product>
              ))}
            </div>
          </div>
        }>
        </Route>
        <Route path='/filteredProducts/:categorie' element={
          <FilteredProducts></FilteredProducts>
        }></Route>
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
