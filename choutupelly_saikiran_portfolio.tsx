import React, { useState, useEffect } from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Eye,
  Server,
  Cloud,
  Database,
  GitBranch,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Menu,
  X,
  Download,
  Send,
  CheckCircle,
  Sparkles,
  Layers,
  ArrowUpRight,
  FileText
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Track scroll position for active navbar item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saikiranchoutupelly@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const handleDownloadResume = () => {
    // Generate an automatic synthetic formatted CV for immediate download
    const cvContent = `CHOUTUPELLY SAIKIRAN
Python Developer & Software Engineer
Hyderabad, Telangana, India | saikiranchoutupelly@gmail.com
GitHub: https://github.com/saikiranchoutupelly-sk | LinkedIn: https://linkedin.com/in/choutupelly-saikiran

PROFESSIONAL SUMMARY:
Results-driven Python Developer and Software Engineer with solid expertise in building scalable RESTful APIs, computer vision systems, applied machine learning/NLP pipelines, and cloud-integrated solutions.

CORE TECHNICAL SKILLS:
- Languages: Python (Proficient), SQL, Bash
- Backend & Frameworks: REST APIs, FastAPI, Flask, Python Standard Library
- AI & Computer Vision: OpenCV, Machine Vision, NLP, Image Processing
- Cloud & DevOps: Docker, Microsoft Azure (ADLS / Cloud Fundamentals), Git, GitHub, Linux
- Databases & Data: Relational Databases, PostgreSQL/MySQL, SQL Data Processing

WORK EXPERIENCE:
1. ApplyWizz Technologies Pvt. Ltd. | Software Engineer & AI Trainee
   March 2026 – Present | Hyderabad, India
   - Developing AI-assisted automation platforms and workflow orchestration modules.
   - Engineering Python backend services, natural language processing pipelines, and REST endpoints.
   - Implementing automated data parsing and candidate-job matching pipelines.

2. Akiyam Solutions | Software Developer Intern
   July 2023 – January 2024 | Hyderabad, India
   - Developed Python backend scripts and automated data workflows.
   - Built and tested REST API endpoints and optimized relational database queries.
   - Collaborated on bug diagnosis, documentation, and version control best practices.

3. Sci-Com Software | Software Engineer
   - Designed modular Python backend services adhering to standard library and clean code principles.
   - Maintained scalable codebases, automated tasks, and streamlined Git versioning.

FEATURED PROJECTS:
1. AI-Powered Job Application Automation Platform
   - Tech: Python, NLP, REST APIs, Automation
   - Automated candidate-to-job matching, resume skill extraction, and application processing.

2. VAS-MSPIDS 1.0 (Video Analytics & Surveillance System)
   - Tech: Python, OpenCV, Computer Vision, Real-Time Stream Processing
   - Real-time video stream inspection, movement detection, and automated event analytics.

3. XInspect 1.0 (Food Quality Inspection System)
   - Tech: Python, OpenCV, Machine Vision, Defect Detection
   - Industrial vision pipeline for automated defect identification and quality control scoring.

EDUCATION & CERTIFICATIONS:
- Bachelor of Technology in Engineering / Computer Science
- Microsoft Azure Fundamentals & Data Fundamentals
- Python & Deep Learning / Computer Vision Specializations
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Choutupelly_Saikiran_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const skillsData = [
    {
      category: 'Languages & Core',
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      items: ['Python', 'SQL', 'Bash', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms']
    },
    {
      category: 'Backend & Web APIs',
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      items: ['RESTful APIs', 'FastAPI', 'Flask', 'JSON / Webhooks', 'Python Standard Library', 'Microservices Concept']
    },
    {
      category: 'AI, NLP & Computer Vision',
      icon: <Eye className="w-5 h-5 text-purple-400" />,
      items: ['OpenCV', 'Computer Vision', 'Natural Language Processing (NLP)', 'Machine Learning', 'Defect Detection', 'Image Processing']
    },
    {
      category: 'Cloud, Containers & DevOps',
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      items: ['Docker', 'Microsoft Azure', 'Azure Data Lake Storage (ADLS)', 'Git & GitHub', 'Linux Environment', 'CI/CD Pipelines']
    },
    {
      category: 'Databases & Data Handling',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      items: ['Relational Databases', 'PostgreSQL / MySQL', 'Complex SQL Queries', 'Data Parsing & Extraction', 'ETL Pipelines']
    }
  ];

  const experienceData = [
    {
      company: 'ApplyWizz Technologies Pvt. Ltd.',
      role: 'Software Engineer & AI Trainee',
      period: 'March 2026 – Present',
      location: 'Hyderabad, India',
      type: 'Full-time / Traineeship',
      current: true,
      description:
        'Spearheading the engineering of AI-driven workflow automations, backend micro-services, and natural language processing pipelines for intelligent career tools.',
      points: [
        'Architected and integrated Python-based automated job matching algorithms leveraging natural language processing.',
        'Developed modular REST API endpoints to handle high-throughput structured data queries with minimal latency.',
        'Collaborated on scalable orchestration workflows, ensuring containerized reliability and seamless cloud readiness.'
      ],
      skills: ['Python', 'NLP', 'REST APIs', 'Automation', 'Docker']
    },
    {
      company: 'Akiyam Solutions',
      role: 'Software Developer Intern',
      period: 'July 2023 – January 2024',
      location: 'Hyderabad, India',
      type: 'Internship',
      current: false,
      description:
        'Contributed to core backend modules, API integration, relational database optimizations, and cross-functional feature rollouts.',
      points: [
        'Constructed reusable Python scripts for internal service communication and automated data validation.',
        'Engineered SQL queries and schema validations, enhancing data retrieval speeds for client reporting.',
        'Executed unit tests, API integration tests, and collaborative code reviews via Git version control.'
      ],
      skills: ['Python', 'SQL', 'REST APIs', 'Git', 'Testing']
    },
    {
      company: 'Sci-Com Software',
      role: 'Software Engineer',
      period: 'Engineering Experience',
      location: 'Hyderabad, India',
      type: 'Software Engineering',
      current: false,
      description:
        'Delivered scalable Python applications focusing on computational precision, backend logic, and system architecture stability.',
      points: [
        'Engineered robust data processing utilities utilizing the Python Standard Library and modern design patterns.',
        'Maintained codebase integrity with rigorous Git branching workflows, code quality guidelines, and documentation.',
        'Assisted in diagnosing and patching performance bottlenecks in existing backend components.'
      ],
      skills: ['Python', 'Architecture', 'Git', 'Code Optimization', 'Linux']
    }
  ];

  const projectsData = [
    {
      title: 'AI-Powered Job Application Automation Platform',
      tagline: 'Intelligent Candidate-to-Job Matching & Parsing Pipeline',
      badge: 'Applied AI & Automation',
      highlightColor: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-500/30',
      description:
        'A comprehensive end-to-end automation platform that uses Natural Language Processing to parse resumes, categorize applicant proficiencies, and execute intelligent candidate-to-vacancy matching workflows.',
      features: [
        'NLP-driven resume skill extraction & semantic entity recognition',
        'Automated workflow pipeline reducing manual application overhead',
        'Scalable RESTful API layer for seamless third-party platform integration',
        'Structured SQL logging for analytical tracking and match scoring'
      ],
      techStack: ['Python', 'NLP', 'REST APIs', 'Automation', 'SQL', 'Git']
    },
    {
      title: 'VAS-MSPIDS 1.0',
      tagline: 'Video Analytics & Surveillance Platform',
      badge: 'Computer Vision & Real-time Stream',
      highlightColor: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
      description:
        'An intelligent video analytics and automated surveillance system engineered to inspect live camera feeds, perform object motion tracking, and trigger event alerts with high precision.',
      features: [
        'Real-time frame processing and stream optimization with OpenCV',
        'Motion trajectory tracking and boundary crossing detection algorithms',
        'Engineered for low-latency visual data extraction on edge and server systems',
        'Modular architecture facilitating dynamic thresholding and event logging'
      ],
      techStack: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing', 'Linux']
    },
    {
      title: 'XInspect 1.0',
      tagline: 'Automated Food Quality Inspection System',
      badge: 'Machine Vision & Quality Control',
      highlightColor: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      description:
        'A high-accuracy industrial machine vision solution designed to automate food quality inspection, identify surface imperfections, and sort batches based on visual standards.',
      features: [
        'Automated defect detection pipeline utilizing custom computer vision filters',
        'Surface abnormality detection, color space transformations & anomaly tagging',
        'High throughput batch inspection with rapid visual classification routines',
        'Integrated diagnostic reports for industrial quality assurance compliance'
      ],
      techStack: ['Python', 'OpenCV', 'Defect Detection', 'Machine Vision', 'Algorithms']
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Background glowing gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      {/* Sticky Blur Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b14]/80 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-500/25">
              <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-lg tracking-wider">
                  CS.
                </span>
              </div>
            </div>
            <div className="text-left hidden sm:block">
              <span className="block font-bold text-white text-base tracking-tight leading-tight group-hover:text-indigo-300 transition-colors">
                Choutupelly Saikiran
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-wide">
                Python Dev & Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleDownloadResume}
              className="p-2 text-indigo-400 hover:text-indigo-300 bg-slate-900 border border-slate-800 rounded-lg"
              title="Download Resume"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070b14]/95 border-b border-slate-800 px-5 pt-3 pb-6 backdrop-blur-xl animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'education', label: 'Education & Certifications' },
                { id: 'contact', label: 'Contact Me' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-850 hover:text-white transition-colors"
                >
                  <span className="font-medium text-sm">{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}
              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={handleDownloadResume}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Complete Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-36 pt-12 pb-24">
        {/* HERO SECTION */}
        <section id="hero" className="pt-8 sm:pt-16 pb-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner shadow-indigo-950">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering & AI Roles in Hyderabad / Remote</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
                  Choutupelly Saikiran
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 max-w-2xl mx-auto">
                Python Developer & Software Engineer
              </p>
            </div>

            {/* Punchy Bio Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Specializing in high-performance Python backend services, scalable REST APIs,
              Computer Vision pipelines, and intelligent workflow automation. Based in Hyderabad, India.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Explore Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm sm:text-base transition-all hover:border-slate-600"
              >
                Contact Me
              </button>
              <button
                onClick={handleDownloadResume}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-indigo-500/30 text-indigo-300 font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social & Configurable Links */}
            <div className="flex items-center justify-center gap-6 pt-4 text-slate-400">
              <a
                href="https://github.com/saikiranchoutupelly-sk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-mono font-medium">github.com/saikiranchoutupelly-sk</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://linkedin.com/in/choutupelly-saikiran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono font-medium">LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-8 border-t border-slate-850">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
                Core Engineering Stack
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {[
                  'Python',
                  'SQL',
                  'REST APIs',
                  'NLP',
                  'AI / ML',
                  'OpenCV',
                  'Docker',
                  'Azure',
                  'Git'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-white transition-all shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-28">
          <div className="space-y-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">
                <Code2 className="w-4 h-4" />
                <span>Professional Background</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                About Me
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Narrative Story */}
              <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800">
                <p>
                  I am a passionate <strong className="text-white font-semibold">Python Developer and Software Engineer</strong> based in Hyderabad, India. My engineering journey centers on translating complex logical problems into performant, clean, and maintainable software systems.
                </p>
                <p>
                  At <strong className="text-indigo-300">ApplyWizz Technologies</strong>, I focus on software automation and AI workflows, engineering backend services that utilize Natural Language Processing to automate applicant processing. Prior to this, during my tenure at <strong className="text-indigo-300">Akiyam Solutions</strong> and <strong className="text-indigo-300">Sci-Com Software</strong>, I established deep hands-on expertise in backend REST APIs, relational databases, data structures, and code modularity.
                </p>
                <p>
                  Beyond web services, I have built specialized computer vision systems including <span className="text-cyan-300">VAS-MSPIDS 1.0</span> (surveillance video analytics) and <span className="text-cyan-300">XInspect 1.0</span> (industrial automated food quality inspection) using OpenCV and machine vision algorithms.
                </p>

                <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Location</span>
                    <span className="font-semibold text-white">Hyderabad, India</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Primary Focus</span>
                    <span className="font-semibold text-white">Python, REST, AI/CV</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Status</span>
                    <span className="font-semibold text-emerald-400">Open to Roles</span>
                  </div>
                </div>
              </div>

              {/* Core Strength Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Server className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">Backend & REST APIs</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Clean, modular API development using FastAPI/Flask, handling relational databases and fast queries.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">Computer Vision & OpenCV</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Real-time image and video stream processing, object identification, and industrial defect detection.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">Applied AI & Automation</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    NLP-based parsing pipelines, candidate-job matching algorithms, and automated pipeline scripts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-28">
          <div className="space-y-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">
                <Cpu className="w-4 h-4" />
                <span>Technical Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Skills & Tech Stack
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Categorized breakdown of technologies, frameworks, and methodologies I leverage daily.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((group, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60">
                        {group.icon}
                      </div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {group.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-md text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50 hover:border-indigo-400/40 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-28">
          <div className="space-y-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Work Experience
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Chronological track record of building production software, backend APIs, and AI automation.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-10 group">
                  {/* Timeline Node Marker */}
                  <div
                    className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                      exp.current
                        ? 'bg-indigo-500 border-indigo-300 ring-4 ring-indigo-500/20'
                        : 'bg-slate-900 border-slate-600 group-hover:border-indigo-400'
                    }`}
                  />

                  {/* Card Container */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/80 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                              Present Role
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-semibold text-indigo-400 mt-0.5">
                          {exp.company}
                        </h4>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key responsibilities */}
                    <ul className="space-y-2 mb-5">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                          <span className="text-indigo-400 mt-1 font-bold">›</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/70">
                      {exp.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/50"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-28">
          <div className="space-y-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">
                <Layers className="w-4 h-4" />
                <span>Featured Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Highlighted Projects
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Deep dive into automated platforms and computer vision systems designed and executed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projectsData.map((project, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl bg-slate-900/70 border ${project.borderColor} p-6 sm:p-7 flex flex-col justify-between hover:bg-slate-900/90 transition-all duration-300 group shadow-lg`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                        {project.badge}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold">
                        Key Features & Architecture:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-indigo-400 font-bold">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack footer */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-slate-800/90 text-[11px] font-mono text-slate-300 border border-slate-700/60"
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

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-xs text-slate-400 font-mono">Academic Foundation</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-850/60 border border-slate-800 space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-white text-base">
                    Bachelor of Technology (B.Tech)
                  </h4>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">
                    Engineering
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-medium">
                  Computer Science / Engineering Specialization
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                  Rigorous coursework in Data Structures, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Certifications & Specializations</h3>
                  <p className="text-xs text-slate-400 font-mono">Verified Skills & Cloud Accreditations</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-850/60 border border-slate-800 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white text-sm">Microsoft Azure Cloud & Data Fundamentals</h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Understanding cloud architecture, storage solutions (ADLS), IAM security, and data pipeline fundamentals.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-850/60 border border-slate-800 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white text-sm">Python for Machine Learning & Computer Vision</h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      OpenCV practical implementations, defect detection pipelines, and Natural Language Processing modeling.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-850/60 border border-slate-800 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white text-sm">REST API Development & Architecture</h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Standardized endpoints, authentication, request validation, and database ORM querying in Python.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-28">
          <div className="space-y-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Connect & Collaborate
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Interested in working together, discussing software engineering roles, or exploring Python & AI projects? Reach out directly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Contact Information & Channels */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-5">
                  <h3 className="font-bold text-white text-lg">Direct Information</h3>

                  <div className="space-y-4 text-sm">
                    {/* Email Card with Click-to-copy */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-850/80 border border-slate-800">
                      <Mail className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 overflow-hidden">
                        <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                        <a
                          href="mailto:saikiranchoutupelly@gmail.com"
                          className="font-medium text-white hover:text-indigo-300 transition-colors break-all text-xs sm:text-sm"
                        >
                          saikiranchoutupelly@gmail.com
                        </a>
                      </div>
                      <button
                        onClick={handleCopyEmail}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-indigo-300 hover:bg-slate-700 transition-colors"
                      >
                        {copiedEmail ? 'Copied!' : 'Copy'}
                      </button>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-850/80 border border-slate-800">
                      <MapPin className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">Location</span>
                        <span className="font-medium text-white">
                          Hyderabad, Telangana, India
                        </span>
                      </div>
                    </div>

                    {/* Social profiles */}
                    <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                      <a
                        href="https://github.com/saikiranchoutupelly-sk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-850/80 hover:bg-slate-800 border border-slate-800 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Github className="w-5 h-5 text-indigo-400" />
                          <span className="font-medium text-sm text-slate-200 group-hover:text-white">
                            GitHub Profile
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                      </a>

                      <a
                        href="https://linkedin.com/in/choutupelly-saikiran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-850/80 hover:bg-slate-800 border border-slate-800 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Linkedin className="w-5 h-5 text-cyan-400" />
                          <span className="font-medium text-sm text-slate-200 group-hover:text-white">
                            LinkedIn Profile
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick note on response times */}
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/40 text-xs text-indigo-200/80 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <p>
                    I actively respond to technical queries, recruiter inquiries, and project discussions within 24 hours.
                  </p>
                </div>
              </div>

              {/* Working Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <h3 className="font-bold text-white text-lg mb-6">
                    Send a Direct Message
                  </h3>

                  {formSubmitted ? (
                    <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                      <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-white text-lg">Message Sent Successfully!</h4>
                      <p className="text-sm text-slate-300 max-w-sm mx-auto">
                        Thank you for reaching out, Saikiran will review your note and respond back promptly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono font-medium text-slate-300">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono font-medium text-slate-300">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-slate-300">
                          Subject
                        </label>
                        <input
                          type="text"
                          placeholder="Project Opportunity / Engineering Discussion"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-slate-300">
                          Your Message *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Hello Saikiran, I came across your portfolio and would like to talk about..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#05080f] py-10 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-medium">
            <button onClick={() => scrollTo('about')} className="hover:text-indigo-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-indigo-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollTo('experience')} className="hover:text-indigo-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-indigo-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-indigo-400 transition-colors">
              Contact
            </button>
          </div>
          <p>
            © 2026 Choutupelly Saikiran. All rights reserved. Built with modern React & Tailwind CSS.
          </p>
          <p className="text-[11px] text-slate-600 font-mono">
            Designed for high performance, accessibility, and clean software architecture.
          </p>
        </div>
      </footer>
    </div>
  );
}