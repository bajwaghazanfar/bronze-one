import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Header = styled.h3`
  font-size: ${fontSizes.m};
  font-weight: 600;
  color: ${colors.primary};
  margin: 0px;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.s};
  }
`;
