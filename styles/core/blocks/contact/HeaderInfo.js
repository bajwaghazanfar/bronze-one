import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../../theme/theme";

export const HeaderInfo = styled.p`
  font-size: ${fontSizes.s};
  font-weight: 400;
  color: ${colors.primary};
  margin: 10px 0px;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.xs};
  }
`;
