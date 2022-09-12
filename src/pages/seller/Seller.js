import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SellerInfo from '../../components/sellerinfo/SellerInfo';
import './seller.css';

const Seller = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
      <main className="main-container">
        <SellerInfo />
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

export default Seller
