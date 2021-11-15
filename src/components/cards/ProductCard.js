import React from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const ProductCard = ({
  url,
  title,
  subtitle,
  color = colors.primary,
  large,
}) => {
  return (
    <CardContainer className="p-4" color={color} large={large}>
      <TextContainer>
        <Title>{title}</Title>
        <div className="underline pb-1 cursor-pointer">{subtitle}</div>
      </TextContainer>
      <ImageContainer className="w-full flex justify-end items-center">
        <Image src={url} alt="" className="h-48 w-52" />
      </ImageContainer>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  background-color: ${(props) => props.color};
  margin: 10px;
  /* height: 10rem; */
  width: 24rem;
  box-shadow: 0.5rem 0.5rem 0.5rem ${colors.lightArsh};
`;

const TextContainer = styled.div`
  font-size: 1.2rem;
`;
const ImageContainer = styled.div``;

const Image = styled.img`
  /* width: ${(props) => (props.large ? "15rem" : "10rem")}; */
`;
const Title = styled.div`
  color: ${colors.offBlue};
`;
