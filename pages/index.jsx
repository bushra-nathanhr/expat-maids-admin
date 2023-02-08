import Head from "next/head";
import { NextSeo } from "next-seo";

//BOOTSTRAP
import { Container } from "react-bootstrap";

// SHARED COMPONENTS
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

//COMPONENTS FOR DESKTOP
import Banner from "../components/Desktop/Banner";
import About from "../components/Desktop/About";
import Contact from "../components/Desktop/Contact";

//COMPONENTS FOR MOBILE
import BannerMobile from "../components/Mobile/Banner";
import AboutMobile from "../components/Mobile/About";
import ContactMobile from "../components/Mobile/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <NextSeo
          title="Expat Maids"
          description="description"
          canonical="https://www.website.ie/"
          openGraph={{
            url: "https://www.website.ie/",
            title: "Expat Maids",
            description: "description",
            images: [
              {
                url: "https://www.example.ie/og-image-01.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
              },
              {
                url: "https://www.example.ie/og-image-02.jpg",
                width: 900,
                height: 800,
                alt: "Og Image Alt Second",
              },
              { url: "https://www.example.ie/og-image-03.jpg" },
              { url: "https://www.example.ie/og-image-04.jpg" },
            ],
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Container fluid="xl">
          <Navbar />
          <div className="d-none d-lg-block">
            <Banner />
            <About />
            <Contact />
          </div>
          <div className="d-block d-lg-none">
            <BannerMobile />
            <AboutMobile />
            <ContactMobile />
          </div>
          <Footer />
      </Container>

    </div>
  )
}
