import { render, screen } from "@testing-library/react";
import { NumberToText, Hero } from "./index";

it("renders the number input and displays result", () => {
  render(<NumberToText />);

  expect(screen.getByText(/Number to Text Converter/));

  expect(screen.getByText(/Your number is:/))
});
