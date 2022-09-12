import React from 'react';
import Footer from '../../components/footer/Footer';
import SignIn from '../../components/forms/SignIn';
import Header from '../../components/header/Header';
import './forms.css';

const Login = () => {
  return (
    <div className="wrapper">
      {/* Header start*/}
      <header className="header-container">
        <Header />
      </header>
      {/* Header end*/}

      {/* main start*/}
      <main className="main-container">
      <SignIn />
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

export default Login
