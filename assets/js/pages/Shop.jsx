import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../styles/shoppage.css"


function ShopPage() {

  const[products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/produits").then((res) => {
      setProducts(res.data["hydra:member"]);
  })
  },[]);
  const img = 'https://placehold.it/300x200';
  console.log(products)

  function handleBuyClick(product) {
    const { id, nom , prix, reference} = product;
    const cardInfo = {
      quantite: 1,
      idProduit: id,
      nomProduit: nom,
      prixProduit: prix,
      referenceProduit: reference,
    };
    console.log(cardInfo);

    Axios.post('http://127.0.0.1:8000/api/paniers', cardInfo);
  }

  return (
    <div className="marketplace">
      <h1>Bienvenue sur notre marketplace</h1>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={img} alt={product.nom} />
            <h2>{product.nom}</h2>
            <div className="price">${product.prix}</div>
            <button onClick={() => handleBuyClick(product)}>Acheter</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
