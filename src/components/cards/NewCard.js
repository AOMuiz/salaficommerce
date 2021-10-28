import react from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const NewCard = ({ url3, url4 }) => {
  return (
    <MainContainer>
      <NewCardContainer>
        <LogoContainer>
          <TheLogo src={url4} alt="" />
          <TextContainer>Sale</TextContainer>
        </LogoContainer>
        <CardImage src={url3} alt="" />
      </NewCardContainer>
      <Price>Comfort Handy Craft</Price>
    </MainContainer>
  );
};

export default NewCard;

const MainContainer = styled.div`
  border: 1px solid ${colors.black};
  width: 36rem;
  height: 27rem;
  & :hover {
    background-color: ${colors.white};
    cursor: pointer;
  }
`;

const NewCardContainer = styled.div`
  background-color: ${colors.lightArsh};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  background-color: ${colors.lightArsh};
  width: 200px;
  height: 200px;
  margin: 0px 20px 0px 0px;
`;

const Price = styled.p`
  color: ${colors.offBlue};
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
`;
