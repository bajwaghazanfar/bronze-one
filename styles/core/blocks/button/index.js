import styled from "styled-components";
import { breakpoints, colors } from "../../../theme/theme";
import { ButtonText } from "./ButtonText";

const Button = styled.button`
  width: 200px;
  height: auto;
  padding: 0.5rem 0rem;
  background-color: ${(props) =>
    props.alt ? colors.contrast_secondary : colors.primary};

  border: none;
  outline: none;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 0rem 4rem;
  }
`;
Button.Text = ButtonText;

export default Button;
