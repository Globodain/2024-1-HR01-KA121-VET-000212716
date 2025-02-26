import Hero from '../components/Hero';
import Features from '../components/Features';
import CaseStudies from '../components/CaseStudies';
import SideFeatures from '../components/SideFeatures';
import Testimonials from '../components/Testimonials';
import Marquee from '../components/Marquee';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className='mr-5 ml-5 bg-gray-50'>
      <Hero />
      <Features />
      <SideFeatures />
      <CaseStudies />
      <Testimonials />
      <Marquee />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
