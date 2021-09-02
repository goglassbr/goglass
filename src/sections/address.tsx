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
          Av. Prof. Magalhães Neto, 1752 - Sala 309 -<br/>
          Pituba, Salvador - BA, 41810-012
        </h3>
        <Line />
        <Frame>  
          <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Av.%20Prof.%20Magalh%C3%A3es%20Neto,%201752,%20Pituba,%20Salvador,%20Bahia,%20Brazil+(Assist%C3%AAncia%20T%C3%A9cnica%20Goglass)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </Frame>
      </Column>
    </Wrapper>
  );
};

export default Address;
