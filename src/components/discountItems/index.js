import styled from "styled-components";

const DiscountItems = () => {
  return (
    <div className="flex flex-col items-center justify-between ">
      <div>
        <div className="flex flex-row justify-center items-center">
          <h2>Discount Items</h2>
        </div>
        <div className="flex flex-row justify-between items-center">
          <ul className="flex flex-row justify-center items-center">
            <li>Wood Chair</li>
            <li>Plastic chair</li>
            <li>Sofa collection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiscountItems;
