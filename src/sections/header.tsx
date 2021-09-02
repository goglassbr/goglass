import React from 'react';
import styled from 'styled-components';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import goglassLogo from '../source/goglass-logo.png';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 100vw;
  z-index: 1000;
  transition: all 0.35s ease-in-out;
`;

const HeaderWrapper = styled.div`
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  padding: 5px calc(18vw + 15px);
  transition: all 0.35s ease-in-out;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1260px) {
    padding: 5px 4vw;
  }

  @media (max-width: 900px) {
    height: 66px;
    padding: 5px 15px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 37px;
  margin-right: 24px;
  align-items: center;
`;

const Logos = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  background-color: white;
  color: rgba(16, 159, 146, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  transition: all 0.35s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: #037687;
    color: #fff;
  }
`;

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: #fff;
  font-weight: 900;
  cursor: pointer;

  :hover {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  padding: 7px 20px 3px 20px;
  height: 27px;
  background-color: #e21c21;
  transition: all 0.35s ease-in-out;
  border-radius: 30px;

  :hover {
    background-color: #08a899;
  }

  @media (max-width: 700px) {
    height: 32px;
    width: 120px;
    padding: 12px 15px 8px 15px;
    font-size: 14px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 13px 18vw;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.35s ease-in-out;

  @media (max-width: 1260px) {
    padding: 13px 4vw;
  }

  @media (max-width: 900px) {
    padding: 13px 15px;
  }
`;

const GoglassLogo = styled.img`
  width: 142px;
  height: auto;
  transition: all 0.35s ease-in-out;
`;

const MenuWrapper = styled.div<{open: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 700px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    width: 61.3vw;
    height: 100vh;
    padding: 30px;
    background-color: #fff;
    color: #006d87;
    box-sizing: border-box;
  }
`;

const Darker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.8);
`;

const Menu = styled(FaBars)`
  display: none;
  
  @media (max-width: 700px) {
    display: block;
    color: #fff;
    padding-right: 10px;
    width: 22px;
  }
`;

const Close = styled(FaTimes)`
  display: none;
  
  @media (max-width: 700px) {
    display: block;
    position: fixed;
    top: 20px;
    right: 20px;
    width: 16px;
  }
`;

const MenuContent = styled.a`
  margin: 0 0 0 30px;
  font-size: 16px;
  font-weight: 900;
  color: #fff;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #14aa94;
  }
  
  @media (max-width: 1260px) {
    margin: 0 0 0 15px;
  }

  @media (max-width: 700px) {
    color: #006d87;
    font-size: 18px;
    margin: 15px;
  }
`;

type Props = {
  width: any;
}

const Header = () => {
  const [scroll, setScroll] = React.useState(0);
  const [open, setOpen] = React.useState(false);
 
  const listenScrollEvent = () => {
    return setScroll(window.scrollY)
     
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Wrapper style={scroll > 50 ? {backgroundColor: 'rgba(0,109,135,.98)'} : {}}>
      <HeaderWrapper>
        <SocialWrapper>
          <LogoWrapper>
            <Logos href="https://www.instagram.com/goglassbr/" target="_blank">
              <FaInstagram size="20px" aria-hidden="true" />
            </Logos>
            <Logos
              href="https://www.facebook.com/pages/category/Local-Service/Goglass-Brasil-104900180889107/"
              target="_blank"
            >
              <FaFacebookF size="20px" aria-hidden="true" />
            </Logos>
            <Logos
              href="https://www.youtube.com/channel/UCL6M8H1mQ2ZOXKI284Pa9VQ"
              target="_blank"
            >
              <FaYoutube size="20px" aria-hidden="true" />
            </Logos>
          </LogoWrapper>
          <NumberWrapper>
            <FaWhatsapp size="20px" color="#fff" style={{ marginRight: '3px' }} />
            (71) 9716-6900
          </NumberWrapper>
        </SocialWrapper>
        <Button onClick={() => (window.location.href = "https://api.whatsapp.com/send?phone=557197166900")}>Faça já seu orçamento!</Button>
      </HeaderWrapper>
      <Row style={scroll > 50 ? { paddingTop: 0, paddingBottom: 0 } : {}}>
        <GoglassLogo src={goglassLogo} style={scroll > 50 ? { width: 120 } : {}}/>
        <Menu onClick={() => setOpen(!open)}/>
        {open && <Darker/>}
        <MenuWrapper open={open}>
          <Close onClick={() => setOpen(!open)}/>
          <MenuContent href="#services">SERVIÇOS E VALORES</MenuContent>
          <MenuContent href="#operation">COMO FUNCIONA</MenuContent>
          <MenuContent href="#depositions">DEPOIMENTOS</MenuContent>
          <MenuContent href="#address">LOJA</MenuContent>
          <MenuContent href="#faq">FAQ</MenuContent>
        </MenuWrapper>
      </Row>
    </Wrapper>
  );
};

export default Header;
