import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection.jsx";
import CertificationsSection from "./components/CertificationsSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { translations } from "./data/translations.js";

function App() {
  const [language, setLanguage] = useState("en");
  const text = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <SiteHeader text={text} language={language} onLanguageChange={setLanguage} />
      <main id="top">
        <HeroSection text={text.hero} language={language} />
        <AboutSection text={text.about} />
        <ExperienceSection text={text.experience} />
        <EducationSection text={text.education} language={language} />
        <SkillsSection text={text.skills} language={language} />
        <CertificationsSection text={text.certifications} />
      </main>
      <SiteFooter text={text.footer} />
    </>
  );
}

export default App;
