import styled from "styled-components";
import tortuga from "../../assets/images/tortuga.png";
import { colors } from "../../constants/colors";

const DiscountItems = () => {
  return (
    <MainDiv className="flex flex-col items-center justify-between ">
      <Heading className="flex flex-col justify-center items-center">
        <div>
          <h2>Discount Items</h2>
        </div>
        <div className="flex flex-row justify-between items-center p-7">
          <ul className="flex flex-row justify-between items-center">
            <li className="p-7">Wood Chair</li>
            <li className="p-7">Plastic chair</li>
            <li className="p-7">Sofa collection</li>
          </ul>
        </div>
      </Heading>

      <Items className="flex flex-row justify-between items-center">
        <RightDiv className=" mt-12 flex flex-row justify-center items-center">
          <Circle className="">
            <Img src={tortuga} alt="" />
          </Circle>
        </RightDiv>

        <LeftDiv className="flex flex-column justify-between items-center">
          <h2>20% Discount Of All Products</h2>
        </LeftDiv>
      </Items>
    </MainDiv>
  );
};

export default DiscountItems;

const MainDiv = styled.div`
  font-size: 1.5rem;
`;

const Heading = styled.div``;

const Items = styled.div``;

const LeftDiv = styled.div``;
const RightDiv = styled.div`
  width: 40rem;
  height: 20rem;
`;

const Circle = styled.div``;

const Img = styled.img`
  background-image: radial-gradient(
    circle,
    #fcecf1,
    #fcecf1 66%,
    transparent 66%
  );
  width: 55%;
`;
