import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Header () {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <header>
      <nav class="navbar">
        <div class="header">
          <a class="navbar-brand" href = "#"><img src="../../assets/logo.png" style={{width : '30%'}}></img></a>
          <a onClick={toggleMenu} href="#"><FontAwesomeIcon icon = {faBars} style={{ color : '#fff', fontSize : "150%", marginTop: '8px'}} /></a>
          {isOpen && (
        <div className="menu">
          <a onClick={toggleMenu} href="#"><FontAwesomeIcon icon = {faTimes} style={{ color : '#fff', fontSize : "25px", marginTop: '2%'}} /></a>
          <a href="#">About</a>
          <a href="#">Porfolio</a>
        </div>
        )}
        </div>
      </nav>
      <section className= 'hero'>
        <h1>RedTree Real Estate - Your Path to Financial Success</h1>
        <p>Invest in Lucrative Mega Projects for Monthly Discounts and Annual Appreciation</p>
      </section>
    </header>
    </>
  );
}

export default Header;