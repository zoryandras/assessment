import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH2,
  HeroInput,
  HeroP,
  HeroResult,
} from "./HeroElements";

export class NumberToText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 123 };
  }

  doNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  render() {
    return (
      <HeroContainer>
        <HeroContent>
          <HeroH2>Number to Text Converter</HeroH2>
          <HeroP>Just write a number and magical stuff will happen!</HeroP>
          <NumberEdit
            number={this.state.number}
            onChange={this.doNumberChange}
          />
          <br />
          <HeroP>Your number in text is:</HeroP>
          <DisplayNumberAsText number={this.state.number} />
        </HeroContent>
      </HeroContainer>
    );
  }
}

export default NumberToText;