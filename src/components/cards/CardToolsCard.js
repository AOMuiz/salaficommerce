import React from "react";
import styled from "styled-components";

const CartTotalsCard = () => {
  return (
    <Container className="grid-cols-4">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default CartTotalsCard;

const Container = styled.div`
  background-color: blue;
  height: 10rem;
  width: 100%;
`;
