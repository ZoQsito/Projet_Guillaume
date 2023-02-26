import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import TableLoader from "../components/loaders/TableLoader";



const Panier = (props) => {


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
        <tr>
          <td>Nom du produit</td>
          <td>99.99 €</td>
          <td>1</td>
          <td>99.99 €</td>
        </tr>
        <tr>
          <td>Nom du produit</td>
          <td>49.99 €</td>
          <td>2</td>
          <td>99.98 €</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td>
          <td>199.97 €</td>
        </tr>
      </tfoot>
    </table>
    <a href="#">Continuer mes achats</a>
    <button>Passer commande</button>
      </div>
    </>
  );
};

export default Panier;
