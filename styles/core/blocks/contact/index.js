import styled from "styled-components";
import { breakpoints } from "../../../theme/theme";
export { Title } from "./Title";
export { Header } from "./Header";
export { HeaderInfo } from "./HeaderInfo";
export { Map_Component } from "./Map";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 40% 60%;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
