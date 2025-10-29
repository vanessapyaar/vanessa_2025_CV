import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, PILLARS, PROCESS_STEPS, PROCESS_NOTES, VALUES, TESTIMONIALS, PROJECT_1_DETAIL } from './data';
import { Project, Pillar, Value, Testimonial, ProjectDetail } from './types';

// --- ICONS ---
const Icons = {
  DiagnosisIcon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  SafetyIcon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  SpeedIcon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  BetsIcon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707.707M19.071 4.929L18.364 5.636M6.343 17.657l-.707.707M17.657 6.343l.707-.707" /></svg>,
  ChangeOrgIcon: () => <svg className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6,12.72a.5.5,0,0,0-.45.16L9.4,19.1a.5.5,0,0,0-.16.56,10.2,10.2,0,1,1,7.21-17.4.5.5,0,0,0-.12.57l2.5,6.33a.5.5,0,0,0,.46.33h.05a.5.5,0,0,0,.45-.33l2.25-5.67a.5.5,0,0,0-.12-.57A12,12,0,1,0,16.6,12.72Z"></path></svg>,
  LinkedInIcon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.714c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.714h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>,
  MediumIcon: () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4,6.42H4V17.58h3.39ZM20,6.42H16.58V17.58H20ZM13.7,6.42H10.29V17.58H13.7Z"></path></svg>,
  MoonIcon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
  SunIcon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  CheckIcon: () => <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>,
  SessionIcon: () => <svg className="w-5 h-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>,
  QualIcon: () => <svg className="w-5 h-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>,
  DataIcon: () => <svg className="w-5 h-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
};
const Icon = ({ name }) => { const IconComponent = Icons[name]; return IconComponent ? <IconComponent /> : null; };

// --- PLACEHOLDERS & THUMBNAILS ---
const Placeholders = {
  Project1Thumbnail: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">Profile Card Placeholder</div>,
  Project2Thumbnail: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">Dialog Box Placeholder</div>,
  Project3Thumbnail: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">Verified Badge Placeholder</div>,
  Project4Thumbnail: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">AI Search Flow Placeholder</div>,
  ProfileCardMock: () => <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-6 aspect-[3/4] flex items-center justify-center text-slate-500 dark:text-slate-400">Hero Mock Placeholder</div>,
  AnnotatedUIMock: () => <div className="bg-slate-200 dark:bg-slate-700 rounded-2xl p-6 aspect-video flex items-center justify-center text-slate-500 dark:text-slate-400">Annotated UI Mock</div>,
  TimeSeriesChartMock: () => <div className="bg-slate-200 dark:bg-slate-700 rounded-2xl p-6 aspect-video flex items-center justify-center text-slate-500 dark:text-slate-400">Time-series Chart</div>,
  ArtifactPlaceholder: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">Artifact</div>,
};
const Placeholder = ({ name }) => { const Comp = Placeholders[name]; return Comp ? <Comp /> : null; };

// --- ANIMATION HOOK ---
const useFadeIn = (options = { threshold: 0.1 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        observer.unobserve(element);
      }
    }, options);
    observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, [options]);
  return ref;
};

// --- HOMEPAGE SECTION COMPONENTS ---
const Section = ({ id, children, className = '' }) => {
  const ref = useFadeIn();
  return (
    <section id={id} ref={ref} className={`fade-in-section container mx-auto px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
};
const Header = ({ isDarkMode, onThemeToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { href: '#work', label: 'Work' },
        { href: '#about', label: 'About' },
        { href: '#process', label: 'Process' },
        { href: '#values', label: 'Values' },
        { href: '#contact', label: 'Contact' },
    ];
    return (
        <header className="bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">VC</a>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors">{link.label}</a>
                    ))}
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <button onClick={onThemeToggle} aria-label="Toggle theme" className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                        {isDarkMode ? <Icon name="SunIcon" /> : <Icon name="MoonIcon" />}
                    </button>
                    <a href="#" className="px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-md transition-all transform hover:scale-105">Download Resume</a>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 dark:text-slate-200" aria-label="Open menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                </button>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col items-start space-y-4">
                     {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors py-2">{link.label}</a>
                    ))}
                    <div className="w-full border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between items-center">
                        <a href="#" className="px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-md transition-all">Download Resume</a>
                        <button onClick={onThemeToggle} aria-label="Toggle theme" className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            {isDarkMode ? <Icon name="SunIcon" /> : <Icon name="MoonIcon" />}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
const Hero = () => (
    <section className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Designing emotion as a lever for growth.</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>I’m Vanessa Carvalho, a Product Designer focused on behavioral design, experimentation, and 0→1 bets for large-scale B2C products.</p>
        <div className="max-w-4xl mx-auto mb-10 text-sm font-semibold text-accent dark:text-accent-light tracking-wider uppercase space-x-2 md:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span>20M+ users reached</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>+12% activation</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>+15% engagement</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>App ratings 4.5 → 4.8</span>
        </div>
        <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#work" className="px-8 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105">View Selected Work</a>
            <a href="mailto:vanessa.carvalho@example.com" className="px-8 py-3 font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg shadow-lg transition-all transform hover:scale-105">Email Vanessa</a>
        </div>
    </section>
);
const Work = ({ onSelectProject }) => (
  <Section id="work">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-12">Flagship Projects</h2>
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {PROJECTS.map((project: Project) => (
        <article key={project.id} className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <Placeholder name={project.thumbnailComponent} />
          <div className="p-8 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-accent dark:text-accent-light mb-2">{project.tag}</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.summary}</p>
            <ul className="space-y-3 mb-6">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start text-sm">
                  <Icon name="CheckIcon" />
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
             <div className="text-xs text-slate-500 dark:text-slate-400 bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex items-center mb-6">
              <Icon name="ChangeOrgIcon" />
              <span>{project.alignmentChip}</span>
            </div>
            <button onClick={(e) => { e.preventDefault(); onSelectProject(project.id); }} className="font-semibold text-accent hover:text-accent-dark dark:hover:text-accent-light transition-colors text-left w-fit">
              {project.id === 'broker-profile-trust-system' ? 'See case study →' : 'Case study coming soon'}
            </button>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
const HowIWork = () => (
    <div className="bg-slate-100 dark:bg-slate-800/50">
        <Section id="how-i-work" className="py-20">
            <div className="grid md:grid-cols-4 gap-10 text-center">
                {PILLARS.map((pillar: Pillar) => (
                    <div key={pillar.title} className="flex flex-col items-center">
                        <div className="mb-4"><Icon name={pillar.icon} /></div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    </div>
);
const Process = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isPaused || !isVisible) return;
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % PROCESS_STEPS.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused, isVisible]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <section id="process" ref={sectionRef} className="container mx-auto px-6 py-20 md:py-28">
            <div className="fade-in-section is-visible">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-16">My Process</h2>
                <div 
                    className="max-w-4xl mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex justify-between items-center gap-2 md:gap-4 mb-4 relative">
                        {PROCESS_STEPS.map((step, index) => (
                            <div key={step} className="flex-1 text-center">
                                <button
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full text-sm md:text-base font-semibold py-3 px-2 rounded-lg transition-all duration-300 ease-in-out transform ${
                                        activeIndex === index 
                                        ? 'bg-accent text-white shadow-lg scale-105' 
                                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    {step}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="relative h-24 mt-8">
                        <p className="absolute w-full text-center text-lg text-slate-600 dark:text-slate-400 transition-opacity duration-500 animate-fade-in">
                           {PROCESS_NOTES[activeIndex]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
const Values = () => (
    <div className="bg-slate-100 dark:bg-slate-800/50">
        <Section id="values">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-12">Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VALUES.map((value: Value) => (
                    <div key={value.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{value.proof}</p>
                    </div>
                ))}
            </div>
        </Section>
    </div>
);
const About = () => (
    <Section id="about">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center">
                <div className="w-48 h-48 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto mb-4 shadow-xl"></div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vanessa Carvalho</h3>
                <p className="text-accent dark:text-accent-light">Product Designer (Growth, B2C)</p>
            </div>
            <div className="md:w-2/3">
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">Senior IC with ~8 years in B2C growth. I reduce emotional friction to drive meaningful action at scale.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {['20M+ users', '12% activation', '15% engagement', '0→1 launches'].map(chip => (
                        <span key={chip} className="px-3 py-1 text-sm font-semibold bg-accent/10 text-accent-dark dark:bg-accent-light/10 dark:text-accent-light rounded-full">{chip}</span>
                    ))}
                </div>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-md transition-all transform hover:scale-105">Download Full Resume</a>
            </div>
        </div>
    </Section>
);
const Testimonials = () => (
    <Section id="testimonials">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-12">What Colleagues Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial: Testimonial) => (
                <figure key={testimonial.author} className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg">
                    <blockquote className="text-slate-600 dark:text-slate-300 mb-6">
                        <p>“{testimonial.quote}”</p>
                    </blockquote>
                    <figcaption className="font-semibold text-slate-800 dark:text-slate-100">
                        {testimonial.author}
                        <span className="block text-sm font-normal text-slate-500 dark:text-slate-400">{testimonial.role}</span>
                    </figcaption>
                </figure>
            ))}
        </div>
    </Section>
);
const Contact = () => (
    <footer className="bg-slate-100 dark:bg-slate-900">
        <div id="contact" className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Want to talk growth, emotion, and outcomes?</h2>
            <div className="flex justify-center gap-4 mb-12">
                <a href="mailto:vanessa.carvalho@example.com" className="px-8 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105">Email Vanessa</a>
                <a href="#" className="px-8 py-3 font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg shadow-lg transition-all transform hover:scale-105">Download Resume</a>
            </div>
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-accent transition-colors"><Icon name="LinkedInIcon" /></a>
                <a href="#" aria-label="Medium" className="text-slate-500 hover:text-accent transition-colors"><Icon name="MediumIcon" /></a>
            </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} Vanessa Carvalho. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

// --- PROJECT DETAIL PAGE ---
const ProjectSection = ({ id, title, children, className = '', titleClassName = '' }) => {
    const ref = useFadeIn();
    return (
        <section id={id} ref={ref} className={`fade-in-section container mx-auto px-6 py-16 md:py-20 ${className}`}>
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-12 ${titleClassName}`}>{title}</h2>
            {children}
        </section>
    );
};

const Project1DetailPage = ({ onBack, data }) => {
    const evidenceIcons = {
        Session: 'SessionIcon',
        Qual: 'QualIcon',
        Data: 'DataIcon'
    };

    return (
        <div className="animate-fade-in">
            <header className="sticky top-0 z-40 bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-3 flex items-center">
                    <button onClick={onBack} className="font-semibold text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors">
                        &larr; All Work
                    </button>
                    <span className="mx-2 text-slate-400 dark:text-slate-600">/</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{data.breadcrumb}</span>
                </div>
            </header>
            <main>
                {/* Hero */}
                <section className="container mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-tight mb-4">{data.hero.title}</h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">{data.hero.subtitle}</p>
                            <div className="space-y-3 mb-10">
                                {data.hero.stats.map(stat => (
                                    <span key={stat} className="flex items-center text-sm font-semibold bg-accent/10 text-accent-dark dark:bg-accent-light/10 dark:text-accent-light rounded-full px-3 py-1 w-fit">
                                        {stat}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href="#artifacts" className="px-6 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105">View artifacts</a>
                                <a href="#change-org" className="px-6 py-3 font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg shadow-lg transition-all transform hover:scale-105">Change.org translation</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Placeholder name="ProfileCardMock" />
                        </div>
                    </div>
                </section>
                
                {/* Snapshot */}
                <div className="bg-slate-100 dark:bg-slate-800/50">
                    <ProjectSection id="snapshot" title="Project Snapshot">
                        <dl className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {data.snapshot.map(item => (
                                <div key={item.label}>
                                    <dt className="font-bold text-slate-900 dark:text-white">{item.label}</dt>
                                    <dd className="text-slate-600 dark:text-slate-400">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </ProjectSection>
                </div>

                {/* Problem -> Insight */}
                <ProjectSection id="problem" title="Problem → Insight">
                    <div className="grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-3">
                            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 p-6 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 rounded-r-lg">{data.problemInsight.problem}</p>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Evidence</h3>
                            <ul className="space-y-4">
                                {data.problemInsight.evidence.map(item => (
                                    <li key={item.text} className="flex items-center">
                                        <Icon name={evidenceIcons[item.type]} />
                                        <span className="text-slate-600 dark:text-slate-400">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="md:col-span-2">
                             <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Behavior Model</h3>
                             <div className="space-y-2">
                                {data.problemInsight.models.map(model => (
                                    <div key={model.model} className="text-sm">
                                        <span className="font-semibold bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-md mr-2">{model.model}</span>
                                        <span className="text-slate-600 dark:text-slate-400">{model.text}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                </ProjectSection>

                 {/* Design System */}
                <div className="bg-slate-100 dark:bg-slate-800/50">
                     <ProjectSection id="design" title="Design System: The Trust Layer">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                           <div className="space-y-6">
                               {data.designSystem.elements.map(el => (
                                   <div key={el.title}>
                                       <h4 className="font-bold text-slate-900 dark:text-white">{el.title}</h4>
                                       <p className="text-slate-600 dark:text-slate-400">{el.description}</p>
                                   </div>
                               ))}
                           </div>
                           <div><Placeholder name="AnnotatedUIMock" /></div>
                        </div>
                     </ProjectSection>
                </div>

                {/* Experiments */}
                <ProjectSection id="experiments" title="Experiments (Right-sized)">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {data.experiments.items.map(exp => (
                            <div key={exp.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                                <h4 className="font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{exp.description}</p>
                                <p className="font-semibold text-accent dark:text-accent-light text-sm">{exp.result}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{data.experiments.note}</p>
                </ProjectSection>
                
                {/* Results */}
                <div className="bg-slate-100 dark:bg-slate-800/50">
                    <ProjectSection id="results" title="Results" className="text-center">
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                            {data.results.kpis.map(kpi => (
                                <div key={kpi.value} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                                    <p className="text-2xl font-bold text-accent dark:text-accent-light">{kpi.value}</p>
                                    {kpi.label && <p className="text-slate-500 dark:text-slate-400">{kpi.label}</p>}
                                </div>
                            ))}
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                           <Placeholder name="TimeSeriesChartMock" />
                           <blockquote className="text-xl text-left text-slate-700 dark:text-slate-300 p-6 border-l-4 border-accent rounded-r-lg bg-white dark:bg-slate-800">
                               “{data.results.quote}”
                           </blockquote>
                        </div>
                    </ProjectSection>
                </div>
                
                 {/* Change.org Translation */}
                <ProjectSection id="change-org" title="Change.org Translation" className="max-w-4xl mx-auto">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                        <div className="flex items-center mb-6">
                            <Icon name="ChangeOrgIcon" /><h3 className="text-2xl font-bold text-green-800 dark:text-green-300">{data.changeOrgTranslation.title}</h3>
                        </div>
                        <div className="space-y-4 mb-6">
                            {data.changeOrgTranslation.points.map(p => (
                                <div key={p.title}>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">{p.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{p.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-semibold text-center text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full p-2">{data.changeOrgTranslation.footer}</p>
                    </div>
                </ProjectSection>
                
                {/* Ethics */}
                <div className="bg-slate-100 dark:bg-slate-800/50">
                    <ProjectSection id="ethics" title="Ethics & Guardrails">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {data.ethics.map(item => (
                                <div key={item.title}>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                                </div>
                             ))}
                        </div>
                    </ProjectSection>
                </div>

                {/* Artifacts */}
                <ProjectSection id="artifacts" title="Artifacts">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {data.artifacts.map((artifact, i) => (
                            <figure key={i}>
                                <Placeholder name={artifact.componentName} />
                                <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">{artifact.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                </ProjectSection>

            </main>
            <footer className="bg-slate-900 text-center py-16 px-6">
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Interested in trust & accountability UX?</h2>
                 <div className="flex justify-center gap-4">
                    <a href="mailto:vanessa.carvalho@example.com" className="px-8 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105">Email Vanessa</a>
                    <button onClick={onBack} className="px-8 py-3 font-semibold text-slate-200 bg-slate-700 hover:bg-slate-600 rounded-lg shadow-lg transition-all transform hover:scale-105">See all projects</button>
                 </div>
            </footer>
        </div>
    );
};

// --- MAIN APP ---
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark' : 'light';
    setIsDarkMode(prefersDark);
    document.documentElement.classList.add(theme);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
        const newIsDark = !prev;
        document.documentElement.classList.remove(newIsDark ? 'light' : 'dark');
        document.documentElement.classList.add(newIsDark ? 'dark' : 'light');
        return newIsDark;
    });
  };

  const handleSelectProject = (projectId) => {
    if (projectId === 'broker-profile-trust-system') {
        setSelectedProject(projectId);
        window.scrollTo(0, 0);
    } else {
        alert('Case study for this project is coming soon!');
    }
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
  };

  if (selectedProject === 'broker-profile-trust-system') {
      return <Project1DetailPage onBack={handleBackToHome} data={PROJECT_1_DETAIL} />;
  }

  return (
    <>
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <Work onSelectProject={handleSelectProject} />
        <HowIWork />
        <Process />
        <Values />
        <About />
        <Testimonials />
      </main>
      <Contact />
    </>
  );
}
