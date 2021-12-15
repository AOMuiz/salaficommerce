import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const CalculateShipping = ({ name, state, code, buttontext }) => {
  return (
    <Container className="grid-cols-4 flex px-12 py-3 m-2">
      <div className="flex justify-between border-b-2 py-3">
        <SubTotal className=" font-bold">{name}</SubTotal>
      </div>
      <div className="flex justify-between border-b-2 py-3">
        <Total className=" font-bold">{state}</Total>
      </div>
      <Text className=" font-bold border-b-2 py-3">{code}</Text>
      <Button>{buttontext}</Button>
    </Container>
  );
};

export default CalculateShipping;

const Container = styled.div`
  background-color: #f4f4fc;
  height: 30rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0.3rem;
`;

const Button = styled.div`
  background-color: #fb2e86;
  border-radius: 0.2rem;
  text-align: center;
  padding: 1rem 0rem 1rem 0rem;
  width: 20rem;
  color: white;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.offBlue};
    transition: 0.25s all ease-in-out;
    box-shadow: 3px 3px 7px rgba(25, 47, 18, 0.2);
  }
`;

const SubTotal = styled.div`
  color: #c5cbe3;
`;
const Total = styled.div`
  color: #c5cbe3;
`;

const Text = styled.div`
  color: #c5cbe3;
`;
