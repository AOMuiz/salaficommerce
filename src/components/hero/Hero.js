import React from "react";
import styled from "styled-components";

const Hero = ({ url }) => {
  console.log(url);

  return (
    <HeroContainer>
      <SofaImage src={url} alt="" />
      <TextContainer>
        <TextStyleColoured>
          Best Furniture For Your Castle....
        </TextStyleColoured>
        <TextStyle>New Furniture Collection Trends in 2020</TextStyle>
        <TextColouredTwo>
          Lorem iTextColouredTwosum dolor sit amet consectetur adipisicing elit.
          Itaque.
        </TextColouredTwo>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 47.8rem;
  width: 120rem;
  background-color: #f2f0ff;
`;

const SofaImage = styled.img``;

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

  margin: 15.2rem 53.3rem 23.8rem 24.4rem;
`;

const TextColouredTwo = styled.p`
  color: #8a8fb9;
`;
