import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Hero = ({ url, url2 }) => {
  return (
    <HeroContainer>
      <OtherImage src={url2} alt="" />
      <TextContainer>
        <TextStyleColoured>
          Best Furniture For Your Castle....
        </TextStyleColoured>
        <TextStyle>
          New Furniture Collection <br /> Trends in 2020
        </TextStyle>
        <TextColouredTwo>
          Lorem iTextColouredTwosum dolor sit amet consectetur adipisicing elit.
          Itaque.
        </TextColouredTwo>
      </TextContainer>
      <SofaImage src={url} alt="" />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 47.8rem;
  width: 90vw;
  background-color: ${colors.lightArsh};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 70px 70px;
`;

const OtherImage = styled.img`
  width: 150px;
  height: 150px;
  flex-direction: column;
  align-self: flex-start;
`;

const SofaImage = styled.img`
  width: 40rem;
  height: 40rem;
  padding: 10px;
`;

const TextContainer = styled.div``;

const TextStyleColoured = styled.p`
  color: #fb2e86;
`;

const TextStyle = styled.p`
  color: #000000;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 3.3rem;
  line-height: 4.38rem;
  letter-spacing: 0.015em;
`;

const TextColouredTwo = styled.p`
  color: #8a8fb9;
`;
