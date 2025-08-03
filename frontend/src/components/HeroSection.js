import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ data }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Ethical Hacker & Cybersecurity Professional";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="matrix-bg">
        <div className="matrix-rain"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="terminal-title">suraj@cybersec: ~</div>
            </div>
            
            <div className="terminal-body">
              <div className="command-line">
                <span className="prompt">┌──(root@hacx)-[~🐉]</span>
              </div>
              <div className="command-line">
                <span className="prompt">└─$</span>
                <span className="command">whoami</span>
              </div>
              
              <div className="hero-info">
                <div className="hero-name">
                  <span className="green-text">SURAJ THEEKSHANA</span>
                </div>
                <div className="hero-title">
                  {typedText}<span className="cursor">_</span>
                </div>
                <div className="hero-description">
                  <div className="status-line">
                    <span className="label">Status:</span>
                    <span className="value success">ACTIVE</span>
                  </div>
                  <div className="status-line">
                    <span className="label">Clearance:</span>
                    <span className="value">HackTheBox Offshore (First Sri Lankan)</span>
                  </div>
                  <div className="status-line">
                    <span className="label">Specialization:</span>
                    <span className="value">Bug Bounty Hunter | Penetration Tester</span>
                  </div>
                </div>
              </div>
              
              <div className="command-line">
                <span className="prompt">┌──(root@hacx)-[~🐉]</span>
              </div>
              <div className="command-line">
                <span className="prompt">└─$</span>
                <span className="command">cat achievements.txt</span>
              </div>
              
              <div className="achievements">
                <div className="achievement-item">
                  <span className="bullet">></span> 2 CVE Discoveries (CVE-2024-34452, CVE-2024-48605)
                </div>
                <div className="achievement-item">
                  <span className="bullet">></span> Bug Hunter: Allianz, CrowdStrike, Nokia, HackerOne
                </div>
                <div className="achievement-item">
                  <span className="bullet">></span> OSCP+ | OSCP | OSWP Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={scrollToNext} className="scroll-indicator">
        <ChevronDown className="bounce" />
        <span>Scroll to explore</span>
      </button>
    </section>
  );
};

export default HeroSection;