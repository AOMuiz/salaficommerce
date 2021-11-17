import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const TopCategoriesCard = ({ url, name, buttonName }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
      <div>
        <Button className="button">{buttonName}</Button>
      </div>
    </CardContainer>
  );
};

export default TopCategoriesCard;

const CardContainer = styled.div`
  width: 18rem;
  height: 18rem;
  /* background-color: #f6f7fb; */
  background-color: ${(props) => props.color};
  margin: 20px;
  border-radius: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0.3rem 0.3rem 2rem ${colors.lightArsh};
  :hover {
    transition: 0.25s all ease-in-out;
    box-shadow: -0.5rem 1.2rem 0.5rem #9877e7;

    [class~="button"] {
      display: block;
      transition: 0.2s all ease-in;
    }
  }
`;

const ImageContainer = styled.div``;

const Button = styled.div`
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  background-color: #08d15f;
  color: ${colors.white};
  display: none;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  transition: 0.25s all ease-in;
`;
