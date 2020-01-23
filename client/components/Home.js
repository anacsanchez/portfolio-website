import React, { useState, useEffect } from 'react';
import { About, Contact, Projects, Header, Navbar, Footer } from './index';

const Home = () => {

  const [ isVisible, setVisibility ] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > document.getElementById('header').scrollHeight && !isVisible) {
        setVisibility(true);
    }
    else if (window.scrollY < document.getElementById('header').scrollHeight && isVisible) {
        setVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },
  [isVisible]);

  return (
    <div id="home-page">
      <Header />
      <Navbar visible={ isVisible }/>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
