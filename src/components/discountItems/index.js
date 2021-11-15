import styled from "styled-components";
import tortuga from "../../assets/images/tortuga.png";
import mark from "../../assets/icon/mark.svg";
import { colors } from "../../constants/colors";
import Button from "../button";

const data1 = [
  {
    title: "Discount Items",
    items: ["Wood Chair", "Plastic chair", "Sofa collection"],
  },
];
const data2 = [
  {
    title: "20% Discount Of All Products",
    heading: "Eams Sofa Compact",

    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          quam rerum doloribus illo, reiciendis repudiandae!`,
    items1: ["Material expose like metals", "Simple neutral colours."],
    items2: [
      "Clear lines and geomatric figures",
      "Material expose like metals",
    ],
  },
];

const DiscountItems = () => {
  return (
    <MainDiv className="flex flex-col items-center justify-around">
      <Heading className="flex flex-col justify-center items-center">
        {data1.map(data => (
          <div key={(data.title, data.items)}>
            <div className="text-center">
              <H2 className="font-bold">{data.title}</H2>
            </div>
            <div className="flex flex-row justify-between items-center p-4">
              <ul className="flex flex-row justify-between items-center">
                {data.items.map((list, index) => (
                  <div key={index}>
                    <Li className="ml-3 mr-3 text-sm font-bold">{list}</Li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Heading>

      <Items className="flex flex-row-reverse justify-around items-center">
        <RightDiv className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-around items-center">
            <ImageDiv></ImageDiv>
            <div className="flex flex-col justify-around items-center">
              <Img src={tortuga} alt="" />
            </div>
          </div>
        </RightDiv>

        <LeftDiv className="flex flex-col justify-around items-start">
          {data2.map(data => (
            <div
              key={
                (data.title, data.heading, data.text, data.items1, data.items2)
              }
            >
              <H2 className="font-bold mb-3">{data.title}</H2>
              <p className="text-sm mb-4 font-bold">{data.heading}</p>

              <P className="text-sm mb-2">{data.text}</P>

              <div className="flex flex-row justify-start items-start">
                <Ul className="flex flex-col items-start justify-between">
                  {data.items1.map((list, index) => (
                    <div key={index}>
                      <div>
                        <Li className="text-sm">
                          <div className="flex flex-row items-center justify-around">
                            <div>
                              <Mark src={mark} alt="" />
                            </div>
                            <div>{list}</div>
                          </div>
                        </Li>
                      </div>
                    </div>
                  ))}
                </Ul>

                <Ul className="flex flex-col items-start justify-between pl-5">
                  {data.items2.map((list, index) => (
                    <div key={index}>
                      <div>
                        <Li className="text-sm">
                          <div className="flex flex-row items-center justify-around">
                            <div>
                              <Mark src={mark} alt="" />
                            </div>
                            <div>{list}</div>
                          </div>
                        </Li>
                      </div>
                    </div>
                  ))}
                </Ul>
              </div>
            </div>
          ))}

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

const Ul = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Li = styled.li`
  padding: 0.5rem;
  color: ${colors.offBlue};
`;

const Mark = styled.img`
  width: 50%;
`;

const Items = styled.div``;

const RightDiv = styled.div`
  width: 40rem;
  height: 20rem;
`;
const LeftDiv = styled.div``;

const ImageDiv = styled.div`
  background-position: center;
  background-image: radial-gradient(
    circle,
    #fcecf1,
    #fcecf1 66%,
    transparent 66%
  );
  width: 21rem;
  height: 21rem;
  display: flex;
  align-self: center;
  position: relative;
  top: 15rem;
`;

const Img = styled.img`
  width: 77%;
  position: relative;
  bottom: 9rem;
`;
