import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const CartTotalsCard = ({
  subtotal,
  price,
  total,
  price2,
  text,
  buttontext,
}) => {
  return (
    <Container className="grid-cols-4 flex just px-10 py-3">
      <div className="flex justify-between border-b-2">
        <SubTotal className=" font-bold">{subtotal}</SubTotal>
        <Price className=" font-bold">{price}</Price>
      </div>
      <div className="flex justify-between border-b-2">
        <Total className=" font-bold">{total}</Total>
        <Price2 className=" font-bold">{price2}</Price2>
      </div>
      <Text className=" font-thin px-8">{text}</Text>
      <Button>{buttontext}</Button>
    </Container>
  );
};

export default CartTotalsCard;

const Container = styled.div`
  background-color: #f4f4fc;
  height: 30rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Button = styled.div`
  background-color: #19d16f;
  border-radius: 0.2rem;
  text-align: center;
  padding: 1rem 0rem;
  color: white;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.offBlue};
    transition: 0.25s all ease-in-out;
    box-shadow: 3px 3px 7px rgba(25, 47, 18, 0.2);
  }
`;

const SubTotal = styled.div`
  color: ${colors.offBlue};
`;
const Total = styled.div`
  color: ${colors.offBlue};
`;
const Price = styled.div`
  color: ${colors.offBlue};
`;
const Price2 = styled.div`
  color: ${colors.offBlue};
`;
const Text = styled.div`
  color: ${colors.offBlue};
`;
