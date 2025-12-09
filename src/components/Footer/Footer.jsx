import "./Footer.css";
import { useState } from "react";
import PolicyPopup from "../PolicyPopup/PolicyPopup";

import termsText from "../../policies/terms.md?raw";
import privacyText from "../../policies/privacy.md?raw";

const Footer = () => {
  // 👈 Hooks MUST be inside the component
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const footerData = [
    {
      icon: <i className="fas fa-map-marker-alt"></i>,
      title: "Address",
      content: ["Oke-Ibadan Estate, Akobo, Ibadan, Oyo State"],
    },
    {
      icon: <i className="fas fa-phone-alt"></i>,
      title: "Let's talk us",
      content: ["+2348062641223", "+2347043045820"],
      isPhone: true,
    },
    {
      icon: <i className="fas fa-envelope"></i>,
      title: "Send us email",
      content: ["ajisolavictor1@gmail.com", "cybernout01@gmail.com"],
      isEmail: true,
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="container">
          <div className="row">
            {footerData.map((item, index) => (
              <div key={index} className="col-lg-4">
                <div className="footer-content">
                  <div
                    className="footer-icon"
                    style={{
                      background: "#2563eb",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                    }}
                  >
                    {item.icon && (
                      <span style={{ color: "#111", fontSize: "3rem", lineHeight: 1 }}>
                        {item.icon}
                      </span>
                    )}
                  </div>
                  <div className="footer-text">
                    <h3>{item.title}</h3>
                    {item.content.map((text, idx) => (
                      <div key={idx}>
                        {item.isPhone ? (
                          <a href={`tel:${text.replace(/[^\d]/g, "")}`}>{text}</a>
                        ) : item.isEmail ? (
                          <a href={`mailto:${text}`}>{text}</a>
                        ) : (
                          <p>{text}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="footer-copyright">
                <p>© Cybernaut 2025 | All Rights Reserved</p>
                <ul className="footer-links">
                  <li>
                    <a
                      href="#"
                      className="text-hover-animation"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTerms(true);
                      }}
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-hover-animation"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenPrivacy(true);
                      }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-hover-animation">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Popups */}
      {openTerms && (
        <PolicyPopup
          open={openTerms}
          setOpen={setOpenTerms}
          content={termsText}
        />
      )}
      {openPrivacy && (
        <PolicyPopup
          open={openPrivacy}
          setOpen={setOpenPrivacy}
          content={privacyText}
        />
      )}
    </footer>
  );
};

export default Footer;
