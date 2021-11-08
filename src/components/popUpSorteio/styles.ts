import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0%{
    opacity:0;
  }
   100%{opacity:1;}
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  /* transition: background-color 0.5s; */
  animation: ${fadeIn} 0.5s linear;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  max-width: 762px;
  height: 347px; 
  padding: 0;
  box-sizing: border-box;
  height: min-content;
  margin-top: auto;
  margin-bottom: auto;
  margin-inline: auto;
  padding: 20px 84px 20px 35px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;

  @media (max-width: 764px}) {
    padding: 10px 10px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-inline: auto;

  @media (max-width: 764px) {
    flex-direction: column;
  }
`;

export const X = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  @media (max-width: 764px) {
    background-color: white;
    border-radius: 50%;
    top: 10px;
    right: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #494CA4;
  text-align: center;
  margin-inline: auto;

  @media (max-width: 764px) {
    width: 215px;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height:18px;
  color: #FFFFFF;
  width: 100%;
  background: #494CA4;
  border: none;
  border-radius: 10px;

  padding: 19px 92px;
  
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

export const Input = styled.input`
  box-sizing: border-box;
  font-weight: 700;
  font-size: 18px;
  line-height:18px;
  width: 100%;
  border: 1px solid #494CA4;
  border-radius: 10px;

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


export const Highlight = styled.span`
  color: white;
  font-weight: 600;
`;

export const Img = styled.img`
  @media (min-width: 764px) {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 764px) {
    width: 100%;
  }
`;

export const ImgHeader = styled.img`
    height: 160px;
    width: 160px;
    @media (max-width: 764px) {
      width: 80px;
      height: 80px;
    }
`;

export const Col4 = styled.div`
  width: 45%;
  @media (max-width: 764px) {
    width: 100%;
  }
`

export const Col6 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  @media (max-width: 764px) {
    width: 100%;
  }
`

export const RoletaArrow = styled.img`
  position: absolute;
  width: 47px;
  height: 36px;
  left: 145px;
  top: 60px;
  z-index:2000;
  @media (max-width: 764px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`

export const Roleta = styled.img`
  position: relative;
  width: 270px;
  height: 270px;
  left: 0px;
  top: 10px;
  @media (max-width: 764px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`

export const Row =  styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  width: 100%;
`

export const RowText =  styled.div`
  display:flex;
  margin-top: 8px;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
`
export const Column =  styled.div`
  display:flex;
  flex-direction: column;
`

export const ImgClock = styled.img`
  width: 38px;
  height: 38px;
  margin-inline: 16px
`

export const Text14 = styled.p`
  font-family: Quicksand;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #EF88BF;

  @media (max-width: 764px) {
    font-size: 10px;
  }
`

export const Text24 = styled.p`
  font-family: Quicksand;
  font-weight: 700;
  font-size: 24px;
  margin-block-start: 0;
  margin-block-end: 0;
  line-height: 12px;
  text-align: center;

  color: #EF88BF;
  @media (max-width: 764px) {
    font-size: 16px;
  }
`
export const Text64 = styled.p`
  font-family: Poppins;
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  margin-top: 30px;
  margin-block-end: 0;
  
  color: #373987;
  
  @media (max-width: 764px) {
    margin-top: 10px;
    font-size: 46px;
  }
`
