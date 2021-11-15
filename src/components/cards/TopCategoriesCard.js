import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const TopCategoriesCard = ({ url, name, buttonName }) => {
  return (
    <CardContiner>
      <ButtonContainer>
        <Image src={url} alt="" />
      </ButtonContainer>
      <Button>{buttonName}</Button>
    </CardContiner>
  );
};

export default TopCategoriesCard;

const CardContiner = styled.div`
  width: 18rem;
  height: 18rem;
  background-color: #f6f7fb;
  margin: 20px;
  border-radius: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0.3rem 0.3rem 2rem ${colors.lightArsh};
  &:hover {
    transition: 0.25s all ease-in-out;
    box-shadow: -0.5rem 1.2rem 0.7rem ${colors.lightBlack};
  }
`;

const ButtonContainer = styled.div``;

const Button = styled.div`
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  background-color: rgba(10, 200, 100, 1);
  /* height: 3rem;
  width: 4rem; */
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;
