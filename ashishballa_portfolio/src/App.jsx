import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, 
  Users, Award, Calendar, ArrowRight, Menu, X, 
  Globe, Briefcase, GraduationCap, Target, Lightbulb, TrendingUp
} from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [navOpen, setNavOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

 // Update skills array
const skills = [
  { 
    category: 'Backend Development', 
    items: ['Java', 'Spring Boot', 'Microservices', 'Node.js'], 
    icon: Globe
  },
  { 
    category: 'Frontend Development', 
    items: ['React.js', 'Redux', 'TypeScript', 'AngularJS'], 
    icon: Target 
  },
  { 
    category: 'Cloud & DevOps', 
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes'], 
    icon: Lightbulb
  },
  { 
    category: 'Databases & Tools', 
    items: ['Oracle', 'MongoDB', 'PostgreSQL', 'Jenkins'], 
    icon: TrendingUp
  },
];

// Update experiences array
const experiences = [
  {
    title: 'Java Full Stack Developer',
    company: 'Optima Communications (Scotiabank)',
    location: 'Toronto, ON',
    period: 'Jul 2024 - Present',
    description: 'Developing and deploying Spring Boot microservices on AWS infrastructure with focus on scalability and fault tolerance.',
    achievements: [
      'Built responsive web applications using React.js and REST APIs',
      'Engineered real-time data pipelines using Kafka and RabbitMQ',
      'Implemented MLOps pipelines with Docker and Kubernetes',
      'Managed high-performance databases including Oracle and MongoDB'
    ],
    technologies: ['AWS', 'Spring Boot', 'React', 'Kafka', 'Docker', 'MongoDB']
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Optima Communications (Chubb Limited)',
    location: 'Toronto, ON',
    period: 'Dec 2022 - Jun 2024',
    description: 'Designed and implemented Spring Boot microservices and REST APIs deployed on PCF and Kubernetes for distributed enterprise systems.',
    achievements: [
      'Built automated CI/CD pipelines and MLOps workflows',
      'Developed real-time analytics dashboards',
      'Managed Azure cloud infrastructure',
      'Implemented logging with RabbitMQ and Log4j'
    ],
    technologies: ['Azure', 'Spring Boot', 'Kubernetes', 'Jenkins', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Java Full Stack Developer',
    company: 'iAssist Innovation Labs',
    location: 'Bangalore, India',
    period: 'Jul 2021 - Aug 2022',
    description: 'Developed Spring Boot microservices with IoC, AOP, and REST APIs while implementing front-end components using React.js and Redux.',
    achievements: [
      'Built MLOps pipelines using AWS and Docker',
      'Managed cloud deployments on AWS and WebLogic',
      'Optimized database performance across multiple platforms',
      'Implemented microservices architecture'
    ],
    technologies: ['AWS', 'Spring Boot', 'React', 'Redux', 'Docker', 'MongoDB']
  },
  {
    title: 'Java Developer',
    company: 'Bosch',
    location: 'Bangalore, India',
    period: 'Mar 2020 - Jun 2021',
    description: 'Developed scalable microservices using Java 8, Spring Boot, and Hibernate while migrating monolithic applications to microservices architecture.',
    achievements: [
      'Automated CI/CD pipelines with GitHub Actions',
      'Implemented testing with JUnit',
      'Built front-end apps with AngularJS and JSF',
      'Integrated REST APIs for dynamic web experiences'
    ],
    technologies: ['Java 8', 'Spring Boot', 'AngularJS', 'JSF', 'REST APIs', 'Kubernetes']
  }
];


  // Updated Key Projects from Resume
  const projects = [
    {
      title: 'Lead-Generating Insurance Website',
      description: 'Built and deployed a Next.js web app integrated with Supabase for real-time data storage and authentication. Hosted on Vercel for lightning-fast performance and scalability.',
      technologies: ['Next.js', 'Supabase', 'Vercel', 'Authentication'],
      github: null,
      live: 'https://hashlifeinsurance.com/',
      highlight: '35% Increase in Qualified Leads'
    },
    {
      title: 'Customer & Partner Portal Development',
      description: 'Enhanced Mahindra Insurance Brokers digital insurance platforms, creating a Customer Self-Service Portal and Dealer/Partner Dashboard to simplify policy purchases, renewals, and claims tracking.',
      technologies: ['React', 'Dashboard Design', 'Self-Service Portal', 'Insurance Tech'],
      github: null,
      live: null,
      highlight: 'Digital Insurance Platform'
    },
    {
      title: 'Legacy Web Portal Modernization',
      description: 'Migrated a legacy JavaScript/jQuery system to a modern React + TypeScript architecture, improving performance, scalability, and accessibility.',
      technologies: ['React', 'TypeScript', 'Legacy Migration', 'Performance Optimization'],
      github: null,
      live: null,
      highlight: 'Legacy System Modernization'
    }
  ];

  // Education & Certifications from Resume
  const education = [
    {
      degree: 'Master of Professional Studies (MPS), Analytics',
      school: 'Northeastern University',
      location: 'Toronto Campus',
      period: 'September 2022 - March 2024',
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

  // Certifications
  const certifications = [
    {
      title: 'HubSpot Inbound Sales Certification',
      issuer: 'HubSpot Academy',
      year: '2025',
      icon: Award,
      link: 'https://app-na3.hubspot.com/academy/achievements/sy44ktpb/en/1/ashish-balla/inbound-sales'
    },
    {
      title: 'HubSpot Sales Hub Software Certification',
      issuer: 'HubSpot Academy',
      year: '2025',
      icon: Award
    }
  ];

  const smoothScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 text-gray-100 overflow-hidden relative">
      {/* Minimalistic background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 144,
            top: mousePosition.y - 144
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-slate-400/3 rounded-full blur-3xl" />
      </div>

      {/* Minimalistic Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="text-xl font-light tracking-wide text-gray-100">
            Venkat Ashish Balla
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item.toLowerCase())}
                className="text-gray-400 hover:text-gray-100 transition-all duration-300 font-light text-sm uppercase tracking-wider relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-300 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-400 p-2 hover:text-gray-100 transition-colors"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {navOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50">
            <div className="px-6 py-6 space-y-6">
              {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    smoothScroll(item.toLowerCase());
                    setNavOpen(false);
                  }}
                  className="block w-full text-left text-gray-400 hover:text-gray-100 transition-colors font-light text-sm uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Minimalistic Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extralight mb-6 text-gray-100 tracking-tight leading-tight">
              Full Stack
              <span className="block font-light text-gray-300">Developer</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl text-gray-400 mx-auto leading-relaxed font-light">
              Toronto, Canada
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
  Full Stack Developer with 5+ years of experience in designing, developing, and deploying 
  scalable web applications and microservices using Java, Spring Boot, React, and AWS. 
  Proven expertise in cloud-native architectures and DevOps/MLOps practices.
</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button 
              onClick={() => smoothScroll('projects')}
              className="group px-8 py-3 bg-gray-100 text-gray-900 font-light rounded-sm hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              View Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => smoothScroll('contact')}
              className="px-8 py-3 border border-gray-600 text-gray-300 font-light rounded-sm hover:border-gray-400 hover:text-gray-100 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-gray-500 animate-pulse" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extralight text-gray-100 mb-8 tracking-wide">About</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Passionate about leveraging AI-assisted tools (GitHub Copilot, OpenAI API, Claude Code) to accelerate development 
                and deliver impactful user experiences.
              </p>
              <p className="text-base text-gray-400 leading-relaxed font-light">
                Recently developed and deployed a lead-generating insurance platform on Next.js, Supabase, and Vercel, 
                driving a 35% increase in qualified leads.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`group bg-slate-900/50 border border-slate-800/50 rounded-sm p-8 hover:border-slate-700 transition-all duration-500 hover:-translate-y-2 ${
                    isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-10 h-10 rounded-sm bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                    <Icon className="text-gray-900" size={20} />
                  </div>
                  <h3 className="text-lg font-light mb-4 text-gray-100 tracking-wide">{skill.category}</h3>
                  <ul className="text-gray-400 space-y-3 text-sm font-light">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
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
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extralight text-gray-100 mb-8 tracking-wide">Experience</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Professional journey in frontend development and enterprise solutions
            </p>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`group border-l-2 border-slate-800 pl-8 hover:border-gray-400 transition-all duration-500 ${
                  isVisible.experience ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-slate-800 group-hover:bg-gray-400 rounded-full transition-colors duration-500"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-gray-100 mb-2 tracking-wide">{exp.title}</h3>
                      <p className="text-gray-300 text-lg font-light mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 lg:mt-0">
                      <Calendar size={14} />
                      <span className="text-sm font-light">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed font-light max-w-4xl">{exp.description}</p>
                  
                  <div className="mb-6">
                    <ul className="text-gray-400 space-y-3 text-sm font-light">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-800/70 text-gray-400 rounded-sm text-xs uppercase tracking-wider font-light border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extralight text-gray-100 mb-8 tracking-wide">Projects</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Key projects demonstrating technical expertise and business impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group border border-slate-800/50 rounded-sm overflow-hidden hover:border-slate-700 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 flex items-end p-8">
                  <span className="text-xs text-gray-300 bg-slate-800/70 px-3 py-2 rounded-sm uppercase tracking-wider font-light border border-slate-700">
                    {project.highlight}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-light text-gray-100 mb-4 tracking-wide">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-800/70 text-gray-400 rounded-sm text-xs uppercase tracking-wider font-light border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors text-sm font-light uppercase tracking-wider"
                      >
                        <Github size={14} />
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">GitHub</span>
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors text-sm font-light uppercase tracking-wider"
                      >
                        <ExternalLink size={14} />
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">View Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extralight text-gray-100 mb-8 tracking-wide">Education</h2>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div 
                  key={index}
                  className={`group flex items-start gap-6 p-8 border-l-2 border-slate-800 hover:border-gray-400 transition-all duration-500 ${
                    isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -left-11 w-4 h-4 bg-slate-800 group-hover:bg-gray-400 rounded-full transition-colors duration-500"></div>
                    <div className="w-12 h-12 rounded-sm bg-gray-100 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon className="text-gray-900" size={20} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-gray-100 mb-2 tracking-wide">{edu.degree}</h3>
                    <p className="text-gray-300 font-light mb-1">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.location}</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={14} />
                      <span className="text-sm font-light">{edu.period}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Certifications inline */}
            <div className="pt-12">
              <h3 className="text-2xl font-light text-gray-100 mb-8 tracking-wide">Certifications</h3>
              <div className="space-y-8">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div 
                      key={index}
                      className="group flex items-start gap-6 p-6 border border-slate-800/50 rounded-sm hover:border-slate-700 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-sm bg-gray-100 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <Icon className="text-gray-900" size={16} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-light text-gray-100 mb-1 tracking-wide">
                          {cert.link ? (
                            <a 
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-gray-300 transition-colors flex items-center gap-2 group/link"
                            >
                              {cert.title}
                              <ExternalLink size={14} className="text-gray-400 group-hover/link:translate-x-1 transition-transform duration-300" />
                            </a>
                          ) : (
                            cert.title
                          )}
                        </h4>
                        <p className="text-gray-300 font-light text-sm mb-1">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={12} />
                          <span className="text-xs font-light">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extralight text-gray-100 mb-8 tracking-wide">Contact</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Let's discuss new opportunities, technical challenges, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-sm bg-slate-900 group-hover:bg-slate-800 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Mail className="text-gray-400 group-hover:text-gray-300" size={24} />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-light">Email</p>
              <a 
                href="mailto:venkatashishb@gmail.com"
                className="text-gray-300 hover:text-gray-100 transition-colors text-sm font-light"
              >
                venkatashishb@gmail.com
              </a>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-sm bg-slate-900 group-hover:bg-slate-800 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Phone className="text-gray-400 group-hover:text-gray-300" size={24} />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-light">Phone</p>
              <a href="tel:+19055989176" className="text-gray-300 hover:text-gray-100 transition-colors text-sm font-light">
                +1 (905) 598-9176
              </a>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-sm bg-slate-900 group-hover:bg-slate-800 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <MapPin className="text-gray-400 group-hover:text-gray-300" size={24} />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-light">Location</p>
              <p className="text-gray-300 text-sm font-light">Toronto, Canada</p>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/ashishballa" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 border border-slate-800 rounded-sm hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="text-gray-400 group-hover:text-gray-100" size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/venkatashishb/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 border border-slate-800 rounded-sm hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="text-gray-400 group-hover:text-gray-100" size={20} />
            </a>
            <a 
              href="mailto:venkatashishb@gmail.com"
              className="group p-4 border border-slate-800 rounded-sm hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="text-gray-400 group-hover:text-gray-100" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Minimalistic Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-wider font-light">&copy; 2025 Venkat Ashish Balla</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;