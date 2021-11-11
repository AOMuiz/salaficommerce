import styled from "styled-components";
import { colors } from "../../constants/colors";

const FeatureCard = ({ url }) => {
  return (
    <MainContainer>
      <FeatureCardContainer>
        <ImageContainer src={url} alt="" />
      </FeatureCardContainer>
      <TextContainer>
        <Text>this is it</Text>
        <PriceContainer>$221</PriceContainer>
      </TextContainer>
    </MainContainer>
  );
};

export default FeatureCard;

const MainContainer = styled.div`
  border: 1px solid black;
  width: 28rem;
  height: 21rem;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FeatureCardContainer = styled.div`
  background-color: ${colors.lightArsh};
`;

const ImageContainer = styled.img`
  padding-top: 1rem;
`;

const TextContainer = styled.div`
  color: ${colors.offBlue};
  display: flex;
`;

const PriceContainer = styled.div`
  color: ${colors.offBlue};
`;
