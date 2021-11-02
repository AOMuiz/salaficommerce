import React from "react";
import styled from "styled-components";
import armchair from "../../assets/armchair.png";
import { colors } from "../../constants/colors";

export const Hero = ({ imgSrc, text }) => {
  return (
    <StyledHero>
      <StyledTextBoxDiv>
        <StyledImageBox1>
          <StyledLamp src={imgSrc} alt="" />
        </StyledImageBox1>
        <StyledHeaderText>
          <StyledBest>{text}</StyledBest>
          <StyledNew>
            New Furniture Collection <br />
            Trends in 2020.
          </StyledNew>
          <StyledP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            illum veritatis,
            <br /> repudiandae eligendi quibusdam eius.
          </StyledP>
        </StyledHeaderText>
      </StyledTextBoxDiv>
      <StyledImageBox2Div1>
        <StyledImageBox2Div2>
          <StyledImageBox2>
            <StyledArmChair src={armchair} alt="" />
            <StyledPercentOff>
              {/* <p className="text-xs">50% Off</p> */}
            </StyledPercentOff>
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
  border-radius: 100% 50% 60% 95%;
  background-color: #00c1fe;
  width: 6rem;
  height: 5rem;
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
