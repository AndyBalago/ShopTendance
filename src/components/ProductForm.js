import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts, getProducts } from '../actions/product.action';


const ProductForm = () => {
    const formRef = useRef();
    const dispatch = useDispatch();

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
        form.reset();
    };

    return (
        <div className='formCont'>
            <h2 className='titreForm'>Creation de produits</h2>
            <form ref={formRef} onSubmit={e => handleForm(e)}>
                <input id='titreProduit' type='text' placeholder='Titre Produit'></input>
                <textarea id='descrip' placeholder='Description produit'></textarea>
                <input id='prixBase' type='number' placeholder='Prix de base'></input>
                <input id='prixSolde' type='number' placeholder='Prix soldé'></input>
                <input id='cate1Produit' type='text' placeholder='Catgorie Produit 1 (ex. Vêtements, Chaussures, Accessoires)'></input>
                <input id='cate2Produit' type='text' placeholder='Categorie produit 2 (ex. Homme, Femme, Sport, Unisex)'></input>
                <input id='img' type='url' placeholder='Url image'></input>
                <input id='boutton' type='submit' value='Ajouter'></input>
            </form>
        </div>
    )
}

export default ProductForm