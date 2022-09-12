import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Latest from '../../components/latest/Latest';
import Slider from '../../components/slider/Slider';
import Socials from '../../components/socials/Socials';
import './home.css';

const Home = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
      <main className="main-container">
        <Slider />
        <Latest />
        <Socials />
      </main>
      {/* main end*/}

      {/* footer start*/}
      <footer className="footer-container">
        <Footer />
      </footer>
      {/* footer end*/}
    </div>
  );
}

export default Home