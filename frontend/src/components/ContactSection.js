import React, { useState, useRef, useEffect } from "react";
import { Mail, Linkedin, Shield, Code, Search, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "../hooks/use-toast";

const ContactSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedServices, setTypedServices] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate services typing
          data.services.forEach((service, index) => {
            setTimeout(() => {
              setTypedServices(prev => [...prev, service]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [data.services]);

  const handleContactClick = (type, value) => {
    if (type === 'email') {
      window.location.href = `mailto:${value}`;
      toast({
        title: "Email Client Opening",
        description: "Your default email client should open now.",
      });
    } else if (type === 'linkedin') {
      window.open(value, '_blank');
      toast({
        title: "LinkedIn Opening",
        description: "Opening LinkedIn profile in new tab.",
      });
    }
  };

  const getServiceIcon = (service) => {
    if (service.includes('Penetration')) return <Shield size={16} />;
    if (service.includes('Bug Bounty')) return <Search size={16} />;
    if (service.includes('Code')) return <Code size={16} />;
    return <Zap size={16} />;
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="terminal-command">
            <span className="prompt">┌──(root@hacx)-[~/]</span>
            <br/>
            <span className="prompt">└─#</span>
            <span className="command">./contact_suraj.sh --hire</span>
          </div>
        </div>

        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <div className="terminal-title">contact_info.sh</div>
                </div>
                
                <div className="terminal-body">
                  <div className="command-line">
                    <span className="prompt">root@cybersec:~$</span>
                    <span className="command">cat contact.txt</span>
                  </div>
                  
                  <div className="contact-details">
                    <div className="contact-line">
                      <span className="contact-label"># Ready for Freelance Projects</span>
                    </div>
                    <div className="contact-line">
                      <span className="contact-label">## Cybersecurity Consultant Available</span>
                    </div>
                    
                    <div className="contact-methods">
                      <div className="contact-method">
                        <Mail className="contact-icon" />
                        <div className="contact-data">
                          <span className="method-label">Email:</span>
                          <Button
                            variant="link"
                            className="contact-link"
                            onClick={() => handleContactClick('email', data.email)}
                          >
                            {data.email}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="contact-method">
                        <Linkedin className="contact-icon" />
                        <div className="contact-data">
                          <span className="method-label">LinkedIn:</span>
                          <Button
                            variant="link" 
                            className="contact-link"
                            onClick={() => handleContactClick('linkedin', data.linkedin)}
                          >
                            Connect on LinkedIn
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="availability-status">
                      <div className="status-indicator">
                        <div className="status-dot available"></div>
                        <span>Available for Freelance Projects</span>
                      </div>
                      <div className="response-time">
                        <span>Response Time: &lt; 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-terminal">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <div className="terminal-title">services.list</div>
                </div>
                
                <div className="terminal-body">
                  <div className="command-line">
                    <span className="prompt">root@cybersec:~$</span>
                    <span className="command">./list_services.sh</span>
                  </div>
                  
                  <div className="services-output">
                    <div className="services-header">
                      <span className="comment"># Available Services</span>
                    </div>
                    {typedServices.map((service, index) => (
                      <div key={index} className="service-line">
                        {getServiceIcon(service)}
                        <span className="service-name">{service}</span>
                        <span className="service-status">[AVAILABLE]</span>
                      </div>
                    ))}
                    {typedServices.length < data.services.length && (
                      <div className="typing-cursor">_</div>
                    )}
                  </div>
                  
                  <div className="hire-cta">
                    <div className="command-line">
                      <span className="prompt">root@cybersec:~$</span>
                      <span className="command">echo "Ready to secure your systems?"</span>
                    </div>
                    <div className="cta-output">
                      <span className="cta-text">Ready to secure your systems?</span>
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

export default ContactSection;