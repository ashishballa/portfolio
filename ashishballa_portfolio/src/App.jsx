import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin,
  ArrowRight, Menu, X, Calendar
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const skillCategories = [
  {
    label: 'AI / LLM',
    items: ['RAG Pipelines', 'LangChain', 'LangGraph', 'MCP Servers', 'OpenAI API', 'Anthropic API', 'Agentic Workflows', 'LLM Evaluation', 'Prompt Engineering', 'Embedding Pipelines'],
  },
  {
    label: 'Frontend',
    items: ['React (Hooks, Redux, Zustand)', 'Angular 17 (Standalone, RxJS)', 'TypeScript', 'Server-Sent Events', 'Streaming UIs', 'Markdown Rendering'],
  },
  {
    label: 'Backend',
    items: ['NestJS (Modules, DTOs, Guards)', 'FastAPI + Pydantic', 'REST APIs', 'JWT Authentication', 'Swagger / OpenAPI', 'Event-Driven Architecture'],
  },
  {
    label: 'Cloud',
    items: ['Azure (Cosmos DB, Blob, Key Vault, AI Search)', 'AWS (Lambda, ECS, EKS, S3, SQS, DynamoDB)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions CI/CD'],
  },
  {
    label: 'Data & Observability',
    items: ['PostgreSQL', 'Pinecone (Vector)', 'Redis', 'OpenTelemetry', 'Datadog', 'Prometheus / Grafana', 'Azure Application Insights'],
  },
  {
    label: 'Languages & Testing',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Jest', 'pytest (80%+ coverage)', 'ruff · mypy · bandit'],
  },
];

const experiences = [
  {
    title: 'Software Engineer — Full Stack & AI',
    company: 'Optima Communications International',
    client: 'Client: Scotiabank',
    location: 'Toronto, ON',
    period: 'Jul 2024 – Present',
    bullets: [
      'Architected production React + TypeScript conversational UI for a customer-facing LLM chatbot handling 5,000+ daily interactions, with SSE streaming, markdown rendering, and latency instrumentation.',
      'Designed agentic AI workflows using LangChain, LangGraph, and MCP server integration — enabling multi-step, tool-augmented task execution across financial data systems; authored LLM evaluation pipelines with prompt versioning, A/B benchmarking, and telemetry feedback loops.',
      'Built RAG pipelines (LangChain + vector store + OpenAI embeddings) for semantic retrieval over enterprise document corpora, with observability hooks monitoring retrieval quality, token usage, and latency.',
      'Led backend architecture for React + TypeScript + NestJS platform: strongly-typed REST APIs with DTO validation, guards, and middleware layering — reducing backend duplication 40% and API response times 30%.',
      'Integrated OpenAI and Anthropic APIs via a decoupled, swappable service layer enabling backend model changes without application-layer refactors.',
      'Designed distributed, event-driven microservices for multi-tenant financial transaction processing with 99.9% SLA compliance; built OpenTelemetry distributed tracing across polyglot service boundaries.',
      'Owned end-to-end CI/CD pipelines (GitHub Actions) with automated test gates, Docker image builds, and zero-downtime deployments; mentored 3+ junior engineers.',
    ],
    tags: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'LangChain', 'LangGraph', 'MCP', 'OpenAI', 'Anthropic', 'RAG', 'Azure', 'OpenTelemetry'],
  },
  {
    title: 'Software Developer — Full Stack',
    company: 'Optima Communications International',
    client: 'Client: Chubb Insurance',
    location: 'Toronto, ON',
    period: 'Dec 2022 – Jun 2024',
    bullets: [
      'Designed distributed, multi-tenant NestJS and FastAPI services with clean modular architecture ensuring data isolation, scalability, and high availability across enterprise insurance workflows.',
      'Authored FastAPI route handlers with Pydantic models and async service logic for document processing pipelines; complex SQL queries with optimised indexing — reducing query latency 35% on workflows processing 50,000+ records daily.',
      'Built secure REST APIs with input validation, RBAC, audit logging, and Swagger/OpenAPI documentation to meet regulatory compliance requirements.',
      'Designed dynamic React form components for multi-step approval workflows with server-driven schema definitions — reducing change-request turnaround 60%.',
      'Authored Jest and pytest suites maintaining 80%+ coverage; quality gates including mypy and bandit on all Python contributions.',
      'Authored infrastructure-as-code — reducing environment setup time 70% and eliminating configuration drift across dev, staging, and production.',
    ],
    tags: ['NestJS', 'FastAPI', 'React', 'TypeScript', 'Python', 'PostgreSQL', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Software Developer',
    company: 'iAssist Innovation Labs',
    client: 'Remote',
    location: '',
    period: 'Jul 2021 – Aug 2022',
    bullets: [
      'Built React UIs with real-time data integration and developed Node.js REST APIs handling 10,000+ daily transactions for core financial workflows.',
      'Contributed to PostgreSQL schema design and query optimisation — improving query performance 25% on high-volume financial data operations.',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Software Developer',
    company: 'Bosch India',
    client: 'India',
    location: '',
    period: 'Jul 2020 – Jun 2021',
    bullets: [
      'Developed enterprise backend services using Java / Spring Boot with layered architecture patterns; contributed to API design, security standards, and code review processes.',
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs'],
  },
];

const projects = [
  {
    title: 'Datasense — Text-to-SQL AI Agent',
    year: '2025',
    stack: 'Python · FastAPI · LangChain · OpenAI API · PostgreSQL',
    bullets: [
      'Architected an AI-powered Text-to-SQL system converting natural language questions into SQL queries using an LLM-based agentic loop with tool-use capabilities.',
      'Built FastAPI backend exposing REST endpoints for the agent, implementing the core orchestration layer: intent interpretation, SQL generation, query execution, and result formatting.',
      'Designed modular agent architecture enabling iterative development and easy swapping of LLM backends.',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Agentic AI Platform',
    year: '2025',
    stack: 'LangChain · LangGraph · Pinecone · OpenAI · React · MCP',
    bullets: [
      'Built a multi-agent system with MCP server integration for tool-augmented, context-aware multi-step workflows across distributed enterprise data sources.',
      'Implemented RAG pipelines (Pinecone + OpenAI embeddings) for semantic search; built React chatbot UI consuming streaming LLM responses with latency instrumentation.',
    ],
    github: null,
    live: null,
  },
];

const education = [
  {
    degree: 'Master of Professional Studies — Data Analytics Engineering',
    school: 'Northeastern University',
    location: 'Toronto, ON',
    period: 'Sep 2022 – Mar 2024',
  },
];

/* ─────────────────────────────────────────────
   GRAIN CANVAS OVERLAY
───────────────────────────────────────────── */
const GrainOverlay = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = data[i + 1] = data[i + 2] = v;
        data[i + 3] = 14; // very subtle opacity
      }
      ctx.putImageData(imageData, 0, 0);
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        pointerEvents: 'none', mixBlendMode: 'overlay', opacity: 0.55,
      }}
    />
  );
};

/* ─────────────────────────────────────────────
   CURSOR — sharp dot + lagging ring
───────────────────────────────────────────── */
const CursorGlow = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const frameRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove, { passive: true });

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, width: 6, height: 6,
        borderRadius: '50%', background: 'rgba(245,245,240,0.9)',
        pointerEvents: 'none', zIndex: 9999, willChange: 'transform',
        mixBlendMode: 'difference',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, width: 40, height: 40,
        borderRadius: '50%', border: '1px solid rgba(245,245,240,0.35)',
        pointerEvents: 'none', zIndex: 9998, willChange: 'transform',
      }} />
    </>
  );
};

/* ─────────────────────────────────────────────
   WEBGL FBM DOMAIN-WARP SHADER (hero bg)
───────────────────────────────────────────── */
const WebGLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vert = `attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`;

    const frag = `
precision mediump float;
uniform float t;
uniform vec2 res;

float hash(vec2 p){
  p=fract(p*vec2(234.34,435.345));
  p+=dot(p,p+34.23);
  return fract(p.x*p.y);
}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);
  f=f*f*(3.0-2.0*f);
  return mix(
    mix(hash(i),hash(i+vec2(1,0)),f.x),
    mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
}
float fbm(vec2 p){
  float v=0.0,a=0.5;
  mat2 rot=mat2(0.8,0.6,-0.6,0.8);
  for(int i=0;i<6;i++){v+=a*noise(p);p=rot*p*2.0+vec2(100);a*=0.5;}
  return v;
}
void main(){
  vec2 uv=gl_FragCoord.xy/res;
  vec2 q=vec2(fbm(uv+t*0.06),fbm(uv+vec2(1.0)));
  vec2 r=vec2(
    fbm(uv+4.0*q+vec2(1.7,9.2)+0.15*t),
    fbm(uv+4.0*q+vec2(8.3,2.8)+0.126*t));
  float f=fbm(uv+4.0*r);
  float v=smoothstep(0.2,0.85,f)*0.09;
  gl_FragColor=vec4(v,v,v,1.0);
}`;

    const mkShader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);

    const aP = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(aP);
    gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

    const uT   = gl.getUniformLocation(prog, 't');
    const uRes = gl.getUniformLocation(prog, 'res');

    let frame;
    const resize = () => {
      const w = canvas.width  = canvas.offsetWidth;
      const h = canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    const t0 = performance.now();
    const render = () => {
      gl.uniform1f(uT, (performance.now() - t0) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.85 }}
    />
  );
};

/* ─────────────────────────────────────────────
   ANIMATED HERO NAME (char by char)
───────────────────────────────────────────── */
const AnimatedName = ({ text, delay = 0, italic = false }) => {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setRevealed(i);
        if (i >= text.length) clearInterval(interval);
      }, 45);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);

  return (
    <span style={{ fontStyle: italic ? 'italic' : 'normal' }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: i < revealed ? 1 : 0,
            transform: i < revealed ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.3s ease, transform 0.4s ease',
            color: italic ? 'rgba(245,245,240,0.5)' : '#f5f5f0',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────
   SCROLL PROGRESS BAR
───────────────────────────────────────────── */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(Math.min(scrolled * 100, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', zIndex: 9999, background: 'rgba(255,255,255,0.05)' }}>
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'rgba(245,245,240,0.7)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   COUNTER (animates number when visible)
───────────────────────────────────────────── */
const Counter = ({ target, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─────────────────────────────────────────────
   TEXT SCRAMBLE
───────────────────────────────────────────── */
const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#@$%';

const TextScramble = ({ text, play, style, className }) => {
  const [out, setOut] = useState(text);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!play) { setOut(text); return; }
    let tick = 0;
    const total = text.length * 3;
    const step = () => {
      setOut(
        text.split('').map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < tick / 3) return ch;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join('')
      );
      if (tick++ < total) frameRef.current = requestAnimationFrame(step);
      else setOut(text);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [play, text]);

  return <span className={className} style={style}>{out}</span>;
};

/* ─────────────────────────────────────────────
   MAGNETIC WRAPPER
───────────────────────────────────────────── */
const Magnetic = ({ children, strength = 0.35 }) => {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    ref.current.style.transition = 'transform 0.15s ease';
    ref.current.style.transform = `translate(${x}px,${y}px)`;
  };
  const onMouseLeave = () => {
    ref.current.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
    ref.current.style.transform = 'translate(0,0)';
  };
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────
   MARQUEE TICKER
───────────────────────────────────────────── */
const Ticker = ({ items }) => (
  <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '11px 0' }}>
    <div style={{ display: 'flex', animation: 'marquee 40s linear infinite', whiteSpace: 'nowrap' }}>
      {[...items, ...items].map((item, i) => (
        <span key={i} style={{ display: 'inline-block', marginRight: '3.5rem', fontSize: '0.62rem', letterSpacing: '0.24em', color: 'rgba(245,245,240,0.16)', textTransform: 'uppercase' }}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   LINE REVEAL (clip-from-bottom)
───────────────────────────────────────────── */
const LineReveal = ({ children, visible, delay = 0 }) => (
  <div style={{ overflow: 'hidden' }}>
    <div style={{
      transform: visible ? 'translateY(0)' : 'translateY(108%)',
      transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      willChange: 'transform',
    }}>
      {children}
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   SCRAMBLE NAV ITEM
───────────────────────────────────────────── */
const ScrambleNavItem = ({ label, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      className="text-xs uppercase tracking-widest"
      style={{ color: hover ? '#f5f5f0' : 'rgba(245,245,240,0.42)', letterSpacing: '0.16em', fontWeight: 400, transition: 'color 0.3s', fontFamily: 'Inter, system-ui, sans-serif' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TextScramble text={label} play={hover} />
    </button>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Portfolio = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.reveal]: true }));
      }),
      { threshold: 0.06 }
    );
    setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    }, 150);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  const reveal = (key, delay = 0) => ({
    'data-reveal': key,
    style: {
      opacity: visible[key] ? 1 : 0,
      transform: visible[key] ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
    },
  });

  return (
    <div style={{ background: '#000', color: '#f5f5f0', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      <GrainOverlay />
      <CursorGlow />
      <ScrollProgress />

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-5 flex justify-between items-center">
          <span
            onClick={() => scrollTo('hero')}
            className="cursor-pointer text-sm font-light tracking-widest uppercase"
            style={{ color: '#f5f5f0', letterSpacing: '0.22em' }}
          >
            VAB
          </span>
          <div className="hidden md:flex gap-10">
            {navItems.map(item => (
              <ScrambleNavItem key={item} label={item} onClick={() => scrollTo(item.toLowerCase())} />
            ))}
          </div>
          <button
            className="md:hidden p-2"
            style={{ color: 'rgba(245,245,240,0.55)' }}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden px-6 pb-8 pt-4 space-y-6" style={{ background: 'rgba(0,0,0,0.97)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left text-xs uppercase tracking-widest"
                style={{ color: 'rgba(245,245,240,0.5)', letterSpacing: '0.16em' }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end px-6 lg:px-14 pb-20 pt-32 overflow-hidden">
        <WebGLBackground />
        {/* subtle radial vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%, rgba(30,30,30,0.15) 0%, rgba(0,0,0,0.55) 70%)', pointerEvents: 'none' }} />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <p
            className="text-xs uppercase tracking-widest mb-10"
            style={{ color: 'rgba(245,245,240,0.35)', letterSpacing: '0.26em', animation: 'fadeIn 1.2s ease forwards', opacity: 0 }}
          >
            Senior Full-Stack &amp; AI Engineer · Toronto, ON
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(3.8rem, 10vw, 10rem)',
              color: '#f5f5f0',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              marginBottom: '2.5rem',
            }}
          >
            <AnimatedName text="Venkat" delay={300} /><br />
            <AnimatedName text="Ashish" delay={700} italic /><br />
            <AnimatedName text="Balla" delay={1100} />
          </h1>

          <p
            className="max-w-2xl mb-14 leading-relaxed"
            style={{
              color: 'rgba(245,245,240,0.5)',
              fontSize: '1.05rem',
              fontWeight: 300,
              animation: 'fadeInUp 1s ease 1.4s forwards',
              opacity: 0,
            }}
          >
            5+ years architecting production AI platforms, RAG-based search systems, and enterprise-scale
            full-stack applications — LangChain, LangGraph, React, NestJS, FastAPI — in regulated financial services.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-12 mb-14"
            style={{ animation: 'fadeInUp 1s ease 1.7s forwards', opacity: 0 }}
          >
            {[
              { value: 5, suffix: '+', label: 'Years Experience' },
              { value: 5000, suffix: '+', label: 'Daily LLM Interactions' },
              { value: 99, suffix: '.9%', label: 'SLA Compliance' },
            ].map(({ value, suffix, label }, i) => (
              <div key={i}>
                <div
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '2.4rem', color: '#f5f5f0', letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  <Counter target={value} suffix={suffix} />
                </div>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(245,245,240,0.35)', letterSpacing: '0.14em' }}>{label}</p>
              </div>
            ))}
          </div>

          <div
            className="flex flex-wrap gap-5"
            style={{ animation: 'fadeInUp 1s ease 2s forwards', opacity: 0 }}
          >
            <Magnetic strength={0.3}>
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-3 text-xs uppercase tracking-widest transition-all duration-300"
                style={{ color: '#000', background: '#f5f5f0', border: '1px solid #f5f5f0', padding: '14px 30px', letterSpacing: '0.18em', fontWeight: 500 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#f5f5f0'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f5f5f0'; e.currentTarget.style.color = '#000'; }}
              >
                View Work <ArrowRight size={14} />
              </button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button
                onClick={() => scrollTo('contact')}
                className="text-xs uppercase tracking-widest transition-all duration-300"
                style={{ color: 'rgba(245,245,240,0.55)', border: '1px solid rgba(245,245,240,0.18)', padding: '14px 30px', letterSpacing: '0.18em', fontWeight: 400 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,245,240,0.5)'; e.currentTarget.style.color = '#f5f5f0'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,245,240,0.18)'; e.currentTarget.style.color = 'rgba(245,245,240,0.55)'; }}
              >
                Get In Touch
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10" style={{ animation: 'fadeIn 1s ease 2.5s forwards', opacity: 0 }}>
          <ChevronDown size={18} style={{ color: 'rgba(245,245,240,0.2)' }} />
        </div>
      </section>

      <Ticker items={['Full-Stack Engineer', 'AI Systems', 'LangChain', 'LangGraph', 'RAG Pipelines', 'React', 'NestJS', 'FastAPI', 'TypeScript', 'Azure', 'AWS', 'OpenTelemetry', 'MCP Servers', 'Agentic Workflows']} />

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest sticky top-24" style={{ color: 'rgba(245,245,240,0.3)', letterSpacing: '0.2em' }}>01 — About</p>
          </div>
          <div className="lg:col-span-9" data-reveal="about" style={{ opacity: visible['about'] ? 1 : 0, transition: 'opacity 0.01s' }}>
            <h2
              className="mb-10 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: '#f5f5f0', letterSpacing: '-0.02em' }}
            >
              <LineReveal visible={visible['about']} delay={0}>
                Senior Full-Stack Engineer specialising in
              </LineReveal>
              <LineReveal visible={visible['about']} delay={80}>
                production AI platforms, RAG systems,
              </LineReveal>
              <LineReveal visible={visible['about']} delay={160}>
                and agentic LLM workflows.
              </LineReveal>
            </h2>
            <div className="space-y-5" style={{ color: 'rgba(245,245,240,0.58)', fontWeight: 300, lineHeight: 1.9, fontSize: '1rem' }}>
              <p>
                Proven track record shipping LLM-integrated products — agentic workflows (LangChain, LangGraph, MCP),
                RAG pipelines, streaming chat UIs, and LLM evaluation frameworks — in regulated financial services environments.
              </p>
              <p>
                Hands-on across all four layers of modern AI platforms: React/Angular frontends, NestJS middleware,
                FastAPI services, and cloud infrastructure with strong observability, testing discipline, and end-to-end delivery ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Ticker items={['Production AI Platforms', 'Scotiabank', 'Chubb Insurance', 'Financial Services', '99.9% SLA', '5000+ Daily LLM Interactions', 'Northeastern University', 'Toronto']} />

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest sticky top-24" style={{ color: 'rgba(245,245,240,0.3)', letterSpacing: '0.2em' }}>02 — Skills</p>
          </div>
          <div className="lg:col-span-9">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{ border: '1px solid rgba(255,255,255,0.08)', gap: '1px', background: 'rgba(255,255,255,0.08)' }}
            >
              {skillCategories.map((cat, i) => (
                <div
                  key={i}
                  data-reveal={`skill-${i}`}
                  className="p-8 transition-all duration-500"
                  style={{
                    background: '#000',
                    opacity: visible[`skill-${i}`] ? 1 : 0,
                    transform: visible[`skill-${i}`] ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.7s ease ${i * 70}ms, transform 0.7s ease ${i * 70}ms`,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#0b0b0b'}
                  onMouseLeave={e => e.currentTarget.style.background = '#000'}
                >
                  <p className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(245,245,240,0.38)', letterSpacing: '0.18em' }}>{cat.label}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm" style={{ color: 'rgba(245,245,240,0.68)', fontWeight: 300, lineHeight: 1.6 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-28 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest sticky top-24" style={{ color: 'rgba(245,245,240,0.3)', letterSpacing: '0.2em' }}>03 — Experience</p>
          </div>
          <div className="lg:col-span-9 space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                data-reveal={`exp-${i}`}
                style={{
                  opacity: visible[`exp-${i}`] ? 1 : 0,
                  transform: visible[`exp-${i}`] ? 'translateY(0)' : 'translateY(32px)',
                  transition: 'opacity 0.85s ease, transform 0.85s ease',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: '2.5rem',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '1.45rem', color: '#f5f5f0', letterSpacing: '-0.01em' }}>
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm" style={{ color: 'rgba(245,245,240,0.55)', fontWeight: 300 }}>
                      {exp.company}
                      {exp.client ? <span style={{ color: 'rgba(245,245,240,0.3)' }}> · {exp.client}</span> : null}
                      {exp.location ? <span style={{ color: 'rgba(245,245,240,0.3)' }}> · {exp.location}</span> : null}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Calendar size={11} style={{ color: 'rgba(245,245,240,0.28)' }} />
                    <span className="text-xs" style={{ color: 'rgba(245,245,240,0.38)', fontWeight: 300 }}>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-7">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-sm" style={{ color: 'rgba(245,245,240,0.55)', fontWeight: 300, lineHeight: 1.78 }}>
                      <span style={{ flexShrink: 0, marginTop: '0.68rem', width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(245,245,240,0.28)', display: 'inline-block' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="text-xs uppercase tracking-wider px-3 py-1" style={{ color: 'rgba(245,245,240,0.35)', border: '1px solid rgba(255,255,255,0.09)', letterSpacing: '0.1em' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest sticky top-24" style={{ color: 'rgba(245,245,240,0.3)', letterSpacing: '0.2em' }}>04 — Projects</p>
          </div>
          <div className="lg:col-span-9" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {projects.map((p, i) => (
              <div
                key={i}
                data-reveal={`proj-${i}`}
                className="p-10 transition-colors duration-500"
                style={{
                  opacity: visible[`proj-${i}`] ? 1 : 0,
                  transform: visible[`proj-${i}`] ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.8s ease ${i * 120}ms, transform 0.8s ease ${i * 120}ms`,
                  borderBottom: i < projects.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#060606'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '1.4rem', color: '#f5f5f0', letterSpacing: '-0.01em' }}>
                    {p.title}
                  </h3>
                  <span className="text-xs flex-shrink-0 mt-1" style={{ color: 'rgba(245,245,240,0.28)', fontWeight: 300 }}>{p.year}</span>
                </div>
                <p className="text-xs uppercase tracking-wider mb-6" style={{ color: 'rgba(245,245,240,0.32)', letterSpacing: '0.12em' }}>{p.stack}</p>
                <ul className="space-y-3 mb-6">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-sm" style={{ color: 'rgba(245,245,240,0.52)', fontWeight: 300, lineHeight: 1.78 }}>
                      <span style={{ flexShrink: 0, marginTop: '0.65rem', width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(245,245,240,0.25)', display: 'inline-block' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs uppercase tracking-wider transition-colors"
                      style={{ color: 'rgba(245,245,240,0.38)', letterSpacing: '0.15em' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#f5f5f0'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,245,240,0.38)'}
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs uppercase tracking-wider transition-colors"
                      style={{ color: 'rgba(245,245,240,0.38)', letterSpacing: '0.15em' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#f5f5f0'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,245,240,0.38)'}
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      {/* ── EDUCATION ── */}
      <section id="education" className="py-28 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(245,245,240,0.3)', letterSpacing: '0.2em' }}>05 — Education</p>
          </div>
          <div className="lg:col-span-9">
            {education.map((edu, i) => (
              <div
                key={i}
                {...reveal(`edu-${i}`)}
                style={{
                  ...reveal(`edu-${i}`).style,
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: '2.5rem',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '1.4rem', color: '#f5f5f0', letterSpacing: '-0.01em' }}>
                      {edu.degree}
                    </h3>
                    <p className="mt-2 text-sm" style={{ color: 'rgba(245,245,240,0.52)', fontWeight: 300 }}>
                      {edu.school} · {edu.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                    <Calendar size={11} style={{ color: 'rgba(245,245,240,0.28)' }} />
                    <span className="text-xs" style={{ color: 'rgba(245,245,240,0.38)', fontWeight: 300 }}>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(245,245,240,0.3)', letterSpacing: '0.2em' }}>06 — Contact</p>
          </div>
          <div className="lg:col-span-9" data-reveal="contact" style={{ opacity: visible['contact'] ? 1 : 0, transition: 'opacity 0.01s' }}>
            <h2
              className="mb-12 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: '#f5f5f0', letterSpacing: '-0.02em' }}
            >
              <LineReveal visible={visible['contact']} delay={0}>
                Open to new opportunities,
              </LineReveal>
              <LineReveal visible={visible['contact']} delay={100}>
                <span style={{ fontStyle: 'italic', color: 'rgba(245,245,240,0.42)' }}>technical challenges, and bold ideas.</span>
              </LineReveal>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 mb-12" style={{ border: '1px solid rgba(255,255,255,0.08)', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
              {[
                { label: 'Email', value: 'venkatashishb@gmail.com', href: 'mailto:venkatashishb@gmail.com' },
                { label: 'Phone', value: '+1 (905) 598-9176', href: 'tel:+19055989176' },
                { label: 'Location', value: 'Toronto, ON', href: null },
              ].map(({ label, value, href }, i) => (
                <div key={i} className="p-8" style={{ background: '#000' }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(245,245,240,0.28)', letterSpacing: '0.18em' }}>{label}</p>
                  {href ? (
                    <a href={href} className="text-sm transition-colors" style={{ color: 'rgba(245,245,240,0.65)', fontWeight: 300 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#f5f5f0'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,245,240,0.65)'}
                    >{value}</a>
                  ) : (
                    <p className="text-sm" style={{ color: 'rgba(245,245,240,0.65)', fontWeight: 300 }}>{value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              {[
                { icon: Github, href: 'https://github.com/ashishballa', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/venkatashishb/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:venkatashishb@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs uppercase tracking-wider transition-all duration-300 px-5 py-3"
                  style={{ color: 'rgba(245,245,240,0.42)', border: '1px solid rgba(255,255,255,0.1)', letterSpacing: '0.15em' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#f5f5f0'; e.currentTarget.style.borderColor = 'rgba(245,245,240,0.38)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,245,240,0.42)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <Icon size={13} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-6 lg:px-14 flex flex-col sm:flex-row justify-between items-center gap-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="text-xs" style={{ color: 'rgba(245,245,240,0.22)', fontWeight: 300, letterSpacing: '0.08em' }}>
          © 2025 Venkat Ashish Balla
        </p>
        <p className="text-xs" style={{ color: 'rgba(245,245,240,0.18)', fontWeight: 300, letterSpacing: '0.08em' }}>
          Senior Full-Stack &amp; AI Engineer · Toronto, ON
        </p>
      </footer>
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;
