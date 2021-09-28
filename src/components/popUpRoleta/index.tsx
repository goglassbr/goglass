import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { GoogleSpreadsheet } from "google-spreadsheet";

import { FiX } from 'react-icons/fi';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { useRealmApp } from '../../providers/realm';
import { useMongoDB } from '../../providers/mongodb';
import styled from 'styled-components';
import axios from 'axios';

const goglassjson = {
  "type": "service_account",
  "project_id": "goglass-327415",
  "private_key_id": "e87171ba8b0ea45d129336e855d954288b0cd185",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCh5XHhvu8Sfs2S\nOiKM2afg04FrSxKJUSE66HaG/SDUydrqWhIHg/DYdwhdfeRjRnI74PMYqLENfOnj\nC2jVPaxBP8fQIEIVC2JPutnCXvkFP0TFzg1NKMJJ55TbLDjFkpHcUgMRiFc8qdXf\nXznbTCeqPL+fu+A2FVgHN2CYR0mUrrcgViejrkn/3hmDBs2Lc8OciBZihnrlM/DQ\nJ+RHewuYH+rIIB/IK8TG9SPSnnkHbr5EApero/h2Gqed7TpOxSxYfT1yk11kwPd+\nPyxAigYtx+PvEJm99kTfDMgq8DiP9jwssaserVLQ3J74zS1puq1E6kd8TcSMFlWx\nysucs/IFAgMBAAECggEABpDBPkwpsliRmiNA6PDfucKiDjmYahiv7g1k1yMXTIHW\nHqhh8EuVvhWPsYjsNOlzswFzolWe/oLJEmPRT8qFPI0rW4GfZG6WgVC8yYDj/OY8\nsf/h8rXbMTeSxhOkRsDjqOlrhe+/R+7ERV99f2r2ddUqWT47gL37WKmSgYJslbqy\nl8+cCuMvMTPujnIjTtnwmrxF+J7IoL7Iix5kpquEirU5pXEiamTLnGb+AGc0kvVj\noOrPqnAz2BXTxg1LGrrHtHfZv8fdaWpY4b3Aipu/Vdg4B0Gikp4xAr6kkodvte96\nKGw5DGmtS3KDuLaHYOFAuKyeapb9VC1Iv29omkVgGQKBgQDYkBRDkucnm03RPFM7\nUrijkN407PLCg+LS/xajkRokhnGCGEUjQRfIYpgUi1HkHRl4FmHxKdZzaOVp/YQ8\nAxv2OyAM/M4yUFx41suBpQkagOLBA3MPd+0tfcg/qWurcykpIqaVBap0vwQYAlKn\neXH499XQdammX0E4Lar1xgV/+QKBgQC/YN8aRWViQ+YCEbShXomesTRxtjuV8TTd\nxZx12h8wyCltIDAmHKuGL5GvU+W8amvBxzHfPaS/kEkrPaAZPUvJB7XVNNBlNQVS\n8H/MxF1PmcUY9BN0bqhxnaWYaBaBFae3bCio86P+itg+/QEf3r2hKgKQe6hKqO6+\nhXtcmZddbQKBgQDFdbnEU3IJHwY5PfP2J1rLaQ/y2goPagmrsYOG6IsZuqxMnqyL\nlJKG178rHE0y3YWXhXEQX8F1wbNMjSfBQGSCgy6aKPgp0DRAyjkMoNpIHDSlIOwM\nsqDD1eh8g5H05jAlnb6eKmhdwr2M1rFemtFc3T1Lsb1aQYhKHPnA1ym0oQKBgEAz\nHgSxHPae8mzlRaQQk7gRmBdBW7HMLcDrxrXeSzJRI1yBPMW8PmoQUR3w1hOj26ww\nx3EtO7QrkfAYhzmQT3kLxhrU0cfxxmxxU138zZSjb/QUBOa9LHKYwPFkkZASFKY6\neVVcDjqYlzxiIVtwnEqRTjTr1qPdEeIF40FIIPftAoGBALpkq/wKedkSK89xSXjh\nzz1bVpoCN/Ya2ZeV9Uwb76SN1nX/2JsyD0PNOHepBUVhQx1YYlKJxn+3fEHIZk9W\nSki96QHlLmsEHH5UqOSKygJFNeAvjRzcgZkNUXTaFIkE+e/HSf1FxUWz7BqKcEHG\n4nXgm4iWH0OJEL40lS9r3kFG\n-----END PRIVATE KEY-----\n",
  "client_email": "goglasssheets@goglass-327415.iam.gserviceaccount.com",
  "client_id": "114225775238599886459",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/goglasssheets%40goglass-327415.iam.gserviceaccount.com"
}

const doc = new GoogleSpreadsheet('1lfjYRZStVjNAmybTy7jP2OWa2GbL6nH2zIYeMlFsNSY');

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
  padding-bottom: 14px;
  width: 90vw;
  max-width: 520px;
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
  max-height: 169px;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`
const Row2 = styled.div`
  background-color: #00f0e4;
  height: 29.2vw;
  max-height: 169px;
  width: 100%;
` 

const FormContainer = styled.div`
  margin-top: 20px;
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
  font-size: 12px;
  text-align: center;
  color: #09969d;

  margin: 8px 0;

  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`

const FormTitle = styled.p`
  font-size: 22px;
  text-align: center;
  color: #09969d;
  margin: 8px 0;

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
  font-size: 20px;
  border-radius: 20px;
  max-width: 410px;
  width: 90%;
  text-align: center;
  padding: 3px 0;
  margin-bottom: 8px;

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
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  text-align: center;
  padding: 3px 0;

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
  const [isOpen, setIsOpen] = useState(true);
  const [etapa, setEtapa] = useState(0);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  // const { user } = useRealmApp()
  // const { db } = useMongoDB()

  const appendSpreadsheet = async (row: any) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: goglassjson.client_email,
        private_key: goglassjson.private_key
      });
      await doc.loadInfo();
  
      const sheet = doc.sheetsByIndex[0];
      const result = await sheet.addRow(row);
      return result;
    } catch (e) {
      console.error('Error: ', e);
    }
  };

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
      alert(`É necessário E-mail e nome para continuar.`)

      return ;
    }
    const response = appendSpreadsheet({
      Email: email,
      Name: nome
    })
    if(response){
      setEtapa(1)
      setTimeout(() => {
        setEtapa(2)
      }, 2000)
      cookies.set('getemail', 1, { path: '/' });
      setIsLoading(false)
    }else{
      alert('Erro ao realizar ação. Tente novamente mais tarde.')
    }

    return ;

    // if(db && user){
      try{
        setIsLoading(true)
        const  contacts = await axios.get(`https://sheet.best/api/sheets/97d68167-df40-4912-9903-95299d0a91d6/query?Email=*${email}*`);
        if(contacts.data.length){
          setIsLoading(false)
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
        setIsLoading(false)
      }catch(err){
        setIsLoading(false)
        alert('Erro ao realizar ação. Tente novamente mais tarde.')
      }
    // }else{
    //   alert('Banco de dados não conectado.')
    // }
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
                    <Input onChange={e=> setNome(e.target.value)} type="text" name="name" placeholder="seu nome" required/>
                    <Input onChange={e=> setEmail(e.target.value)} type="email" name="email" placeholder="seu e-mail" required/>
                  </Form>
                  <Submit onClick={e=> handleSubmit(e)} type="submit" value="Girar Roleta" disabled={isLoading}/>
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