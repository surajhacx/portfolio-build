import React from "react";
import { Terminal, Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="terminal-footer">
      <div className="container">
        <div className="footer-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="terminal-title">system_info.sh</div>
            </div>
            
            <div className="terminal-body">
              <div className="command-line">
                <span className="prompt">root@cybersec:~$</span>
                <span className="command">uname -a</span>
              </div>
              
              <div className="system-info">
                <div className="info-line">
                  <Terminal size={16} />
                  <span>SurajTheekshana-CyberSec v{currentYear} (Ethical-Hacker-Build)</span>
                </div>
                <div className="info-line">
                  <Shield size={16} />
                  <span>Secured by OSCP+ | Built with</span>
                  <Heart size={14} className="heart-icon" />
                  <span>for cybersecurity</span>
                </div>
              </div>
              
              <div className="command-line">
                <span className="prompt">root@cybersec:~$</span>
                <span className="command">echo "Stay secure, stay vigilant"</span>
              </div>
              
              <div className="footer-output">
                <span className="output-text">Stay secure, stay vigilant</span>
              </div>
              
              <div className="command-line">
                <span className="prompt">root@cybersec:~$</span>
                <span className="cursor-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;