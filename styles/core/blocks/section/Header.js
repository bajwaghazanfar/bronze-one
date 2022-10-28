import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Header = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 500;
  color: ${colors.primary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.l};
  }
`;
