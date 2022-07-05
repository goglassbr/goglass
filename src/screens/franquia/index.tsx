import React from 'react';
import styled from 'styled-components';
import { states, cities } from './data';
import { FaPlay } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createFormResult } from '../../services/form';
import Dialog from '../../components/dialog'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  
  @media screen and (max-width: 764px){
    
  }
`

const HeaderSection = styled.div`
  position: fixed;
  top: 0px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.63vw 12.57vw;
  box-sizing: border-box;
  width: 100vw;
  height: 3.61vw;
  background: #17C1B8;
  
  @media screen and (max-width: 764px){
  height: 16.39vw;
  padding: 5.28vw 7.78vw 5.28vw 5.83vw;
  }
`

const HeaderImg = styled.img`
  width: 7.71vw;
  height: auto;
  cursor: pointer;
  
  @media screen and (max-width: 764px){
    width: 18.5vw;  
  }
`

const HeaderText = styled.a`
  color: #BBFFFC;
  align-self: center;
  font-weight: 700;
  font-size: 0.97vw;
  line-height: 1.18vw;
  
  @media screen and (max-width: 764px){
    color: #3A595B;
    font-size: 3.89vw;
    line-height: 4.72vw;
    margin-bottom: 8.61vw;
    align-self: end;
  }
`

const HeaderButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.69vw 1.39vw;
  background: linear-gradient(90deg, #EBC642 0%, #FF9900 100%);
  box-shadow: 0px 2px 38px rgba(66, 225, 235, 0.75);
  border-radius: 3.47vw;
  font-weight: 700;
  font-size: 0.83vw;
  line-height: 1.04vw;
  color: #fff;
  cursor: pointer;
  
  @media screen and (max-width: 764px){
    width: 59.72vw;
    padding: 4.44vw 8.88vw;
    box-shadow: 0px 2.5px 48px rgba(66, 225, 235, 0.75);
    border-radius: 63px;
    font-size: 4.17vw;
    line-height: 5vw;
    box-sizing: border-box;
  }
`

const BannerSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url('imgs/BG.webp');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 51.39vw;
  
  @media screen and (max-width: 764px){
    flex-direction: column;
    height: 203.05vw;
    background-image: url('imgs/BG-mobile.webp');
  }
` 

const TextBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1.80vw;
  width: 38.33vw;
  margin: 13.4vw 0 4.3vw 10.625vw;
  
  @media screen and (max-width: 764px){ 
    width: 81.67vw;
    margin: 25.17vw 6.94vw 0 11.39vw;
    padding: 0;
  }
` 

const TitleBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 3.67vw;
  font-weight: 700;
  text-align: left;
  line-height: 4.44vw;
  color: #DAFFFD;
  width: 35.97vw;
  
  @media screen and (max-width: 764px){ 
    font-size: 8.33vw;
    line-height: 10vw;
    width: 81.67vw;
  }
`

const SubtitleBanner = styled.div`
  font-size: 1.6vw;
  font-weight: 600;
  text-align: left;
  line-height: 2.15vw;
  color: #C4FDFB;
  margin: 1.39vw 0;
  
  @media screen and (max-width: 764px){ 
    margin: 5vw 0;
    font-size: 4.44vw;
    line-height: 6.11vw;
  }
`
const VideoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 16.43vw;
  height: 4.16vw;
  padding: 1.39vw 2.67vw;
  font-size: 0.9vw;
  font-weight: 700;
  line-height: 1.11vw;
  color: #fff;
  background: linear-gradient(90deg, #3E5E60 0%, #0A1C1D 100%);
  box-shadow: 0px 2px 2.49vw rgba(66, 225, 235, 0.75);
  border-radius: 3.26vw;
  cursor: pointer;
  
  @media screen and (max-width: 764px){ 
    width: 47.39vw;
    height: 11.94vw;
    line-height: 3.33vw;
    font-size: 2.64vw;
    border-radius: 9.44vw;
    padding: 4.3vw 7.73vw;
    box-shadow: 0px 2px 7.18vw rgba(66, 225, 235, 0.75); 
  }
`

const ImgBanner = styled.img`
  width: 55.76vw;
  height: 50.97vw;
  margin: 8.03vw 3.40vw 0 0;
  z-index: 2;
  content:url("imgs/foto-banner.webp");
  
  @media screen and (max-width: 764px){
    height: 131.11vw;
    width: 143.48vw;
    margin: 0 0 -33.89vw -19.44vw;
  }
`

const ReasonsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(220, 251, 255, 0) 0%, #F9F9F9 100%);
  width: 100vw;
  height: 60vw;
  
  @media screen and (max-width: 764px){
    height: 213.89vw;
    flex-direction: column;
    background: #fff;
    justify-content: start;

    .swiper-container{
      width: 90.28vw;
      height: 63.75vw;
      padding: 8.47vw 0 9.05vw 9.72vw;
    }
  }
`

const ReasonsImg = styled.img`
  width: 35.07vw;
  height: 42.84vw;
  margin: 13.23vw 0 3.96vw 7.08vw;
  content:url("imgs/foto2.webp");
  
  @media screen and (max-width: 764px){
    margin: 26.04vw 0 7.5vw 8.33vw;
    width: 65vw;
    height: 79.33vw;
  }
`

const ReasonsBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 18.40vw;
  height: 13.82vw;
  padding: 1.80vw;
  padding-right: 2.5vw;
  background: #5c5c5c;
  background: -moz-linear-gradient(-30deg,  #5c5c5c 8%, #242424 91%);
  background: -webkit-linear-gradient(-30deg,  #5c5c5c 8%,#242424 91%);
  background: linear-gradient(120deg,  #5c5c5c 8%,#242424 91%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5c5c5c', endColorstr='#242424',GradientType=1 );
  border: 4px solid #3E3E3E;
  box-shadow: 0px 7px 21px rgba(204, 204, 204, 0.47);
  border-radius: 1.87vw;
  font-weight: 500;
  font-size: 0.97vw;
  line-height: 1.39vw;
  color: #F3FFFE;
  
  @media screen and (max-width: 764px){ 
    width: 71.39vw;
    height: 53.05vw;
    padding: 7.22vw;
    padding-right: 5.55vw;
    border-radius: 7.5vw;
    font-size: 3.89vw;
    line-height: 5.55vw;
  }
`

const ReasonsIcon = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.51vw;
  height: 4.24vw;
  background: #00C6BD;
  border: 4px solid rgba(151, 221, 218, 0.67);
  border-radius: 1.39vw;
  margin-top: -3.8vw;
  
  @media screen and (max-width: 764px){ 
    width: 18.05vw;
    height: 16.94vw;
    border-radius: 5.55vw;
    margin-top: -15.69vw;
  }
`

const CalculatorImg = styled.img`
  width: 5.625vw;
  height: 4.72vw;
  margin-top: 0.52vw;
  content:url("imgs/calculator.webp");
  @media screen and (max-width: 764px){

  }
`

const SectionsTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2.5vw;
  font-weight: 700;
  line-height: 3.05vw;
  color: #3E3E3E;
  
  @media screen and (max-width: 764px){ 
    line-height: 8.05vw; 
    font-size: 6.67vw;
    width: 77.78vw;
    margin: 0 11.11vw;
    justify-content: center;
  }
`

const SaMSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: 'space-between';
  background-image: url("imgs/gradient.webp");
  background-size: cover;
  width: 100vw;
  height: 89.72vw;
  
  @media screen and (max-width: 764px){
    height: 347.22vw;
    background-image: none;
    background: linear-gradient(295.82deg, #211E1E 17.57%, #443F3F 93.96%);
  }
`

const ServicesBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 25.21vw;
  height: 16.11vw;
  background: #FFFFFF;
  border: 4px solid rgba(0, 234, 223, 0.35);
  box-shadow: 0px 1.39vw 3.26vw rgba(116, 255, 248, 0.15);
  border-radius: 1.11vw;
  font-weight: 400;
  font-size: 0.98vw;
  line-height: 1.18vw;
  color: #382F32;
  
  @media screen and (max-width: 764px){ 
    border: 3px solid rgba(0, 234, 223, 0.35);
    box-shadow: 0px 4.72vw 10.83vw rgba(116, 255, 248, 0.15);
    border-radius: 3.61vw;
    width: 83.41vw;
    margin: 0 8.29vw;
    height: 53.49vw;
    font-size: 3.26vw;
    line-height: 3.89vw;

  }
`

const Profit = styled.div`
  padding: 0.55vw 1.53vw 0.55vw 5.55vw;
  box-sizing: border-box;
  width: 15.97vw;
  height: 2.36vw;
  background: linear-gradient(180deg, #FD2424 0%, #AA0E0E 100%);
  border-radius: 1.46vw;
  margin: 0.47vw 0 0 5.47vw;
  color: #fff;
  font-weight: 700;
  font-size: 1.09vw;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 764px){ 
    width: 51.70vw;
    height: 8.33vw;
    font-size: 3.61vw;
    padding: 1.67vw 5.13vw 1.67vw 18.33vw;
    margin: 1.49vw 0 0 18.06vw;
    border-radius: 4.88vw;
  }
`

const MarketBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 85.83vw;
  height: 43.05vw;
  margin: 6.77vw 0 -8.18vw 0;
  background: #00C8BE;
  border: 0.9vw solid #00EADF;
  box-shadow: 0px 2.49vw 3.73vw rgba(0, 234, 223, 0.47);
  border-radius: 0.93vw 9.14vw 9.14vw 9.17vw;
  font-weight: 400;
  font-size: 0.98vw;
  line-height: 1.18vw;
  color: #382F32;
  z-index: 100;
  
  @media screen and (max-width: 764px){ 
    margin: 20.49vw 0 -232.5vw -3.89vw;
    width: 110vw;
    height: 268.89vw;
    border: 3.61vw solid #00EADF;
    box-shadow: 0px 9.95vw 14.93vw rgba(0, 234, 223, 0.47);
    border-radius: 3.73vw 36.58vw 14.72vw 14.72vw;
  }
`

const MarketText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #DAFFFD;
  font-weight: 700;
  font-size: 2.5vw;
  line-height: 3.05vw;
  margin: 4.44vw 0 3.89vw 0;
  width: 15.98vw;
  height: 23.47vw;
  text-align: center; 
  
  @media screen and (max-width: 764px){ 
    font-size: 10vw;
    line-height: 12.22vw;
    width: 69.44vw;
    height: 93.89vw;
    align-items: center;
    margin: 0 11.67vw 5.83vw 11.67vw;
  }
`

const GoalsGradient = styled.div`
  background: linear-gradient(180deg, rgba(218, 255, 253, 0.1) 23.30%, #82CFCB 100%);
  width: 100vw;
  height: 49.44vw;
  
  @media screen and (max-width: 764px){
    height: 521vw;
    background: linear-gradient(180deg, rgba(218, 255, 253, 0.045) 0%, rgba(130, 207, 203, 0.45) 100%);
  }
`

const GoalsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(218, 255, 253, 0.56) 0%, #E8FFFE 100%);
  width: 78.90vw;
  margin: 0 10.55vw;
  height: 49.44vw;
  @media screen and (max-width: 764px){

  }
`

const GoalsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  text-align: center;
  font-size: 0.97vw;
  font-weight: 500;
  color: #000;
  width: 100%;
  padding: 0 1.67vw 3.93vw 1.67vw;
  box-sizing: border-box;
  
  @media screen and (max-width: 764px){
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 3.89vw;
    padding: 0 15.55vw 4.56vw 15.55vw;
    width: 100vw;
  }
`

const GoalsIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 5.42vw;
  background: #00C6BD;
  border: 0.31vw solid rgba(151, 221, 218, 0.67);
  border-radius: 1.39vw;
  
  @media screen and (max-width: 764px){
    width: 20vw;
    height: 21.67vw;
    border: 4px solid rgba(151, 221, 218, 0.67);
    border-radius: 5.55vw;
  }
`
const NaMSections = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 68.19vw;
  
  @media screen and (max-width: 764px){
    height: 385.83vw;
  }
`
const NumbersGradient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #3A595B 0%, #192B2D 0.01%, #383838 100%);
  width: 100vw;
  height: 26.25vw;
  padding: 4.44vw 24.24vw 0 24.24vw;
  box-sizing: border-box;
  
  @media screen and (max-width: 764px){
    padding: 14.17vw 5.55vw 0 5.55vw;
    height: 154.72vw;
  }
`
const NumbersRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 24.24vw;
  width: 51.52vw;
  color: #DAFFFD;
  font-size: 1.57vw;
  font-weight: 700;
  text-align: center;
  
  @media screen and (max-width: 764px){
    flex-direction: column;
    font-size: 5.91vw;
    width: 100%;
    margin: 0;
  }
`

const ModelBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('imgs/bg-model.webp');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 45.14vw;
  margin-top: -3.19vw;
  padding: 6.67vw 0 8.19vw 17.78vw;
  box-sizing: border-box;
  z-index: 2;
  
  @media screen and (max-width: 764px){
    margin-top: -20vw;
    background-image: url('imgs/bg-model-mobile.webp');
    height: 251.11vw;
    padding: 36.67vw 0 21.67vw 0;
  }
`

const ProcessSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(218, 255, 253, 0.1) 0%, rgba(130, 207, 203, 0.39) 100%);
  width: 100vw;
  height: 40.07vw;
  padding: 6.67vw 0 5.9vw 0;
  margin-top: -2.64vw;
  box-sizing: border-box;
  
  @media screen and (max-width: 764px){
    margin-top: -14.72vw;
    padding: 33.05vw 13.05vw 6.28vw 13.05vw;
    height: 274.44vw;
  }
`

const ProcessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(313.18deg, #1D1D1B -10.32%, #575756 72.22%);
  border: 4px solid #575756;
  border-radius: 1.18vw;
  width: 9.17vw;
  height: 9.17vw;
  
  @media screen and (max-width: 764px){
    width: 36.67vw;
    height: 33.89vw;
    border-radius: 4.72vw;
  }
`

const ProcessImg = styled.img`
  width: 6.25vw;
  height: auto;
  margin: 2.8vw 0 0.95vw 0;
  
  @media screen and (max-width: 764px){
    width: 25vw;
    margin: 11vw 5.8vw 3.78vw 5.8vw;
  }
`

const ProcessNumber = styled.div`
  background: #00C6BD;
  border: 4px solid rgba(151, 221, 218, 0.67);
  border-radius: 2.5vw;
  font-weight: 700;
  font-size: 2.5vw;
  line-height: 3.05vw;
  color: #DAFFFD;
  width: 2.98vw;
  height: 2.98vw;
  text-align: center;
  
  @media screen and (max-width: 764px){
    width: 11.94vw;
    height: 11.94vw;
    border-radius: 10vw;
    font-size: 10vw;
    line-height: 12.22vw;
  }
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: 'space-between';
  background-image: url("imgs/form-bg.webp");
  background-size: cover;
  width: 100vw;
  height: 89.79vw;
  
  @media screen and (max-width: 764px){
    background-image: url("imgs/form-bg-mobile.webp");
    height: 340vw;
  }
`

const FormRow = styled.div`
  margin: 0 13.75vw 0 11.04vw;
  width: 75.21vw;
  height: 58.26vw;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 764px){
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 97.5vw;
    height: 307.81vw;
    margin: 0 0 0 2.5vw;
  }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(109.46deg, rgba(201, 201, 201, 0.4) 1.57%, rgba(196, 196, 196, 0.05) 100%);
  backdrop-filter: blur(60px);
  border-radius: 1.875vw;
  margin-left: -1.32vw;
  width: 35.625vw;
  height: 53.54vw;
  padding: 3.33vw 2.5vw 2.29vw 2.99vw;
  box-sizing: border-box;
  
  @media screen and (max-width: 764px){
    width: 88.06vw;
    height: 132.5vw;
    padding: 8.33vw 0 0 0;
    border-radius: 4.64vw;
    margin-left: 0;
  }
`

const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  font-weight: 700;
  font-size: 1.11vw;
  height: 5.35vw;
  margin-bottom: 2.01vw;
  
  @media screen and (max-width: 764px){
    height: 13.33vw;
    margin-bottom: 5vw;
    font-size: 2.75vw;
    line-height: 3.33vw;
  }
`

export const Input = styled.input`

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 0.97vw;
  line-height: 1.39vw;
  width: 30.14vw;
  height: 3.47vw;
  background: linear-gradient(109.46deg, rgba(201, 201, 201, 0.8) 1.57%, rgba(196, 196, 196, 0.1) 100%);
  opacity: 0.5;
  backdrop-filter: blur(60px);
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 0.49vw;
  padding-left: 1.46vw;

  transition:all .2s;

  ::-webkit-calendar-picker-indicator {
    opacity: 100;
    color: #fff;
    cursor: pointer;
  }

  ::placeholder{
    color: #fff;
    font-weight: 500;
  }

  :hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 764px) {
    width: 74.58vw;
    height: 8.61vw;
    line-height: 3.33vw;
    font-size: 2.41vw;
    border-radius: 4px;
    padding-left: 3.61vw;
  }
`

export const Capital = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 0.97vw;
  line-height: 1.39vw;
  width: 30.14vw;
  height: 3.47vw;
  background: linear-gradient(109.46deg, rgba(201, 201, 201, 0.8) 1.57%, rgba(196, 196, 196, 0.1) 100%);
  opacity: 0.5;
  backdrop-filter: blur(60px);
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 0.49vw;
  padding-left: 1.46vw;
  padding-right: 1.18vw;
  cursor: pointer;
  transition: all .2s;

  option {
    color: #000;
  }

  ::placeholder{
    color: #fff;
    font-weight: 500;
  }

  :hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 764px) {
    width: 74.58vw;
    height: 8.61vw;
    line-height: 3.33vw;
    font-size: 2.41vw;
    border-radius: 4px;
    padding-left: 3.61vw;
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
    
  }
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 1.14vw;
  line-height: 1.39vw;
  color: #fff;
  width: 16.25vw;
  height: 3.33vw;
  border: 1px solid #CCFFFC;
  background: linear-gradient(90deg, #EBC642 0%, #FF9900 100%);
  box-shadow: 0px 3px 20px rgba(58, 89, 91, 0.45);
  border-radius: 3.47vw;
  cursor: pointer;

  transition:all .2s;

  :hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 68.05vw;
    height: 13.92vw;
    border-radius: 13.89vw;
    font-size: 4.78vw;
    line-height: 5.83vw;
    margin-bottom: -3.34vw;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 31.04vw;
  padding: 15.28vw 33.71vw 2.78vw 33.71vw;
  box-sizing: border-box;
  
  @media screen and (max-width: 764px){
    background: #F5F5F5;
    height: 53.89vw;
    padding: 25.55vw 10vw 4.44vw 10vw;
  }
`
type Props = {
  isMobile: boolean;
};

const Banner:React.FC<Props> = ({isMobile}) => {

  return (
    <BannerSection>
      <TextBanner>
        <TitleBanner>
          Ganhe dinheiro<br/>com uma franquia<br/><div style={{color: '#383838'}}>simples, barata e<br/>lucrativa!</div>
        </TitleBanner> 
        <SubtitleBanner>
          Fature até R$80mil com a única franquia especializada em reparo de tela de smartphones
          do Brasil!
        </SubtitleBanner>
        <VideoButton>
          <FaPlay style={{color: '#fff', marginRight: isMobile ? 7 : 9, width: isMobile ? '2.83vw' : '0.98vw', height: isMobile ? '3.94vw' : '1.37vw' }}/><span style={{ marginTop: 2 }}>ASSISTIR AO VÍDEO</span>
        </VideoButton>
      </TextBanner>
      <ImgBanner/>
    </BannerSection>
  )
};

const Reasons:React.FC<Props> = ({isMobile}) => {

  const reasons = [
    {
      title: 'Novos clientes todo dia',
      subtitle: 'Equipe de marketing digital especializada em gerar clientes pra você todos os dias!',
      src: 'imgs/speaker.webp',
    },
    {
      title: 'Eficiência em atendimento online',
      subtitle: 'Equipe de vendas dedicada preparando o cliente da melhor forma pra você!',
      src: 'imgs/chat.webp',
    },
    {
      title: 'Alta lucratividade de produto e serviços',
      subtitle: 'Lucre até 2000% com serviços de troca de vidro (gaste R$50, venda por R$1000)!',
      src: 'imgs/profit.webp',
    },
    {
      title: 'Gestão na palma da mão',
      subtitle: 'Todos os controles da empresa com acesso pelo celular!',
      src: 'imgs/mobile.webp',
    },
  ];

  return (
    <ReasonsSection id="why">
      <ReasonsImg/>
      {isMobile ? (
        <SectionsTitle style={{ width: '73vw' , textAlign: 'left', marginBottom: '5.42vw' }}>Por que a franquia Goglass é tão lucrativa?</SectionsTitle>
      ) : (
        <div style={{ margin: '10.625vw 10.625vw 3.96vw 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '43.26vw' }}>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '' }}>
            <CalculatorImg/>
            <SectionsTitle style={{ marginLeft: 22, textAlign: 'left', height: '5.76vw' }}>Por que a franquia GoGlass<br/>é tão lucrativa?</SectionsTitle>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3.96vw 5vw'}}>
            {reasons.map((s) => (
              <ReasonsBox>
                <ReasonsIcon>
                  <img src={s.src} style={{ width: 'auto', height: '2.15vw' }}/>
                </ReasonsIcon>
                <div style={{ fontWeight: 700, fontSize: '1.11vw', margin: '1.39vw 0 0.63vw 0' }}>
                  {s.title}
                </div>
                <div>
                  {s.subtitle}
                </div>
              </ReasonsBox>
            ))}
          </div>
        </div>
      )}
      {isMobile && 
        <Swiper
          className="swipermain"
          loop={false}
          spaceBetween={0}
          slidesPerView={1.13}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          {reasons.map((s, idx) => (
            <SwiperSlide key={idx} className="slide"> 
              <ReasonsBox>
                <ReasonsIcon>
                  <img src={s.src} style={{ width: 'auto', height: '8.61vw' }}/>
                </ReasonsIcon>
                <div style={{ fontWeight: 700, fontSize: '4.44vw', margin: '3.33vw 0 2.5vw 0' }}>
                  {s.title}
                </div>
                <div>
                  {s.subtitle}
                </div>
              </ReasonsBox>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </ReasonsSection>
  )
};

const ServicesAndMarket:React.FC<Props> = ({isMobile}) => {

  const services = [
    {
      title: 'Troca de Vidro do S10 Plus',
      sale: 820,
      cost: 55,
      img: 'imgs/troca-de-vidro.webp',
      lucro: '1.490',
    },
    {
      title: 'Tampa Traseira Iphone X',
      sale: '410',
      cost: '40',
      img: 'imgs/tampa-traseira.webp',
      lucro: '1.025',
    },
    {
      title: 'Película de Proteção',
      sale: '60',
      cost: '6',
      img: 'imgs/pelicula.webp',
      lucro: '1.000',
    },
    {
      title: <div>Capa de<br/>Celular</div>,
      sale: '60',
      cost: '7',
      img: 'imgs/capa.webp',
      lucro: '857',
    },
  ];

  return (
    <SaMSections id="services">
      <SectionsTitle style={{ margin: isMobile ? '11.11vw 0 8.33vw 0' : '3.05vw 0 3.12vw 0', textAlign: 'center', justifyContent: 'center', color: '#00EADF', flexWrap: 'wrap', fontSize: isMobile ? '7.22vw' : '' }}><span style={{ color: '#DAFFFD' }}>Serviços</span>&nbsp;altamente&nbsp;<span>rentáveis</span></SectionsTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '12.78vw' : '5.69vw 7.36vw', padding: '0 20.55vw' }}>
        {services.map((s, idx) => (
          <ServicesBox>
            <div style={isMobile ? { height: '39.44vw', padding: '6.08vw 5vw 1.83vw 35.38vw' } : { width: '100%', height: '12.15vw', padding: '2.08vw 1.53vw 2.08vw 10.94vw', boxSizing: 'border-box', textAlign: 'left' }}>
              <div style={isMobile ? { marginBottom: '1.83vw', fontSize: '4.88vw', lineHeight: '5.83vw', fontWeight: 700 } : { marginBottom: '0.55vw', fontSize: '1.47vw', lineHeight: '1.8vw', fontWeight: 700 }}>
                {s.title}
              </div>
              Venda
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-4px', fontSize: isMobile ? '7.32vw' : '2.21vw', lineHeight: isMobile ? '8.89vw' : '2.71vw', fontWeight: 700 }}>
                R${s.sale}<span style={{ fontSize: isMobile ? '4.31vw' : '1.3vw', justifySelf: 'start', lineHeight: isMobile ? '6.23vw' : '1.9vw' }}>,00</span>
              </div>
            </div>
            <div style={{ width: '100%', height: isMobile ? '11.39vw' : '4.03vw', background: 'linear-gradient(180deg, #9FFFFB 25%, #00EADF 100%)', borderRadius: isMobile ? '0 0 3.61vw 3.61vw' : '0 0 1.11vw 1.11vw', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', fontSize: isMobile ? '3.61vw' : '1.09vw', fontWeight: 500, color: '#000' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: isMobile ? '4.04vw 4.51vw 0 36.21vw' : '1.18vw 1.39vw 0 10.94vw' }}>
                Custo
                <div>R$ {s.cost},00</div>
              </div>
              <Profit>
                {s.lucro}% de lucro
              </Profit>
            </div>
            <img src={s.img} style={isMobile ? { width: '48.33vw', height: '63.05vw', position: 'absolute', left: '3.89vw', marginTop: '-1.1vw' } : { width: '14.58vw', height: '19.04vw', position: 'absolute', left: idx % 2 == 0 ? '19.44vw' : '52.01vw', marginTop: '-0.65vw' }}/>
          </ServicesBox>
        ))}
      </div>
      <MarketBox id="market">
        <SectionsTitle style={{ marginTop: isMobile ? '14.44vw' : '3.33vw', textAlign: 'center', justifyContent: 'center', maxWidth: isMobile ? '80vw' : '37.08vw', flexWrap: 'wrap', fontSize: isMobile ? '8.33vw' : '', lineHeight: isMobile ? '10.28vw' : '' }}>
          <span style={{ color: '#fff' }}>
            Mercado em&nbsp;</span>crescimento&nbsp;<span>exponencial
          </span>
        </SectionsTitle>
        <div style={{ boxSizing: 'border-box', width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', padding: isMobile ? '19.17vw 0 3.89vw 7.5vw' : '0 12.57vw 0 17.29vw' }}>
          <MarketText>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              242 milhões
              <span style={{ color: '#383838', fontSize: isMobile ? '4.44vw' : '1.11vw', lineHeight: isMobile ? '5.55vw' : '1.39vw' }}>SMARTPHONES NO BRASIL</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              20 milhões
              <span style={{ color: '#383838', fontSize: isMobile ? '4.44vw' : '1.11vw', lineHeight: isMobile ? '5.55vw' : '1.39vw' }}>NOVOS SMARTPHONES TODO ANO</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              12 milhões
              <span style={{ color: '#383838', fontSize: isMobile ? '4.44vw' : '1.11vw', lineHeight: isMobile ? '5.55vw' : '1.39vw' }}>REPAROS EM ASSISTÊNCIAS TÉCNICAS POR MÊS</span>
            </div>
          </MarketText>
          <img src="imgs/phone.webp" style={isMobile ? { width: '80.83vw', height: '93.67vw' } : { width: '31.04vw', height: '35.97vw' }}/>
        </div>
      </MarketBox>        
    </SaMSections>
  )
};

const Goals:React.FC<Props> = ({isMobile}) => {

  const goals = [
    {
      title: 'Realize o sonho de um negócio próprio',
      subtitle: 'Nosso projeto foi construído para te dar segurança e suporte em todas as etapas.',
      icon: 'imgs/business.webp',
    },
    {
      title: 'Lucro médio de até R$240 mil/anual',
      subtitle: <div>Esteja um mercado crescente e<br/>que movimenta muito dinheiro.</div>,
      icon: 'imgs/money.webp',
    },
    {
      title: 'Venda online todo dia',
      subtitle: <div>Tenha uma equipe de marketing<br/>e vendas atraindo clientes pra<br/>você!</div>,
      icon: 'imgs/sales-mkt.webp',
    },
    {
      title: 'Suporte e Treinamento',
      subtitle: <div>Conte com nosso time de<br/>consultores para treinamentos e<br/>tirar dúvidas sempre que<br/>necessário.</div>,
      icon: 'imgs/support.webp',
    },
  ];

  return (
    <GoalsGradient id="goals">
      <GoalsSection>
        <SectionsTitle style={{ color: '#383838', margin: isMobile ? '243.89vw 8.89vw 9.44vw 8.89vw' : '18.19vw 19.23vw 5.41vw 19.23vw', textAlign: 'center', flexWrap: 'wrap', justifyContent: 'center', fontSize: isMobile ? '7.22vw' : '', width: isMobile ? '100%' : '' }}>
          É hora de juntar-se a<span style={{ color: '#00EADF' }}>&nbsp;GoGlass&nbsp;</span><span>e conquistar&nbsp;</span>seu objetivo
        </SectionsTitle>
        <GoalsRow>
          {goals.map((s, idx) => (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: isMobile ? '65.56vw' : '16.6vw', marginBottom: isMobile ? '5.28vw' : '' }}>
              <GoalsIcon>
                <img src={s.icon} style={{ width: isMobile ? '10.55vw' : '2.64vw', height: 'auto' }}/>
              </GoalsIcon>
              <div style={{ fontSize: isMobile ? '4.44vw' : '1.11vw', fontWeight: 700, margin: isMobile ? (idx < 2 ? '3.61vw 6.67vw' : '3.61vw 16.11vw') : (idx < 2 ? '1.11vw 1.67vw' : '1.11vw 3.61vw') }}>
                {s.title}
              </div>
              {s.subtitle}
            </div>
          ))}
        </GoalsRow>
      </GoalsSection>
    </GoalsGradient>
  )
};

const NumbersAndModel:React.FC<Props> = ({isMobile}) => {

  return (
    <NaMSections id="numbers">
      <NumbersGradient>
        <SectionsTitle style={{ marginBottom: isMobile ? '15.83vw' : '4.24vw', fontSize: isMobile ? '8.89vw' : '' }}>
          <span style={{ color: '#fff' }}>Nossos&nbsp;</span><span style={{ color: '#00EADF' }}>números</span> 
        </SectionsTitle>
        <NumbersRow>
          <div style={{ display: 'flex', flexDirection: 'column', width: isMobile ? '95%' : '23.3vw', margin: isMobile ? '0 2.5%' : '', alignItems: 'center' }}>
            <span style={{ fontSize: isMobile ? '13.33vw' : '3.54vw', color: '#fff' }}>+3.000.000</span>
            FATURADOS EM APENAS UMA LOJA
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: isMobile ? '95%' : '23.89vw', margin: isMobile ? '14.08vw 2.5%' : '', alignItems: 'center' }}>
            <span style={{ fontSize: isMobile ? '13.33vw' : '3.54vw', color: '#fff' }}>+500.000</span>
            REAIS INVESTIDOS EM MARKETING NA BAHIA
          </div>
        </NumbersRow>
      </NumbersGradient>
      <ModelBackground id="model">
        <SectionsTitle style={{ color: '#fff', marginBottom: isMobile ? '9.72vw' : '3.61vw', fontSize: isMobile ? '8.33vw' : '' }}>
          Modelo&nbsp;<span style={{ color: '#00EADF' }}>de negócio</span>
        </SectionsTitle>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'start', width: '100%', marginLeft: isMobile ? '9.17vw' : '' }}>
          <img src='imgs/photo-model.webp' style={{ width: isMobile ? '84.45vw' : '37.92vw', height: 'auto' }}/>
          <div style={{ display: 'flex', flexDirection: 'column', width: isMobile ? '84vw' : '24.5vw', margin: isMobile ? '11.67vw 0 0 4px' : '0 0 0 2.43vw', fontWeight: 500, color: '#CBFEFC', fontSize: isMobile ? '4.44vw' : '1.11vw', lineHeight: isMobile ? '6.11vw' : '1.54vw' }}>
            <span style={{ color: '#00EADF', fontSize: isMobile ? '10vw' : '2.5vw', fontWeight: 700, lineHeight: isMobile ? '12.22vw' : '3.1vw', marginBottom: isMobile ? '4.44vw' : '' }}>
              Loja Standart
            </span>
            <span>Lojas em centros comerciais com visibilidade, fluxo de passantes e estacionamento disponível.</span>
            <br/><b>Investimento médio:</b><br/>
            <span style={{ fontSize: isMobile ? '8.89vw' : '2.22vw', fontWeight: 700, marginBottom: 3 }}>R$65.000</span>
            <i>(considerando taxa de franquia)</i><br/>
            <span><b>Área:</b> Á partir de 25m²</span>
            <span><b>Royalties:</b> R$2.500</span>
            <span><b>Taxa para Anúncios Online:</b> R$1.500</span>
            <span><b>Implantação Média:</b> 60 dias</span>
            <span><b>Payback:</b> 12 a 18 meses</span>
          </div>
        </div>
      </ModelBackground>
    </NaMSections>
  )
};

const Process:React.FC<Props> = ({isMobile}) => {

  return (
    <ProcessSection id="process">
      <SectionsTitle style={{ width: isMobile ? '100%' : '30.76vw', color: '#383838', textAlign: 'center', fontSize: isMobile ? '8.33vw' : '', lineHeight: isMobile ? '10.28vw' : '' }}>
        Como funciona nosso processo?
      </SectionsTitle>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', padding: isMobile ? '7.5vw 0 0 0' : '5.76vw 24.86vw 2.71vw 24.86vw', width: '100vw', boxSizing: 'border-box', justifyContent: 'space-between', alignItems: 'center' }}>
        <ProcessBox>
          <ProcessImg src='imgs/handshake.webp'/>
          <ProcessNumber>1</ProcessNumber>
        </ProcessBox>
        {isMobile && 
          <div style={{ width: '65.55vw', textAlign: 'center', padding: '11.39vw 0 5.83vw 0' }}>
            Conhecer o <b>candidato</b> e alinhar suas regiões de interesse com <b>plano de expansão Goglass</b>
          </div>
        }
        {!isMobile && <img src='imgs/arrow.webp' style={{ width: '7.57vw', height: '2.64vw' }}/>}
        <ProcessBox>
          <ProcessImg src='imgs/check.webp' style={{ width: isMobile ? '17.78vw' : '4.44vw', margin: isMobile ? '8.05vw 0 3.61vw 0' : '2.1vw 0 0.9vw 0' }}/>
          <ProcessNumber>2</ProcessNumber>
        </ProcessBox>
        {isMobile && 
          <div style={{ width: '70.28vw', textAlign: 'center', padding: '11.39vw 0 5.83vw 0' }}>
            Validar situação <b>financeira/jurídica</b> do candidato e <b>alinhamento de valores</b> com fundadores
          </div>
        }
        {!isMobile && <img src='imgs/arrow.webp' style={{ width: '7.57vw', height: '2.64vw' }}/>}
        <ProcessBox>
          <ProcessImg src='imgs/contract.webp' style={{ width: isMobile ? '21.39vw' : '5.35vw', margin: isMobile ? '5.55vw 0 2.5vw 3.05vw' : '1.4vw 0 0.75vw 1.2vw' }}/>
          <ProcessNumber>3</ProcessNumber>
        </ProcessBox>
        {isMobile && 
          <div style={{ width: '73.06vw', textAlign: 'center', padding: '11.39vw 0 5.83vw 0' }}>
            Assinatura do <b>pré-contrato</b> e dar início ao processo de implementação da <b>Loja Goglass.</b>
          </div>
        }
      </div>
      {!isMobile && 
        <div style={{ display: 'flex', flexDirection: 'row', padding: '0 20.35vw 0 21.25vw', width: '100vw', boxSizing: 'border-box', height: '4.17vw', color: '#000', fontSize: '0.97vw', fontWeight: 500, lineHeight: '1.39vw', textAlign: 'center' }}>
          <div style={{ width: '16.39vw' }}>
            Conhecer o <b>candidato</b> e alinhar suas regiões de interesse com <b>plano de expansão Goglass</b>
          </div>
          <div style={{ width: '17.57vw', margin: '0 2.64vw 0 3.54vw' }}>
            Validar situação <b>financeira/jurídica</b> do candidato e <b>alinhamento de valores</b> com fundadores
          </div>
          <div style={{ width: '18.26vw' }}>
            Assinatura do <b>pré-contrato</b> e dar início ao processo de implementação da <b>Loja Goglass.</b>
          </div>
        </div>
      }
    </ProcessSection>
  )
};

const Footer:React.FC<Props> = ({isMobile}) => {

  return (
    <FooterSection>
      <img src='imgs/logo-footer.webp' style={{ width: isMobile ? '30.1vw' : '12.01vw', height: isMobile ? '9.92vw' : '3.96vw' }}/>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', fontSize: isMobile ? '2.78vw' : '1.11vw', fontWeight: 700, margin: isMobile ? '3.61vw' : '1.46vw 0' }}>
        <a style={{ color: '#383838' }} href="https://www.facebook.com/pages/category/Local-Service/Goglass-Brasil-104900180889107/" target="_blank">
          FACEBOOK
        </a>
        <a style={{ color: '#383838' }} href="https://www.instagram.com/goglassbr/" target="_blank">
          INSTAGRAM
        </a>
        <a style={{ color: '#383838' }} href="https://www.linkedin.com/company/goglassbrasil/?originalSubdomain=br" target="_blank">
          LINKEDIN
        </a>
        <a style={{ color: '#383838' }} href="https://www.youtube.com/channel/UCL6M8H1mQ2ZOXKI284Pa9VQ" target="_blank">
          YOUTUBE
        </a>
      </div>
      <div style={{ color: '#383838', fontSize: isMobile ? '2.44vw' : '0.97vw', fontWeight: 500 }}>
        © 2022 por GoGlass. Todos os direitos reservados.
      </div>
    </FooterSection>
  )
};


const Franquia: React.FC  = () => {
  
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
  
    React.useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  };

  const width = useWindowDimensions();
  const isMobile = width < 764;
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, [offset]);

  const formsection = offset > 17.5*width;

  const menu = [
    { 
      name: 'Por que a GoGlass',
      link: '#why',
    },
    { 
      name: 'Serviços',
      link: '#services',
    },
    { 
      name: 'Mercado',
      link: '#market',
    },
    { 
      name: 'Objetivo',
      link: '#goals',
    },
    { 
      name: 'Números',
      link: '#numbers',
    },
    { 
      name: 'Modelo de Negócio',
      link: '#model',
    },
    { 
      name: 'Processo',
      link: '#process',
    },
  ];

  const capitals = ['De 0 a 65 mil', 'De 65 mil a 100 mil', 'De 100 mil a 150 mil', 'Acima de 150 mil' ];

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cell, setCell] = React.useState('');
  const [capital, setCapital] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const [submited, setSubmited] = React.useState(false);
  
  const handleSubmit = async () => {
    const data = {
      Nome : name,
      Email: email,
      Telefone: cell,
      Capital: capital,
      Estado: state,
      Cidade: city,
    }
    console.log(data)
    if(!name || !email || !cell || !capital || !state || !city){
      alert('Preencha todos os campos solicitados.')
      return;
    }
    setSubmited(true)
    await createFormResult(data)
    setIsOpen(true)
  }

  const handleChange = (e : any) => {
    setState(e.target.value);
    if(city !== '') {
      setCity('');
    }
  }

  return (
    <div>
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, right: 0, display: 'flex', flexDirection: 'column', height: '114.45vw', width: '62.78vw', background: '#fff', backdropFilter: 'blur(50px)', zIndex: 2000 }}>
          <div style={{ height: '16.39vw', background: '#3A595B', width: '100%' }}></div>
          <div style={{ padding: '5.83vw 4.72vw 7.5vw 0', display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
            {menu.map((s, idx) => (
              <HeaderText onClick={() => setMenuOpen(!menuOpen)} style={idx == menu.length - 1 ? { marginBottom: 0 } : {}} href={s.link}>{s.name}</HeaderText>
            ))}
            <IoMdClose size={20} onClick={() => setMenuOpen(!menuOpen)} style={{ position: 'absolute', left: '4.72vw', color: '#3A595B' }}/>
          </div>
        </div>
      )}
      {isMobile &&
        <div style={{ display: formsection ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '27.78vw', position: 'fixed', bottom: 0, zIndex: 1000, background: 'linear-gradient(180deg, rgba(0, 234, 223, 0.65) 0%, rgba(2, 202, 192, 0.65) 100%)', filter: menuOpen ? 'brightness(50%)' : '' }}>
          <HeaderButton href="#form">Seja um Franqueado</HeaderButton>
        </div>
      }
      <HeaderSection style={ menuOpen ? { filter: 'brightness(40%)' } : {}}>
        <HeaderImg src='imgs/logo-menu.webp'/>
        {!isMobile &&
          menu.map((s) => (
            <HeaderText href={s.link}>{s.name}</HeaderText>
          ))
        }
        {isMobile ? 
          <FiMenu onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#DAFFFD', height: '6.5vw', width: 'auto' }}/>
        :
          <HeaderButton href="#form">Seja um Franqueado</HeaderButton>
        }
      </HeaderSection>
      <Wrapper style={ menuOpen ? { filter: 'brightness(50%)' } : {}} onClick={() => setMenuOpen(false)}>
        <Banner isMobile={isMobile}/>
        <Reasons isMobile={isMobile}/>
        <ServicesAndMarket isMobile={isMobile}/>
        <Goals isMobile={isMobile}/>
        <NumbersAndModel isMobile={isMobile}/>
        <Process isMobile={isMobile}/>
        <FormSection id="form">
          <SectionsTitle style={{ margin: isMobile ? '10.83vw 8.33vw 8.61vw 8.33vw' : '5.07vw 25.69vw 2.43vw 25.69vw', color: '#DAFFFD', textAlign: 'center', fontSize: isMobile ? '7.22vw' : '' }}>
            {isMobile ? <>Converse<br/>diretamente com<br/>nosso fundador e tire<br/>todas suas dúvidas!</> : <>Converse diretamente com nosso fundador e tire todas suas dúvidas!</>}
          </SectionsTitle>
          <FormRow>
            <img src='imgs/form-img.webp' style={{ zIndex: 2, alignSelf: isMobile ? 'start' : 'end', width: isMobile ? '113.33vw' : '40.76vw', height: isMobile ? '137.85vw' : '49.58vw' }}/>
            <Form>
              <Label>
                Nome Completo
                <Input placeholder="Ex.: João Silva" value={name} onChange={(e)=> setName(e.target.value)}/>
              </Label>
              <Label>
                Seu melhor e-mail
                <Input placeholder="Ex.: joaosilva@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </Label>
              <Label>
                Telefone
                <Input placeholder="Ex.: (71) 99999-9999" value={cell} onChange={(e)=> setCell(e.target.value)}/>
              </Label>
              <Label>
                Capital Disponível
                {/* <Input id="capital" list="capitals" placeholder="-----" value={capital} onChange={(e)=> setCapital(e.target.value)}/> */}
                <Capital style={capital == "" ? { color: '#fff' }: {}} onChange={(e)=> setCapital(e.target.value)}>
                  <option value="" selected data-default>
                    -----
                  </option>
                  {capitals.map((s) => (
                    <option value={s}>{s}
                    </option>
                  ))}
                </Capital>
              </Label>
              <Label>
                Estado
                <Input list="states" placeholder="-----" value={state} onChange={(e)=> handleChange(e)}/>
              </Label>
              <Label style={{ marginBottom: isMobile ? '9.44vw' : ''}}>
                Cidade
                <Input list="cities" placeholder="-----" value={city} onChange={(e)=> setCity(e.target.value)} disabled={state == ""}/>
              </Label>
              <Select id="capitals">
                {
                  [...capitals].map(p=> <option value={p}/>)
                }
              </Select>
              <Select id="states">
                {
                  [...states].map(p=> <option value={p.Nome}/>)
                }
              </Select>
              <Select id="cities">
                {
                  [...cities].filter((i: any) => state == "" ? i.Estado == state : i.Estado !== "").map(p=> <option value={p.Nome}/>)
                }
              </Select>
              <Button onClick={handleSubmit} disabled={submited}>
                Falar com Felipe
              </Button>
            </Form>
          </FormRow>
          {!isMobile && <img src='imgs/tabela.webp' style={{ boxShadow: '0px 45px 113px rgba(0, 0, 0, 0.06), 0px 23px 49px rgba(0, 0, 0, 0.0405), 0px 9px 18px rgba(0, 0, 0, 0.03), 0px 2px 6px rgba(0, 0, 0, 0.0195)', width: '69.86vw', height: '28.20vw', marginBottom: '-10.63vw' }}/>}
        </FormSection>
        <Footer isMobile={isMobile}/>
      </Wrapper>
      {
        isOpen&&
        <Dialog
            text="Dados enviados!"
            description="A Goglass agradece o interesse e em breve entraremos em contato!"
            isOpen={isOpen}
            onConfirmText='Voltar'
            theme="blueshock"
            onClose={() => {
              setIsOpen(false)
            }
            }
            onConfirm={()=> {
              setIsOpen(false)
            }}
          />
      }
    </div>
  );
}

export default Franquia;
