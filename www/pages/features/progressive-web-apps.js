import Head from 'next/head';

import Page from '../../components/page';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import SocialMeta from '../../components/social-meta';

import Hero from '../../components/progressive-web-apps/hero';
import OfflineSupport from '../../components/progressive-web-apps/offline-support';
import Learn from '../../components/progressive-web-apps/learn';
import Features from '../../components/progressive-web-apps/features';
import Benefits from '../../components/progressive-web-apps/benefits'
import Customers from '../../components/progressive-web-apps/customers';

const title = "Features - Progressive Web Apps | Next.js"

export default () => (
  <Page title={title}>
    <SocialMeta
      title={title}
      description="Next.js lets you modularize your styles without the hassle"
      image="/static/twitter-cards/css-in-js.png"
      url="https://nexts.org/features/css-in-js"
      keywords="CSS-in-JS, CSS, JS, Next, JavaScript, Web Framework"
    />
    <Header height={{ desktop: 64, mobile: 64 + 32 }} shadow dotBackground>
      <Navbar />
    </Header>
    <Hero />
    <OfflineSupport />
    <Learn />
    <Features />
    <Benefits />
    <Customers />
    <Footer />
    <style jsx>
      {`
        :global(html) {
          scroll-behavior: smooth;
        }
        :global(body) {
          scroll-behavior: unset;
        }
      `}
    </style>
  </Page>
);
