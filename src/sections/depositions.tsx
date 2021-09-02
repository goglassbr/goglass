import React from 'react';
import styled from 'styled-components';
import { depositions } from '../data';
import { FaTimes } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 80px 18vw;
  background: #006d87;

  @media (max-width: 1260px) {
    padding: 80px 4vw;
    width: 92vw;
  }

  @media (max-width: 700px) {
    padding: 30px 15px;
    width: calc(100vw - 30px);
  }

  h2 {
    font-size: 45px;
    font-weight: 300;
    margin: 0 0 16px 0;
    color: #fff;
    max-width: 690px;

    @media (max-width: 600px) {
      font-size: 25px;
    }
  }

  h3 {
    font-size: 20px;
    margin: 0 0 8px 0;
    color: #fff;
    font-weight: 900;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  h4 {
    font-size: 18px;
    margin: 0 0 16px 0;
    color: #fff;
    font-weight: 300;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  h5 {
    font-size: 15px;
    color: #fff;
    margin: 0 0 5px 5px;
    font-weight: 300;
    text-align: left;

    @media (max-width: 600px) {
      font-size: 14px;
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
  margin-bottom: 24px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -200px;
  z-index: 1;

  @media (max-width: 700px) {
    margin-top: -150px;
  }
`;

const DepositionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const PeopleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 -10px;

  @media (max-width: 700px) {
    width: 100vw;
  }
`;

const PeopleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 170px;
  height: 170px;
  cursor: pointer;
  background-size: cover;
  background-blend-mode: multiply;
  margin: 10px;

  @media (max-width: 700px) {
    width: calc((100vw - 50px)/2);
    height: calc((100vw - 50px)/2);
  }
`;

const VideoWrapper = styled.div`
  width: 390px;
  height: auto;
  cursor: pointer;

  @media (max-width: 420px) {
    width: calc(100vw - 30px);
  }
`;

const DepositionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
`;

const SectionCircle = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 180px;
  background: #006d87;
  z-index: 0;
  align-self: center;
  top: -110px;

  @media (max-width: 600px) {
    top: -60px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  width: 370px;
  margin: 0 10px;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  border-radius: 15px;

  a {
    font-size: 20px;
    color: #fff;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  @media (max-width: 420px) {
    width: calc(100vw - 50px);
  }
`;

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

const Frame = styled.div`
  width: 1120px;
  height: 630px;

  @media (max-width: 1260px) {
    width: 80vw;
    height: 45vw;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 56.25vw;
  }
`;

const Depositions = () => {
  const [videoOpen, setVideoOpen] = React.useState('');
  const [activeDeposition, setActiveDeposition] = React.useState(0);

  return (
    <Wrapper id="depositions">
      <SectionCircle/>
      {videoOpen &&
        <Modal>
          <FaTimes onClick={() => setVideoOpen('')} size="35px" color="#555" style={{ position: 'fixed', top: 20, right: 20, cursor: 'pointer' }}/>
          <Frame>
            <iframe width="100%" height="100%" src={depositions[activeDeposition].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Frame>
        </Modal>}
      <Column>
        <h2><strong>Recomendações</strong> de quem já consertou a <strong>tela com a gente!</strong></h2>
        <Line />
        <DepositionsRow>
          <PeopleRow>
            {depositions.map((p, idx) => (
              <PeopleWrapper style ={{ backgroundImage: `url(${p.img})`, backgroundColor: activeDeposition == idx ? '#5d5d5d' : '' }} onClick={() => setActiveDeposition(idx)}>
                <h5>
                  <strong>{p.name}</strong><br/>{p.job}
                </h5>
              </PeopleWrapper>
            ))}
          </PeopleRow>
          <DepositionWrapper>
            <VideoWrapper onClick={() => setVideoOpen(depositions[activeDeposition].name)}>
              <img src={depositions[activeDeposition].imgvideo} style={{ width: '100%' }}/>
            </VideoWrapper>
            <Text>
              <h3>
                {depositions[activeDeposition].name}
              </h3>
              <h4>{depositions[activeDeposition].job && depositions[activeDeposition].job} - <a href={depositions[activeDeposition].instalink}>{depositions[activeDeposition].insta}</a></h4>
              <h4>{depositions[activeDeposition].text}</h4>
            </Text>
          </DepositionWrapper>
        </DepositionsRow>
      </Column>
    </Wrapper>
  );
};

export default Depositions;
