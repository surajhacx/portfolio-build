import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import CertificationsSection from "./CertificationsSection";
import BugBountySection from "./BugBountySection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { mockData } from "../data/mock";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Terminal boot sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="terminal-boot">
        <div className="boot-sequence">
          <div className="terminal-line">root@cybersec:~$ initializing system...</div>
          <div className="terminal-line">Loading Suraj Theekshana's portfolio...</div>
          <div className="terminal-cursor">_</div>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      <Header />
      <HeroSection data={mockData.hero} />
      <AboutSection data={mockData.about} />
      <ExperienceSection data={mockData.experience} />
      <CertificationsSection data={mockData.certifications} />
      <BugBountySection data={mockData.bugBounty} />
      <ContactSection data={mockData.contact} />
      <Footer />
    </div>
  );
};

export default HomePage;