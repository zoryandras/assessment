import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH2,
  HeroInput,
  HeroP,
  HeroResult,
} from "./HeroElements";

export const Hero = (val) => {
  let str = "";
  let numberName = "";
  let remainder = 0;
  let hundreds = 0;
  let tens = 0;
  let units = 0;

  val = Math.abs(val);

  while (val > 0) {
    remainder = val / 1000;
    remainder = Math.floor(remainder);
    remainder = remainder * 1000;
    remainder = val - remainder;

    if (remainder !== 0) str = numberName + " " + str;

    hundreds = remainder / 100;
    hundreds = Math.floor(hundreds);
    units = remainder - hundreds * 100;

    tens = units / 10;
    tens = Math.floor(tens);
    units = units - tens * 10;

    if (tens !== 1)
      if (units === 1) str = "ONE " + str;
      else if (units === 2) str = "TWO " + str;
      else if (units === 3) str = "THREE " + str;
      else if (units === 4) str = "FOUR " + str;
      else if (units === 5) str = "FIVE " + str;
      else if (units === 6) str = "SIX " + str;
      else if (units === 7) str = "SEVEN " + str;
      else if (units === 8) str = "EIGHT " + str;
      else if (units === 9) str = "NINE " + str;
      else {
        //nothing
      }
    else if (units === 1) str = "ELEVEN " + str;
    else if (units === 2) str = "TWELVE " + str;
    else if (units === 3) str = "THIRTEEN " + str;
    else if (units === 4) str = "FOURTEEN " + str;
    else if (units === 5) str = "FIFTEEN " + str;
    else if (units === 6) str = "SIXTEEN " + str;
    else if (units === 7) str = "SEVENTEEN " + str;
    else if (units === 8) str = "EIGHTEEN " + str;
    else if (units === 9) str = "NINETEEN " + str;
    else if (units === 0) str = "TEN " + str;

    if (tens === 2) str = "TWENTY" + str;
    else if (tens === 3) str = "THIRTY-" + str;
    else if (tens === 4) str = "FORTY-" + str;
    else if (tens === 5) str = "FIFTY-" + str;
    else if (tens === 6) str = "SIXTY-" + str;
    else if (tens === 7) str = "SEVENTY-" + str;
    else if (tens === 8) str = "EIGHTY-" + str;
    else if (tens === 9) str = "NINETY-" + str;

    if ((hundreds > 0 || Math.floor(val / 1000) > 0) && (tens > 0 || units > 0))
      str = "AND " + str;

    if (hundreds === 1) str = "ONE HUNDRED " + str;
    else if (hundreds === 2) str = "TWO HUNDRED " + str;
    else if (hundreds === 3) str = "THREE HUNDRED " + str;
    else if (hundreds === 4) str = "FOUR HUNDRED " + str;
    else if (hundreds === 5) str = "FIVE HUNDRED " + str;
    else if (hundreds === 6) str = "SIX HUNDRED " + str;
    else if (hundreds === 7) str = "SEVEN HUNDRED " + str;
    else if (hundreds === 8) str = "EIGHT HUNDRED " + str;
    else if (hundreds === 9) str = "NINE HUNDRED " + str;

    val = val / 1000;
    val = Math.floor(val);

    if (numberName === "") numberName = "THOUSAND";
    else if (numberName === "THOUSAND") numberName = "MILLION";
    else if (numberName === "MILLION") numberName = "BILLION";
    else if (numberName === "BILLION") numberName = "TRILLION";
    else if (numberName === "TRILLION") numberName = "QUADRILLION";
    else if (numberName === "QUADRILLION") numberName = "QUINTILLION";
    else numberName = "ZOINKS!";
  }

  return str.trim();
};
class EditNumber extends React.Component {
  render() {
    return (
      <HeroInput
        type="number"
        value={this.props.number}
        onChange={this.props.onChange}
      ></HeroInput>
    );
  }
}

class DisplayNumberAsText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number, numberAsText: "Refreshing.." };
  }

  static getDerivedStateFromProps(props, state) {
    return { numberAsText: Hero(props.number).toLowerCase() };
  }

  render() {
    return <HeroResult>{this.state.numberAsText}</HeroResult>;
  }
}
export class NumberToText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 123 };
  }

  numberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  render() {
    return (
      <HeroContainer>
        <HeroContent>
          <HeroH2>Number to Text Converter</HeroH2>
          <HeroP>Just write a number and magical stuff will happen!</HeroP>
          <EditNumber
            number={this.state.number}
            onChange={this.numberChange}
          />
          <br />
          <HeroP>Your number is:</HeroP>
          <DisplayNumberAsText number={this.state.number} />
        </HeroContent>
      </HeroContainer>
    );
  }
}

export default NumberToText;