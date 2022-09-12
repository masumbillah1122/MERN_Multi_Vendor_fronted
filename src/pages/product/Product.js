import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductDetails from '../../components/productdetails/ProductDetails';
import './product.css';

const Product = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
      <main className="main-container">
        <ProductDetails />
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

export default Product
