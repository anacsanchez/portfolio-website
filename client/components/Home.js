import React from 'react';
import { About, Contact, Projects, Header, Navbar, Footer } from './index';

const Home  = () => {

  window.addEventListener('scroll', () => {
    if (window.scrollY > document.getElementById('header').scrollHeight) {
      if (document.getElementById('navbar').classList.contains('hide'))
        document.getElementById('navbar').classList.remove('hide');
    }
    else {
      if (!document.getElementById('navbar').classList.contains('hide')) {
        document.getElementById('navbar').classList.add('hide');
      }
    }
  });

  return (
    <div id="home-page">
      <Header />
      <Navbar />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
