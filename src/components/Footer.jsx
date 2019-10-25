import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = ({ origin }) => {
  return (
    <footer className={`footer ${origin}`}>
      <a href='/'>Condiciones</a>
      <a href='/'>Privacidad</a>
      <p>© 2019 Bescow. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
