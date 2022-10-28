import styled from "styled-components";
import Image from "next/image";
import { breakpoints, colors } from "../../../theme/theme";
import { Title } from "./Title";
import { A } from "./A";
const Navbar = styled.div`
  width: 100%;
  height: auto;
`;
const Container = styled.div`
  width: 100%;
  height: 2%;

  background-color: ${colors.bg};
  @media (max-width: ${breakpoints.laptop}) {
    z-index: 10;
    height: 17%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    padding: 1rem 2rem;
  }
`;

const LeftContainer = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: space-between;

  align-items: center;
`;
const RightContainer = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${breakpoints.laptop}) {
    width: 50%;
  }
`;
//Mobile
const HamburgerLogo = styled.button`
  width: auto;
  height: auto;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;
const MobileMenu = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  border-radius: 10px;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Logo = styled(Image)`
  width: 80px;
  height: auto;
  border-radius: 10px;
`;
const LogoContainer = styled.div`
  width: 80px;
  height: auto;
`;
Navbar.Container = Container;
Navbar.Wrapper = Wrapper;
Navbar.LeftContainer = LeftContainer;
Navbar.RightContainer = RightContainer;
Navbar.HamburgerLogo = HamburgerLogo;
Navbar.MobileMenu = MobileMenu;
Navbar.LogoContainer = LogoContainer;
Navbar.Logo = Logo;
Navbar.Title = Title;
Navbar.A = A;

export default Navbar;
