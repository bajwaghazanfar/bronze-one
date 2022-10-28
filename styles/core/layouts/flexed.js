import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints } from "../../theme/theme";
const Flexed = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Right = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    flex-direction: column;
  }
`;
const Half = styled(motion.div)`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    width: 100%;
  }
`;
const Three_Quarters = styled(motion.div)`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Space_Between = styled(motion.div)`
  width: 100%;
  height: ${(props) => (props.fullheight ? "100vh" : "100%")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.mobileL}) {
    flex-direction: column;
  }
`;
Flexed.Left = Left;
Flexed.Right = Right;
Flexed.Half = Half;
Flexed.Three_Quarters = Three_Quarters;
Flexed.Space_Between = Space_Between;
export default Flexed;
