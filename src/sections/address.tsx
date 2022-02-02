import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 80px 18vw;
  background: #fff;

  @media (max-width: 600px) {
    padding: 30px 0;
    width: 100vw;
  }

  h2 {
    font-size: 50px;
    font-weight: 900;
    margin: 0 0 24px 0;
    color: #006d87;

    @media (max-width: 600px) {
      font-size: 28px;
    }
  }

  h3 {
    font-size: 20px;
    margin: 0 0 16px 0;
    color: #646666;
    max-width: 420px;
    font-weight: 300;
    line-height: 26px;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  span {
    font-size: 20px;
    color: #08a899;
    margin-bottom: 8px;
    font-weight: 900;
  }
`;

const SectionCircle = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 180px;
  background: #fff;
  z-index: 0;
  align-self: center;
  top: -110px;

  @media (max-width: 600px) {
    top: -60px;
  }
`;

const Line = styled.div`
  width: 150px;
  height: 5px;
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  margin-bottom: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-top: -200px;
  z-index: 1;

  @media (max-width: 700px) {
    margin-top: -180px;
  }
`;

const Frame = styled.div`
  width: 1110px;
  height: 350px;

  @media (max-width: 1260px) {
    width: 84vw;
    height: 26.5vw;
  }

  @media (max-width: 700px) {
    width: calc(100vw - 30px);
    height: calc(115.9vw - 35px);
  }
`;

const Address = () => {

  return (
    <Wrapper id="address">
      <SectionCircle/>
      <Column>
        <h2>LOJA</h2>
        <span>Endereço</span>
        <h3>
        Shopping Sumaré, Nº 1506, <br/>Avenida Tancredo Neves, Caminho das Árvores, Salvador, CEP: 41.820-020
        </h3>
        <Line />
        <Frame>  
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8508621005303!2d-38.45786773517787!3d-12.981389090849442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1a9483c6a7%3A0x43232c3d462f1920!2sShopping%20Sumar%C3%A9!5e0!3m2!1sen!2sbr!4v1643841621989!5m2!1sen!2sbr" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} loading="lazy"></iframe>
        </Frame>
      </Column>
    </Wrapper>
  );
};

export default Address;
