import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct } from '../actions/product.action'
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const [editToggle, setEditToggle] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    const confirmDelete = () => {
        dispatch(deleteProduct(product.id));
        setIsDeleteModalOpen(false);
    };

    return (
        <div className='productCont'>
            <div className='editDelete'>
                <AiFillEdit className='edit' onClick={() => setEditToggle(!editToggle)} />
                <AiFillDelete className="delete" onClick={() => setIsDeleteModalOpen(true)} />
            </div>
            {isDeleteModalOpen && (
                <div className="delete-modal">
                    <div className='contentModal'>
                        <p>Vous voulez supprimer ce produit?</p>
                        <img className='imgProductDelete' src={product.imageUrl} alt='...'></img>
                        <p className='titleProduitDelete'>{product.title}</p>
                        <div className='contOptions'>
                            <button className='botonSupprimer' onClick={confirmDelete}>Supprimer</button>
                            <button className='botonAnnuler' onClick={() => setIsDeleteModalOpen(false)}>Annuler</button>
                        </div>
                    </div>
                </div>
            )}

{editToggle ? (
    <form onSubmit={(e) => handleEdit(e)}>
        <div className='inputCont incon1'>
            <label htmlFor="titreProduit" className="placeholderEdit">Titre produit</label>
            <input
                className='inputEdit'
                id='titreProduit'
                type='text'
                defaultValue={product.title}
                onChange={(e) => setuTitle(e.target.value)}
                required 
            ></input>
        </div>
        <div className='inputCont incon2'>
            <label htmlFor="descrip" className="placeholderEdit">Description du produit</label>
            <textarea
                className='inputEdit'
                id='descrip'
                defaultValue={product.description}
                onChange={(e) => setuDescr(e.target.value)}
                required 
            ></textarea>
        </div>
        <div className='inputCont incon3'>
            <label htmlFor="prixBase" className="placeholderEdit">Prix de base</label>
            <input
                className='inputEdit'
                id='prixBase'
                type='number'
                defaultValue={product.basePrice}
                onChange={(e) => setuPrixBase(e.target.value)}
                required 
            ></input>
        </div>
        <div className='inputCont incon4'>
            <label htmlFor="prixSolde" className="placeholderEdit">Prix solde</label>
            <input
                className='inputEdit'
                id='prixSolde'
                type='number'
                defaultValue={product.salePrice}
                onChange={(e) => setuPrixSale(e.target.value)}
                required 
            ></input>
        </div>
        <div className='inputCont incon5'>
            <label htmlFor="cate1Produit" className="placeholderEdit">Categorie</label>
            <input
                className='inputEdit'
                id='cate1Produit'
                type='text'
                defaultValue={product.categories}
                onChange={(e) => setuCatego(e.target.value)}
                required 
            ></input>
        </div>
        <div className='inputCont incon7'>
            <label htmlFor="img" className="placeholderEdit">URL Image du produit</label>
            <input
                className='inputEdit'
                id='img'
                type='url'
                defaultValue={product.imageUrl}
                onChange={(e) => setuImgUrl(e.target.value)}
                required 
            ></input>
        </div>
        <input className="validerBtn" id='boutton' type='submit' value="Valider modification" ></input>
    </form>
) : (
                <div className='productCard'>
                    <figure>
                        <Link to={`/DetailProduct/${product.id}`}><img className='imgProduct' src={product.imageUrl} alt='...'></img></Link>
                    </figure>
                    <div className='productBody'>
                        <Link className='linkTitleDetail' to={`/DetailProduct/${product.id}`}><h2 className='productTitle'>{product.title}</h2></Link>
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