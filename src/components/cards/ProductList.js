import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const ShopCard = ({ title, price, image, description }) => {
  return (
    <CardContainer className="my-3">
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <PriceContainer>
          <Price1>{price}</Price1>
          <Price2>
            <del>$30</del>
          </Price2>
        </PriceContainer>
        <SubTitle>{description}</SubTitle>
      </TextContainer>
    </CardContainer>
  );
};

export default ShopCard;

const CardContainer = styled.div`
  background-color: ${colors.pantonPurple};
  width: 80rem;
  height: 20rem;
  display: flex;
  margin-left: 20px;
  padding: 2rem 1rem 1rem 2rem;
  background-color: ${colors.white};
  box-shadow: 1rem 1rem 2rem ${colors.skyBlue};
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  height: 16rem;
  width: 25rem;
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
`;
