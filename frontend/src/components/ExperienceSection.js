import React, { useState, useRef, useEffect } from "react";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Network, 
  Monitor,
  ChevronRight 
} from "lucide-react";

const ExperienceSection = ({ data }) => {
  const [activeArea, setActiveArea] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  const icons = [Globe, Smartphone, Database, Network, Monitor];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="terminal-command">
            <span className="prompt">┌──(root@hacx)-[~/]</span>
            <br/>
            <span className="prompt">└─#</span>
            <span className="command">ls -la experience/</span>
          </div>
        </div>

        <div className={`experience-content ${isVisible ? 'visible' : ''}`}>
          <div className="experience-grid">
            <div className="experience-nav">
              <div className="nav-header">
                <span className="nav-title">drwxr-xr-x expertise/</span>
              </div>
              {data.areas.map((area, index) => {
                const Icon = icons[index];
                return (
                  <button
                    key={index}
                    className={`nav-item ${activeArea === index ? 'active' : ''}`}
                    onClick={() => setActiveArea(index)}
                  >
                    <Icon size={20} />
                    <span>{area.title.toLowerCase().replace(/\s+/g, '_')}</span>
                    <ChevronRight size={16} className="nav-arrow" />
                  </button>
                );
              })}
            </div>

            <div className="experience-details">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <div className="terminal-title">
                    {data.areas[activeArea]?.title.toLowerCase().replace(/\s+/g, '_')}.md
                  </div>
                </div>
                
                <div className="terminal-body">
                  <div className="command-line">
                    <span className="prompt">root@cybersec:~$</span>
                    <span className="command">
                      cat {data.areas[activeArea]?.title.toLowerCase().replace(/\s+/g, '_')}.md
                    </span>
                  </div>
                  
                  <div className="experience-info">
                    <h3 className="area-title">
                      # {data.areas[activeArea]?.title}
                    </h3>
                    
                    <div className="area-description">
                      <span className="comment">## Description</span>
                      <p>{data.areas[activeArea]?.description}</p>
                    </div>
                    
                    <div className="skills-section">
                      <span className="comment">## Skills & Techniques</span>
                      <div className="skills-list">
                        {data.areas[activeArea]?.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="skill-tag">
                            <span className="tag-bracket">[</span>
                            {skill}
                            <span className="tag-bracket">]</span>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default ExperienceSection;