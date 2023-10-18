import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct } from '../actions/product.action'
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

const Product = ({ product }) => {
    const [editToggle, setEditToggle] = useState(false);
    const [uTitle, setuTitle] = useState(product.title);
    const [uDescr, setuDescr] = useState(product.description);
    const [uPrixBase, setuPrixBase] = useState(product.basePrice);
    const [uPrixSale, setuPrixSale] = useState(product.salePrice);
    const [uImgUrl, setuImgUrl] = useState(product.imageUrl);
    const [uCate1, setuCatego1] = useState(product.categories[1]);
    const [uCate2, setuCatego2] = useState(product.categories[2]);
    const dispatch = useDispatch();


    const handleEdit = (e) => {
        e.preventDefault();

        const uubasePrice = parseFloat(uPrixBase);
        const uusalePrice = parseFloat(uPrixSale);
        const productData = {
            id: product.id,
            title: uTitle,
            description: uDescr,
            basePrice: uubasePrice,
            salePrice: uusalePrice,
            imageUrl: uImgUrl,
            categories: [uCate1,uCate2],
        };

        dispatch(editProduct(productData));
        setEditToggle(false);
    };

    return (
        <div className='productCont'>
            <div className='editDelete'>
                <AiFillEdit className='edit' onClick={() => setEditToggle(!editToggle)} />
                <AiFillDelete className='delete' onClick={() => dispatch(deleteProduct(product.id))} />
            </div>

            {editToggle ? (
                <form onSubmit={(e) => handleEdit(e)}>
                    <input id='titreProduit' type='text' 
                    defaultValue={product.title}
                    onChange={(e) => setuTitle(e.target.value)}
                    ></input>
                    <textarea id='descrip'
                    defaultValue={product.description}
                    onChange={(e) => setuDescr(e.target.value)}
                    ></textarea>
                    <input id='prixBase' type='number' 
                    defaultValue={product.basePrice}
                    onChange={(e) => setuPrixBase(e.target.value)}
                    ></input>
                    <input id='prixSolde' type='number' 
                    defaultValue={product.salePrice}
                    onChange={(e) => setuPrixSale(e.target.value)}
                    ></input>
                    <input id='cate1Produit' type='text' 
                    defaultValue={product.categories[0]}
                    onChange={(e) => setuCatego1(e.target.value)}
                    ></input>
                    <input id='cate2Produit' type='text' 
                    defaultValue={product.categories[1]}
                    onChange={(e) => setuCatego2(e.target.value)}
                    ></input>
                    <input id='img' type='url' 
                    defaultValue={product.imageUrl}
                    onChange={(e) => setuImgUrl(e.target.value)}
                    ></input>
                    <input id='boutton' type='submit' value="Valider modification" ></input>
                </form>
            ) : (
                <div>
                    <div className='contTitle'>
                        <h2 className='productTitle'>{product.title}</h2>
                    </div >
                    <img className='imgProduct' src={product.imageUrl} alt='...'></img>
                    <p className='descrProduct'>{product.description}</p>
                    <div className='prixCont'>
                        <p className='prixBase'>{product.basePrice}€</p>
                        <p className='prixReduc'>{product.salePrice}€</p>
                    </div>
                </div>
            )}
        </div >
    )
}

export default Product