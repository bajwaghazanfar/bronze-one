import * as Footer from "../../styles/core/blocks/footer/index";
export const Footer_Component = () => {
  return (
    <Footer.Container>
      <Footer.Wrapper>
        <Footer.Cell>
          <Footer.Company_Name>TUGA</Footer.Company_Name>
          <Footer.Description>
            123 Example St, San Francisco, CA 12345-6789
          </Footer.Description>
        </Footer.Cell>
        <Footer.Cell>
          <Footer.Header>If you have any questions, let us know.</Footer.Header>
          <Footer.Description>
            0123-456-7890 contact@example.com
          </Footer.Description>
        </Footer.Cell>
        <Footer.Cell>
          <Footer.Header>Follow us</Footer.Header>
          <Footer.Row>
            {" "}
            <Footer.Description>Facebook</Footer.Description>
            <Footer.Description>Twitter</Footer.Description>
            <Footer.Description>Instagram</Footer.Description>
          </Footer.Row>
        </Footer.Cell>
      </Footer.Wrapper>
    </Footer.Container>
  );
};
