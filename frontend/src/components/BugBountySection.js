import React, { useState, useRef, useEffect } from "react";
import { Bug, Shield, AlertTriangle, Zap, Eye } from "lucide-react";
import { Badge } from "./ui/badge";

const BugBountySection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCompanies, setAnimatedCompanies] = useState([]);
  const [selectedTab, setSelectedTab] = useState('companies');
  const sectionRef = useRef();

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'Critical': return <Zap className="severity-icon critical" />;
      case 'High': return <AlertTriangle className="severity-icon high" />;
      case 'Medium': return <Shield className="severity-icon medium" />;
      default: return <Eye className="severity-icon low" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate companies one by one
          data.companies.forEach((company, index) => {
            setTimeout(() => {
              setAnimatedCompanies(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [data.companies]);

  return (
    <section id="bugbounty" className="bugbounty-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="terminal-command">
            <span className="prompt">┌──(root@hacx)-[~/]</span>
            <br/>
            <span className="prompt">└─#</span>
            <span className="command">grep -r "VULNERABILITY_FOUND" ./reports/</span>
          </div>
        </div>

        <div className={`bugbounty-content ${isVisible ? 'visible' : ''}`}>
          <div className="bounty-tabs">
            <button 
              className={`tab-button ${selectedTab === 'companies' ? 'active' : ''}`}
              onClick={() => setSelectedTab('companies')}
            >
              <Bug size={16} />
              Companies Secured
            </button>
            <button 
              className={`tab-button ${selectedTab === 'cves' ? 'active' : ''}`}
              onClick={() => setSelectedTab('cves')}
            >
              <Shield size={16} />
              CVE Discoveries
            </button>
          </div>

          {selectedTab === 'companies' && (
            <div className="companies-grid">
              {data.companies.map((company, index) => (
                <div 
                  key={index}
                  className={`company-card ${animatedCompanies.includes(index) ? 'animated' : ''}`}
                >
                  <div className="company-header">
                    <div className="company-logo">
                      <div className="logo-placeholder">
                        {company.name.charAt(0)}
                      </div>
                    </div>
                    <div className="company-info">
                      <h3 className="company-name">{company.name}</h3>
                      <Badge 
                        variant={company.severity === 'Critical' ? 'destructive' : 
                                company.severity === 'High' ? 'secondary' : 'outline'}
                        className="severity-badge"
                      >
                        {getSeverityIcon(company.severity)}
                        {company.severity}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="vulnerability-status">
                    <div className="status-line">
                      <span className="status-dot secured"></span>
                      <span>Vulnerability Reported & Secured</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'cves' && (
            <div className="cves-section">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <div className="terminal-title">cve_discoveries.log</div>
                </div>
                
                <div className="terminal-body">
                  <div className="command-line">
                    <span className="prompt">┌──(root@hacx)-[~/]</span>
                  </div>
                  <div className="command-line">
                    <span className="prompt">└─#</span>
                    <span className="command">tail -f /var/log/cve_discoveries.log</span>
                  </div>
                  
                  <div className="cves-list">
                    {data.cves.map((cve, index) => (
                      <div key={index} className="cve-entry">
                        <div className="cve-header">
                          <span className="timestamp">[{cve.year}-12-01 10:30:15]</span>
                          <span className="log-level">INFO</span>
                          <span className="cve-id">{cve.id}</span>
                        </div>
                        <div className="cve-description">
                          {cve.description}
                        </div>
                        <div className="cve-footer">
                          <Badge variant="outline" className="cve-badge">
                            <Shield size={12} />
                            CVE Assigned
                          </Badge>
                          <span className="discover-date">Discovered: {cve.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BugBountySection;