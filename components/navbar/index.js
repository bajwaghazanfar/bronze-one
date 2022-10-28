import Navbar from "../../styles/core/blocks/navbar";
import Link from "next/link";
import Button from "../../styles/core/blocks/button";
export const NavigationBar = () => {
  return (
    <Navbar.Container>
      <Navbar.Wrapper>
        <Navbar.LeftContainer>
          <Navbar.Title>Tuga</Navbar.Title>
          <Link href="/">
            <Navbar.A>Studio</Navbar.A>
          </Link>{" "}
          <Link href="/">
            <Navbar.A>Projects</Navbar.A>
          </Link>{" "}
          <Link href="/">
            <Navbar.A>News</Navbar.A>
          </Link>
        </Navbar.LeftContainer>
        <Navbar.RightContainer>
          <Button>
            <Button.Text>Start a project</Button.Text>
          </Button>
        </Navbar.RightContainer>
      </Navbar.Wrapper>
    </Navbar.Container>
  );
};
