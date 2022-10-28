import styled from "styled-components";
import { breakpoints, colors, fontSizes } from "../../../theme/theme";

export const Company_Name = styled.h1`
  font-size: ${fontSizes.m};
  font-weight: 500;
  color: ${colors.primary};

  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.s};
  }
`;
