import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import Button from "../../components/button";

export const Hero = ({ lampImgSrc, armChairImgSrc, text, title, subTitle }) => {
  return (
    <>
      <StyledContent>
        <StyledTextBoxDiv>
          <StyledLeft>
            <StyledImageBox1>
              <StyledLamp src={lampImgSrc} alt="" />
            </StyledImageBox1>
            <StyledHeaderText>
              <StyledBest>{text}</StyledBest>
              <StyledNew>{title}</StyledNew>
              <StyledP className="mb-4">{subTitle}</StyledP>
              <Button name="Shop Now" />
            </StyledHeaderText>
          </StyledLeft>

          <StyledImageBox2Div1>
            <StyledImageBox2Div2>
              <StyledImageBox2>
                <StyledArmChair src={armChairImgSrc} alt="" />
                <StyledPercentOff>50% Off</StyledPercentOff>
              </StyledImageBox2>
            </StyledImageBox2Div2>
          </StyledImageBox2Div1>
        </StyledTextBoxDiv>

        <div className="flex flex-row justify-around self-center">
          <StyledDot></StyledDot>
          <StyledDot></StyledDot>
          <StyledDot></StyledDot>
        </div>
      </StyledContent>
    </>
  );
};

export default Hero;

const StyledContent = styled.div`
  height: 30rem;
  background-color: ${colors.lightash};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-evenly;
`;

const StyledLeft = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const StyledLamp = styled.img`
  width: 100%;
  align-self: flex-start;
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
  position: relative;
`;

const StyledImageBox2Div1 = styled.div`
  width: 25rem;
  height: 22rem;
  border-radius: 50rem;
  background-color: #ecd2fa59;
`;

const StyledImageBox2Div2 = styled.div`
  width: 22rem;
  height: 22rem;
  border-radius: 50rem;
  align-self: flex-start;
  background-color: #ecd2fa59;
`;

const StyledPercentOff = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 7rem 6rem 6rem 4rem;
  position: absolute;
  left: 80%;
  background-color: #00c1fe;
  width: 5rem;
  height: 5rem;
  font-size: 1rem;
  padding: 2rem;
  color: ${colors.white};
`;

const StyledTextBoxDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledP = styled.p`
  color: ${colors.offPurple};
  font-size: 1.2rem;
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

const StyledDot = styled.div`
  margin: 0.2rem;
  margin-bottom: 2rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${colors.primary};
  background-color: ${colors.white};
`;
