import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SiteCopy,
  FooterInformation,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterInformation>
          If you're interested in my other projects, visit
          <a href="https://zoryandras.github.io/sass-project/dist/index.html">
            {" "}
            My Demo Page!
          </a>
        </FooterInformation>
        <SiteCopy>varga andras © {new Date().getFullYear()}</SiteCopy>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
