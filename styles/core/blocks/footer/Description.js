import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Description = styled.p`
  font-size: ${fontSizes.s};
  font-weight: 400;
  color: ${colors.primary};
  margin: 0px;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.xs};
  }
`;
