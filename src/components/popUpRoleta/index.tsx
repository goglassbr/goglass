import React, { useEffect, useState } from 'react';
import * as S from './styles';

import { FiX } from 'react-icons/fi';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { useRealmApp } from '../../providers/realm';
import { useMongoDB } from '../../providers/mongodb';
import styled from 'styled-components';
import axios from 'axios';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
`

const PopupContainer = styled.div`
  position: fixed;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding-bottom: 20px;
  width: 90vw;
  max-width: 715px;
  border-radius: 40px;
  box-shadow: -1px 1px 10px 1px #777;
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  z-index: 2000;
`
const ContentPopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
` 
const ImgPopup = styled.img`
  position: absolute;
  top: 0;
  left: 1%;
  width: 98%;
` 

const Row1 = styled.div`
  background-color: #a0f9f6;
  height: 29.2vw;
  max-height: 232.5px;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`
const Row2 = styled.div`
  background-color: #00f0e4;
  height: 29.2vw;
  max-height: 232.5px;
  width: 100%;
` 

const FormContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const FormRule = styled.p`
  font-size: 21px;
  text-align: center;
  color: #09969d;

  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`

const FormTitle = styled.p`
  font-size: 28px;
  text-align: center;
  color: #09969d;

  @media only screen and (max-width: 768px){
    font-size: 16px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Final = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  max-width: 500px;
  width: 100%;
`

const Cupon = styled.div`
  margin-inline: auto;  
  display: flex;
  max-width: 350px;
  width: 90%;
  height: 35px;
  border-radius: 18px;
  border: 2px solid #07706c;
  box-shadow: -6px 6px 0 #07706c;
  justify-content: center;
  align-items: center;
  color: #07706c;
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 10px;
`

const Input = styled.input`
  font-size: 25px;
  border-radius: 20px;
  max-width: 410px;
  width: 90%;
  text-align: center;
  padding: 4px 0;

  @media only screen and (max-width: 768px){
    font-size: 16px;
  }
`

const Submit = styled.input`
  border: 2px solid #09969d;
  background-color: #07706c;
  color: #fff;
  max-width: 410px;
  width: 90%;
  font-size: 25px;
  border-radius: 20px;
  text-align: center;
  padding: 4px 0;

  cursor: pointer;

  @media only screen and (max-width: 768px){
    font-size: 16px;
  }
`

// .close {
//   color: #07706c;
//   position: absolute;
//   top: 15px;
//   left: calc(50% + 315px);
//   cursor: pointer;
// }


type Props = {
  isMobile: boolean;
};

const PopUp = ({ isMobile }: Props) => {
  const cookies = new Cookies();
  const [isOpen, setIsOpen] = useState(false);
  const [etapa, setEtapa] = useState(0);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  const { user } = useRealmApp()
  const { db } = useMongoDB()

  useEffect(()=> {
    if(!cookies.get('getemail')){
      setTimeout(()=> setIsOpen(true), 10000)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  async function handleSubmit(e:any){
    e.preventDefault();

    if(nome === "" || email === ""){
      toast.dark(
        `É necessário E-mail e nome para continuar.`,
        {
          position: toast.POSITION.TOP_CENTER,
        },
      );
      return;
    }

    if(db && user){
      try{
        const  contacts = await axios.get(`https://sheet.best/api/sheets/97d68167-df40-4912-9903-95299d0a91d6/query?Email=*${email}*`);
        if(contacts.data.length){
          alert('Brinde de usuário já resgatado.')
          return;
        }
        axios.post('https://sheet.best/api/sheets/97d68167-df40-4912-9903-95299d0a91d6', {
          Name: nome,
          Email: email
        })
        setEtapa(1)
        setTimeout(() => {
          setEtapa(2)
        }, 2000)
        cookies.set('getemail', 1, { path: '/' });
      }catch(err){
        alert('Erro ao realizar ação. Tente novamente mais tarde.')
      }
    }else{
      alert('Banco de dados não conectado.')
    }
  }

  const imgs = ['/inicial.png', '/premiacao.gif', '/premiacao.gif']
  return (
    <>
      {
        isOpen &&
        <Background>
          <PopupContainer>
            <ContentPopUp>
            <Row1/>
            <Row2/>
            <div>
              <ImgPopup src={imgs[etapa]} />
            </div>
              <FiX style={{
                fontSize: '24px',
                backgroundColor: '#ffffffa6',
                borderRadius: '50%',
                padding: '5px',
                color: '#ff0000',
                position: 'absolute',
                top: '20px',
                right: '20px',
                cursor: 'pointer'}}
                onClick={handleClose}/>
              {
                etapa === 2 ?

                <Final>
                  <FormTitle>
                    Ao fazer o pedido, apresente este cupom aos nossos consultores:
                  </FormTitle>
                  <Cupon><h4>VEMPRAGOGLASS</h4></Cupon>
                  <FormTitle>
                    *O cupom será enviado para seu email
                  </FormTitle>
                </Final>:
                <FormContainer>
                  <FormTitle>
                    Preencha os dados abaixo e ganhe um prêmio exclusivo ao fazer a troca de vidro
                  </FormTitle>
                  <Form>
                    <Input onChange={e=> setNome(e.target.value)} type="text" name="name" placeholder="seu nome" required/><br></br>
                    <Input onChange={e=> setEmail(e.target.value)} type="email" name="email" placeholder="seu e-mail" required/><br></br>
                  </Form>
                  <Submit onClick={e=> handleSubmit(e)} type="submit" value="girar roleta"/>
                  <FormRule>
                    Prêmios válidos para os clientes que realizarem a troca de vidro na Goglass.
                  </FormRule>
                </FormContainer>
              }
            </ContentPopUp>
          </PopupContainer>
        </Background>
      }
    </>
  );
};

export default PopUp;



// <S.Wrapper>
        //   <S.Content>
        //     <S.ContentWrapper>
        //       {
        //         isMobile &&
        //         <S.Text style={{color: etapa == 2 ? '#EF88BF': '#494CA4'}}>
        //           {
        //             [0,1].includes(etapa) ?
        //             'Gire a roleta e ganhe prêmios':
        //             'Parabéns, você ganhou 15% de desconto em todo o site!!'
        //           }
        //         </S.Text>
        //       }
        //       <S.Col4>
        //         <S.RoletaArrow src={imgPolygon}/>
        //         {[0,2].includes(etapa) ?
        //           <S.Roleta src={etapa === 0 ?imgRoletaInicio : imgRoletaFinal }/> : isMobile?
        //           <S.Roleta style={{width: '200px', height: '200px', padding: '40px' }} src={imgRoletaGirando}/>:
        //           <S.Roleta style={{width: '200px', height: '200px', left: '30px' }} src={imgRoletaGirando}/>
        //         }
        //       </S.Col4>
        //       <S.Col6>
        //         {
        //           !isMobile &&
        //           <S.Text style={{color: etapa === 2 ? '#EF88BF': '#494CA4'}}>
        //             {
        //               [0,1].includes(etapa) ?
        //               'Gire a roleta e ganhe prêmios':
        //               'Parabéns, você ganhou 15% de desconto em todo o site!!'
        //             }
        //           </S.Text>
        //         }
        //         <S.Row>
        //           <S.ImgClock src={imgClock1}/>
        //           <S.Column>
        //             <S.Text14>OFERTA EXPIRA EM</S.Text14>
        //             <S.RowText>
        //               <S.Text24>{minutes}</S.Text24><S.Text14> MIN</S.Text14>
        //               <S.Text24>{seconds}</S.Text24><S.Text14> SEC</S.Text14>
        //             </S.RowText>
        //           </S.Column>
        //           <S.ImgClock src={imgClock2}/>
        //         </S.Row>
        //         {
        //           [0,1].includes(etapa) ?
        //           <>
        //             <S.Input
        //               onChange={e=> setNome(e.target.value)}
        //               placeholder='Nome'
        //             />
        //             <S.Input
        //               onChange={e=> setEmail(e.target.value)}
        //               placeholder='E-mail'
        //             />
        //             <S.Button
        //               onClick={()=> handleSubmit()}
        //             >
        //               GIRE A ROLETA
        //             </S.Button>
        //           </>:
        //           <>
        //             <S.Text64>
        //               QUERO15
        //             </S.Text64>
        //             <S.Text14 style={{marginBottom: '30px'}}>
        //               *Adicione o cupom no carrinho
        //             </S.Text14>
        //             <S.Button style={{background: '#EF88BF'}}
        //               onClick={()=> handleClose()}
        //             >
        //               IR PRA LOJA
        //             </S.Button>
        //           </>
        //         }
        //         </S.Col6>
        //       <S.X onClick={handleClose}>
        //         <FiX color="black" size="23px" />
        //       </S.X>
        //     </S.ContentWrapper>
        //   </S.Content>
        // </S.Wrapper>