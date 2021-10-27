import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Button = ({ name }) => {
  return <StyledButton>{name}</StyledButton>;
};

const StyledButton = styled.div`
  width: 10.2rem;
  height: 3.13rem;
  background-color: #fb2e86;
  margin: 1rem 2.5rem 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: blue;
    transform: 0.25sec all scale3d(2);
    box-shadow: 5px 5px 10px rgba(25, 47, 18, 0.3);
  }
`;

export default Button;
