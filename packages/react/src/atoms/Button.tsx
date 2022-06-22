import React, { FC } from "react";

interface ButtonProps {
  label: String;
}

const Button: FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  label,
}) => {
  return <button>{label}</button>;
};

export default Button;
