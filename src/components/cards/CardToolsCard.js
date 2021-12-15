import React from "react";
import styled from "styled-components";

const CartTotalsCard = ({
  subtotal,
  price,
  total,
  price2,
  text,
  buttontext,
}) => {
  return (
    <Container className="grid-cols-4 flex just px-10">
      <div className="flex justify-between">
        <div>{subtotal}</div>
        <div>{price}</div>
      </div>
      <div className="flex justify-between">
        <div>{total}</div>
        <div>{price2}</div>
      </div>
      <div>{text}</div>
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
`;
