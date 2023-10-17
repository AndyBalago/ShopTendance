
const EditProduct = () => {
  
    return (
        <div className='formCont'>
            <h2 className='titreForm'>Modification produit</h2>
            <form  >
                <input id='titreProduit' type='text' placeholder='Titre Produit'></input>
                <textarea id='descrip' placeholder='Description produit'></textarea>
                <input id='prixBase' type='number' placeholder='Prix de base'></input>
                <input id='prixSolde' type='number' placeholder='Prix soldé'></input>
                <input id='cate1Produit' type='text' placeholder='Catgorie Produit 1 (ex. Vêtements, Chaussures, Accessoires)' ></input>
                <input id='cate2Produit' type='text' placeholder='Categorie produit 2 (ex. Homme, Femme, Sport, Unisex)' ></input>
                <input id='img' type='url' placeholder='Url image' ></input>
                <input id='boutton' type='submit' value='Valider modification' ></input>
            </form>
        </div>

    )
}

export default EditProduct