import React from 'react';
import styled from 'styled-components';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import goglassLogo from '../source/goglass-logo.webp';
import criatecLogo from '../source/criatecl.webp';

const Wrapper = styled.div`
  background: #006d87;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 40px calc(18vw + 15px) 20px calc(18vw + 15px);
  transition: all 0.35s ease-in-out;

  @media (max-width: 1260px) {
    padding: 40px 4vw 25px 4vw;
  }

  @media (max-width: 700px) {
    padding: 40px 15px 25px 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 5px 0;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1260px) {
    padding-left: 20px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #fff;
  width: 30%;
  
  @media (max-width: 1260px) {
    flex-direction: column;
    padding: 5px 0;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  h4 {
    font-size: 16px;
    font-weight: 900;
    margin: 30px 0;
    padding-top: 20px;
    border-top: 5px solid white;
  }

  h5 {
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
    justify-self: center;
    margin: 0 0 10px 0;
  }

  a {
    color: #fff;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: left;
`;

const Logos = styled.a`
  color: #fff;
  margin-right: 10px;
  transition: all 0.35s ease-in-out;
  cursor: pointer;

  :hover {
    color: #14aa94;
  }
`;

const CreatorRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,.5);
  margin-top: 24px;
  font-size: 12px;
  font-weight: 300;
  color: #fff;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    margin: 0;
  }

  a {
    color: #fff;
  }

  @media (max-width: 1000px) {
    padding: 13px 4vw;
  }

  @media (max-width: 700px) {
    padding: 16px 0 0 0;
    flex-direction: column;
    width: 100%;
  }
`;

const GoglassLogo = styled.img`
  width: 317px;
  height: auto;
  margin: 96px 20px 0 0;

  @media (max-width: 1260px) {
    align-self: center;
    margin-top: 0;
    padding: 5px 0;
    width: 256px;
  }
  
  @media (max-width: 700px) {
    width: 200px;
    margin: 0 0 20px 0;
  }
`;

const Footer = () => {

  return (
    <Wrapper>
      <Container>
        <GoglassLogo src={goglassLogo}/>
        <SectionsWrapper> 
          <Section>
            <h4>ACESSO RÁPIDO</h4>
            <a href="#services"><h5>SERVIÇOS E VALORES</h5></a>
            <a href="#operation"><h5>COMO FUNCIONA</h5></a>
            <a href="#depositions"><h5>DEPOIMENTOS</h5></a>
            <a href="#address"><h5>LOJA</h5></a>
            <a href="#faq"><h5>FAQ</h5></a>
          </Section>
          <Section>
            <h4>CONTATO</h4>
            <h5>CNPJ: 34776332/0001-84</h5>
            <a href="mailto:goglassbr@gmail.com"><h5>goglassbr@gmail.com</h5></a>
            <a href="https://api.whatsapp.com/send?phone=7197166900"><h5>(71) 9716-6900</h5></a>
            <h5>Shopping Sumaré, Nº 1506, Avenida Tancredo Neves, Caminho das Árvores, Salvador, CEP: 41.820-020</h5>
            <h5>Segunda a Sexta de 9h às 18h</h5>
            <h5>Sábado das 09:00h às 13:00h.</h5>
          </Section>
          <Section>
            <h4>REDES SOCIAIS</h4>
            <LogoWrapper>
              <Logos href="https://www.instagram.com/goglassbr/" target="_blank">
                <FaInstagram size="30px" aria-hidden="true" />
              </Logos>
              <Logos
                href="https://www.facebook.com/pages/category/Local-Service/Goglass-Brasil-104900180889107/"
                target="_blank"
              >
                <FaFacebookF size="30px" aria-hidden="true" />
              </Logos>
              <Logos
                href="https://www.youtube.com/channel/UCL6M8H1mQ2ZOXKI284Pa9VQ"
                target="_blank"
              >
                <FaYoutube size="30px" aria-hidden="true" />
              </Logos>
            </LogoWrapper>
          </Section>
        </SectionsWrapper>
      </Container>
      <CreatorRow>
        <p>© 2020 por Goglass. Todos os direitos reservados</p>
        <a href="https://criatecservicos.com.br/"><p>Desenvolvido por CriaTec <img src={criatecLogo} style={{ width: 30, height: 30, marginLeft: 2 }}/></p></a>
      </CreatorRow>

    </Wrapper>
  );
};

export default Footer;
