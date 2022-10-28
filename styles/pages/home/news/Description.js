import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints, colors, fontSizes } from "../../../theme/theme";

export const P = styled(motion.h2)`
  font-size: ${fontSizes.m};
  font-weight: 400;
  color: ${colors.primary};
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.s};
    text-align: center;
  }
`;
