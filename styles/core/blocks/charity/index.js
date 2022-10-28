import styled from "styled-components";
export { Description } from "./Description";
export { Image, ImageContainer } from "./Image";
export { Header } from "./Header";
import { colors } from "../../../theme/theme";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 30px;
`;
export const Cell = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Inner = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
Cell.Inner = Inner;
