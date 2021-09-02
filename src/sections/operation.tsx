import React from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import videoOperation from '../source/video-operation.png';

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  background: #111111eb;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 80px 18vw;
  background: #fafafa;
  box-sizing: border-box;

  @media (max-width: 1260px) {
    padding: 80px 8vw;
    width: 100vw;
  }

  @media (max-width: 700px) {
    padding: 30px 0;
    width: 100vw;
  }

  h2 {
    font-size: 40px;
    font-weight: 900;
    margin: 0 0 24px 0;
    color: #006d87;

    @media (max-width: 700px) {
      font-size: 23px;
    }
  }

  h3 {
    font-size: 20px;
    margin: 0 0 16px 0;
    color: #646666;
    max-width: 400px;
    font-weight: 300;

    @media (max-width: 700px) {
      font-size: 16px;
    }
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
  margin-bottom: 70px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px 0 0;
  width: 100%;

  @media (max-width: 700px) {
    padding: 0 10px 0 10px;
    box-sizing: border-box;
  }
`;

const CardText = styled.div`
  position: relative;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  padding: 15px;
  margin-left: 75px;
  background: #fff;
  color: #646666;
  font-size: 18px;
  font-weight: 300;
  text-align: left;
  border-radius: 10px;
  max-width: 260px;
  height: 175px;
  line-height: 23px;

  @media (max-width: 1360px) {
    height: 200px;
  }
  
  @media (max-width: 990px) {
    height: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    max-width: unset;
  }

  @media (max-width: 700px) {
    height: auto;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const VideoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0 0 16px 0;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

const VideoWrapper = styled.div`
  width: 50%;
  padding: 0 55px;
  box-sizing: border-box;

  @media (max-width: 1260px) {
    width: 50%;
    padding: 0 10px 0 0;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`;

const Circle = styled.div`
  position: absolute;
  line-height: 80px;
  padding: 9px 44px 11px 25px;
  width: 100px;
  box-sizing: border-box;
  border-radius: 100px;
  background: #08a899;
  color: #fff;
  font-size: 80px;
  font-weight: 900;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  font-size: 16px;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  padding: 10px 15px 5px 15px;
  height: 28px;
  width: 219px;
  background-color: #e21c21;
  transition: all 0.35s ease-in-out;
  border-radius: 30px;

  :hover {
    background-color: #08a899;
  }

  @media (max-width: 700px) {
    height: 25px;
    margin-bottom: 40px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 0 25px;
  width: 50%;
  box-sizing: border-box;

  @media (max-width: 990px) {
    padding: 0;
    width: 50%;
  }

  @media (max-width: 700px) {
    padding: 0;
    width: 100%;
  }

  h4 {
    font-size: 30px;
    font-weight: 300;
    margin: 0 0 16px 0;
    color: #646666;

    @media (max-width: 1260px) {
      font-size: 24px;
    }

    @media (max-width: 700px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: #646666;
    margin: 0;
  }

  span {
    color: #08a899;
  }
`;

const Frame = styled.div`
  width: 1120px;
  height: 630px;

  @media (max-width: 1260px) {
    width: 80vw;
    height: 45vw;
  }

  @media (max-width: 700px) {
    width: 100vw;
    height: 56.25vw;
  }
`;

const Operation = () => {
  const [videoOpen, setVideoOpen] = React.useState(false);

  return (
    <Wrapper id="operation">
      {videoOpen && 
        <Modal>
          <FaTimes onClick={() => setVideoOpen(!videoOpen)} size="35px" color="#555" style={{ position: 'fixed', top: 20, right: 20, cursor: 'pointer' }}/>
          <Frame>  
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6ucePXLt_ck" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Frame>
        </Modal>
      }
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 15px 0 15px',
        }}
      >
        <h2>COMO FUNCIONA</h2>
        <h3>Com a Goglass você tem garantia de segurança e economia!</h3>
        <Line />
        <VideoRow>
          <VideoWrapper>
            <img
              src={videoOperation}
              width="100%"
              style={{ cursor: 'pointer' }}
              onClick={() => setVideoOpen(!videoOpen)}
            />
          </VideoWrapper>
          <Text>
            <h4>
              Você sabia que 50% dos celulares trincam a tela{' '}
              <span>no primeiro ano</span> de uso e que na maioria das vezes o
              display não sofreu dano?
            </h4>
            <p>
              Pois é! Quando você troca a tela acaba jogando fora seu display
              original! Com a Goglass, você{' '}
              <strong>troca apenas o vidro</strong> com segurança e economiza!
            </p>
          </Text>
        </VideoRow>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          textAlign: 'left',
          padding: '0 15px',
        }}
      >
        <h3 style={{ margin: '24px 0 16px 0' }}>
          Como fazer para trocar o vidro?
        </h3>
        <h2 style={{ margin: '0 0 16px 0' }}>ENTENDA O PROCESSO</h2>
        <Line style={{ margin: '0 0 30px 0' }} />
      </div>
      <StepsWrapper>
        <CardWrapper>
          <Circle>1</Circle>
          <CardText>
            Selecione seu <strong>modelo e serviço</strong> e agende o reparo
            online (pelo site ou WhatsApp).
          </CardText>
        </CardWrapper>
        <CardWrapper>
          <Circle>2</Circle>
          <CardText>
            Nosso consultor <strong>confirmará o horário</strong> de agendamento
            e instruções de coleta (delivery, correio ou local), tirando suas
            duvidas finais.
          </CardText>
        </CardWrapper>
        <CardWrapper>
          <Circle>3</Circle>
          <CardText>
            Você receberá um <strong>aparelho reserva</strong> gratuito (somente
            Salvador) e, dentro do prazo, seu celular estará novo de novo.
          </CardText>
        </CardWrapper>
      </StepsWrapper>
      <Button onClick={() => (window.location.href = 'https://api.whatsapp.com/send?phone=557197166900&text=Ol%C3%A1,%20quero%20falar%20com%20o%20consultor')}>
        <FaWhatsapp size="22px" color="#fff" style={{ margin: '0 8px 4px 0' }} />
        FALE COM CONSULTOR
      </Button>
    </Wrapper>
  );
};

export default Operation;
