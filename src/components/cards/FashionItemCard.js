import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const FashionItemCard = ({ img, title, price, subtitle }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={img} alt="" />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <SubTitle>{subtitle}</SubTitle>
      </TextContainer>
    </CardContainer>
  );
};

export default FashionItemCard;

const CardContainer = styled.div`
  background-color: ${colors.pantonPurple};
  width: 80rem;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  padding: 2rem 1rem 1rem 1rem;
  background-color: ${colors.white};
  box-shadow: 1rem 1rem 2rem ${colors.skyBlue};
  border: 1px solid black;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  height: 16rem;
  width: 25rem;
`;

const TextContainer = styled.div``;
const Title = styled.div``;
const Price = styled.div``;
const SubTitle = styled.div``;
