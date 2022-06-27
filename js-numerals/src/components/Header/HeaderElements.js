import styled from "styled-components";

export const HeaderMain = styled.nav`
  background: #000;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    height: 150px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const HeaderLogo = styled.img`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 24px;
  width: 200px;
  height: 200px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 35px;
    width: 150px;
    height: 100px;
  }
`;

export const HeaderText = styled.div`
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  margin-top: 50px;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
