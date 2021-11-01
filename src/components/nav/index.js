import React from "react";
import styled from "styled-components";

import { colors } from "../../constants/colors";
import { ReactComponent as User } from "../../assets/icon/user.svg";
import { ReactComponent as Chevron } from "../../assets/icon/chevron-down.svg";
import { ReactComponent as Envelope } from "../../assets/icon/envelope-alt.svg";
import { ReactComponent as Cart } from "../../assets/icon/cart-24-regular.svg";
import { ReactComponent as PhoneCall } from "../../assets/icon/phone-call.svg";
import { ReactComponent as Search } from "../../assets/icon/uil_search.svg";

const Navbar = () => {
  return (
    <>
      <StyledHeadingBar>
        <StyledList>
          <StyledListItem>
            <Envelope /> salafiDev@gmail.com
          </StyledListItem>
          <StyledListItem>
            <PhoneCall />
            (12345)67890
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledListItem>
            English <Chevron />
          </StyledListItem>
          <StyledListItem>
            USD <Chevron />
          </StyledListItem>
          <StyledListItem>
            Login <User />
          </StyledListItem>
          <StyledListItem>Wishlist</StyledListItem>
          <StyledListItem>
            <Cart />
            Cart
          </StyledListItem>
        </StyledList>
      </StyledHeadingBar>
      <StyledNavBar>
        <StyledLogo>Hekto</StyledLogo>
        <StyledNavForm>
          <StyledInput />
          <StyledSearch>
            <Search />
          </StyledSearch>
        </StyledNavForm>
        <StyledList>
          <StyledNavbarListItem>
            Home <Chevron />
          </StyledNavbarListItem>
          <StyledNavbarListItem>Pages</StyledNavbarListItem>
          <StyledNavbarListItem>Products</StyledNavbarListItem>
          <StyledNavbarListItem>Shop</StyledNavbarListItem>
          <StyledNavbarListItem>Contact</StyledNavbarListItem>
        </StyledList>
      </StyledNavBar>
    </>
  );
};

export default Navbar;

const StyledHeadingBar = styled.div`
  background-color: ${colors.secondary};
  color: ${colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledList = styled.ul`
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
`;
const StyledListItem = styled.li`
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledNavBar = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledLogo = styled.div`
  font-size: 34px;
  font-weight: 700;
`;
const StyledNavForm = styled.div`
  display: flex;
`;
const StyledSearch = styled.div`
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  padding: 3px;
`;
const StyledInput = styled.input`
  border: 2px solid #e7e6ef;
`;

const StyledNavbarListItem = styled(StyledListItem)`
  color: ${colors.black};
`;
