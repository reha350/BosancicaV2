import React from 'react';
import { Link } from 'react-router-dom';
import s1 from "./images/sponsor1.png"
import s2 from "./images/sponsor2.png"
import './App.css';




function Footer() {
  return (
    <div className="FooterBG">
      <div className="sponsors">
        <ul className="s-list">
            <li> <a href="http://kfz-gutachter-begovic.de/"><img className="SponsorLogo" src={s1} alt=""/> </a> </li>
       </ul>

        <div className="footer">
          <p>KUD Bosančica Copyright 2012-2020 Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist: KUD Bosancica Muenchen </p>
          
          
          <Link to="/datenschutz" ><a href=""><p>Dateschutz</p></a> </Link>

          <p className="signature">Erstellt von: &copy;  Haris Berbic 2020, <a href="mailto:Haris.Berbic@uni-bayreuth.de">Haris.Berbic@uni-bayreuth.de</a>   im Auftrag von KUD Bosančica München </p>
        </div> 
      </div>
    </div>
  );
}

export default Footer;
