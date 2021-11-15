import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import Button from "../button";

const TopCategoriesCard = ({ url, name, height }) => {
  return (
    <CardContiner>
      <div>
        <Image src={url} alt="" />
        <Button name={name} />
      </div>
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
  cursor: pointer;
  box-shadow: 0.3rem 0.3rem 2rem ${colors.lightArsh};
  &:hover {
    transition: 0.25s all ease-in-out;
    box-shadow: -0.5rem 1.2rem 0.7rem ${colors.lightBlack};
  }
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;
