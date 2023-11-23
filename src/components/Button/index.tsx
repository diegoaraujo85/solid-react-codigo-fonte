import React from "react";

import { StyledButton } from "./styles";

const Button = ({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children?: React.ReactNode;
}) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
