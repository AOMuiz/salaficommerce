import styled from "styled-components";
import tortuga from "../../assets/images/tortuga.png";
import { colors } from "../../constants/colors";
import Button from "../button";

const DiscountItems = () => {
  return (
    <MainDiv className="flex flex-col items-center justify-around">
      <Heading className="flex flex-col justify-center items-center">
        <div>
          <H2 className="font-bold">Discount Items</H2>
        </div>
        <div className="flex flex-row justify-between items-center p-4">
          <ul className="flex flex-row justify-between items-center">
            <Li className="ml-3 mr-3 text-sm font-bold">Wood Chair</Li>
            <Li className="ml-3 mr-3 text-sm font-bold">Plastic chair</Li>
            <Li className="ml-3 mr-3 text-sm font-bold">Sofa collection</Li>
          </ul>
        </div>
      </Heading>

      <Items className="flex flex-row-reverse justify-around items-center">
        <RightDiv className=" mt-12 flex flex-row justify-center items-center">
          <Img src={tortuga} alt="" />
        </RightDiv>

        <LeftDiv className="flex flex-col justify-between items-start">
          <H2 className="font-bold mb-3">20% Discount Of All Products</H2>
          <p className="text-sm mb-4 font-bold">Eams Sofa Compact</p>

          <P className="text-sm mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque{" "}
            <br />
            quam rerum doloribus illo, reiciendis repudiandae!
          </P>
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-row items-start justify-between mb-3">
              <Ul className="flex flex-col items-start justify-between">
                <Li className=" text-sm">Material expose like metals</Li>
                <Li className=" text-sm">Simple neutral colours.</Li>
              </Ul>

              <Ul className="flex flex-col items-start justify-between">
                <Li className=" text-sm">Clear lines and geomatric figures</Li>
                <Li className=" text-sm">Material expose like metals</Li>
              </Ul>
            </div>
          </div>
          <Button name="Shop Now"></Button>
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

const P = styled.p`
  color: ${colors.offBlue};
`;

const H2 = styled.h2`
  color: ${colors.offBlue};
`;

const Ul = styled.ul``;

const Li = styled.li`
  padding: 0.5rem;
  color: ${colors.offBlue};
`;

const Items = styled.div``;

const RightDiv = styled.div`
  width: 40rem;
  height: 20rem;
`;
const LeftDiv = styled.div``;

const Img = styled.img`
  background-size: initial;
  /* background-repeat: no-repeat; */
  background-image: radial-gradient(
    circle,
    #fcecf1,
    #fcecf1 66%,
    transparent 66%
  );
  width: 55%;
`;
