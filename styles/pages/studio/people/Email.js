import styled from "styled-components";
import { fontSizes, breakpoints, colors } from "../../../theme/theme";

export const Email = styled.a`
  font-size: ${fontSizes.s};
  font-weight: 500;

  cursor: pointer;

  color: ${colors.contrast};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.l};
  }
`;
