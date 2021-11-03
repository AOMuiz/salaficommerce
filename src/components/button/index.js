import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Button = ({ name, color = colors.lightBlack }) => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <StyledButton onClick={handleClick} color={color}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  color: white;
  display: inline-flex;
  padding: 1rem 4rem;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.white};
    color: ${(props) => props.color};
    transition: 0.25s all ease-in-out;
    box-shadow: 3px 3px 7px rgba(25, 47, 18, 0.2);
  }
`;

export default Button;
