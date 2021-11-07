import react from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const ProductHeroSection = ({ title, info1, info2, info3 }) => {
  return (
    <HeroContainer>
      <TextContainer>
        <div>
          <Title>{title}</Title>
        </div>
        <div className="inline-flex">
          <p className="text-black p-1">{info1}</p>
          <p className="text-black p-1">{info2}</p>
          <p className="p-1">{info3}</p>
        </div>
      </TextContainer>
    </HeroContainer>
  );
};

export default ProductHeroSection;

const HeroContainer = styled.div`
  background-color: #f6f5ff;
  width: 100rem;
  height: 20rem;
  margin: 5rem 5rem;
`;

const TextContainer = styled.div`
  padding: 5rem 15rem 5rem 25rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  color: ${colors.offBlue};
  font-size: 2.6rem;
`;
