import styled from "styled-components";
import { breakpoints, colors, fontSizes } from "../../theme/theme";
import { motion } from "framer-motion";
export const Title = styled(motion.h1)`
  font-size: ${fontSizes.xxxxl};
  font-weight: 400;
  color: ${colors.primary};
  opacity: 0;

  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.l};
  }
`;
export const H1 = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 500;
  color: ${colors.primary};
`;
export const H2 = styled(motion.h2)`
  font-size: ${fontSizes.xl};
  font-weight: 400;
  color: ${colors.primary};
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.m};
    text-align: center;
  }
`;
export const A = styled.a`
  font-size: ${fontSizes.m};
  font-weight: 400;
  color: ${colors.primary};
  text-decoration: underline;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    font-size: ${fontSizes.s};
    text-align: center;
  }
`;
export const ImageSubTitle = styled.p`
  font-size: ${fontSizes.m};
  font-weight: 400;
  color: ${colors.secondary};
`;
