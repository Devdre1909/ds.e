import React, { FC } from "react";
interface ButtonProps {
    label: String;
}
declare const Button: FC<ButtonProps & React.HTMLProps<HTMLButtonElement>>;
export default Button;
