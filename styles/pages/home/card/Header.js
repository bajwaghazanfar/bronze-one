import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Card_Header = styled.h1`
  font-size: ${fontSizes.xxxxl};
  font-weight: 500;
  margin: 0px;
  color: ${colors.primary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.l};
  }
`;
export const Card_Header_Small = styled.h1`
  font-size: ${fontSizes.xl};
  font-weight: 500;
  color: ${colors.primary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.m};
  }
`;
