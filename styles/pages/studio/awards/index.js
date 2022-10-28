import styled from "styled-components";
import { breakpoints } from "../../../theme/theme";
export { Image } from "./Image";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 4rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
