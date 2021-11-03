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
  width: 27rem;
  height: 32rem;
  background-color: ${colors.lightBlack};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & :hover {
    transition: 0.5s ease-in-out;
    box-shadow: 0.5rem 0.5rem 1rem ${colors.offBlue};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Image = styled.img`
  width: 12rem;
  height: 12rem;
  padding-bottom: 4rem;
`;

const TextContiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${colors.white};
  align-self: center;
`;

const SubTitle = styled.div`
  color: ${colors.white};
  padding: 4rem 2rem 0rem 2rem;
`;
