import React, { useState, useEffect, useRef } from "react";
import { Shield, Code, Search, Bug } from "lucide-react";

const AboutSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedSkills, setTypedSkills] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills typing
          data.skills.forEach((skill, index) => {
            setTimeout(() => {
              setTypedSkills(prev => [...prev, skill]);
            }, index * 500);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [data.skills]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="terminal-command">
            <span className="prompt">root@cybersec:~$</span>
            <span className="command">cat about.txt</span>
          </div>
        </div>

        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-grid">
            <div className="about-text">
              <div className="terminal-output">
                <div className="output-line">
                  <span className="file-header"># About Suraj Theekshana</span>
                </div>
                <div className="output-line">
                  <span className="comment">## Cybersecurity Professional</span>
                </div>
                <div className="description-block">
                  {data.description}
                </div>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <Shield className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-number">2</div>
                      <div className="stat-label">CVE Discoveries</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <Bug className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-number">12+</div>
                      <div className="stat-label">Companies Secured</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <Code className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-number">3</div>
                      <div className="stat-label">Certifications</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <Search className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-number">1st</div>
                      <div className="stat-label">Sri Lankan HTB Offshore</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-terminal">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <div className="terminal-title">skills.sh</div>
                </div>
                
                <div className="terminal-body">
                  <div className="command-line">
                    <span className="prompt">root@cybersec:~$</span>
                    <span className="command">./list_skills.sh</span>
                  </div>
                  
                  <div className="skills-output">
                    {typedSkills.map((skill, index) => (
                      <div key={index} className="skill-line">
                        <span className="skill-bullet">[✓]</span>
                        <span className="skill-name">{skill}</span>
                        <div className="skill-bar">
                          <div className="skill-progress"></div>
                        </div>
                      </div>
                    ))}
                    {typedSkills.length < data.skills.length && (
                      <div className="typing-cursor">_</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;