import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-content">
        <address className="footer-address">
          <h2><a href="#top">Ace Deuce Contractors</a></h2>
          Providence, RI 02908<br />
          Email: <a href="mailto:info@acedeucegc.com">info@acedeucegc.com</a>
          <br />
          Phone: <a href="tel:+14015555555">(401) 555-5555</a>
        </address>
        <nav className="footer-nav" aria-label="footer">
          <a href="#services">Our Services</a>
          <a href="#projects">Project Gallery</a>
          <a href="#testimonials">Testimonials</a>
        </nav>
        <div className="footer-legal">
          <p>Copyright &copy; <span>{new Date().getFullYear()}</span></p>
          <p>All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
