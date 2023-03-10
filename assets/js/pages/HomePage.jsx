import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logoAcme from "../images/LOGO_ACME_FINAL_BLANC.png"
import "../../styles/HomePage.css"

const HomePage = (props) => {
  return (
    <section className='home-page-container'>
    <div className='logo-container'>
    <img className='logo' src={logoAcme} alt='Acme logo'/>
    </div>
    <div className='discover-container'>
    <h2 className='discover-text'>Découvrez notre nouvelle collection de chaussures de sport haut de gamme</h2>
    <button className='discover-btn'><NavLink className="nav-link" to="/shop">Découvrir</NavLink></button>
    </div>
    </section>
    );
    }
 
export default HomePage;