import AboutSection from "./components/AboutSection.jsx";
import CertificationsSection from "./components/CertificationsSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";

function App() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
