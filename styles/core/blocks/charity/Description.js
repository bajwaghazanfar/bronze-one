import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Description = styled.p`
  font-size: ${fontSizes.m};
  font-weight: 400;
  color: ${colors.contrast_secondary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.xs};
    text-align: center;
  }
`;
