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
import { products } from '../../data';
import { createCustomerSorteio } from '../../services/sorteiohome';

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
  background-image: url('imgs/background desktop.webp');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding-bottom: 14px;
  width: 90vw;
  max-width: 520px;
  box-shadow: -1px 1px 10px 1px #3a3a3a;
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


const FormTitle = styled.p`
  font-size: 20px;
  text-align: center;
  color: #fff;
  font-weight: 700;
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

const Input = styled.input`
  font-size: 20px;
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
  background-color: #EF88BF;
  color: #fff;
  max-width: 410px;
  width: 92%;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 3px 0;

  cursor: pointer;

  @media only screen and (max-width: 768px){
    font-size: 16px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`

const Logo = styled.img`
  width: 120px;
  height: auto;
` 

const ImgSorteio = styled.img`
  max-width: 800px;
  width: 80%;
  height: auto;
  content:url("imgs/principal-desktop.png");
  @media screen and (max-width: 764px){
    content:url("imgs/principal.webp");
    width: 80vw;
    margin-inline: auto;
  }
`
type Props = {
  isMobile: boolean;
};

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


const PopUp = ({ isMobile }: Props) => {
  const cookies = new Cookies();
  const [isOpen, setIsOpen] = useState(false);
  const [modelo, setModelo] = React.useState('')
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    if(!cookies.get('sorteiopopup')){
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

 
  const handleSubmit = async () => {
    const data = {
      Email: email,
      Name : nome,
      modelo: modelo
    }
    console.log(data)
    if(!nome || !email || !modelo){
      alert('Preencha todos os campos solicitados.')
      return;
    }
    setIsLoading(true)
    await createCustomerSorteio(data)
    setIsOpen(false)
  }

  return (
    <>
      {
        isOpen &&
        <Background>
          <PopupContainer>
            <Header>
              <Logo src='imgs/goglass.png' alt='logotipo googlass'/>
            </Header>
            <ContentPopUp>
              <ImgSorteio/>
              <FiX style={{
                fontSize: '24px',
                padding: '5px',
                color: '#EF88BF',
                position: 'absolute',
                top: '20px',
                right: '20px',
                cursor: 'pointer'}}
                onClick={handleClose}/>
                <FormContainer>
                  <FormTitle>
                    Preencha os dados abaixo e participe!
                  </FormTitle>
                  <Form>
                    <Input onChange={e=> setNome(e.target.value)} type="text" name="name" placeholder="Nome" required/>
                    <Input onChange={e=> setEmail(e.target.value)} type="email" name="email" placeholder="E-mail" required/>
                    <Input list="modelo" placeholder="Modelo do seu celular" value={modelo} onChange={(e)=> setModelo(e.target.value)}/>
                    <Select id="modelo">
                      {
                        products.map(p=> <option value={p.name}/>)
                      }
                      
                    </Select>
                  </Form>
                  <Submit onClick={() => handleSubmit()} type="submit" value="Confirmar" disabled={isLoading}/>
                </FormContainer>
            </ContentPopUp>
          </PopupContainer>
        </Background>
      }
    </>
  );
};

export default PopUp;