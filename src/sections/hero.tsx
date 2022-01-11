import React from 'react';
import styled from 'styled-components';
import banner1 from '../source/banner-1.webp';
import banner2 from '../source/banner-2.webp';
import banner3 from '../source/banner-3.webp';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 46px;
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-color: #888;
  background-blend-mode: multiply;

  @media (max-width: 600px) {
   height: 410px;
  }
`;

const BannerText = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: #fff;
  text-align: center;
  font-weight: 900;
  max-width: calc(100% - 30px);
  margin-top: 100px;

  h2 {
    font-size: 55px;
    margin: 0 0 8px 0;
  }

  h3 {
    font-size: 40px;
    margin: 0 0 20px 0;
  }

  h4 {
    font-size: 18px;
    margin: 0 0 32px 0;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 30px;
    }

    h3 {
      font-size: 23px;
    }

    h4 {
      font-size: 16px;
    }
  }
`;

const Line = styled.div`
  align-self: center;
  width: 80px;
  height: 5px;
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  margin-bottom: 25px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  padding: 17px 40px 13px 40px;
  height: 21px;
  width: max-content;
  margin: auto;
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  transition: all 0.35s ease-in-out;
  border-radius: 30px;

  :hover {
    padding: 10px 40px 20px 40px;
  }

  @media (max-width: 600px) {
    height: 20px;
    padding: 12px 15px 8px 15px;
    font-size: 16px;
  }
`;

const Hero = () => {
  const imgs = [banner1, banner2, banner3];
  const [activeImg, setActiveImg] = React.useState(0);

  React.useEffect(() => {
    let interval = setInterval(() => moveBanner(), 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const moveBanner = () => {
    setActiveImg((activeImg) => {
      if (activeImg < imgs.length - 1) {
        return activeImg + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <Wrapper style={{ backgroundImage: `url(${imgs[activeImg]})` }}>
      <BannerText>
        <h2>BLACK FRIDAY</h2>
        <h3>25% off na troca do seu vidro!</h3>
        <Line></Line>
        <h4>
          Fale com a gente e conserte sua tela sem gastar quase nada!
        </h4>
        <Button href="#services">QUERO ECONOMIZAR!</Button>
      </BannerText>
    </Wrapper>
  );
};

export default Hero;
