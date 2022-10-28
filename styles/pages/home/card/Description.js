import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Description_Small = styled.p`
  font-size: ${fontSizes.s};
  font-weight: 400;
  color: ${colors.primary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.xs};
    text-align: center;
  }
`;
export const Description_Medium = styled.p`
  font-size: ${fontSizes.m};
  font-weight: 400;
  color: ${colors.primary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.s};
    text-align: center;
  }
`;
