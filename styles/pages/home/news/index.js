import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints } from "../../../theme/theme";
export { P } from "./Description";
export { Image, ImageContainer } from "./Image";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    flex-direction: column;
  }
`;

export const Cell = styled(motion.div)`
  width: 400px;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
`;
