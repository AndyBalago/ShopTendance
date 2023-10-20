import React, { useState } from 'react'
import LogoST from '../Img/LogoST.png'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product.action'


const NavBar = () => {
  const products = useSelector((state) => state.productReducer);
  
  const allCategories = ['All',...new Set(products.map(product => product.categories))];
  // console.log(allCategories);


 

  // const filterCategory = (category) => {
  //   if (category === 'All') {
  //     getProducts(products);
  //   }
  //  const filterData = products.filter(product => product.categories == category);

  //   console.log(filterData);
  // }

  

  return (
    <div className='navBar'>
      <div className='title'>
        <Link to='/'>
          <img  src={LogoST} className='home' />
        </Link>
        </div>
        <div className='categories'>
          {allCategories.map((category, index) => {
            return (
              <div key={index} className='cate'>
                <Link to={"/filteredProducts/" + category}>
                  <button
                    className='btnCategorie'
                    type='button'
                    // onClick={() => filterCategory(category)}
                    key={category}

                  >{category}
                  </button>
                </Link>
              </div>

            )
          })}
        </div>
      </div>
  )
}

export default NavBar