import React from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const ProductDetailsCard = ({ url, url1, url2, url3 }) => {
  return (
    <CardContainer className="grid grid-cols-1 gap-5"></CardContainer>

    // <div className="grid grid-cols-3 gap-5">
    //   <div className="grid grid-rows-3 gap-5">
    //     <div>
    //       <img src={url1} alt="" />
    //     </div>
    //     <div>
    //       <img src={url2} alt="" />
    //       <img src={url3} alt="" />
    //     </div>
    //   </div>
    //   <img src={url} alt="" />
    //   <div></div>
    //   <div>3</div>
    // </div>
  );
};

export default ProductDetailsCard;

const CardContainer = styled.div``;
