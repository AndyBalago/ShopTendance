import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../actions/product.action'
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    
    return (
        <div className='productCont'>
            <div className='contTitle'>
                <h2 className='productTitle'>{product.title}</h2>
                <div className='editDelete'>
                    <AiFillEdit className='edit'/>
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