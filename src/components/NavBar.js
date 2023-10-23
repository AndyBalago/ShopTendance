import React, { useState } from 'react'
import LogoST from '../Img/LogoST.png'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { AiOutlineMenu } from 'react-icons/ai'


const NavBar = () => {
  const products = useSelector((state) => state.productReducer);

  const allCategories = [...new Set(products.map(product => product.categories))];

  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar)
  };


  return (
    <div className='navBar'>
      <div className='contLogo'>
        <NavLink to='/'>
          <img src={LogoST} className='logo' />
        </NavLink>
      </div>
      <div className='menuResponsive'>
        <AiOutlineMenu className='menu-icon' onClick={handleShowNavBar}/>
      </div>
      <div className={`categoriesBtns  ${showNavBar && 'active'}`} >
        {allCategories.map((category, index) => {
          return (
            <div key={index} className='cate'>
              <NavLink to={"/filteredProducts/" + category}>
                <button
                  className='btnCategorie'
                  type='button'
                  key={category}
                >{category}
                </button>
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className='contCreer'>
        <NavLink to='/create' ><button className='btnCreer'>Creer produit</button></NavLink>
      </div>
    </div>
  )
}

export default NavBar