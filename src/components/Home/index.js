import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
//add an alt attribute to the img src
function Home() {
    return (
        <section className="m-5">
          <h1 id="about">About Me</h1>
          <img src={require('../../assets/small/commercial/6.jpg').default}></img>
          <p className="about-me-p-tag">Alexander Giannini is currently a student at the UCLA Extension Bootcamp. He also has a day job working as a QA Engineer at GOAT Group.</p>
          <p className="about-me-p-tag">After the coding bootcamp is complete, he would love to start applying to junior developer jobs and hopefully gain an opportunity there!</p>
          <p className="about-me-p-tag">He currently resides in Los Angeles, California. He went to the University of the Pacific for undergrad.</p>
          <p className="about-me-p-tag">Alexander is an avid sports fan and he loves hanging out with family, friends, and loved ones.</p>
        </section>
      );
  }

export default Home;