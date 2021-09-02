import React from 'react';
import Header from './sections/header';
import Hero from './sections/hero';
import Services from './sections/services';
import Operation from './sections/operation';
import Depositions from './sections/depositions';
import Address from './sections/address';
import FAQ from './sections/faq';
import Footer from './sections/footer';
import { createGlobalStyle } from 'styled-components';
import 'swiper/swiper-bundle.css';


const GlobalStyle = createGlobalStyle`

  body {

    font-family: 'MazzardH';
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
`;

const GoglassPage = () => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', zIndex: -1 }}>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <Services/>
      <Operation/>
      <Depositions/>
      <Address/>
      <FAQ/>
      <Footer/>
    </div>
  )
}


export default GoglassPage;
