import React from 'react';
import Footer from '../../components/footer/Footer';
import SignUp from '../../components/forms/SignUp';
import Header from '../../components/header/Header';
import "./forms.css";

const Register = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
        <main className="main-container">
        <SignUp />
        </main>
      {/* main end*/}

      {/* footer start*/}
      <footer className="footer-container">
        <Footer />
      </footer>
      {/* footer end*/}
    </div>
  )
}

export default Register