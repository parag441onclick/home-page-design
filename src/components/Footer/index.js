import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class='site-footer'>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-12 col-md-6 footer-terms'>
            <Link className='footer-links' to='/'>
              <img src='/assets/logo2.png' alt='site-logo' />
            </Link>
            <p class='text-justify'>
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
            <a target='_blank' href='https://www.facebook.com'>
              <i class='facebook icon'></i>
            </a>
            <a target='_blank' href='https://twitter.com/login?lang=en'>
              <i class='twitter icon'></i>
            </a>
            <a target='_blank' href='https://www.linkedin.com/'>
              <i class='linkedin icon'></i>
            </a>
          </div>

          <div class='col-xs-6 col-md-3'>
            <h6 className='footer-header'>Links</h6>
            <ul class='footer-links footer-list'>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  Terms and Conditions
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  Privacy Polociy
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  Cokkie Policy
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  Advertising and Branding
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  Help and FAQs
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  Templates
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div class='col-xs-6 col-md-3'>
            <h6 className='footer-header'>Our Network</h6>
            <ul class='footer-links footer-list'>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  FranchiseSales.in
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  FranchiseAVendre.fr
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-links'>
                  PropertSales.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <div class='copyright-block'>
        <div class='row'>
          <div class='col-md-8 col-sm-6 col-xs-12'>
            <p class='copyright-text'>
              2018 Copyright &copy;. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
