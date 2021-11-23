import React from "react";
import styled from "styled-components";
import Button from "../button";
import Sofachair from "../../assets/images/SofaChair.svg";
import { colors } from "../../constants/colors";

const UniqueFeatures = () => {
  return (
    <Container className="flex flex-row justify-center items-center p-0">
      <div className="flex flex-col justify-right items-right p-0">
        <ImageDiv></ImageDiv>
        <div>
          <Img src={Sofachair} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-left items-left">
        <div className="pl-10">
          <H2 className="font-bold">
            Unique Features Of leatest & <br /> Trending Poducts
          </H2>
        </div>
        <div>
          <ul className="whitespace-nowrap p-6 flex flex-col justify-left items-left">
            <Li>
              <Color1></Color1>
              All frames constructed with hardwood solids and laminates
            </Li>
            <Li>
              <Color2></Color2>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </Li>

            <Li>
              <Color3></Color3>
              Arms, backs and seats are structurally reinforced
            </Li>
          </ul>
        </div>
        <div className="flex flex-row justify-left items-center pl-10">
          <div>
            <Button name="Add To Cart" />
          </div>
          <div className="pl-4">
            <P>
              B&B Italian Sofa <br /> $32.00
            </P>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UniqueFeatures;

const Container = styled.div`
  background-color: #f1f0ff;
`;

const ImageDiv = styled.div`
  background-position: center;
  background-image: radial-gradient(
    circle,
    #fcecf1,
    #fcecf1 66%,
    transparent 66%
  );
  width: 34rem;
  height: 34rem;
  display: flex;
  align-self: center;
  position: relative;
  top: 16rem;
`;

const Img = styled.img`
  width: 70%;
  position: relative;
  bottom: 17rem;
  left: 13rem;
`;
const H2 = styled.h2`
  color: ${colors.offNavyBlue};
  font-size: 2rem;
`;
const P = styled.p`
  color: ${colors.offNavyBlue};
  font-size: 1rem;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  justify-items: left;
  padding: 1rem;
  color: ${colors.offNavyBlue};
  font-size: 1rem;
`;

const Color1 = styled.div`
  background-color: ${colors.primary};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
const Color2 = styled.div`
  background-color: ${colors.offNavyBlue};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
const Color3 = styled.div`
  background-color: aqua;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
