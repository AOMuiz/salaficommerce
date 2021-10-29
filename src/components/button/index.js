import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Button = ({ name }) => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return <StyledButton onClick={handleClick}>{name}</StyledButton>;
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
    transition: 0.25s all ease-in-out;
    box-shadow: 5px 5px 10px rgba(25, 47, 18, 0.3);
  }
`;

const TomatoButton = styled(StyledButton)`
  color: tomato;
`;

export default Button;
