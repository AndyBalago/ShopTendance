import React, { useLayoutEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import { isEmpty } from './components/utils';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import FilteredProducts from './components/FilteredProducts';
import DetailProduct from './components/DetailProduct';
import Footer from './components/Footer';
import Pagination from './components/Pagination';


function App() {
  const products = useSelector((state) => state.productReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location]);
    return children;
  };

 if (isEmpty(products)){
  return <div>Loading...</div>
 }

 const indexOfLastProduct = currentPage * productsPerPage;
 const indexOfFirstPage = indexOfLastProduct - productsPerPage;
 const currentProduct = products.slice(indexOfFirstPage, indexOfLastProduct);

 const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  return (
    <BrowserRouter>
    <NavBar>
    </NavBar>
    <Wrapper>
      <Routes>
        <Route path='/' element={
          <div className='content'>
            <h1> Tous les produits</h1>
            <div className='productsContainer'>
              {!isEmpty(products) && currentProduct.map((product, index) => (
                <Product product={product} key={index}></Product>
              ))}
            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} currentPage={currentPage} ></Pagination>
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
        <Route path='/detailProduct/:id' element={
          <div className='contDetailProduct'>
          <DetailProduct></DetailProduct>
          </div>
        }></Route>
        
      </Routes>
      </Wrapper>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
