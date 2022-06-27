import React from "react";
import {
  HeaderMain,
  HeaderContainer,
  HeaderLogo,
  HeaderText,
} from "./HeaderElements";
import Logo from "../../images/num2text.png";

function Header() {
  return (
    <HeaderMain>
      <HeaderContainer>
        <HeaderLogo src={Logo}></HeaderLogo>
        <HeaderText>Homework for Digital Natives</HeaderText>
      </HeaderContainer>
    </HeaderMain>
  );
}

export default Header;
