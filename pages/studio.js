import Layout from "../styles/core/layouts";
import * as Studio from "../styles/pages/studio/index";
import Flexed from "../styles/core/layouts/flexed";
import * as Awards from "../styles/pages/studio/awards/index";
import * as People from "../styles/pages/studio/people/index";

import * as Image from "../styles/core/elements/images/images";
import {
  FadeUpChildren,
  FadeUpContainer,
} from "../../animations/variants/onScrollIn/fadeUp";
import { Contact_Component } from "../components/contact";
import { Charity_Component } from "../components/charity";

export default function Studio_Page() {
  return (
    <>
      <Layout>
        <Layout.Wrapper>
          <Flexed>
            <Image.Full_Width>
              <Image.Image src="/background/studio.jpg" />
            </Image.Full_Width>
          </Flexed>
          <Flexed.Left>
            <Studio.Title>Studio</Studio.Title>
            <Studio.H3>
              <Flexed.Half>
                We earned a reputation for designing beautiful and innovative
                buildings that delight and inspire. We strive to deliver
                innovative solutions that have a minimal impact on the
                environment.
              </Flexed.Half>
            </Studio.H3>
          </Flexed.Left>
          <Contact_Component />
        </Layout.Wrapper>
      </Layout>
      <People.Container>
        <Studio.Title alt="true">People</Studio.Title>
        <People.Wrapper>
          <People.Cell>
            <People.Image src="https://images.pexels.com/photos/702139/pexels-photo-702139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <People.Name>Selena Carrol</People.Name>
            <People.Occupation>Architect</People.Occupation>
            <People.Email>1234@gmail.com</People.Email>
            <People.Description>
              She plans, designs and oversees the construction of buildings. To
              practice, architecture means to provide services in connection
              with the creation of buildings and the space within the site
              surrounding the buildings that have human occupancy or use as
              their purpose.
            </People.Description>
          </People.Cell>
          <People.Cell>
            <People.Image src="https://images.pexels.com/photos/702139/pexels-photo-702139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <People.Name>Selena Carrol</People.Name>
            <People.Occupation>Architect</People.Occupation>
            <People.Email>1234@gmail.com</People.Email>
            <People.Description>
              She plans, designs and oversees the construction of buildings. To
              practice, architecture means to provide services in connection
              with the creation of buildings and the space within the site
              surrounding the buildings that have human occupancy or use as
              their purpose.
            </People.Description>
          </People.Cell>{" "}
          <People.Cell>
            <People.Image src="https://images.pexels.com/photos/702139/pexels-photo-702139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <People.Name>Selena Carrol</People.Name>
            <People.Occupation>Architect</People.Occupation>
            <People.Email>1234@gmail.com</People.Email>
            <People.Description>
              She plans, designs and oversees the construction of buildings. To
              practice, architecture means to provide services in connection
              with the creation of buildings and the space within the site
              surrounding the buildings that have human occupancy or use as
              their purpose.
            </People.Description>
          </People.Cell>{" "}
          <People.Cell>
            <People.Image src="https://images.pexels.com/photos/702139/pexels-photo-702139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <People.Name>Selena Carrol</People.Name>
            <People.Occupation>Architect</People.Occupation>
            <People.Email>1234@gmail.com</People.Email>
            <People.Description>
              She plans, designs and oversees the construction of buildings. To
              practice, architecture means to provide services in connection
              with the creation of buildings and the space within the site
              surrounding the buildings that have human occupancy or use as
              their purpose.
            </People.Description>
          </People.Cell>{" "}
          <People.Cell>
            <People.Image src="https://images.pexels.com/photos/702139/pexels-photo-702139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <People.Name>Selena Carrol</People.Name>
            <People.Occupation>Architect</People.Occupation>
            <People.Email>1234@gmail.com</People.Email>
            <People.Description>
              She plans, designs and oversees the construction of buildings. To
              practice, architecture means to provide services in connection
              with the creation of buildings and the space within the site
              surrounding the buildings that have human occupancy or use as
              their purpose.
            </People.Description>
          </People.Cell>{" "}
          <People.Cell>
            <People.Image src="https://images.pexels.com/photos/702139/pexels-photo-702139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <People.Name>Selena Carrol</People.Name>
            <People.Occupation>Architect</People.Occupation>
            <People.Email>1234@gmail.com</People.Email>
            <People.Description>
              She plans, designs and oversees the construction of buildings. To
              practice, architecture means to provide services in connection
              with the creation of buildings and the space within the site
              surrounding the buildings that have human occupancy or use as
              their purpose.
            </People.Description>
          </People.Cell>
        </People.Wrapper>
      </People.Container>
      <Layout>
        <Awards.Container>
          <Awards.Wrapper>
            <Flexed.Left>
              <Studio.Title>Awards</Studio.Title>
              <Studio.H3>
                We earned a reputation for designing beautiful and innovative
                buildings that delight and inspire. We strive to deliver
                innovative solutions that have a minimal impact on the
                environment.
              </Studio.H3>
            </Flexed.Left>
            <Flexed.Right>
              <Awards.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/award-2.jpg" />{" "}
              <Awards.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/award-2.jpg" />{" "}
              <Awards.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/award-2.jpg" />
            </Flexed.Right>
          </Awards.Wrapper>
        </Awards.Container>
      </Layout>
    </>
  );
}
