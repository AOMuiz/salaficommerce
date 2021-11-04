import styled from "styled-components";
import { colors } from "../../constants/colors";
import Button from "../button";

const Footer = ({
  contact,
  address,
  h1,
  h2,
  title = ["Catagories", "Customer Care", "Pages"],
  data1 = ["Cameras & Photography", "", "", "", ""],
  data2 = ["Cameras & Photography", "", "", "", ""],
  data3 = ["Cameras & Photography", "", "", "", ""],
}) => {
  return (
    <StyledFooter>
      <StyledContainer1>
        <StyledHekto>
          <h1 className="text-black font-bold">
            {h1} <br />
          </h1>
          <StyledInput>
            <input type="email" placeholder="Enter Email Address" required />
            <Button name="Sign Up" color={colors.primary} className="" /> <br />
          </StyledInput>
        </StyledHekto>
        <StyledText>
          <p>{contact}</p>
          <p>{address}</p>
        </StyledText>
      </StyledContainer1>

      <StyledContainer2>
        <div>
          <StyledH2>{}</StyledH2>
        </div>
        <div>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
        </div>
      </StyledContainer2>

      <StyledContainer2>
        <div>
          <StyledH2>{}</StyledH2>
        </div>
        <div>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
          <StyledLi>{}</StyledLi>
        </div>
      </StyledContainer2>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: 25rem;
  width: 100%auto;
  background-color: ${colors.lightash};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const StyledContainer1 = styled.div`
  display: inline-block;
`;

const StyledHekto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
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
  padding-top: 2rem;
  padding-bottom: 1.2rem;
`;

const StyledContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.offBlue};
  list-style-type: none;
  padding-top: 4rem;
`;

const StyledH2 = styled.div`
  color: ${colors.black};
  padding-bottom: 1.5rem;
`;
const StyledLi = styled.li`
  padding-bottom: 1rem;
`;
