import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Code, Palette,
  Smartphone, Users, Award, Calendar, Star, ArrowRight, Menu, X, Database, 
  Globe, Zap, Briefcase, GraduationCap, Cloud
} from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [navOpen, setNavOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );
      
      // Observe elements after a short delay to ensure they're rendered
      setTimeout(() => {
        document.querySelectorAll('[id]').forEach(el => observer.observe(el));
      }, 100);
      
      return () => observer.disconnect();
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Real Skills from Resume
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'], 
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: 'Mobile', 
      items: ['Flutter', 'Cross-platform', 'RESTful APIs', 'Firebase'], 
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: 'Tools & Build', 
      items: ['Vite', 'Webpack', 'esbuild', 'Git', 'CI/CD'], 
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      category: 'Cloud & Data', 
      items: ['AWS', 'MSSQL', 'Redux', 'Context API'], 
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    },
  ];

  // Real Experience from Resume
  const experiences = [
    {
      title: 'Front-End Designer & Developer',
      company: 'Optima Communications International Inc.',
      location: 'Toronto, ON',
      period: 'December 2022 - Present',
      description: 'Designed and developed internal tools for 50+ enterprise campaigns (Scotiabank, Chubb Life). Modernized legacy platforms achieving 30% performance increase and full WCAG 2.1 compliance.',
      achievements: [
        'Improved usability reducing navigation time by 25%',
        'Built reusable component libraries accelerating development by 40%',
        'Achieved 100% accessibility compliance using Axe DevTools',
        'Implemented CI/CD pipelines and AWS deployment'
      ],
      technologies: ['React', 'TypeScript', 'Fluent UI', 'AWS', 'MSSQL', 'Vite', 'Webpack']
    },
    {
      title: 'Front-End Developer (Flutter and Web)',
      company: 'iAssist Innovation Labs',
      location: 'Bangalore, India',
      period: 'July 2021 - August 2022',
      description: 'Developed and deployed 3+ cross-platform mobile applications using Flutter and RESTful APIs, reducing time-to-market by 30% for client-facing insurance products.',
      achievements: [
        'Built cross-platform mobile apps with Flutter',
        'Designed user-centric interfaces in Figma',
        'Reduced time-to-market by 30%',
        'Focused on insurance claim processing systems'
      ],
      technologies: ['Flutter', 'RESTful APIs', 'Figma', 'Mobile Development']
    }
  ];

  // Real Projects (based on experience)
  const projects = [
    {
      title: 'Enterprise Campaign Tools',
      description: 'Internal tools for 50+ enterprise campaigns including Scotiabank and Chubb Life, featuring modern React architecture and full accessibility compliance.',
      technologies: ['React', 'TypeScript', 'Fluent UI', 'MSSQL', 'AWS'],
      github: 'https://github.com/ashishballa',
      live: 'https://ashishballaportfolio.netlify.app',
      highlight: 'Used by 50+ Enterprise Campaigns'
    },
    {
      title: 'Legacy Platform Modernization',
      description: 'Modernized Toronto Hydro platform using React and TypeScript, achieving 30% performance improvement and WCAG 2.1 compliance.',
      technologies: ['React', 'TypeScript', 'WCAG 2.1', 'Performance Optimization'],
      github: 'https://github.com/ashishballa',
      live: 'https://ashishballaportfolio.netlify.app',
      highlight: '30% Performance Increase'
    },
    {
      title: 'Cross-Platform Insurance Apps',
      description: 'Flutter-based mobile applications for insurance claim processing with RESTful API integration and user-centric design.',
      technologies: ['Flutter', 'RESTful APIs', 'Figma', 'Firebase', 'Mobile UI/UX'],
      github: 'https://github.com/ashishballa',
      live: 'https://ashishballaportfolio.netlify.app',
      highlight: '30% Faster Time-to-Market'
    }
  ];

  // Education from Resume
  const education = [
    {
      degree: 'Master of Professional Studies (MPS), Analytics',
      school: 'Northeastern University',
      location: 'Boston, USA (Toronto Campus)',
      period: 'September 2022 - April 2024',
      icon: GraduationCap
    },
    {
      degree: 'Bachelor of Technology (BTech), Computer Science',
      school: 'Lovely Professional University',
      location: 'Jalandhar, India',
      period: 'May 2018 - February 2022',
      icon: GraduationCap
    }
  ];

  const smoothScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-ping" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Ashish Balla
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item.toLowerCase())}
                className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {navOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    smoothScroll(item.toLowerCase());
                    setNavOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-blue-300 transition-colors py-2 text-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
            Front-End Developer
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl text-gray-300 mb-6 leading-relaxed">
            React | TypeScript | Flutter
          </p>
          <p className="text-base sm:text-lg max-w-4xl text-gray-400 mb-10 leading-relaxed">
            Results-driven developer with 3+ years of experience building responsive, accessible web and mobile applications. 
            Delivered UI/UX for 50+ enterprise campaigns across banking and insurance domains with full WCAG 2.1 compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => smoothScroll('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => smoothScroll('contact')}
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Skilled in creating reusable component libraries, integrating RESTful APIs, managing state with Redux and Context API, 
              and utilizing modern build tools such as Vite, Webpack, and esbuild. Proficient in Agile methodologies, CI/CD pipelines, 
              and cloud deployment using Amazon Web Services (AWS).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{skill.category}</h3>
                  <ul className="text-gray-300 space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey in frontend development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 ${
                  isVisible.experience ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-300 text-lg font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 mt-2 lg:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Star className="text-blue-300 mt-1 flex-shrink-0" size={14} />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my professional work and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:scale-105 ${
                  isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex flex-col items-center justify-center p-6">
                  <Code className="text-white/60 mb-4" size={48} />
                  <span className="text-xs text-blue-300 font-semibold bg-blue-500/20 px-3 py-1 rounded-full">
                    {project.highlight}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">Education</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My academic background and qualifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 ${
                    isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-300 font-semibold mb-1">{edu.school}</p>
                      <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={14} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's build something amazing together!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
              <Mail className="text-blue-300 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:canashishballa@gmail.com" className="text-gray-300 hover:text-blue-300 transition-colors">
                canashishballa@gmail.com
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
              <Phone className="text-green-300 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href="tel:+19055989176" className="text-gray-300 hover:text-green-300 transition-colors">
                +1 (905) 598-9176
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
              <MapPin className="text-red-300 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Toronto, ON</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/ashishballa" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="text-white" size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/ashishballa" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin className="text-white" size={24} />
            </a>
            <a 
              href="mailto:canashishballa@gmail.com" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="text-white" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">Crafted with React & Tailwind CSS</p>
          <p>&copy; 2025 Ashish Balla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;