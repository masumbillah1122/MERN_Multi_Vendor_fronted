import React from 'react';
import AccountUser from '../../components/accountuser/AccountUser';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './account.css';

const Account = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
      <main className="main-container">
        <AccountUser />
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

export default Account