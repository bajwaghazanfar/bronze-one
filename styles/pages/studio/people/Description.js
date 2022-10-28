import styled from "styled-components";
import { fontSizes, breakpoints, colors } from "../../../theme/theme";

export const Description = styled.h3`
  font-size: ${fontSizes.s};
  font-weight: 500;

  cursor: pointer;

  color: ${colors.contrast};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.xs};
  }
`;
