import React, {Suspense, lazy, useEffect} from 'react';
import Header from './sections/header';
import Hero from './sections/hero';
import Services from './sections/services';
import Footer from './sections/footer';
import { createGlobalStyle } from 'styled-components';
import 'swiper/swiper-bundle.css';
import PopUpSorteio from './components/popUpSorteio'
import { ToastContainer} from 'react-toastify';
import { useRealmApp } from './providers/realm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Concorra from './screens/concorra';
import Franquia from './screens/franquia';

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
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route exact path="/">
          <div style={{ display: 'flex', flexDirection: 'column', zIndex: -1 }}>
            <Header/>
            <Hero/>
            <Services/>
            <Suspense fallback={<div>Loading...</div>}>
              <Depositions/>
              <Operation/>
              <Address/>
              <FAQ/>
            </Suspense>
            <Footer/>
            {/* <PopUpSorteio/> */}
            <ToastContainer/>  
          </div>
        </Route>
        <Route path='/concorra' component={Concorra}/>
        <Route path='/franquia' component={Franquia}/>
      </Switch>
    </Router>
    </>
  )
}


export default GoglassPage;
