import facebook from "../../assets/facebook.svg";

const Rectangle = () => {
  return (
    <div className="flex flex-row justify-around">
      <div>©Webecy - All Rights Reserved {"&:copy"}</div>
      <div>
        <img src={facebook} alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Rectangle;
