import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputGroup from "./InputGroup";

describe("InputGroup", () => {
  const handleChange = jest.fn();

  it("renders the label and input", () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <InputGroup
        id="email"
        label="Email"
        placeholder="Enter your email"
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
        handleOnChange={handleChange}
      />
    );

    const input = getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("test@example.com");
  });

  it("renders the input with the correct type", () => {
    const { getByPlaceholderText } = render(
      <InputGroup
        id="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        handleOnChange={handleChange}
      />
    );

    const input = getByPlaceholderText("Enter your email");
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders the input with the correct value", () => {
    const { getByPlaceholderText } = render(
      <InputGroup
        id="email"
        label="Email"
        placeholder="Enter your email"
        value="test@example.com"
        handleOnChange={handleChange}
      />
    );

    const input = getByPlaceholderText("Enter your email");
    expect(input).toHaveValue("test@example.com");
  });
});