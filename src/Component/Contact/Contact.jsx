// ContactUs.jsx
import React, { useState } from 'react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone, FaWhatsappSquare, FaCopy, FaCheck } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = async (text, itemName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      setTimeout(() => setCopiedItem(null), 2000); 
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const contactData = {
    email: 'qamar@gmail.com',
    phone: '01234567890',
    whatsapp: '0112345667'
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        <h1 className="contact-us-title">Contact us</h1>
        
        <div className="contact-us-grid">
          
          <div 
            className="contact-us-item copyable"
            onClick={() => copyToClipboard(contactData.email, 'email')}
          >
            <div className="contact-us-label">
              <FaEnvelope />
              Email
              <span className="copy-icon">
                {copiedItem === 'email' ? <FaCheck className="copied" /> : <FaCopy />}
              </span>
            </div>
            <div className="contact-us-value">{contactData.email}</div>
            {copiedItem === 'email' && <div className="copy-message">تم النسخ!</div>}
          </div>

          
          <div 
            className="contact-us-item copyable"
            onClick={() => copyToClipboard(contactData.phone, 'phone')}
          >
            <div className="contact-us-label">
              <FaPhone />
              Phone
              <span className="copy-icon">
                {copiedItem === 'phone' ? <FaCheck className="copied" /> : <FaCopy />}
              </span>
            </div>
            <div className="contact-us-value">{contactData.phone}</div>
            {copiedItem === 'phone' && <div className="copy-message">تم النسخ!</div>}
          </div>

          
          <div 
            className="contact-us-item copyable"
            onClick={() => copyToClipboard(contactData.whatsapp, 'whatsapp')}
          >
            <div className="contact-us-label">
              <FaWhatsappSquare />
              What's App
              <span className="copy-icon">
                {copiedItem === 'whatsapp' ? <FaCheck className="copied" /> : <FaCopy />}
              </span>
            </div>
            <div className="contact-us-value">{contactData.whatsapp}</div>
            {copiedItem === 'whatsapp' && <div className="copy-message">تم النسخ!</div>}
          </div>

          
          <div className="contact-us-item">
            <div className="contact-us-label">Social Media</div>
            <div className="contact-us-social">
              <a target='_blank' href = {` https://wa.me/2${contactData.whatsapp}`} className=" contact-us-icon whatsapp" title="WhatsApp">
                <FaWhatsapp />
              </a>
              <a target='_blank' href="https://facebook.com" className="contact-us-icon facebook" title="Facebook">
                <FaFacebookF />
              </a>
              <a target='_blank' href="https://linkedin.com" className="contact-us-icon linkedin" title="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs