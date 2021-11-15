import styled from "styled-components";
import { colors } from "../../constants/colors";
import Button from "../button";
import Rectangle from "../../components/rectangle";

const datas = [
  {
    title: "Categories",
    data: [
      "Laptops & Computers",
      "Cameras & Photography",
      "Smart Phones & Tablets",
      "Video Games & Consoles",
      "Waterproof Headphones",
    ],
  },
  {
    title: "Customer Care",
    data: [
      "My Account",
      "Discount",
      "Returns",
      "Orders History",
      "Order Tracking",
    ],
  },
  {
    title: "Pages",
    data: [
      "Blog",
      "Browse the Shop",
      "Category",
      "Pre-Built Pages",
      "Visual Composer Elements",
      "WooCommerce Pages",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledContainer1>
          <StyledHekto>
            <h1 className="text-black font-bold">
              Hekto <br />
            </h1>
            <StyledInput>
              <input type="email" placeholder="Enter Email Address" required />
              <div className="inline-block text-2xl">
                <Button name="Sign Up" color={colors.primary} className="" />
                <br />
              </div>
            </StyledInput>
          </StyledHekto>
          <StyledText>
            <p>Contact Info</p>
            <address>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </address>
          </StyledText>
        </StyledContainer1>
        <StyledContainer2>
          {datas.map(data => (
            <div key={data.title}>
              <StyledH2>{data.title}</StyledH2>
              <StyledList>
                {data.data.map((list, index) => (
                  <div key={index}>
                    <StyledLi>{list}</StyledLi>
                  </div>
                ))}
              </StyledList>
            </div>
          ))}
        </StyledContainer2>
      </StyledFooter>
      <Rectangle />
    </>
  );
};

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
`;

const StyledContainer1 = styled.div`
  display: inline-block;
`;
const StyledList = styled.ul``;

const StyledHekto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  font-size: 2.5rem;
  font-weight: bold;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.offBlue};
  padding-top: 0.5rem;
`;
const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.5rem;
  padding-bottom: 1.2rem;
`;

const StyledContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: ${colors.offBlue};
  list-style-type: none;
  padding-top: 3rem;
`;

const StyledH2 = styled.div`
  color: ${colors.black};
  padding-bottom: 1.5rem;
  padding-left: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledLi = styled.li`
  padding-bottom: 1rem;
  padding-left: 5rem;
`;
