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
    const [uCate, setuCatego] = useState(product.categories);
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
            categories: uCate,
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
                    <div className='inputCont incon1'>
                    <label for="titreProduit" class="placeholderEdit">Titre produit</label>
                    <input className='inputEdit' id='titreProduit' type='text'
                        defaultValue={product.title}
                        onChange={(e) => setuTitle(e.target.value)}
                    ></input>
                    </div>
                    <div className='inputCont incon2'>
                    <label for="descrip" class="placeholderEdit">Description du produit</label>
                    <textarea className='inputEdit' id='descrip'
                        defaultValue={product.description}
                        onChange={(e) => setuDescr(e.target.value)}
                    ></textarea>
                    </div>
                    <div className='inputCont incon3'>
                    <label for="prixBase" class="placeholderEdit">Prix de base</label>
                    <input className='inputEdit' id='prixBase' type='number'
                        defaultValue={product.basePrice}
                        onChange={(e) => setuPrixBase(e.target.value)}
                    ></input>
                    </div>
                    <div className='inputCont incon4'>
                    <label for="prixSolde" class="placeholderEdit">Prix solde</label>
                    <input className='inputEdit' id='prixSolde' type='number'
                        defaultValue={product.salePrice}
                        onChange={(e) => setuPrixSale(e.target.value)}
                    ></input>
                    </div>
                    <div className='inputCont incon5'>
                    <label for="cate1Produit" class="placeholderEdit">Categorie</label>
                    <input className='inputEdit' id='cate1Produit' type='text'
                        defaultValue={product.categories}
                        onChange={(e) => setuCatego(e.target.value)}
                    ></input>
                    </div>
                    <div className='inputCont incon7'>
                    <label for="img" class="placeholderEdit">URL Image du produit</label>
                    <input className='inputEdit' id='img' type='url'
                        defaultValue={product.imageUrl}
                        onChange={(e) => setuImgUrl(e.target.value)}
                    ></input>
                    </div>
                    <input className="validerBtn" id='boutton' type='submit' value="Valider modification" ></input>
                </form>
            ) : (
                <div className='productCard'>
                    <figure>
                        <img className='imgProduct' src={product.imageUrl} alt='...'></img>
                    </figure>
                    <div className='productBody'>
                        <h2 className='productTitle'>{product.title}</h2>
                        <p className='descrProduct'>{product.description}</p>
                        <div className='prixCont'>
                            <p className='prixBase'>{product.basePrice}€</p>
                            <p className='prixReduc'>{product.salePrice}€</p>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default Product