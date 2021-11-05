import react from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const ShopGridCard = ({ url, price, name, price2 }) => {
  return (
    <MainContainer>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
      <TextContainer>
        <Name>{name}</Name>
        <PriceContainer>
          <Price>{price}</Price>
          <Price2>{price2}</Price2>
        </PriceContainer>
      </TextContainer>
    </MainContainer>
  );
};

export default ShopGridCard;

const MainContainer = styled.div`
  width: 23rem;
  height: 28rem;
  cursor: pointer;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  background-color: ${colors.skyBlue};
  width: 23rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 14rem;
  width: 14rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.p`
  color: ${colors.offBlue};
  padding-top: 1rem;
`;

const PriceContainer = styled.div`
  display: flex;
  padding-bottom: 3rem;
`;

const Price = styled.div`
  color: ${colors.offBlue};
  align-self: flex-start;
  padding: 1rem 1rem 0rem 0rem;
`;

const Price2 = styled.div`
  align-self: flex-end;
  flex-direction: column-reverse;
  padding: 1rem 0rem 0rem 1rem;
`;
