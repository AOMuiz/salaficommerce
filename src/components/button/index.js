import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Button = ({ name, backgroundColor = colors.primary }) => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <StyledButton onClick={handleClick} backgroundColor={backgroundColor}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  width: ${(props) => (props.large ? "400px" : "500px")};
  padding: 2rem 0.5rem;
  height: 3.13rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2px;
  margin: 1rem 2.5rem 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.white};
    color: ${(props) => props.backgroundColor};
    transition: 0.25s all ease-in-out;
    box-shadow: 3px 3px 7px rgba(25, 47, 18, 0.2);
  }
`;

const TomatoButton = styled(StyledButton)`
  color: tomato;
`;

export default Button;
