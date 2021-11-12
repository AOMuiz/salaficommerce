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
    <CardContainer className="p-2 ">
      <TextContainer>
        <Title>{title}</Title>
        <div>{subtitle}</div>
      </TextContainer>
      <ImageContainer>
        <Image src={url} alt="" className="mx-40" />
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

const TextContainer = styled.div`
  font-size: 1.2rem;
`;
const ImageContainer = styled.div``;

const Image = styled.img`
  width: 10rem;
  height: 5rem;
`;
const Title = styled.div`
  color: ${colors.offBlue};
`;
