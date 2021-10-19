import React from 'react';
import styled from 'styled-components';

// import imgDesktop from '/public/imgs/background desktop.webp';
// import imgMobile from '/public/imgs/background mobile.webp';

const Wrapper = styled.div`
  background-image: url('imgs/background desktop.webp');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
` 

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 3rem;
`

const Logo = styled.img`
  width: 200px;
  height: auto;
` 

const Container = styled.div`
  margin-top: 3rem;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-inline: auto;
  max-width: 1300px;
  align-items: center;
  grid-gap: 32px;
`

const ImgSorteio = styled.img`
  max-width: 800px;
  width: 40vw;
  height: auto;
  content:url("imgs/principal-desktop.webp");
  @media screen and (max-width: 720px){
    content:url("imgs/principal.webp");
  }
`

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const FormTitle = styled.h2`
  color: #fff;
  font-style: italic;
  line-height: 1.6;
  font-size: 32px;
  text-align: center;
`

export const Input = styled.input`
  width: 80%;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 18px;
  line-height:18px;
  width: 100%;

  padding: 10px;
  margin: 5px 0;
  
  transition:all .2s;

  :hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 764px) {
    font-size: 14px;
    line-height: 21px;
    
    padding: 13px 53px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height:18px;
  color: #000;
  width: 100%;
  background: #00eadf;
  border: none;

  padding: 10px 92px;
  margin: 5px 0;
  
  transition:all .2s;

  :hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    
    padding: 13px 53px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const FormDescription = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
`

const Row = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-around;
  width: 90vw;
  margin-inline: auto;
`

const TextConcorrer = styled.h3`
  color: #00eadf;
  font-size: 32px;
  text-align: center;
`

const CardSteps = styled.div`
  display: flex;
  align-items: center;
`

const ImgSteps = styled.img`
height: 60px;
  margin-right: 20px;
`

const TextSteps = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 12px;

  @media (min-width: 768px){
    font-size: 16px;
  }

  @media (min-width: 1024px){
    font-size: 20px;
  }

  @media (min-width: 1200px){
    font-size: 24px;
  }
`


const Concorra: React.FC  = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src='imgs/goglass.png' alt='logotipo googlass'/>
      </Header>
      <Container>
        <ImgSorteio/>
        <Form>
          <FormTitle>
            Seja uma das primeiras pessoas de Salvador a ter um APPLE WATCH S7
          </FormTitle>
          <Input placeholder="Instagram"/>
          <Input placeholder="E-mail"/>
          <Input placeholder="Modelo do seu celular"/>
          <Button>
            Cadastre-se para ganhar
          </Button>
          <FormDescription>
            Sorteio de Apple Watch válido apenas para pessoas residentes em Salvador , Bahia. Para concorrer siga as regras abaixo. As informações de como será o sorteio serão enviadas por e-mail assim que você realizar o cadastro.
          </FormDescription>
        </Form>
      </Container>
      <Row>
        <TextConcorrer>
          Como concorrer:
        </TextConcorrer>
      </Row>
      <Row>
        <CardSteps>
          <ImgSteps src='imgs/email.png' alt="email"/>
          <TextSteps>
            Cadastre seu e-mail e <br/>@ do Instagram
          </TextSteps>
        </CardSteps>
        <CardSteps>
          <ImgSteps src='imgs/share.png' alt="share"/>
          <TextSteps>
            Compartilhe a postagem <br/>do sorteio no stories
          </TextSteps>
        </CardSteps>
        <CardSteps>
          <ImgSteps src='imgs/follower.png' alt="follower"/>
          <TextSteps>
            siga @goglassbr <br/>no Instagram
          </TextSteps>
        </CardSteps>
      </Row>
      
    </Wrapper>
  );
}

export default Concorra;