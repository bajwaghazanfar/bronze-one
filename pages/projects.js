import Layout from "../styles/core/layouts";
import Grid from "../styles/pages/projects/grid/grid";
import * as Projects from "../styles/pages/projects/index";
import Flexed from "../styles/core/layouts/flexed";

import * as Section from "../styles/core/blocks/section/index";

import * as Charity from "../styles/core/blocks/charity/index";
import {
  FadeUpChildren,
  FadeUpContainer,
} from "../../animations/variants/onScrollIn/fadeUp";

export default function Project() {
  return (
    <Layout>
      <Layout.Wrapper>
        <Flexed.Left>
          <Flexed.Half>
            <Projects.Title
              variants={FadeUpChildren}
              initial="hidden"
              animate="visible"
            >
              Projects
            </Projects.Title>
            <Flexed.Left>
              <Projects.H2>
                We are driven to change lives for the better and we do that by
                creating places and spaces that positively impact the people who
                use them and the environment that surrounds them.
              </Projects.H2>
            </Flexed.Left>
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
              <Projects.ImageSubTitle>Trnava, Slovakia</Projects.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell>
          <Grid.Cell variants={FadeUpChildren}>
            <Grid.ImageContainer>
              <Grid.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/amir-hosseini-3cl6impBd_8-unsplash.jpg" />
              <Projects.ImageSubTitle>Tehran, Iran</Projects.ImageSubTitle>
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
              <Projects.ImageSubTitle>Münster, Germany</Projects.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell>
          <Grid.Cell.Alternate variants={FadeUpChildren}>
            <Grid.ImageContainer>
              <Grid.Image
                size="s"
                src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/jimmy-chang-Pj5zM1i0GNU-unsplash.jpg"
              />
              <Projects.ImageSubTitle>Beijing, China</Projects.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell.Alternate>
        </Grid.Reverse>
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
                src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/mihai-halmi-nistor-BsvHY0NLiGc-unsplash.jpg"
              />
              <Projects.ImageSubTitle>Valencia, Spain</Projects.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell>
          <Grid.Cell variants={FadeUpChildren}>
            <Grid.ImageContainer>
              <Grid.Image src="https://s0.wp.com/wp-content/themes/premium/yuga/assets/images/calvin-yin-ulGRGgvP_Pw-unsplash.jpg" />
              <Projects.ImageSubTitle>Munster, Germany</Projects.ImageSubTitle>
            </Grid.ImageContainer>
          </Grid.Cell>
        </Grid>
      </Layout.Wrapper>
    </Layout>
  );
}
