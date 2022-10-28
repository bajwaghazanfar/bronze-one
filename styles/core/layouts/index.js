import styled from "styled-components";
import { colors, breakpoints } from "../../theme/theme";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.bg};

  padding: 0rem 4rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    padding: 0rem 2rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Layout.Wrapper = Wrapper;
Layout.Center = Center;
export default Layout;
