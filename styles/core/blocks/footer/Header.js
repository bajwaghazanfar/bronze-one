import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const Header = styled.h3`
  font-size: ${fontSizes.s};
  font-weight: 600;
  color: ${colors.primary};

  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.xs};
  }
`;
