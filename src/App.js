import React, {Suspense, lazy, useEffect} from 'react';
import Header from './sections/header';
import Hero from './sections/hero';
import Services from './sections/services';
import Footer from './sections/footer';
import { createGlobalStyle } from 'styled-components';
import 'swiper/swiper-bundle.css';
import PopUpRoleta from './components/popUpRoleta'
import { ToastContainer} from 'react-toastify';
import { useMongoDB } from './providers/mongodb';
import { useRealmApp } from './providers/realm';
import { Experiment, Variant } from "react-optimize";

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
  const { logIn, user } = useRealmApp()

  if(!user){
    logIn()
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', zIndex: -1 }}>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <Services/>
      {/* <Experiment id="yjWYQZslTDGXCABZpGipWA">
        <Variant id="1">
          <h1>2</h1>
        </Variant>
        <Variant id="0">
          <h1>1</h1>
        </Variant>
      </Experiment> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Operation/>
        <Depositions/>
        <Address/>
        <FAQ/>
      </Suspense>
      <Footer/>
      <PopUpRoleta/>
      <ToastContainer/>      
    </div>
  )
}


export default GoglassPage;
