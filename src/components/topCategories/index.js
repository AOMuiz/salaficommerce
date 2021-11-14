import styled from "styled-components";
import { colors } from "../../constants/colors";
import lcw1 from "../../assets/images/lcwchair1.png";
import lcw2 from "../../assets/images/lcwchair2.png";
import lcw3 from "../../assets/images/lcwchair3.png";
import lcw4 from "../../assets/images/lcwchair4.png";

const Topcategories = () => {
  return (
    <div>
      <Topcategories>
        <div className="flex flex-row text-center">
          <h2>Top Categories</h2>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <Lcw>
              <LcwImg src={lcw1} alt="" />
            </Lcw>
            <div className="text-center p-4">
              Mini LCW Chair <br /> $56.00
            </div>
          </div>

          <div>
            <Lcw>
              <LcwImg src={lcw2} alt="" />
            </Lcw>
            <div className="text-center p-4">
              Mini LCW Chair <br /> $56.00
            </div>
          </div>

          <div>
            <Lcw>
              <LcwImg src={lcw3} alt="" />
            </Lcw>
            <div className="text-center p-4">
              Mini LCW Chair <br /> $56.00
            </div>
          </div>

          <div>
            <Lcw>
              <LcwImg src={lcw4} alt="" />
            </Lcw>
            <div className="text-center p-4">
              Mini LCW Chair <br /> $56.00
            </div>
          </div>
        </div>
      </Topcategories>
    </div>
  );
};

export default Topcategories;

const Topcategories = styled.div`
  margin-top: 3rem;
  padding: 2rem;
`;

const Lcw = styled.div`
  background-image: radial-gradient(circle, #f6f7fb, #f6f7fb 70%);

  width: 15rem;
  border-radius: 50%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  align-self: center;
  position: relative;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const LcwImg = styled.img`
  width: 70%;
  height: 70%;
  position: relative;
  left: 2rem;
  top: 2rem;
`;
