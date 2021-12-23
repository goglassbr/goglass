import React from 'react';
import { MdRouter } from 'react-icons/md';
import styled from 'styled-components';
import Dialog from '../../components/dialog'

// import imgDesktop from '/public/imgs/background desktop.webp';
// import imgMobile from '/public/imgs/background mobile.webp';

import {products} from '../../data'
import { createCustomerSorteio } from '../../services/sorteio';

const Wrapper = styled.div`
  background-image: url('imgs/background-desktop.webp');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  @media screen and (max-width: 764px){
    background-image: url("imgs/background-mobile.webp");
  }
` 

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 3rem;
`

const Logo = styled.img`
  margin-inline: auto;
  padding-bottom: 32px;
  width: 200px;
  height: auto;
` 

const Container = styled.div`
  margin-top: 3rem;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  max-width: 1300px;
  align-items: center;
  grid-gap: 1vw;
  @media screen and (max-width: 764px){
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin-top: 1rem;
  }
  
`

const ImgSorteio = styled.img`
  max-width: 800px;
  width: 35vw;
  height: auto;
  content:url("imgs/principal.webp");
  @media screen and (max-width: 764px){
    content:url("imgs/principal.webp");
    width: 80vw;
    margin-inline: auto;
  }
`

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  align-items: center;
`

const FormTitle = styled.h2`
  margin-block-start: 0;
  color: #fff;
  font-style: italic;
  line-height: 1.6;
  font-size: 32px;
  text-align: center;
  @media screen and (max-width: 764px){
    line-height: 1.6;
    font-size: 28px;
  }
`

export const Input = styled.input`
  text-align: center;
  max-width: 80%;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 18px;
  line-height:18px;
  width: 100%;
  border-radius: 16px;

  padding: 10px;
  margin: 5px 0;
  
  transition:all .2s;

  :hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 764px) {
    font-size: 14px;
    line-height: 21px;
    
    padding: 13px 40px;
    max-width: 70vw;
    margin-inline: auto;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Select = styled.datalist`
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
    
    padding: 13px 40px;
    max-width: 70vw;
    margin-inline: auto;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height:18px;
  color: #000;
  width: 80%;
  background: #00eadf;
  border: none;
  border-radius: 16px;

  padding: 12px 92px;
  margin: 5px 0;
  
  transition:all .2s;

  :hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;

    max-width: 70vw;
    margin-inline: auto;
    
    padding: 13px 40px;

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
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90vw;
  margin-inline: auto;
`

const TextConcorrer = styled.h3`
  color: #00eadf;
  font-size: 32px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
`

const CardSteps = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    max-width: 280px;
    margin-inline: auto;
    margin-top: 8px;
  }
`

const ImgSteps = styled.img`
  height: 60px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 50px;
    height: auto;
    margin-inline: auto;
  }
`

const TextSteps = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  font-weight: 700;

  @media (min-width: 768px){
    font-size: 16px;
  }

  @media (min-width: 1024px){
    font-size: 20px;
  }

  @media (min-width: 1200px){
    font-size: 24px;
    font-weight: 500;
  }
`

const Text = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 14px;

  @media (min-width: 1024px){
    font-size: 18px;
  }

  @media (min-width: 1200px){
    font-size: 20px;
  }
`

const InstaGrid = styled.div`
  margin-top: 3rem;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  margin-inline: auto;
  max-width: 1300px;
  align-items: center;
  grid-gap: 5vw;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const InstaImg = styled.img`
  margin-inline: auto;
  width: 20vw;
  @media (max-width: 768px) {
    width: 50vw;
  }
`

const GoodLuckImg = styled.img`
  margin-inline: auto;
  width: 10vw;
  @media (max-width: 768px) {
    display: none;
  }
`

const Arrow = styled.img`
  margin-inline: auto; 
  width: 5vw;
  @media (max-width: 768px) {
    width: 16vw;
  }
`

const WhatsappImg = styled.img`
  margin-inline: auto; 
  width: 5vw; 
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 12vw;
    height: fit-content;
    margin-right: 16px;
  }
`

const WhatsappRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px; 
  padding: 40px;
  box-sizing: border-box;
  margin-inline: auto;
  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: row;
  }
`

const Concorra: React.FC  = () => {
  const [instagram, setInstagram] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [modelo, setModelo] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const [submited, setSubmited] = React.useState(false)

  const handleSubmit = async () => {
    const data = {
      Email: email,
      Name : instagram,
      modelo
    }
    console.log(data)
    if(!instagram || !email || !modelo){
      alert('Preencha todos os campos solicitados.')
      return;
    }
    setSubmited(true)
    await createCustomerSorteio(data)
    setIsOpen(true)
  }

  return (
    <Wrapper>
      <Header>
        
      </Header>
      <Container>
        <ImgSorteio/>
        <Form>
          <Logo src='imgs/goglass.png' alt='logotipo googlass'/>
          <Input placeholder="Instagram" value={instagram} onChange={(e)=> setInstagram(e.target.value)}/>
          <Input placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <Input list="modelo" placeholder="Modelo do seu celular" value={modelo} onChange={(e)=> setModelo(e.target.value)}/>
          <Select id="modelo">
            {
              products.map(p=> <option value={p.name}/>)
            }
            
          </Select>
          <Button onClick={handleSubmit} disabled={submited}>
            Cadastre-se para ganhar
          </Button>
          {/* <FormDescription>
            Sorteio de Apple Watch válido apenas para pessoas residentes em Salvador , Bahia. Para concorrer siga as regras abaixo. As informações de como será o sorteio serão enviadas por e-mail assim que você realizar o cadastro.
          </FormDescription> */}
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
          <ImgSteps  style={{width: '40px'}} src='imgs/share.png' alt="share"/>
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
      <Row style={{backgroundColor: '#00eadf', maxWidth: 'unset', width: '100vw', padding: '8px 64px', boxSizing: 'border-box', marginTop: '56px'}}>
          <Text>
          Somos a Goglass, a assistência técnica mais bem avaliada da Bahia. Especializados em troca de vidro de Smartphones Premium, temos a missão de revolucionar o mercado de assistências, proporcionando um serviço seguro e de qualidade. Este ano, estamos comemorando 2 anos de casa e mais de 4 mil telas reparadas! Mas quem ganha o presente é você!
          </Text>
      </Row>
      <InstaGrid id="instagram">
        <div style={{justifyContent: 'center', display:"flex", flexDirection: "column"}}>
          <Text style={{color: '#fff', fontWeight: 700}}>
            Agora só falta você marcar 3 amigos nos comentários deste post e seguir a gente! quanto mais você comentar, mais chances de ganhar! <br/><br/> Boa sorte :D
          </Text>
          <Arrow src="imgs/seta.png" alt="seta" />
        </div>
        <InstaImg src="imgs/post.webp" alt="instagram"/>
        <GoodLuckImg src="imgs/boasorte.png" alt="boa sorte image"/>

      </InstaGrid>
      {
        isOpen&&
        <Dialog
            text="Parabéns! "
            description="Você agora está concorrendo!"
            isOpen={isOpen}
            onConfirmText='Confirmar'
            onClose={() => {
              setIsOpen(false)
              window.location.href = 'concorra#instagram'
            }
            }
            onConfirm={()=> {
              setIsOpen(false)
              window.location.href = 'concorra#instagram'
            }}
          />
      }
    </Wrapper>
  );
}

export default Concorra;