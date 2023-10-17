import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../actions/product.action'
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    
    return (
        <div className='productCont'>
            <div className='contTitle'>
                <h2 className='productTitle'>{product.title}</h2>
                <div className='editDelete'>
                <Link to={`/edit/${product.id}`}><AiFillEdit className='edit'/></Link>
                <AiFillDelete className='delete' onClick={() => dispatch(deleteProduct(product.id))}/>
                </div>
            </div>
            <img className='imgProduct' src={product.imageUrl} alt='...'></img>
            <p className='descrProduct'>{product.description}</p> 
            <div className='prixCont'>
                <p className='prixBase'>{product.basePrice}€</p>
                <p className='prixReduc'>{product.salePrice}€</p>
            </div>
        </div>
    )
}

export default Product