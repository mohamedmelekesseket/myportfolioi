import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/MELEK03-afk" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/melek-esseket-186701348/" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/esseketmelek/" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/21699993296" }
  ];

  return (
    <section id="contact-section" className="contact-section">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Let's <span className="highlight">Connect</span></h2>
        <p>I'm always open to discussing new opportunities, projects, or just having a friendly chat about tech.</p>
      </motion.div>

      <motion.div 
        className="contact-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="contact-grid">
          {/* Left Side: Get In Touch */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            
            <motion.div className="info-item" variants={itemVariants}>
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <span>Location</span>
                <p>Tunis, Tunisia</p>
              </div>
            </motion.div>

            <motion.div className="info-item" variants={itemVariants}>
              <div className="info-icon"><FaWhatsapp /></div>
              <div>
                <span>WhatsApp</span>
                <p>+216 99 993 296</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Find Me Online */}
          <div className="contact-socials">
            <h3>Find Me Online</h3>
            <div className="social-grid">
              {socialLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  whileHover={{ scale: 1.05, backgroundColor: "#1c2128" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;