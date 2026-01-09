import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PolicyPopup from "../PolicyPopup/PolicyPopup";
import './Footer.css';

/**
 * @typedef {Object} ContactBlock
 * @property {any} icon - Font Awesome icon
 * @property {string} title - Contact title
 * @property {string[]} content - Contact content lines
 * @property {'phone' | 'email' | 'address'} [type] - Contact type
 */

/** @type {ContactBlock[]} */
const contactData = [
  {
    icon: faMapMarkerAlt,
    title: 'Address',
    content: ['123 Tech Boulevard', 'San Francisco, CA 94105', 'United States'],
    type: 'address',
  },
  {
    icon: faPhone,
    title: "Let's talk us",
    content: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    type: 'phone',
  },
  {
    icon: faEnvelope,
    title: 'Send us email',
    content: ['contact@cybernaut.com', 'support@cybernaut.com'],
    type: 'email',
  },
];

const termsContent = `# Terms & Conditions

Last updated: January 2025

## 1. Agreement to Terms

By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

## 2. Use License

Permission is granted to temporarily download one copy of the materials on Cybernaut's website for personal, non-commercial transitory viewing only.

## 3. Disclaimer

The materials on Cybernaut's website are provided on an 'as is' basis. Cybernaut makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## 4. Limitations

In no event shall Cybernaut or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cybernaut's website.

## 5. Accuracy of Materials

The materials appearing on Cybernaut's website could include technical, typographical, or photographic errors. Cybernaut does not warrant that any of the materials on its website are accurate, complete, or current.

## 6. Links

Cybernaut has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.

## 7. Modifications

Cybernaut may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.

## 8. Governing Law

These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`;

const privacyContent = `# Privacy Policy

Last updated: January 2025

## Introduction

Welcome to Cybernaut. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website.

## 1. Information We Collect

We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:

- **Identity Data** includes first name, last name, username or similar identifier.
- **Contact Data** includes email address and telephone numbers.
- **Technical Data** includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.
- **Usage Data** includes information about how you use our website, products and services.

## 2. How We Use Your Information

We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:

- To provide and maintain our service
- To notify you about changes to our service
- To provide customer support
- To gather analysis or valuable information so that we can improve our service
- To monitor the usage of our service
- To detect, prevent and address technical issues

## 3. Data Security

We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.

## 4. Data Retention

We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.

## 5. Your Legal Rights

Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:

- Request access to your personal data
- Request correction of your personal data
- Request erasure of your personal data
- Object to processing of your personal data
- Request restriction of processing your personal data
- Request transfer of your personal data
- Right to withdraw consent

## 6. Contact Us

If you have any questions about this Privacy Policy, please contact us at privacy@cybernaut.com.`;

function Footer() {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  /** @param {string} phone */
  /** @returns {string} */
  const stripNonNumeric = (phone) => {
    return phone.replace(/\D/g, '');
  };

  /** @param {ContactBlock} block */
  const renderContactContent = (block) => {
    if (block.type === 'phone') {
      return block.content.map((phone, index) => (
        <a
          key={index}
          href={`tel:${stripNonNumeric(phone)}`}
          className="footer-link d-block"
        >
          {phone}
        </a>
      ));
    } else if (block.type === 'email') {
      return block.content.map((email, index) => (
        <a key={index} href={`mailto:${email}`} className="footer-link d-block">
          {email}
        </a>
      ));
    } else {
      return block.content.map((line, index) => (
        <p key={index} className="mb-1">
          {line}
        </p>
      ));
    }
  };

  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            {contactData.map((block, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="footer-contact-block">
                  <div className="footer-icon-container">
                    <FontAwesomeIcon icon={block.icon} />
                  </div>
                  <div className="footer-contact-text">
                    <h4 className="footer-title">{block.title}</h4>
                    <div className="footer-content">{renderContactContent(block)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <p>&copy; Cybernaut 2025 | All Rights Reserved</p>
              </div>
              <div className="footer-links">
                <a
                  href="#terms"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTerms(true);
                  }}
                  className="footer-nav-link"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenPrivacy(true);
                  }}
                  className="footer-nav-link"
                >
                  Privacy Policy
                </a>
                <a href="#sitemap" className="footer-nav-link">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PolicyPopup
        open={openTerms}
        setOpen={setOpenTerms}
        content={termsContent}
        title="Terms & Conditions"
      />

      <PolicyPopup
        open={openPrivacy}
        setOpen={setOpenPrivacy}
        content={privacyContent}
        title="Privacy Policy"
      />
    </>
  );
}

export default Footer;
