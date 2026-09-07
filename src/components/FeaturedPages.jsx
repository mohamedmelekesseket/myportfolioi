import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added FaTimes, FaChevronLeft, FaChevronRight to the imports
import { FaGithub, FaExternalLinkAlt, FaShoppingBag, FaHeadset, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Eye } from "lucide-react";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';

const FeaturedPages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProjectImages, setActiveProjectImages] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Es Clothing Brand",
      desc: "A complete e-commerce platform showcasing full-stack proficiency...",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Bootstrap"],
      isFeatured: true,
      icon: <FaShoppingBag />,
      links: { demo: "https://esseket.duckdns.org/", eye: false },
    },
    {
      id: 3,
      title: "Association Tamaguit /tirjet",
      desc: "Une plateforme numérique dédiée à la valorisation de l'artisanat amazigh en Tunisie ",
      tags: ["Full-Stack", "Admin Dashboard", "Real-time Updates"],
      isFeatured: false,
      icon: <FaShoppingBag />,
      links: { demo: "https://www.tirjet.com/", eye: false },
      screenshots: [img1, img2, img3, img4, img5, img6, img7]
    },
    {
      id: 2,
      title: "Tunisie Telecom Ticketing System",
      desc: "Developed during internship at Tunisie Telecom...",
      tags: ["Full-Stack", "Admin Dashboard", "Real-time Updates"],
      isFeatured: false,
      icon: <FaHeadset />,
      links: {  eye: true },
      screenshots: [img1, img2, img3, img4, img5, img6, img7]
    },
  ];

  const openSlider = (images) => {
    setActiveProjectImages(images);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === activeProjectImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? activeProjectImages.length - 1 : prev - 1));
  };
  return (
    <section id="projects-section" className="projects-section">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="projects-header"
      >
        <h2>Featured <span className="highlight">Projects</span></h2>
        <p>Real-world applications I've built that showcase my skills and passion for development.</p>
      </motion.div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className={`project-card ${project.isFeatured ? 'featured-border' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {project.isFeatured && <span className="featured-badge">Featured</span>}
            
            <div className="project-content">
              <div className="project-icon-box">
                {project.icon}
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>

                <div className="project-links">
                  {project.links.demo && (
                    <a href={project.links.demo} className="link-item highlight">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {/* <a href={project.links.code} className="link-item">
                    <FaGithub /> View Code
                  </a> */}
                  {project.links.eye && (
                    <p className="link-item highlight" onClick={() => openSlider(project.screenshots)} style={{cursor:"pointer",color:'#00CFB4'}}>
                    <Eye 
                      
                      style={{ cursor: "pointer" }} 
                      // Trigger open
                    />
                     View Images
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
     <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="slider-overlay"
          >
            {/* Close Button */}
            <button className="close-slider" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
            
            {/* Navigation Arrows */}
            <button className="nav-btn left" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            
            <div className="slider-container">
              <motion.img 
                key={currentIndex}
                src={activeProjectImages[currentIndex]} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="slider-img"
              />

              {/* Pagination Dots */}
              <div className="pagination">
                {activeProjectImages.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>

            <button className="nav-btn right" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedPages;