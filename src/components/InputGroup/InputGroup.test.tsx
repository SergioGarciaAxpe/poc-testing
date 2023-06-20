import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

import { InputGroup } from "./InputGroup";

describe("InputGroup", () => {
  const handleChange = jest.fn();

  it("renders the label and input element", () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <InputGroup
        id="email"
        label="Email"
        placeholder="Enter your email"
        value=""
        handleOnChange={handleChange}
      />
    );

    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("calls the handleOnChange function when the input value changes", () => {
    const { getByPlaceholderText } = render(
      <InputGroup
        id="email"
        label="Email"
        placeholder="Enter your email"
        value=""
        handleOnChange={handleChange}
      />
    );

    const input = getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders the input element with the correct type", () => {
    const { getByPlaceholderText } = render(
      <InputGroup
        id="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        value=""
        handleOnChange={handleChange}
      />
    );

    const input = getByPlaceholderText("Enter your password");
    expect(input).toHaveAttribute("type", "password");
  });
});