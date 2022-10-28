import styled from "styled-components";
import { colors } from "../../../theme/theme";
export { Description } from "./Description";
export { Image } from "./Image";
export { Email } from "./Email";
export { Name } from "./Name";
export { Occupation } from "./Occupation";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.matteBlack};
  padding: 4rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Cell = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
