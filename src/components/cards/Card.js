import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Card = ({ imgSrc, title, code, price }) => {
  return (
    <StyledContainer>
      <ImageContainer>
        <StyledImage src={imgSrc} alt="" />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <StyledCode>{code}</StyledCode>
        <StyledPrice>{price}</StyledPrice>
      </TextContainer>
    </StyledContainer>
  );
};

export default Card;

const StyledContainer = styled.div`
  width: 27rem;
  height: 36rem;
  box-shadow: 5px 5px 5px ${colors.skyBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.5rem;
`;

const ImageContainer = styled.div`
  background-color: ${colors.skyBlue};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
`;

const StyledImage = styled.img``;

const Title = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 1.8rem;
`;

const StyledCode = styled.p`
  color: ${colors.offBlue};
  font-size: 1.4rem;
  padding: 12px;
`;
const StyledPrice = styled.p`
  color: ${colors.offBlue};
  font-size: 1.4rem;
`;
