import styled from "styled-components";
import * as Charity from "../../styles/core/blocks/charity/index";

export const Charity_Component = () => {
  return (
    <Charity.Container>
      <Charity.Wrapper>
        <Charity.Cell>
          <Charity.Cell.Inner>
            <Charity.Header.Wrapper>
              <Charity.Header>YUGA FOUNDATION</Charity.Header>
            </Charity.Header.Wrapper>
            <Charity.Description>
              We started a foundation to act as the company’s charitable arm
              almost 20 years ago. Since then, we have created dozens of
              community spaces that improve the living conditions for those in
              need across more than 12 countries.
            </Charity.Description>
            <br />
            <Charity.Description>
              Help us build a better world by supporting our foundation today.
            </Charity.Description>
          </Charity.Cell.Inner>
        </Charity.Cell>
        <Charity.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/thisisengineering-raeng-wAbXZEWjVLQ-unsplash.jpg" />
      </Charity.Wrapper>
    </Charity.Container>
  );
};
