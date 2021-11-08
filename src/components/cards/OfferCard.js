import react from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const OfferCard = ({ url, title, subtitle }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
      <TextContiner>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TextContiner>
    </CardContainer>
  );
};

export default OfferCard;

const CardContainer = styled.div`
  width: 25rem;
  height: 30rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  margin-top: 1rem;

  &:hover {
    transition: all 0.25s ease-in-out;
    box-shadow: 0.5rem 0.5rem 1rem ${colors.skyBlue};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Image = styled.img`
  width: 12rem;
  height: 12rem;
  padding: 3rem 0rem 4rem 0rem;
`;

const TextContiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  align-self: center;
  color: ${colors.offBlue};
  font-size: 2.1rem;
`;

const SubTitle = styled.div`
  padding: 1rem 2.5rem 0rem 2.5rem;
  color: ${colors.offBlue};
  text-align: center;
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
`;
