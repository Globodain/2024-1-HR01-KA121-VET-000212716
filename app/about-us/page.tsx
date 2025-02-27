import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutHero from '../../components/about/AboutHero';
import OurMission from '../../components/about/OurMission';
import TeamSection from '../../components/about/TeamSection';
import CompanyValues from '../../components/about/CompanyValues';
import Timeline from '../../components/about/Timeline';
import ContactSection from '../../components/about/ContactSection';

export default function AboutUs() {
  return (
    <main className=' bg-gray-50'>
      <Navbar />
      <AboutHero />
      <OurMission />
      <CompanyValues />
      <TeamSection />
      <Timeline />
      <ContactSection />
      <Footer />
    </main>
  );
}
