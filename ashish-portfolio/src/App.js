import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Code, Palette, Smartphone, Users, Award, Calendar, Star, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Intersection Observer for animations
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

      document.querySelectorAll('[id]').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Enterprise UI Modernization Initiative",
      company: "Optima Communications",
      description: "Spearheaded modernization of legacy web applications for 50+ enterprise clients including Toronto Hydro, Chubb Life, and Scotiabank.",
      tech: ["React", "TypeScript", "Fluent UI", "WCAG 2.1"],
      highlights: ["50+ Client Campaigns", "Government Sector", "Accessibility Compliance"],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Government Operations Platform Rebuild",
      company: "Optima Communications",
      description: "Completely reconstructed legacy government web platform using modern React architecture with accessibility compliance.",
      tech: ["React", "TypeScript", "Fluent UI", "Responsive Design"],
      highlights: ["Government Standards", "Modular Architecture", "Public Service"],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Insurance Claims Platform - MIBL",
      company: "iAssist Innovation Labs",
      description: "Built comprehensive cross-platform Flutter application for insurance claims with real-time database synchronization.",
      tech: ["Flutter", "Firebase", "Google Cloud", "REST APIs"],
      highlights: ["Cross-Platform", "Real-time Sync", "Insurance Sector"],
      gradient: "from-blue-600 to-blue-800"
    }
  ];

  const skills = [
    { 
      category: "Frontend", 
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"], 
      icon: Code,
      gradient: "from-blue-400 to-blue-500"
    },
    { 
      category: "Mobile", 
      items: ["Flutter", "React Native"], 
      icon: Smartphone,
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      category: "Design", 
      items: ["Figma", "Adobe XD", "WCAG 2.1", "Design Systems"], 
      icon: Palette,
      gradient: "from-blue-600 to-blue-700"
    },
    { 
      category: "Collaboration", 
      items: ["Agile", "Git", "Jest", "Team Leadership"], 
      icon: Users,
      gradient: "from-blue-700 to-blue-800"
    }
  ];

  const experience = [
    {
      role: "Front-End Designer/Developer",
      company: "Optima Communications International Inc.",
      period: "Dec 2022 - Present",
      location: "Toronto, ON",
      achievements: [
        "Led UI/UX development for 50+ enterprise campaigns",
        "Modernized Toronto Hydro's internal web systems",
        "Built scalable, accessible component libraries",
        "Collaborated with cross-functional teams in Agile environment"
      ]
    },
    {
      role: "Front-End Developer",
      company: "iAssist Innovation Labs",
      period: "Jul 2021 - Aug 2022",
      location: "Bangalore, India",
      achievements: [
        "Developed responsive Flutter applications with REST APIs",
        "Created wireframes and interactive prototypes",
        "Implemented accessibility and SEO enhancements",
        "Progressed from intern to full-time developer"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Gaussian Blur Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main floating orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(29, 78, 216, 0.2) 50%, transparent 100%)',
            filter: 'blur(60px)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translate(${Math.sin(scrollY * 0.001) * 100}px, ${Math.cos(scrollY * 0.001) * 50}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            filter: 'blur(80px)',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px) translate(${Math.cos(scrollY * 0.0015) * 80}px, ${Math.sin(scrollY * 0.0015) * 60}px)`,
            right: '15%',
            top: '40%',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(96, 165, 250, 0.2) 50%, transparent 100%)',
            filter: 'blur(100px)',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translate(${Math.sin(scrollY * 0.002) * 60}px, ${Math.cos(scrollY * 0.002) * 40}px)`,
            left: '60%',
            bottom: '30%',
          }}
        />
        
        {/* Smaller ambient orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              background: `radial-gradient(circle, rgba(${59 + i * 20}, ${130 + i * 10}, 246, 0.3) 0%, transparent 70%)`,
              filter: `blur(${40 + i * 10}px)`,
              transform: `translate(${Math.sin(scrollY * 0.001 + i) * 100}px, ${Math.cos(scrollY * 0.001 + i) * 50}px)`,
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              Ashish Balla
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item, i) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-4 py-2 rounded-full transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-lg group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="relative z-10 text-white/80 group-hover:text-white transition-colors">
                    {item}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Enhanced Animations */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center space-y-8 px-6 max-w-5xl mx-auto relative z-10">
          <div 
            className="space-y-6"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0, 1 - scrollY / 600)
            }}
          >
            {/* Animated title with staggered letters */}
            <div className="overflow-hidden">
              <h1 className="text-7xl md:text-9xl font-black leading-none">
                {'Front-End'.split('').map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent animate-pulse"
                    style={{
                      animationDelay: `${i * 100}ms`,
                      animationDuration: '2s',
                      transform: `translateY(${Math.sin(Date.now() * 0.001 + i) * 5}px)`,
                    }}
                  >
                    {letter === '-' ? '\u00A0' : letter}
                  </span>
                ))}
                <br />
                {'Developer'.split('').map((letter, i) => (
                  <span
                    key={i + 100}
                    className="inline-block bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent animate-pulse"
                    style={{
                      animationDelay: `${(i + 10) * 100}ms`,
                      animationDuration: '2s',
                      transform: `translateY(${Math.cos(Date.now() * 0.001 + i) * 5}px)`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </div>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10">
                Transforming digital experiences across government, insurance, and telecom sectors with 
                <span > React</span>, 
                <span  > TypeScript</span>, and 
                <span  > accessibility-first design</span>
              </p>
            </div>
            
            {/* Floating stats cards */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {[
                { icon: MapPin, text: "Toronto, ON", color: "blue-400" },
                { icon: Award, text: "3+ Years Experience", color: "blue-300" },
                { icon: Users, text: "50+ Enterprise Clients", color: "blue-200" }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={i}
                    className="group relative backdrop-blur-xl bg-white/10 rounded-2xl px-6 py-4 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:bg-white/15"
                    style={{
                      animationDelay: `${i * 200}ms`,
                      transform: `translateY(${Math.sin(Date.now() * 0.002 + i) * 3}px)`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className={`text-${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-white font-medium">{stat.text}</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Social links with enhanced animations */}
          <div className="flex justify-center space-x-6 pt-12">
            {[
              { href: "mailto:canashishballa@gmail.com", icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/ashishballa", icon: Linkedin, label: "LinkedIn" },
              { href: "tel:+19055989176", icon: Phone, label: "Phone" }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a 
                  key={i}
                  href={social.href}
                  className="group relative p-4 backdrop-blur-xl bg-white/10 hover:bg-blue-500/20 rounded-2xl transition-all duration-500 hover:scale-110 border border-white/20 hover:border-blue-400/50"
                  style={{
                    animationDelay: `${i * 150}ms`,
                    transform: `translateY(${Math.cos(Date.now() * 0.003 + i) * 2}px)`,
                  }}
                >
                  <Icon size={28} className="text-white group-hover:text-blue-300 transition-colors duration-300" />
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-gray-400 bg-black/80 px-2 py-1 rounded backdrop-blur-sm">
                      {social.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div> 
        </div>
      </section>

 
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
              Innovative Front-End Designer & Developer with Enhanced Security Clearance eligibility, 
              passionate about creating user-centered solutions that improve public service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.category}
                  className={`group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-700 hover:scale-105 ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    transform: `translateY(${Math.sin(scrollY * 0.002 + index) * 5}px)`,
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-300/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-blue-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {skill.items.map((item, i) => (
                        <div 
                          key={i} 
                          className="text-gray-300 backdrop-blur-sm bg-white/5 rounded-xl px-4 py-3 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:bg-white/10"
                          style={{
                            animationDelay: `${(index * 200) + (i * 100)}ms`,
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className={`group relative backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 hover:border-blue-400/50 transition-all duration-700 ${isVisible.experience ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 300}ms`,
                  transform: `translateX(${Math.sin(scrollY * 0.001 + index) * 10}px)`,
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-blue-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-white font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end mt-6 lg:mt-0 space-y-2">
                      <div className="flex items-center gap-3 text-blue-400 backdrop-blur-sm bg-blue-500/10 rounded-full px-4 py-2">
                        <Calendar size={18} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin size={18} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.achievements.map((achievement, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-4 p-4 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:bg-white/10"
                        style={{
                          animationDelay: `${(index * 300) + (i * 150)}ms`,
                        }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                        <p className="text-gray-200 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-700 hover:scale-105 ${isVisible.projects ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 250}ms`,
                  transform: `translateY(${Math.cos(scrollY * 0.001 + index) * 8}px)`,
                }}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-4 backdrop-blur-sm bg-blue-500/10 rounded-full px-3 py-1 inline-block">
                      {project.company}
                    </p>
                    <p className="text-gray-200 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-blue-500/20 text-blue-200 px-3 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/30 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h4>
                      <div className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Star size={14} className="text-blue-400 fill-current" />
                            <span className="text-sm text-gray-200">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
            Ready to transform your digital experience? Let's discuss how I can help bring your vision to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { href: "mailto:canashishballa@gmail.com", icon: Mail, title: "Email", subtitle: "canashishballa@gmail.com", color: "blue-400" },
              { href: "tel:+19055989176", icon: Phone, title: "Phone", subtitle: "+1 (905) 598-9176", color: "blue-300" },
              { href: "https://www.linkedin.com/in/ashishballa", icon: Linkedin, title: "LinkedIn", subtitle: "Connect with me", color: "blue-200" }
            ].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <a 
                  key={i}
                  href={contact.href}
                  className={`group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-${contact.color}/50 transition-all duration-500 hover:scale-105`}
                  style={{
                    animationDelay: `${i * 200}ms`,
                    transform: `translateY(${Math.sin(scrollY * 0.002 + i) * 3}px)`,
                  }}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${contact.color}/10 to-${contact.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <Icon size={40} className={`text-${contact.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-xl font-bold mb-2 text-white">{contact.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{contact.subtitle}</p>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-blue-300/10 rounded-3xl p-10 border border-white/10 hover:border-blue-400/30 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 text-white">Available for Opportunities</h3>
            <p className="text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Currently seeking new challenges in frontend development, particularly in government, 
              fintech, or enterprise sectors where I can make a meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React/TypeScript', 'Enterprise Solutions', 'Accessibility Expert', 'Front-End Web Developer'].map((tag, i) => (
                <span 
                  key={i}
                  className="bg-blue-500/20 text-blue-200 px-6 py-3 rounded-full border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium"
                  style={{
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 backdrop-blur-sm bg-white/5 rounded-full px-6 py-3 inline-block border border-white/10">
            Crafted with React, Tailwind CSS  
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;