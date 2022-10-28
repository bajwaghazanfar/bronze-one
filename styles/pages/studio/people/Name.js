import styled from "styled-components";
import { fontSizes, breakpoints, colors } from "../../../theme/theme";

export const Name = styled.h2`
  font-size: ${fontSizes.l};
  font-weight: 500;
  margin: 0px;
  color: ${colors.contrast};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.l};
  }
`;
