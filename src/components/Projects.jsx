import React, { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects () {
    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);

  return (
    <>
      <section className = 'projects'>
        <h2>Projects</h2><br/>
        <div className = 'project-container'>
          <div className = 'project'>
            <div className = 'image-container'>
            <div className = "project-details">
              <h3>Mall of Garden City</h3>
              <p>Invest in your retail success at Mall of Garden City. Discover prime suites, shops, and food courts that promise lucrative returns in Rawalpindi's premier shopping and entertainment destination.</p>
              <button onClick={() => setIsOpenModal1(true)} class='see-details'>Full Details</button>
              {isOpenModal1 && (
              <div className = "modal-box">
                <div className = "modal-box-inner">
                  <div className = "modal-close"><a onClick={() => setIsOpenModal1(false)} className= "close-icon" href="#"><FontAwesomeIcon icon = {faTimes} style={{ color : '#fff', fontSize : "25px", marginTop: '2%'}} /></a></div>
                  <img src="static/media/mogc-mobile.9bccb11b1e42d382d622.png"></img><br/>
                  <h3>The Mall of Garden City</h3>
                  <p>Invest in success at Mall of Garden City, Rawalpindi's premier shopping and entertainment destination. Discover prime suites, shops, and food courts offering lucrative returns. With a strategic location, state-of-the-art facilities, and a vibrant atmosphere, Mall of Garden City presents the perfect investment opportunity. Secure your financial success and be part of an iconic destination catering to diverse needs. Contact us now to explore available investment opportunities and maximize your returns.</p>
                  <div className = "project-buttons">
                    <a className="modal-inner-buttons" href="#">Project Website</a>
                    <a className="modal-inner-buttons" href="#">Explore Further</a>
                  </div>
                </div>
              </div>
              )}
            </div>
            </div>
            </div>
            <br/><br/>
            <div className = 'project'>
            <div className = 'image-container'>
            <div className = "project-details">
              <h3>Dot by Al-Jamal</h3>
              <p>Invest in your retail success at Mall of Garden City. Discover prime suites, shops, and food courts that promise lucrative returns in Rawalpindi's premier shopping and entertainment destination.</p>
              <button onClick={() => setIsOpenModal2(true)} class='see-details'>Full Details</button>
              {isOpenModal2 && (
              <div className = "modal-box">
                <div className = "modal-box-inner">
                  <div className = "modal-close"><a onClick={() => setIsOpenModal2(false)} className= "close-icon" href="#"><FontAwesomeIcon icon = {faTimes} style={{ color : '#fff', fontSize : "25px", marginTop: '2%'}} /></a></div>
                  <img src="static/media/mogc-mobile.9bccb11b1e42d382d622.png"></img><br/>
                  <h3>Dot By Al-Jamal</h3>
                  <p>Invest in success at Mall of Garden City, Rawalpindi's premier shopping and entertainment destination. Discover prime suites, shops, and food courts offering lucrative returns. With a strategic location, state-of-the-art facilities, and a vibrant atmosphere, Mall of Garden City presents the perfect investment opportunity. Secure your financial success and be part of an iconic destination catering to diverse needs. Contact us now to explore available investment opportunities and maximize your returns.</p>
                  <div className = "project-buttons">
                    <a className="modal-inner-buttons" href="#">Project Website</a>
                    <a className="modal-inner-buttons" href="#">Explore Further</a>
                  </div>
                </div>
              </div>
              )}
            </div>
            </div>
            </div>          
        </div>
      </section>
    </>
  );

}

export default Projects;