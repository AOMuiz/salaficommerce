import React from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const ProductCard = ({ url, title, subtitle }) => {
  return (
    <CardContainer>
      <TextContainer>
        <Title>{title}</Title>
        <div>{subtitle}</div>
      </TextContainer>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  background-color: ${colors.offPurple};
  height: 14rem;
  width: 24rem;
`;
const TextContainer = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div``;
const Title = styled.div`
  color: ${colors.offBlue};
`;
