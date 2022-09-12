import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SellFilters from '../../components/sellfilters/SellFilters';
import './sellers.css';

const Sellers = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
      <main className="main-container">
        <SellFilters />
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

export default Sellers
