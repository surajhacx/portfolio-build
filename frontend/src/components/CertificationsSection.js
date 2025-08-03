import React, { useState, useRef, useEffect } from "react";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const CertificationsSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCerts, setAnimatedCerts] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate certifications one by one
          data.forEach((cert, index) => {
            setTimeout(() => {
              setAnimatedCerts(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [data]);

  return (
    <section id="certifications" className="certifications-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="terminal-command">
            <span className="prompt">root@cybersec:~$</span>
            <span className="command">find ./certifications -type f -name "*.cert" | head -4</span>
          </div>
        </div>

        <div className={`certifications-content ${isVisible ? 'visible' : ''}`}>
          <div className="certifications-grid">
            {data.map((cert, index) => (
              <div 
                key={index} 
                className={`certification-card ${animatedCerts.includes(index) ? 'animated' : ''}`}
              >
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-controls">
                      <div className="control red"></div>
                      <div className="control yellow"></div>
                      <div className="control green"></div>
                    </div>
                    <div className="terminal-title">
                      {cert.name.toLowerCase().replace(/\+/g, 'plus').replace(/\s+/g, '_')}.cert
                    </div>
                  </div>
                  
                  <div className="terminal-body">
                    <div className="command-line">
                      <span className="prompt">root@cybersec:~$</span>
                      <span className="command">openssl x509 -in {cert.name.toLowerCase().replace(/\+/g, 'plus').replace(/\s+/g, '_')}.cert -text</span>
                    </div>
                    
                    <div className="cert-info">
                      <div className="cert-header">
                        <div className="cert-icon">
                          <Award size={24} />
                        </div>
                        <div className="cert-status">
                          <CheckCircle size={16} className="check-icon" />
                          <span>VERIFIED</span>
                        </div>
                      </div>
                      
                      <div className="cert-details">
                        <h3 className="cert-name">{cert.name}</h3>
                        <div className="cert-issuer">
                          <span className="label">Issuer:</span>
                          <span className="value">{cert.issuer}</span>
                        </div>
                        <div className="cert-year">
                          <Calendar size={16} />
                          <span>{cert.year}</span>
                        </div>
                        <p className="cert-description">
                          {cert.description}
                        </p>
                      </div>
                      
                      <div className="cert-actions">
                        <Button
                          variant="outline"
                          size="sm"
                          className="verify-btn"
                          onClick={() => window.open(cert.url, '_blank')}
                        >
                          <ExternalLink size={16} />
                          Verify Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;