import React from "react";
import styled from "styled-components";

const Button = ({ name, backgroundColor }) => {
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
  width: 10.2rem;
  height: 3.13rem;
  background-color: ${(props) => props.backgroundColor};
  margin: 1rem 2.5rem 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.backgroundColor};
    color: blue;
    transition: 0.25s all ease-in-out;
    box-shadow: 5px 5px 10px rgba(25, 47, 18, 0.3);
  }
`;

const TomatoButton = styled(StyledButton)`
  color: tomato;
`;

export default Button;
