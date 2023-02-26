import React from 'react';
import img from '../images/profil.png'
import '../../styles/Profil_page.css'

const Profil_Page = () => {
    const firstName = "John";
  const lastName = "Doe";
  const birthDate = "01/01/2000";
  const profileImageUrl = img;
  const adresse = "17 rue du Colonel Arnaud Beltrame"

  return (
    <div>
      <img src={profileImageUrl} alt="Profile" />
      <h1>{firstName} {lastName}</h1>
      <p>Date de naissance : {birthDate}</p>
      <p>Adresse : {adresse}</p>
      <div className="buttons-container">
      <button className='buttons'>Historique<br/>Commandes</button>
      <button className='buttons'>Nous Contacter</button>
      <button className='buttons'>Vos Paiements</button>
      </div>
    </div>
  );

}
 
export default Profil_Page;