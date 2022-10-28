import styled from "styled-components";
import { colors } from "../../../theme/theme";
export { Company_Name } from "./CompanyName";
export { Description } from "./Description";
export { Header } from "./Header";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
  background-color: ${colors.bg};
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Cell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Row = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;
