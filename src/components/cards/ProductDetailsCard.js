import React from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const ProductDetailsCard = ({
  url,
  url1,
  url2,
  url3,
  title,
  price1,
  price2,
  color,
  text,
  cart,
  categories,
  tags,
  share,
}) => {
  return (
    <CardContainer className="container grid grid-cols-3 mx-auto p-1">
      {/* <ImageContainer> */}
      <div className="flex flex-col justify-between grid-cols-3 w-3/6 px-5 p-5 space-y-2">
        <div className="w-4/5">
          <img src={url1} alt="" />
        </div>
        <div className="w-4/5">
          <img src={url2} alt="" />
        </div>
        <div className="w-4/5">
          <img src={url3} alt="" />
        </div>
      </div>
      <div>
        <img className="object-contain w-5/6 h-6/6 p-2" src={url} alt="" />
      </div>
      {/* </ImageContainer> */}
      <TextContainer>
        <Title className="font-bold text-3xl">{title}</Title>
        <div className="flex pt-2">
          <p className="text-blue-600 text-2xl">{price1}</p>
          <p className="mx-5 text-2xl">{price2}</p>
        </div>
        <div className="text-blue-600 font-bold text-2xl">{color}</div>
        <div className="text-blue-600 font-light text-lg font-sans">{text}</div>
        <div className="text-blue-600 m-5 text-2xl mx-14">{cart}</div>
        <div className="text-blue-600 font-bold text-2xl">{categories}</div>
        <div className="text-blue-600 font-bold text-2xl">{tags}</div>
        <div className="text-blue-600 font-bold text-2xl">{share}</div>
      </TextContainer>
    </CardContainer>
  );
};

export default ProductDetailsCard;

const CardContainer = styled.div`
  height: 29rem;
  width: 95rem;
  box-shadow: 0.5rem 0.5rem 2rem ${colors.lightArsh};
  margin-top: 3rem;
`;

const TextContainer = styled.div``;

// const ImageContainer = styled.div``;

const Title = styled.div``;
