import React from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { QeAData } from '../data'; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 80px 18vw;
  background: #fafafa;
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding: 30px 0;
    width: 100vw;
  }

  @media (max-width: 1260px) {
    padding: 30px 4vw;
    width: 100vw;
  }

  h2 {
    font-size: 50px;
    font-weight: 900;
    margin: 0 0 24px 0;
    color: #006d87;

    @media (max-width: 700px) {
      font-size: 28px;
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
  margin-bottom: 40px;
`;

const QeAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 560px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #646666;
  text-align: left;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 350px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Questions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-width: 210px;
  font-weight: 900;
  cursor: pointer;
  line-height: 20px;

  @media (max-width: 700px) {
    min-width: calc(100vw - 100px);
  }
`;

const Answers = styled.div`
  margin-bottom: 16px;
  padding-top: 5px;
  line-height: 21px;
  font-weight: 300;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-right: 30px;

  @media (max-width: 700px) {
    padding-right: 0;
    width: 100%;
  }
`;

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 35px;
  border-left: 1px solid #ccc;
  min-height: 193px;

  @media (max-width: 700px) {
    padding: 20px;
    border-left: unset;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  width: 950px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Buttons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  padding: 15px 40px 11px 40px;
  height: 25px;
  width: 190px;
  margin-bottom: 40px;
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  transition: all 0.35s ease-in-out;
  border-radius: 30px;

  @media (max-width: 1000px) {
    height: 50px;
    padding: 17px 15px 13px 15px;
    width: 200px;
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 700px) {
    height: 40px;
    padding: 12px 15px 8px 15px;
    width: 100%;
  }
`;

type Props = {
  question: string;
  answer: any;
};

const QeA = ( props : Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <QeAWrapper>
      <Questions onClick={() => setOpen(!open)}>
        <div style={{ maxWidth: 'calc(100% - 25px)' }}>{props.question}</div>
        {open ? <FaChevronUp size="16px" style={{marginTop: 2}}/> : <FaChevronDown size="16px" style={{marginTop: 2}}/>}
      </Questions>
      {open && <Answers>{props.answer}</Answers>}
    </QeAWrapper>
  );
};

const FAQ = () => {
  const [section, setSection] = React.useState(0);

  return (
    <Wrapper id="faq">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 15px',
        }}
      >
        <h2>FAQ</h2>
        <h3>Utilize este espaço para tirar suas dúvidas!</h3>
        <Line />
        <Row>
          <ButtonsWrapper>
            <Buttons
              onClick={() => setSection(0)}
              style={section == 0 ? { background: '#646666' } : {}}
            >
              DÚVIDAS FREQUENTES
            </Buttons>
            <Buttons 
              onClick={() => setSection(1)}
              style={section == 1 ? { background: '#646666' } : {}}
            >
              INSTRUÇÕES PRÉ SERVIÇO
            </Buttons>
            <Buttons
              onClick={() => setSection(2)}
              style={section == 2 ? { background: '#646666' } : {}}
            >
              INSTRUÇÕES PÓS SERVIÇO
            </Buttons>
          </ButtonsWrapper>
          <FAQWrapper>
            {QeAData[section].map((i) => (
              <QeA question={i.question} answer={i.answer}/>
            ))}
          </FAQWrapper>
        </Row>
      </div>
    </Wrapper>
  );
};

export default FAQ;
