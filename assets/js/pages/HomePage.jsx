import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logoAcme from "../images/LOGO_ACME_FINAL_BLANC.png"
import "../../styles/HomePage.css"

const HomePage = (props) => {
    return ( <>
    <section className=''> 
      <div className='div_logo'>
        <img className='logoAcme' src={logoAcme}/>
      </div>
      <div className='discover'>
        <p className=''>Découvrez notre nouvelle collection de chaussure de sport haut de gamme</p>
        <button className='btn btn-primary'><NavLink className="nav-link" to="/shop">Découvrir</NavLink></button>
      </div>
    </section>
    </>
     );
}
 
export default HomePage;