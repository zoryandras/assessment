import styled from "styled-components";

export const HeroContainer = styled.div`
  background-image: linear-gradient(315deg, #ccffcc 0%, #a4bfef 74%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 920px;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const HeroH2 = styled.h2`
  color: #000;
  font-size: 35px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 35px;
  text-align: center;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const HeroInput = styled.input`
  padding: 16px 16px;
  margin: 32px;
  border: none;
  border-radius: 4px;
  font-size: 26px;

  &:focus {
    border: #009900 solid;
    outline: none;
  }
`;

export const HeroResult = styled.div`
  border: #009900 solid;
  border-radius: 20px;
  padding: 20px;
  min-height: 50px;
  max-height: 300px;
  margin: 10px;
  font-size: 2em;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
