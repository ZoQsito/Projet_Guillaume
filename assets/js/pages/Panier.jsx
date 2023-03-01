import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Panier = (props) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/paniers").then((res) => {
      setBasket(res.data["hydra:member"]);
    });
  }, []);
  
  const totalPrice = basket.reduce((total, item) => total + (item.prix_produit * item.quantite), 0);

  return (
    <>
      <div>
        <h1>Panier</h1>
        <table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((data) => (
              <tr key={data.id}>
                <td>{data.nom_produit}</td>
                <td>{data.prix_produit}€</td>
                <td>{data.quantite}</td>
                <td>{data.prix_produit * data.quantite}€</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total Panier</td>
              <td>{totalPrice}€</td>
            </tr>
          </tfoot>
        </table>
        <button className='btn btn-primary'><NavLink className="nav-link" to="/shop">Continuer les achats</NavLink></button>
        <button className='btn btn-primary'>Passer commande</button>
      </div>
    </>
  );
};

export default Panier;