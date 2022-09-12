import React from 'react';
import Filter from '../../components/filters/Filter';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import "./shop.css";

const Shop = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
      <main className="main-container">
       <Filter />
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

export default Shop