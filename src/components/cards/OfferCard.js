import react from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const OfferCard = ({ url }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
    </CardContainer>
  );
};

export default OfferCard;

const CardContainer = styled.div``;

const ImageContainer = styled.div;

const Image = styled.img``;
