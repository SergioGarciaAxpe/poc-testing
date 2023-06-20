import { ChangeEvent } from "react";
import "./InputGroup.css";

interface InpupGroupProps {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "password" | "email";
  value: string;
  handleOnChange: (event: ChangeEvent) => void;
}

export const InputGroup = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  handleOnChange,
}: InpupGroupProps) => {
  return (
    <div className="form-group">
      <label htmlFor="email"> {label} </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};
