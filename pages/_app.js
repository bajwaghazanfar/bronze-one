import { NavigationBar } from "../components/navbar";
import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Footer_Component } from "../components/footer";
import Layout from "../styles/core/layouts";
import { Charity_Component } from "../components/charity";
import { Contact_Component } from "../components/contact";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
      <Layout>
        <Layout.Wrapper>
          <Charity_Component />
          <Contact_Component />
        </Layout.Wrapper>
      </Layout>
      <Footer_Component />
    </>
  );
}

export default MyApp;
