import React, { useState, useEffect } from "react";
import { Terminal, Shield, Bug, Award, User, Mail } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`terminal-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="terminal-prompt">
            <Terminal className="terminal-icon" />
            <div className="prompt-text">
              <div>┌──(root@hacx)-[~🐉]</div>
              <div>└─#</div>
            </div>
          </div>
          
          <nav className="terminal-nav">
            <button onClick={() => scrollToSection("about")} className="nav-command">
              <User size={16} />
              ./about
            </button>
            <button onClick={() => scrollToSection("experience")} className="nav-command">
              <Shield size={16} />
              ./experience
            </button>
            <button onClick={() => scrollToSection("certifications")} className="nav-command">
              <Award size={16} />
              ./certs
            </button>
            <button onClick={() => scrollToSection("bugbounty")} className="nav-command">
              <Bug size={16} />
              ./bounties
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-command">
              <Mail size={16} />
              ./contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;