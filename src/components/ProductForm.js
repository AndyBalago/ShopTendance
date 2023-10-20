import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts, getProducts } from '../actions/product.action';
import { useNavigate } from 'react-router-dom';


const ProductForm = () => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        const basePrice = parseFloat(form[2].value);
        const salePrice = parseFloat(form[3].value);

        const productData = {
            title: form[0].value,
            description: form[1].value,
            basePrice: basePrice,
            salePrice: salePrice,
            imageUrl: form[6].value,
            categories: form[4].value,
        };

        await dispatch(addProducts(productData));
        dispatch(getProducts());
        navigate('/');
    };

    return (
        <div className='formCont'>
            <h2 className='titreForm'>Creation de produits</h2>
            <form ref={formRef} onSubmit={e => handleForm(e)}>
                <div className='input-container ic1'>
                    <input className='input' id='titreProduit' type='text' placeholder=''></input>
                    
                    <label htmlFor="titreProduit" className="placeholder">Titre produit</label>
                </div>
                <div className='input-container ic2'>
                    <textarea className='input' id='descrip' placeholder=''></textarea>
                    
                    <label htmlFor="descrip" className="placeholder">Description du produit</label>
                </div>
                <div className='input-container ic3'>
                    <input className='input' id='prixBase' type='number' placeholder=''></input>
                    
                    <label htmlFor="prixBase" className="placeholder">Prix de base</label>
                </div>
                <div className='input-container ic4'>
                    <input className='input' id='prixSolde' type='number' placeholder=''></input>
                    
                    <label htmlFor="prixSolde" className="placeholder">Prix solde</label>
                </div>
                <div className='input-container ic5'>
                    <input className='input' id='cate1Produit' type='text' placeholder=''></input>
                    
                    <label htmlFor="cate1Produit" className="placeholder">Categorie</label>
                </div>
                <div className='input-container ic7'>
                    <input className='input' id='img' type='url' placeholder=''></input>
                    
                    <label htmlFor="img" className="placeholder">URL Image du produit</label>
                </div>
                <button className='submit' id='boutton' type='submit' value='Creer produit'>Creer Produit</button>
            </form>
        </div>
    )
}

export default ProductForm