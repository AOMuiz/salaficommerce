import React from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const ProductCard = ({
  url,
  title,
  subtitle,
  backgroundcolor = colors.primary,
}) => {
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
  background-color: ${(props) => props.backgroundcolor};
  margin: 10px;
  height: 14rem;
  width: 24rem;
  box-shadow: 0.5rem 0.5rem 0.5rem ${colors.lightArsh};
`;

const TextContainer = styled.div``;
const ImageContainer = styled.div`
  height: 5rem;
  width: 5rem;
`;

const Image = styled.div``;
const Title = styled.div`
  color: ${colors.offBlue};
`;
