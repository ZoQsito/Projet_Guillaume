import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logoAcme from "../images/LOGO_ACME_FINAL_BLANC.png"
import "../../styles/HomePage.css"

const AdminPage = (props) => {
  return (
    <section className='home-page-container'>
    <div className='logo-container'>
    </div>
    <div className='discover-container'>
    <h2 className='discover-text'>ADMIN TEST</h2>
    <button className='discover-btn'><NavLink className="nav-link" to="/shop">Découvrir</NavLink></button>
    </div>
    </section>
    );
    }
 
export default AdminPage;