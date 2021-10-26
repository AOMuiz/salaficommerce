import React from "react";
import styled from "styled-components";

const Button = () => {
  return <StyledButton>Button</StyledButton>;
};

const StyledButton = styled.div`
  width: 10.2rem;
  height: 3.13rem;
  background-color: #fb2e86;
  margin: 1rem 2.5rem 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
