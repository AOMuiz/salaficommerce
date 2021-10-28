import react from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const NewCard = ({ url3, url4 }) => {
  return (
    <NewCardContainer>
      <LogoContainer>
        <TheLogo src={url4} alt="" />
        <TextContainer>price</TextContainer>
      </LogoContainer>
      <CardImage src={url3} alt="" />
    </NewCardContainer>
  );
};

export default NewCard;

const NewCardContainer = styled.div`
  width: 36rem;
  height: 27rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${colors.black};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

const TheLogo = styled.img`
  width: 70px;
  height: 50px;
  align-self: center;
  margin: 10px 0px 190px 0px;
  transform-origin: 0 0;
  transform: rotate(-2deg);
`;

const TextContainer = styled.p`
  color: ${colors.white};
  transform-origin: 0 0;
  transform: rotate(-30deg);
  position: absolute;
  top: 30px;
  left: 15px;
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0px 20px 0px 0px;
`;
