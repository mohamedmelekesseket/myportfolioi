import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaServer, FaDatabase, FaPalette, FaCloud, FaTerminal } from 'react-icons/fa';

const SkillsPage = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <FaGlobe />,
      color: "#3b82f6",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      color: "#22c55e",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      color: "#f59e0b",
      skills: ["MongoDB", "SQL", "NoSQL", "Data Modeling"]
    },
    {
      title: "Styling",
      icon: <FaPalette />,
      color: "#ec4899",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX"]
    },
    {
      title: "Tools & Cloud",
      icon: <FaCloud />,
      color: "#a855f7",
      skills: ["Git", "GitHub", "Cloud Services", "Deployment"]
    },
    {
      title: "Languages",
      icon: <FaTerminal />,
      color: "#f97316",
      skills: ["JavaScript", "TypeScript", "Python", "Java"]
    }
  ];

  // Container variant to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills-section" className="skills-section">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="skills-header"
      >
        <h2>My <span className="highlight">Skills</span></h2>
        <p>Technologies and tools I use to bring ideas to life.</p>
      </motion.div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((cat, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: cat.color }}
          >
            <div className="icon-wrapper" style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
              {cat.icon}
            </div>
            <h3>{cat.title}</h3>
            <div className="tags-container">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsPage;