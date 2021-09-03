import React, {Suspense, lazy} from 'react';
import Header from './sections/header';
import Hero from './sections/hero';
import Services from './sections/services';
import Footer from './sections/footer';
import { createGlobalStyle } from 'styled-components';
import 'swiper/swiper-bundle.css';

const Operation = lazy(() => import('./sections/operation'));
const Depositions = lazy(() => import('./sections/depositions'));
const Address = lazy(() => import('./sections/address'));
const FAQ = lazy(() => import('./sections/faq'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Operation/>
        <Depositions/>
        <Address/>
        <FAQ/>
      </Suspense>
      <Footer/>
    </div>
  )
}


export default GoglassPage;
