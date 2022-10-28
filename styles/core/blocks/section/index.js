import styled from "styled-components";
export { Header } from "./Header";
export { Description } from "./Description";
export { Image } from "./Image";
import { motion } from "framer-motion";
import { breakpoints } from "../../../theme/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text_Container = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    width: 100%;
  }
`;
