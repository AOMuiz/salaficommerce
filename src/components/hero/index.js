import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import Button from "../../components/button";

export const Hero = ({
  children,
  lampImgSrc,
  armChairImgSrc,
  text,
  title,
  subTitle,
}) => {
  return (
    <StyledHero>
      <StyledTextBoxDiv>
        <StyledImageBox1>
          <StyledLamp src={lampImgSrc} alt="" />
        </StyledImageBox1>
        <StyledHeaderText>
          <StyledBest>{text}</StyledBest>
          <StyledNew>{title}</StyledNew>
          <StyledP>{subTitle}</StyledP>
          <Button name="Shop Now" color={colors.primary} />
        </StyledHeaderText>
      </StyledTextBoxDiv>
      <StyledImageBox2Div1>
        <StyledImageBox2Div2>
          <StyledImageBox2>
            <StyledArmChair src={armChairImgSrc} alt="" />
            <StyledPercentOff>50% Off</StyledPercentOff>
          </StyledImageBox2>
        </StyledImageBox2Div2>
      </StyledImageBox2Div1>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  height: 30rem;
  background-color: ${colors.lightash};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLamp = styled.img`
  width: 100%;
`;
const StyledHeaderText = styled.div`
  justify-self: center;
  width: 40rem;
`;
const StyledArmChair = styled.img`
  width: 100%;
`;

const StyledImageBox1 = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  align-self: flex-start;
`;

const StyledImageBox2 = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
`;

const StyledImageBox2Div1 = styled.div`
  width: 25rem;
  height: 22rem;
  border-radius: 50rem;
  background-color: #ecd2fa59;
`;

const StyledPercentOff = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 7rem 6rem 6rem 4rem;
  background-color: #00c1fe;
  width: 5rem;
  height: 5rem;
  font-size: 1rem;
  padding: 2rem;
  color: ${colors.white};
`;

const StyledImageBox2Div2 = styled.div`
  width: 22rem;
  height: 22rem;
  border-radius: 50rem;
  align-self: flex-start;
  background-color: #ecd2fa59;
`;

const StyledTextBoxDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledP = styled.p`
  color: ${colors.offPurple};
  font-size: 1.6rem;
`;

const StyledNew = styled(StyledP)`
  color: ${colors.black};
  padding: 1.2rem -1.2rem;
  font-size: 3rem;
  line-height: 4rem;
`;

const StyledBest = styled(StyledP)`
  color: ${colors.primary};
`;
