import { render, screen } from "@testing-library/react";
import { NumberToText, Hero } from "./index";

it("renders the number input and displays result", () => {
  render(<NumberToText />);

  expect(screen.getByText(/Number to Text Converter/));

  expect(screen.getByText(/Your number is:/))
});

it("test the function that converts number to text", () => {
  expect(Hero(1).toLowerCase()).toEqual("one");
  expect(Hero(2).toLowerCase()).toEqual("two");
  expect(Hero(12).toLowerCase()).toEqual("twelve");
  expect(Hero(110).toLowerCase()).toEqual("one hundred and ten");
  expect(Hero(1100).toLowerCase()).toEqual("one thousand one hundred");
  expect(Hero(999).toLowerCase()).toEqual("nine hundred and ninety nine");
  expect(Hero(1987).toLowerCase()).toEqual(
    "one thousand nine hundred and eighty seven"
  );
  expect(Hero(1000000).toLowerCase()).toEqual("one million");
  expect(Hero(1000001).toLowerCase()).toEqual("one million and one");
  expect(Hero(2000001).toLowerCase()).toEqual("two million and one");
  expect(Hero(2101001).toLowerCase()).toEqual(
    "two million one hundred and one thousand and one"
  );
  expect(Hero(1234567).toLowerCase()).toEqual(
    "one million two hundred and thirty four thousand five hundred and sixty seven"
  );
  expect(Hero(1000000000).toLowerCase()).toEqual("one billion");
  expect(Hero(1000000001).toLowerCase()).toEqual("one billion and one");
  expect(Hero(1000000000000).toLowerCase()).toEqual("one trillion");
  expect(Hero(1000000000000000).toLowerCase()).toEqual("one quadrillion");
  expect(Hero(10000000000000000000000).toLowerCase()).toEqual("ten zoinks!");
});
