import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { products } from '../data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px calc(18vw + 15px);
  background: #fafafa;
  box-sizing: border-box;

  @media (max-width: 1260px) {
    padding: 80px 4vw;
    width: 100vw;
  }

  @media (max-width: 700px) {
    padding: 30px 15px;
    width: 100vw;
  }

  h2 {
    font-size: 40px;
    font-weight: 900;
    margin: 0 0 24px 0;
    color: #006d87;

    @media (max-width: 700px) {
      font-size: 23px;
    }
  }

  h3 {
    font-size: 20px;
    margin: 0 0 16px 0;
    color: #646666;
    max-width: 630px;
    font-weight: 300;

    @media (max-width: 700px) {
      font-size: 16px;
      max-width: 100%;
    }
  }
`;

const Line = styled.div`
  align-self: center;
  width: 150px;
  height: 5px;
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  margin-bottom: 50px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const PhonesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;

  & .swiper-container {
    width: calc(100vw - 30px);
  }

  @media (max-width: 1260px) {
    width: 930px;

    & .slide {
      width: 385px;
    }

    & .swiper-container {
      width: 770px;
    }
  }

  @media (max-width: 990px) {
    width: 690px;
    
    & .slide {
      width: 265px;
    }

    & .swiper-container {
      width: 530px;
    }
  }

  @media (max-width: 780px) {
    width: 510px;
    
    & .slide {
      width: 350px;
    }

    & .swiper-container {
      width: 350px;
    }
  }

  @media (max-width: 570px) {
    width: calc(100vw - 30px);

    & .slide {
      width: calc(100vw - 30px);
    }

    & .swiper-container {
      width: calc(100vw - 30px);
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: auto;
  width: 174px;
  padding-bottom: 16px;
  cursor: pointer;

  @media (max-width: 1260px) {
    width: 219px;
  }

  @media (max-width: 990px) {
    width: 147px;
  }

  @media (max-width: 780px) {
    width: 210px;
  }

  @media (max-width: 570px) {
    width: 56vw;
  }
`;

const BrandButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: 14px 40px 10px 40px;
  height: 44px;
  width: max-content;
  margin: 0 5px;
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  transition: all 0.35s ease-in-out;
  border-radius: 30px;
    box-sizing: border-box;

  @media (max-width: 700px) {
    height: 40px;
    padding: 4px 15px 0 15px;
    font-size: 16px;
    margin: 0 2px;
  }

  @media (max-width: 360px) {
    width: 95px;
    flex-wrap: wrap;
    font-size: 14px;
  }

  @media (max-width: 320px) {
    width: 85px;
    flex-wrap: wrap;
    font-size: 14px;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: linear-gradient(
    to right,
    rgba(20, 170, 148, 1) 0%,
    rgba(3, 118, 135, 1) 100%
  );
  color: #fff;
  cursor: pointer;


  @media (max-width: 700px) {
    font-size: 23px;
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
  padding: 10px 15px 5px 15px;
  height: 28px;
  background-color: #e21c21;
  transition: all 0.35s ease-in-out;
  border-radius: 30px;

  :hover {
    background-color: #08a899;
  }

  @media (max-width: 700px) {
    height: 25px;
  }
`;

SwiperCore.use([Navigation]);

const Products = () => {
  const [brand, setBrand] = React.useState('iphone');
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window && setWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

  }, [width]);

  console.log(width);
  const slideNext = () => {
    
    // if (document) {
    //   const swiper = document.querySelector(
    //     '.swipermain.swiper-container'
    //   ).swiper;
  
    //   swiper.slideNext();
    // }
  };
  
  const slideBack = () => {
    // if (document) {
    //   const swiper = document.querySelector(
    //     '.swipermain.swiper-container',
    //   ).swiper;
  
    //   swiper.slidePrev();
    // }
  };

  return (
    <Wrapper id="services">
      <h2>ENCONTRE SEU APARELHO</h2>
      <h3>
        Selecione seu modelo, confira o valor e <b>fale com nosso consultor</b>{' '}
        no whatsapp para tirar dúvidas e agendar serviço.
      </h3>
      <Line />
      <ButtonsWrapper>
        <BrandButton
          onClick={() => setBrand('samsung')}
          style={brand === 'samsung' ? { background: '#646666' } : {}}
        >
          SAMSUNG
        </BrandButton>
        <BrandButton
          onClick={() => setBrand('iphone')}
          style={brand === 'iphone' ? { background: '#646666' } : {}}
        >
          IPHONE
        </BrandButton>
        <BrandButton
          onClick={() => setBrand('watch')}
          style={brand === 'watch' ? { background: '#646666' } : {}}
        >
          APPLE WATCH
        </BrandButton>
      </ButtonsWrapper>
      <PhonesWrapper
        >
        {width > 700 && <Circle className="prev"><MdChevronLeft size="44px" style={{ padding: '0 8px'}}/></Circle>}
        <Swiper
          className="swipermain"
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          spaceBetween={0}
          slidesPerView={(width < 770 ? 1 : (width < 1200 ? 2 : 3))}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          {[...products].filter((i: any) => i.brand == brand).map((p, idx) => (
            <SwiperSlide key={idx} className="slide">
              <Item title={p.name}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  {width <= 700 && <Circle style={{ width: 40, height: 40, borderRadius: 40}} onClick={slideBack}><MdChevronLeft size="20px" style={{ padding: '0 10px'}}/></Circle>}
                  <Img src={p.img} onClick={() => (window.location.href = p.link)}/>
                  {width <= 700 && <Circle style={{ width: 40, height: 40, borderRadius: 40}} onClick={slideNext}><MdChevronRight size="20px" style={{ padding: '0 10px'}}/></Circle>}
                </div>
                <Button onClick={() => (window.location.href = p.link)}>
                  <FaWhatsapp size="22px" color="#fff" style={{ margin: '0 8px 4px 0' }}/>
                  FALE COM CONSULTOR
                </Button>
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>
        {width > 700 && <Circle  className="next"><MdChevronRight size="44px" style={{ padding: '0 8px'}}/></Circle>}
      </PhonesWrapper>
    </Wrapper>
  );
};

export default Products;
