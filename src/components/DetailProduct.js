import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function DetailProduct() {

    const products = useSelector((state) => state.productReducer);
    const { id } = useParams();

    const product = products.find(item => {
        return item.id === parseInt(id);
    })

    if (!product) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>DetailProduct
            <div className='contProductDetail'>
                <figure>
                    <img className='detailImgProduct' src={product.imageUrl} alt='...'></img>
                </figure>
                <div className='productBodyDetail'>
                    <h2 className='detailProductTitle'>{product.title}</h2>
                    <p className='detailDescrProduct'>{product.description}</p>
                    <div className='detailPrixCont'>
                        <p className='datailPrixBase'>{product.basePrice}€</p>
                        <p className='detailPrixReduc'>{product.salePrice}€</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailProduct