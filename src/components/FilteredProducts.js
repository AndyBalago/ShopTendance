import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Product from './Product';



const FilteredProducts= ()=> {

const products = useSelector((state) => state.productReducer);
const {categorie} =useParams();

console.log( categorie);

  return (
    <div className='contFilter'>FilteredProducts
        <div>
            <h1 className='titreCategorie'>
            {categorie}
            </h1>
        </div>
        <div className='contCardProducts'>
            {products
            .filter((product) => product.categorie == categorie)
            .map((product, index) => {
                return(
                    <div key={index}>
                    <Product 
                   product={product} key={index}></Product>
                    </div>
                )
               
            })
            
            }
        </div>
    </div>
  )
}

export default FilteredProducts