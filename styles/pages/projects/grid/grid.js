import styled from "styled-components";
import { motion } from "framer-motion";
const Grid = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 20px;
  opacity: 0;
`;
const Reverse = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
`;
const Cell = styled(motion.div)`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;
const Alternate = styled(motion.div)`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  opacity: 0;
`;
const Image = styled.img`
  width: ${(props) =>
    props.size === "s" ? "80%" : props.size === "xs" ? "50%" : " 100%"};
  height: auto;
  object-fit: cover;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
Grid.Reverse = Reverse;
Grid.Cell = Cell;
Grid.Cell.Alternate = Alternate;
Grid.Image = Image;
Grid.ImageContainer = ImageContainer;
export default Grid;
