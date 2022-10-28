import styled from "styled-components";

import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Header = styled.h1`
  font-size: ${fontSizes.xxl};
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0px;
  text-align: left;
  color: ${colors.contrast_secondary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.l};
  }
`;
export const Wrapper = styled.div`
  width: 50%;
  height: auto;
`;
Header.Wrapper = Wrapper;
