import styled from "styled-components";
import { Description_Medium, Description_Small } from "./Description";
import { Card_Header, Card_Header_Small } from "./Header";
import { motion } from "framer-motion";
import { breakpoints } from "../../../theme/theme";

const Card = styled(motion.div)`
  width: 400px;
  height: auto;
  &:nth-child(1) {
    position: relative;
    top: -100px;
    width: 500px;
  }
  opacity: 0;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    &:nth-child(1) {
      position: relative;
      top: 0px;
      width: 100%;
    }
    width: 100%;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

Card.Description_Medium = Description_Medium;
Card.Description_Small = Description_Small;
Card.Card_Header = Card_Header;
Card.Card_Header_Small = Card_Header_Small;
export default Card;
