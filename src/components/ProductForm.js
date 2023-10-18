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

        const categories = [form[4].value, form[5].value];
        const productData = {
            title: form[0].value,
            description: form[1].value,
            basePrice: basePrice,
            salePrice: salePrice,
            imageUrl: form[6].value,
            categories: categories,
        };

        await dispatch(addProducts(productData));
        dispatch(getProducts());
        navigate('/');
    };

    return (
        <div className='formCont'>
            <h2 className='titreForm'>Creation de produits</h2>
            <form ref={formRef} onSubmit={e => handleForm(e)}>
                <input className='input-container ic1' id='titreProduit' type='text' placeholder='Titre Produit'></input>
                <textarea className='input-container ic2' id='descrip' placeholder='Description produit'></textarea>
                <input className='input-container ic3' id='prixBase' type='number' placeholder='Prix de base'></input>
                <input className='input-container ic4' id='prixSolde' type='number' placeholder='Prix soldé'></input>
                <input className='input-container ic5' id='cate1Produit' type='text' placeholder='Catgorie Produit 1 (ex. Vêtements, Chaussures, Accessoires)'></input>
                <input className='input-container ic6' id='cate2Produit' type='text' placeholder='Categorie produit 2 (ex. Homme, Femme, Sport, Unisex)'></input>
                <input className='input-container ic7' id='img' type='url' placeholder='Url image'></input>
                <input className='submit' id='boutton' type='submit' value='Creer produit'></input>
            </form>
        </div>
    )
}

export default ProductForm