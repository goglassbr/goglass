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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <head>
        <link href="/fonts/MazzardH/stylesheet.css" rel="stylesheet" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	      <meta charset="utf-8"/>
        <meta name="title" content="Goglass - Assistência Técnica Especialista em Telas de Iphone e Samsung"/>
	      <meta name="description" content="Assistencia Tecnica Iphone e Samsung Especialista em Troca de Tela de Celular! Melhor Preço, Delivery Grátis, até 6X Sem Juros e Aparelho Reserva só na Goglass."/>
        <title>Goglass Assistência Técnica de Iphone e Samsung</title>
        <meta name="facebook-domain-verification" content="8pd8orzviehddncqugfrt9q0xgr3ql"/>
        <meta property="og:type" content="website"/>
	      <meta property="og:title" content="Goglass Assistência Técnica de Iphone e Samsung"/>
        <meta property="og:site_name" content="GoGlass"/>


        {/* Google Tag Manager */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THJQ4RD');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Global site tag (gtag.js) - Google Ads: 713160636 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-713160636"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-713160636');
              gtag('config', 'UA-149668243-1');
            `,
          }}
        />

        {/* Event snippet for Agendar Serviço conversion page
        In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-713160636/dRsRCIvctakBELzvh9QC',
                    'event_callback': callback
                  });
                return false;
              }
            `,
          }}
        />

        {/* Facebook Pixel Code */}
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            !function (f, b, e, v, n, t, s) {
              if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                  n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
              n.queue = []; t = b.createElement(e); t.async = !0;
              t.src = v; s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '494996807736479');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=494996807736479&ev=PageView&noscript=1"/>
            `,
          }}
        />
        {/* End Facebook Pixel Code */}
      
      </head>
      <GlobalStyle/>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THJQ4RD"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Header/>
        <Hero/>
        <Services/>
        <Operation/>
        <Depositions/>
        <Address/>
        <FAQ/>
        <Footer/>
      </body>
    </div>
  )
}


export default GoglassPage;
