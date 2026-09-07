import React from 'react';
import { motion } from 'framer-motion';
// Switching to Font Awesome (fa) for better compatibility
import { FaGraduationCap, FaCode, FaBriefcase } from "react-icons/fa"; 

const AboutPage = () => {
  const cardVariants = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const infoCards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc: "Software Developer Bootcamp graduate from GoMyCode, equipped with modern full-stack development skills."
    },
    {
      icon: <FaCode />, // This replaces LuCode2
      title: "Tech Stack",
      desc: "Proficient in React.js, Node.js, TypeScript, MongoDB, and modern web technologies for building robust applications."
    },
    {
      icon: <FaBriefcase />,
      title: "Experience",
      desc: "Built production-ready e-commerce platforms and enterprise ticketing systems with real-world impact."
    }
  ];

  return (
    <section id="about-section" className="about-section">
      <div className="about-content">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-title"
        >
          About <span className="highlight">Me</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="about-subtitle"
        >
          A dedicated Full-Stack Developer with hands-on experience building scalable web applications.
        </motion.p>

        <div className="cards-grid">
          {infoCards.map((card, index) => (
            <motion.div 
              key={index}
              className="about-card"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -10, 
                borderColor: '#48d1cc',
                boxShadow: "0px 10px 30px rgba(72, 209, 204, 0.1)" 
              }}
            >
              <div className="icon-box">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;