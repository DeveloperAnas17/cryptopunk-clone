import React from "react";
import styled from "styled-components";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <Navbar>
      <LogoContainer>
        <Image src={punkLogo} alt="" />
      </LogoContainer>

      <SearchBar>
        <SearchIconContainer>
          <SearchIcon src={searchIcon} />
        </SearchIconContainer>
        <SearchInput placeholder="Collection, item or more" />
      </SearchBar>

      <Nav>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </Nav>

      <HeaderActions>
        <ThemeSwitchContainer>
          <img src={themeSwitchIcon} alt="" />
        </ThemeSwitchContainer>
      </HeaderActions>

      <LoginButton>Get In</LoginButton>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.div`
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 170px;
`;

const Image = styled.img`
  width: 100%;
`;

const SearchBar = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
  background-color: #1c1c1e;
  height: 50px;
  flex: 1;
  border-radius: 999px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const SearchIconContainer = styled.div`
  margin: 0 10px;
`;
const SearchIcon = styled.img``;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  color: white;
  width: 100%;
  font-size: 16px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #a1a5b0;
    margin: 10px;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderActions = styled.div`
  margin-left: 15px;
`;

const ThemeSwitchContainer = styled.div`
  background: #1c1c1e;
  cursor: pointer;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 30px;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const LoginButton = styled.div`
  margin: 16px;
  background: linear-gradient(to right, #59f9b7, #66fee2);
  color: black;
  padding: 10px 26px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
