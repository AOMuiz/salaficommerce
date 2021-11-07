import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import instagram from "../../assets/icon/instagram.svg";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const Rectangle = () => {
  return (
    <ContentDiv className="flex flex-row justify-around">
      <>
        <StyledDiv className="text-lg m-3">
          ©SalafiDev - All Rights Reserved
        </StyledDiv>
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-row items-center justify-around w-8 h-8 rounded-full m-3 bg-blue-900">
            <img src={facebook} alt="" />
          </div>
          <div className="flex flex-row items-center justify-around w-8 h-8 rounded-full m-3 bg-blue-900">
            <img src={instagram} alt="" />
          </div>
          <div className="flex flex-row items-center justify-around w-8 h-8 rounded-full m-3 bg-blue-900">
            <img src={twitter} alt="" />
          </div>
        </div>
      </>
    </ContentDiv>
  );
};

export default Rectangle;

const StyledDiv = styled.div`
  color: ${colors.offBlue};
`;

const ContentDiv = styled.div`
  background-color: ${colors.lightash};
`;
