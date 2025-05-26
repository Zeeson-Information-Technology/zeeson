import Head from 'next/head';
import Features from "../components/homes/Features";
import Hero from "../components/homes/hero";
import HowWeWork from "../components/homes/howWeWork";
import Project from "../components/homes/Project";
import Testimonials from "../components/homes/Testimonials";
import Accordion from "../components/ui/Accordion";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zeeson Info Tech - Digital Excellence</title>
      </Head>
      <main>
        <Hero />
        <HowWeWork />
        <Project />
        <Features />
        <Testimonials />
        <Accordion />
        <Footer />
      </main>
    </div>
  );
}
