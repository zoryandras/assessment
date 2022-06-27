import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #101522;
  height: 200px;
  position: sticky;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterInformation = styled.div`
  color: #fff;
  margin-bottom: 16px;
  font-size: 20px;
  text-decoration: none;

  a {
    text-decoration: none;
    color: #66cc00;
  }

  a:visited {
    color: green;
    text-decoration: none;
  }
`;

export const SiteCopy = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
