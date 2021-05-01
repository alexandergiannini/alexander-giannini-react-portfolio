import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
//add an alt attribute to the img src
function Home() {
    return (
        <section className="m-5">
          <h1 id="about">About Me</h1>
          <img src={require('../../assets/small/commercial/6.jpg').default}></img>
          <p>Alexander Giannini is currently a student at the UCLA Extension Bootcamp. He also has a day job working as a QA Engineer at GOAT Group.</p>
          <p>After the coding bootcamp is complete, he would love to start applying to junior developer jobs and hopefully gain an opportunity there!</p>
          <p>He currently resides in Los Angeles, California. He went to the University of the Pacific for undergrad.</p>
        </section>
      );
  }

export default Home;