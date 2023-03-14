import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Field from "../components/forms/Field";


const Stocks = ({ match, history }) => {
  const { id = "new" } = match.params;

  const [products, setProducts] = useState({
    nom: "",
    prix: 0,
    reference: 0,
    quantite: 0,
  });

  const [errors, setErrors] = useState({
    nom: "",
    prix: 0,
    reference: 0,
    quantite: 0,
  });

  const [editing, setEditing] = useState(false);


  const fetchproduit = async (id) => {
    try {
      const { nom, prix, reference, quantite } = await Axios.get("http://127.0.0.1:8000/api/produits/"+ id)
      setProducts({ nom, prix, reference, quantite });
    } catch (error) {
      toast.error("Le produit n'a pas pu être chargé");
      console.log(products)
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchproduit(id);
    }
  }, [id]);

  //Gestion des changements des inputs dans le formulaire
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setProducts({ ...products, [name]: value });
  };

  //Gestion de la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrors({});

      if (editing) {
        products.prix = parseInt(products.prix);
        products.reference = parseInt(products.reference);
        products.quantite = parseInt(products.quantite);
        console.log(products)
        await Axios.put("http://127.0.0.1:8000/api/produits/"+id, products)
        toast.success("Le Produit a bien été modifié");
      } else {
        products.prix = parseInt(products.prix);
        products.reference = parseInt(products.reference);
        products.quantite = parseInt(products.quantite);
        console.log(products)
        await Axios.post("http://127.0.0.1:8000/api/produits/"+id, products)
        toast.success("Le Produit a bien été crée");
      }
    } catch ({ response }) {
      const { violations } = response.data;

      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErrors[propertyPath] = message;
        });
        setErrors(apiErrors);
        toast.error("Des erreurs dans votre formulaire !");
      }
    }
  };

  return (
    <>
      <div id="Budgets_content">
        {(!editing && <h1>Création d'un Produit</h1>) || (
          <h1>Modification du Produit</h1>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="Nom"
              label="Nom"
              placeholder="Nom"
              value={products.nom}
              onChange={handleChange}
              error={errors.nom}
            />
            &nbsp;
            <Field
              name="Prix"
              label="Prix"
              placeholder="Prix"
              value={products.prix}
              onChange={handleChange}
              error={errors.prix}
            />
            &nbsp;
            <Field
              name="Reference"
              label="Reference"
              placeholder="Référence du produit"
              value={products.reference}
              onChange={handleChange}
              error={errors.reference}
            />
            &nbsp;
            <Field
              name="Qauntité"
              label="Quantité"
              placeholder="Quantité"
              value={products.quantite}
              onChange={handleChange}
              error={errors.quantite}
            />
          </div>
          &nbsp;
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Enregistrer
            </button>
            <Link to="/Stock" className="btn btn-link">
              Retour à la liste
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Stocks;