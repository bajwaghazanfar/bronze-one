import Layout from "../styles/core/layouts";
import Grid from "../styles/pages/home/grid/grid";
import * as Home from "../styles/pages/home/index";
import Flexed from "../styles/core/layouts/flexed";
import Card from "../styles/pages/home/card/index";
import * as Section from "../styles/core/blocks/section/index";
import * as News from "../styles/pages/home/news/index";
import * as Charity from "../styles/core/blocks/charity/index";
import {
  FadeUpChildren,
  FadeUpContainer,
} from "../../animations/variants/onScrollIn/fadeUp";
import { Charity_Component } from "../components/charity";
import { Contact_Component } from "../components/contact";

export default function Index() {
  return (
    <Layout>
      <Layout.Wrapper>
        <Flexed.Left>
          <Flexed.Half>
            <Home.Title
              variants={FadeUpChildren}
              initial="hidden"
              animate="visible"
            >
              Tuga is an innovative firm with a focus on designing
              life-enhancing and genuinely sustainable architecture.
            </Home.Title>
          </Flexed.Half>
        </Flexed.Left>
        <Grid
          variants={FadeUpContainer(0, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid.Cell variants={FadeUpChildren}>
            <Grid.ImageContainer>
              <Grid.Image
                size="s"
                src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/martin-katler-qM4xm0PdhFs-unsplash.jpg"
              />
              <Home.ImageSubTitle>Trnava, Slovakia</Home.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell>
          <Grid.Cell variants={FadeUpChildren}>
            <Grid.ImageContainer>
              <Grid.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/amir-hosseini-3cl6impBd_8-unsplash.jpg" />
              <Home.ImageSubTitle>Tehran, Iran</Home.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell>
        </Grid>
        <Grid.Reverse
          variants={FadeUpContainer(0, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid.Cell variants={FadeUpChildren}>
            <Grid.ImageContainer>
              <Grid.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/calvin-yin-ZYJacrS39eQ-unsplash.jpg" />
              <Home.ImageSubTitle>Münster, Germany</Home.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell>
          <Grid.Cell.Alternate variants={FadeUpChildren}>
            <Grid.ImageContainer>
              <Grid.Image
                size="s"
                src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/jimmy-chang-Pj5zM1i0GNU-unsplash.jpg"
              />
              <Home.ImageSubTitle>Beijing, China</Home.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell.Alternate>
        </Grid.Reverse>
        <Flexed.Left>
          <Flexed.Right>
            <Flexed.Three_Quarters
              variants={FadeUpContainer(0.5, 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Home.H2>
                We are driven to change lives for the better and we do that by
                creating places and spaces that positively impact the people who
                use them and the environment that surrounds them.
              </Home.H2>
              <Home.A>View more projects</Home.A>
            </Flexed.Three_Quarters>
          </Flexed.Right>
        </Flexed.Left>
        <Flexed.Space_Between
          fullheight="true"
          variants={FadeUpContainer(0.5, 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card variants={FadeUpChildren}>
            <Card.Card_Header>By the Numbers</Card.Card_Header>
            <Card.Description_Medium>
              We prioritize sustainable energy and ecological conservation in
              every project we take on.
            </Card.Description_Medium>
          </Card>
          <Card variants={FadeUpChildren}>
            <Card.Card_Header>98%</Card.Card_Header>
            <Card.Description_Small>
              Lower energy consumption and costs than comparable buildings
              around the world.
            </Card.Description_Small>
          </Card>
          <Card variants={FadeUpChildren}>
            <Card.Card_Header>85%</Card.Card_Header>
            <Card.Description_Small>
              Reduction in the use of non-renewable resources.
            </Card.Description_Small>
          </Card>
          <Card variants={FadeUpChildren}>
            <Card.Card_Header>77%</Card.Card_Header>
            <Card.Description_Small>
              Use of recycled and recyclable materials.
            </Card.Description_Small>
          </Card>
        </Flexed.Space_Between>
        <Section.Container>
          <Section.Wrapper
            variants={FadeUpContainer(0.5, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Section.Cell>
              <Section.Image src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Section.Cell>
            <Section.Cell>
              <Section.Text_Container>
                <Section.Header>Innovation.</Section.Header>
                <Section.Description>
                  “We create places and spaces that positively impact the people
                  who use them and the environment that surrounds them.”
                </Section.Description>
                <Section.Description>— Founder, Architect</Section.Description>
              </Section.Text_Container>
            </Section.Cell>
          </Section.Wrapper>
          <Section.Wrapper
            variants={FadeUpContainer(0.5, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Section.Cell>
              <Section.Text_Container>
                <Section.Header>Innovation.</Section.Header>
                <Section.Description>
                  “We create places and spaces that positively impact the people
                  who use them and the environment that surrounds them.”
                </Section.Description>
                <Section.Description>— Founder, Architect</Section.Description>
              </Section.Text_Container>
            </Section.Cell>
            <Section.Cell>
              <Section.Image src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Section.Cell>
          </Section.Wrapper>
          <Section.Wrapper
            variants={FadeUpContainer(0.5, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Section.Cell>
              <Section.Image src="https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Section.Cell>
            <Section.Cell>
              <Section.Text_Container>
                <Section.Header>Innovation.</Section.Header>
                <Section.Description>
                  “We create places and spaces that positively impact the people
                  who use them and the environment that surrounds them.”
                </Section.Description>
                <Section.Description>— Founder, Architect</Section.Description>
              </Section.Text_Container>
            </Section.Cell>
          </Section.Wrapper>
        </Section.Container>
        <Flexed.Left>
          <Home.H1>Recent News</Home.H1>
        </Flexed.Left>
        <News.Container>
          <News.Cell
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <News.ImageContainer>
              <News.Image src="https://images.pexels.com/photos/8123145/pexels-photo-8123145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <News.P>
                The Vertical Forest, a Model for a Sustainable Residential
                Building in Milan
              </News.P>
            </News.ImageContainer>
          </News.Cell>
          <News.Cell
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <News.ImageContainer>
              <News.Image src="https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <News.P>
                The Vertical Forest, a Model for a Sustainable Residential
                Building in Milan
              </News.P>
            </News.ImageContainer>
          </News.Cell>
          <News.Cell
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <News.ImageContainer>
              <News.Image src="https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <News.P>
                The Vertical Forest, a Model for a Sustainable Residential
                Building in Milan
              </News.P>
            </News.ImageContainer>
          </News.Cell>
          <News.Cell
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <News.ImageContainer>
              <News.Image src="https://images.pexels.com/photos/2276927/pexels-photo-2276927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <News.P>
                The Vertical Forest, a Model for a Sustainable Residential
                Building in Milan
              </News.P>
            </News.ImageContainer>
          </News.Cell>
        </News.Container>
      </Layout.Wrapper>
    </Layout>
  );
}
