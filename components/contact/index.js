import * as Contact from "../../styles/core/blocks/contact/index";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../styles/core/blocks/contact/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

export const Contact_Component = () => {
  return (
    <Contact.Container>
      <Contact.Title>Contact Us</Contact.Title>
      <Contact.Wrapper>
        <Contact.Cell>
          <Contact.Header>Address</Contact.Header>
          <Contact.HeaderInfo>
            123 Example St, San Francisco,
          </Contact.HeaderInfo>
          <Contact.HeaderInfo>CA 12345-6789</Contact.HeaderInfo>
          <Contact.Header>Telephone</Contact.Header>
          <Contact.HeaderInfo>07342806885</Contact.HeaderInfo>
          <Contact.Header>Email</Contact.Header>
          <Contact.HeaderInfo>
            info@obsidianwebdevelopment.com
          </Contact.HeaderInfo>
        </Contact.Cell>
        <Contact.Cell>
          <Map />
        </Contact.Cell>
      </Contact.Wrapper>
    </Contact.Container>
  );
};
