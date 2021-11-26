import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const ShopCard = ({ title, price, image, description, category }) => {
  return (
    <CardContainer className="my-5">
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <PriceContainer className="py-2">
          <Price1>${price}</Price1>
          <Price2>
            <del>10% off</del>
          </Price2>
        </PriceContainer>
        <p>Category: {category}</p>
        <SubTitle className="py-2">{description}</SubTitle>
      </TextContainer>
    </CardContainer>
  );
};

export default ShopCard;

const CardContainer = styled.div`
  background-color: ${colors.pantonPurple};
  width: 80rem;
  height: 25rem;
  display: flex;
  margin-left: 20px;
  padding: 2rem 1rem 1rem 2rem;
  background-color: ${colors.white};
  box-shadow: 1rem 1rem 2rem ${colors.skyBlue};
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  height: 100%;
  width: 30rem;
`;

const TextContainer = styled.div`
  padding: 2rem 1rem 1rem 2rem;
`;

const Title = styled.div`
  color: ${colors.offBlue};
  font-size: 2rem;
  font-weight: bold;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const Price1 = styled.div`
  color: ${colors.offBlue};
  font-size: 1.5rem;
`;

const Price2 = styled.div`
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: lighter;
`;

const SubTitle = styled.div`
  color: ${colors.offBlue};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: justify;
`;
