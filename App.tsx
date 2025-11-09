import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, PILLARS, VALUES, TESTIMONIALS, PROJECT_DETAILS } from './data';
import { Project, Pillar, Value, Testimonial, ProjectDetailData, NarrativeArtifact, UIShowcaseImage, NarrativeSection, StandardProjectData } from './types';


// --- ICONS ---
import { Search, ShieldCheck, Zap, Trophy, GitMerge, Users, Linkedin, Moon, Sun, Check, RefreshCw, Eye, Scaling, Key, Handshake, UserCheck, Book } from 'lucide-react';

const Icon = ({ name, ...props }: { name: string; [key: string]: any; }) => {
    const IconComponent = {
        DiagnosisIcon: Search,
        SafetyIcon: ShieldCheck,
        SpeedIcon: Zap,
        BetsIcon: Trophy,
        SystemsThinkingIcon: GitMerge,
        CollaborationIcon: Users,
        LinkedInIcon: Linkedin,
        MoonIcon: Moon,
        SunIcon: Sun,
        CheckIcon: Check,
        ReflectIcon: RefreshCw,
        TransparencyIcon: Eye,
        ScalabilityIcon: Scaling,
        OwnershipIcon: Key,
        CollaborationIcon2: Handshake,
        UserFocusIcon: UserCheck,
        MediumIcon: Book,
    }[name];

    return IconComponent ? <IconComponent {...props} /> : null;
};

// --- PLACEHOLDERS & THUMBNAILS ---
const Placeholders = {
  BoatTraderAppThumbnail: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/BT-App-Hero-Shot.png" alt="BoatTrader App Redesign" className="aspect-video w-full object-cover" />,
  SellerDashboardThumbnail: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/seller-dashboard.jpg" alt="Seller Dashboard Redesign" className="aspect-video w-full object-cover" />,
  DesignSystemThumbnail: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/Design-System-Thumb.png" alt="Unified Design System" className="aspect-video w-full object-cover" />,
  AIImageSearchThumbnail: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/AI-Search-Thumb.png" alt="AI Image Search Project" className="aspect-video w-full object-cover" />,
  
  // BoatTrader Placeholders
  BoatTraderHeroImage: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/BT-App-Hero-Shot.png" alt="Hero image of BoatTrader App Redesign" className="aspect-[16/9] md:aspect-[21/9] w-full rounded-lg object-cover" />,
  FiltersBefore: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/before-filter.png" alt="Before state of dense filter panel" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  FiltersAfter: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/after-filter.png" alt="After state of guided filters with confirmation" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  ResultsBefore: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/before-srp.png" alt="Before state of small result cards" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  ResultsAfter: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/after-srp.png" alt="After state of scan-friendly cards with stacked images" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  DetailsBefore: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/before-details.png" alt="Before state of text-heavy details page" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  DetailsAfter: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/after-details.png" alt="After state of media-first details page" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,

  // Saved Boats Placeholders
  SavedBoatsHeroImage: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/Saved-Boats-Hero.png" alt="Hero image of Saved Boats Redesign" className="aspect-[16/9] md:aspect-[21/9] w-full rounded-lg object-cover" />,
  SavedTabBefore: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-[3/4] rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Mockup of old Saved Boats tab</div>,
  SavedTabAfter: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-[3/4] rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Mockup of new unified Saved hub</div>,
  EmptyStateBefore: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-[3/4] rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Screenshot of blank old empty state</div>,
  EmptyStateAfter: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-[3/4] rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Screenshot of new helpful empty state</div>,
  SavedSearchFlow: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Diagram of saved search user flow</div>,
  MicrocopyExamples: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Examples of microcopy and push notifications</div>,

  // Design System Placeholders
  DesignSystemHeroImage: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/Design-System-Hero.png" alt="Hero image of Unified Design System" className="aspect-[16/9] md:aspect-[21/9] w-full rounded-lg object-cover" />,
  ComponentLibrary: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Snapshot of component library</div>,
  TokenDocumentation: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Example of design token documentation</div>,
  BrandVariants: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Component with brand variants</div>,
  AccessibilityGuidelines: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Accessibility guidelines documentation</div>,

  // AI Image Search Placeholders
  AIImageSearchHeroImage: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/AI-Search-Hero.png" alt="Hero image for AI Image Search project" className="aspect-[16/9] md:aspect-[21/9] w-full rounded-lg object-cover" />,
  AIEntryPoint: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Mockup of visual search entry point</div>,
  AIUploadPreview: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Mockup of image upload preview screen</div>,
  AIMatchResults: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Mockup of visual match results page</div>,
  AIFeedbackPrompt: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Mockup of in-session feedback prompt</div>,
  GenericEmpathizeArtifact: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Empathize Artifact Placeholder</div>,
  BoatTraderEmpathizeArtifact1: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/filter-annotations.png" alt="Filter Annotations" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  BoatTraderEmpathizeArtifact2: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/search-results-old.png" alt="Old Search Results" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  BoatTraderEmpathizeArtifact3: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/details%20screen.png" alt="Old Details Screen" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  BoatTraderDefineArtifact1: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/bt-artifacts.png" alt="BoatTrader Define Artifact" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  GenericDefineArtifact: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Define Artifact Placeholder</div>,
  BoatTraderIdeateArtifact: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/srp-explorations.png" alt="BoatTrader Ideate Artifact" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  BoatTraderIdeateArtifact1: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/srp-explorations.png" alt="BoatTrader Ideate Artifact" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  GenericIdeateArtifact: () => <div className="bg-slate-200 dark:bg-slate-700 aspect-video rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center text-sm">Ideate Artifact Placeholder</div>,
  ProductPageExplorations: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/product-page-explorations.png" alt="Product Page Explorations" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
  FilterPageExplorations: () => <img src="https://storage.googleapis.com/portfolio-asset-vanessa/filter%20Explorations.png" alt="Filter Page Explorations" className="aspect-auto max-h-[75vh] rounded-lg object-contain" />,
};
const Placeholder = ({ name, ...props }: { name: string; [key: string]: any; }) => { const Comp = Placeholders[name]; return Comp ? <Comp {...props} /> : null; };


// --- UTILITY ---
const useFadeIn = (options = { threshold: 0.1 }) => {
  const ref = useRef<HTMLElement>(null);
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
const Section = ({ id, children, className = '' }: { id: string; children?: React.ReactNode; className?: string; }) => {
  const ref = useFadeIn();
  return (
    <section id={id} ref={ref} className={`fade-in-section container mx-auto px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
};
const Header = ({ isDarkMode, onThemeToggle, isProjectPage, onBack }: { isDarkMode: boolean; onThemeToggle: () => void; isProjectPage: boolean; onBack: () => void; }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const navLinks = [
        { href: '#work', label: 'Work' },
        { href: '#process', label: 'Process' },
        { href: '#values', label: 'Values' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleScroll = () => {
        if (!isProjectPage) return;
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(scrollHeight > 0 ? scrolled : 0);
    };

    useEffect(() => {
        if (isProjectPage) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Initial check
        } else {
             setScrollPercentage(0);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isProjectPage]);
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };
    
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (isProjectPage) {
            onBack();
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 relative">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {isProjectPage ? (
                     <button onClick={onBack} className="font-semibold text-accent hover:text-accent-dark dark:hover:text-accent-light transition-colors flex items-center group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to all projects
                    </button>
                ) : (
                    <>
                        <div className="flex-1">
                            <a href="#" onClick={handleLogoClick} className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">VC</a>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors">{link.label}</a>
                            ))}
                        </div>
                        <div className="flex-1 flex justify-end">
                            <div className="flex items-center space-x-4">
                                <button onClick={onThemeToggle} aria-label="Toggle theme" className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                                    {isDarkMode ? <Icon name="SunIcon" className="h-6 w-6" /> : <Icon name="MoonIcon" className="h-6 w-6" />}
                                </button>
                                <a href="https://storage.googleapis.com/portfolio-asset-vanessa/Vanessa_Growth-Enterprise-CV.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-md transition-all transform hover:scale-105">Download Resume</a>
                            </div>
                        </div>
                    </>
                )}

                {!isProjectPage && (
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 dark:text-slate-200" aria-label="Open menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                )}
            </nav>
            {isMenuOpen && !isProjectPage && (
                <div className="md:hidden px-6 pb-4 flex flex-col items-start space-y-4">
                     {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors py-2">{link.label}</a>
                    ))}
                    <div className="w-full border-t border-slate-200 dark:border-slate-700 pt-4">
                        <a href="https://storage.googleapis.com/portfolio-asset-vanessa/Vanessa_Growth-Enterprise-CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full block px-4 py-2 text-center text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-md transition-all">Download Resume</a>
                    </div>
                </div>
            )}
             {isProjectPage && (
                <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-200 dark:bg-slate-700">
                    <div 
                        className="h-full" 
                        style={{ 
                            width: `${scrollPercentage}%`,
                            background: 'linear-gradient(to right, #a78bfa, #7c3aed)'
                        }} 
                    />
                </div>
            )}
        </header>
    );
};
const Hero = () => {
    const rotatingWords = [
        "confidence",
        "connection",
        "conversion"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
        }, 4000); // Change word every 4 seconds

        return () => clearInterval(intervalId);
    }, []);

    // Find the longest word to prevent layout shift
    const longestWord = "connection";

    return (
        <section className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-10 animate-fade-in-up flex flex-wrap justify-center items-baseline" style={{ animationDelay: '0.1s', letterSpacing: '-0.04em' }}>
                <span>Designing experiences that inspire&nbsp;</span>
                <span className="relative inline-block h-auto overflow-hidden text-accent dark:text-accent-light">
                    <span className="invisible whitespace-pre">{longestWord}</span>
                    <span
                        key={currentIndex}
                        className="absolute inset-0 animate-slide-in-from-bottom"
                    >
                        {rotatingWords[currentIndex]}
                    </span>
                </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Hi, I'm Vanessa — a senior product designer with over 8 years of experience. I specialize in designing for behavior, bridging the gap between user psychology and business growth.
            </p>
            <div className="max-w-4xl mx-auto mb-10 text-sm font-semibold text-accent dark:text-accent-light tracking-wider uppercase grid grid-cols-2 gap-4 md:flex md:flex-row md:space-y-0 md:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="whitespace-nowrap">20M+ USERS REACHED</span>
                <span className="hidden md:inline text-slate-300 dark:text-slate-600">•</span>
                <span className="whitespace-nowrap">↑ CONVERSION & ENGAGEMENT</span>
                <span className="hidden md:inline text-slate-300 dark:text-slate-600">•</span>
                <span className="whitespace-nowrap">40% FASTER DISCOVERY</span>
                <span className="hidden md:inline text-slate-300 dark:text-slate-600">•</span>
                <span className="whitespace-nowrap">APP RATINGS 4.5 → 4.8</span>
            </div>
            <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a href="#work" className="px-8 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105">View Selected Work</a>
                <a href="mailto:designvanessav@gmail.com" className="px-8 py-3 font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg shadow-lg transition-all transform hover:scale-105">Email Vanessa</a>
            </div>
        </section>
    );
};
const Work = ({ onSelectProject }: { onSelectProject: (id: string) => void }) => (
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
                  <Icon name="CheckIcon" className="w-5 h-5 mr-2 text-accent flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => onSelectProject(project.id)} className="font-semibold text-accent hover:text-accent-dark dark:hover:text-accent-light transition-colors text-left w-fit mt-auto">
              See case study →
            </button>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
const HowIWork = () => (
    <div className="bg-slate-100 dark:bg-slate-800/50">
        <Section id="process" className="py-20 md:py-32">
            <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-4">My process blends analytical rigor with creative experimentation.</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-16">How I Work</h2>
            <div className="grid md:grid-cols-4 gap-10 text-center">
                {PILLARS.map((pillar: Pillar) => (
                    <div key={pillar.title} className="flex flex-col items-center">
                        <div className="mb-4"><Icon name={pillar.icon} className="h-8 w-8 text-accent" /></div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{pillar.description}</p>
                    </div>
                ))}
            </div>
            <p className="text-center text-lg text-slate-600 dark:text-slate-400 mt-16">These methods are grounded in values that guide how I design, collaborate, and make decisions.</p>
        </Section>
    </div>
);
const Values = () => (
    <div className="bg-white dark:bg-darkBg">
        <Section id="values" className="py-20 md:py-32">
            <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-4">These principles shape every product decision — balancing empathy, clarity, and measurable impact.</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-12">Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VALUES.map((value: Value) => (
                    <div key={value.title} className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl flex items-start gap-4">
                        <div className="flex-shrink-0"><Icon name={value.icon} className="h-8 w-8 text-accent" /></div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{value.proof}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    </div>
);
const About = ({ onOpenModal }: { onOpenModal: () => void }) => (
    <Section id="about">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center">
                <img src="https://storage.googleapis.com/portfolio-asset-vanessa/IMG_2314%202.jpg" alt="Vanessa Carvalho" className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-xl" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vanessa Carvalho</h3>
                <p className="text-accent dark:text-accent-light">Senior Product Designer (E-commerce, Growth & Experience)</p>
            </div>
            <div className="md:w-2/3">
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">Senior Product Designer with 8+ years crafting data-informed, emotionally intelligent experiences for multi-brand marketplaces. I bridge behavioral insight, experimentation, and design systems to simplify complexity and scale impact across millions of users.</p>
                <div className="flex gap-4">
                    <a href="https://storage.googleapis.com/portfolio-asset-vanessa/Vanessa_Growth-Enterprise-CV.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-md transition-all transform hover:scale-105">Download Full Resume</a>
                    <button onClick={onOpenModal} className="px-6 py-3 text-sm font-semibold text-accent dark:text-accent-light hover:underline">Learn More</button>
                </div>
            </div>
        </div>
    </Section>
);

const AboutModal = ({ onClose }: { onClose: () => void }) => (
    <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
        onClick={onClose}
    >
        <div 
            className="bg-white/80 dark:bg-darkBg/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-2xl w-full mx-auto p-8 md:p-12 relative transform transition-all duration-300 scale-95 animate-fade-in-up overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
        >
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                aria-label="Close modal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">A Little More About Me</h2>
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4">
                <p>
                    My passion for technology started in my early years, tinkering with computers and building simple websites. This curiosity led me to learn to code, and I still enjoy building my own projects from scratch. It's a skill that gives me a deeper understanding of the technical constraints and possibilities in my design work.
                </p>
                <p>
                    I speak four languages, and my appetite for different cultures and diversity has taken me to many corners of the world. This exposure has been invaluable, enabling me to approach design with a global mindset and a deeper empathy for users from all walks of life.
                </p>
                <p>
                    I'm fascinated by behavioral economics and the psychology of decision-making. I leverage these principles to design meaningful experiences that not only meet user needs but also create a sense of connection and trust. It's not about overselling a product; it's about understanding the human on the other side of the screen and designing with them in mind.
                </p>
                <p className="font-semibold text-accent dark:text-accent-light">
                    Fun fact: I've won two company-wide hackathons! One for a discovery feed idea that personalized content based on user behavior, and another for improving our product detail pages with AI-powered personalization to suggest related items.
                </p>
            </div>
        </div>
    </div>
);

const Testimonials = () => (
    <Section id="testimonials">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-12">What Colleagues Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.slice(0, 3).map((testimonial: Testimonial) => (
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
            <h2 className="shimmer-text animate-shimmer text-4xl md:text-5xl font-extrabold tracking-tight mb-8 pb-2">
                Want to talk growth, emotion, and outcomes?
            </h2>
            <div className="flex justify-center gap-4 mb-12">
                <a href="mailto:designvanessav@gmail.com" className="px-8 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105">Email Vanessa</a>
                <a href="https://storage.googleapis.com/portfolio-asset-vanessa/Vanessa_Growth-Enterprise-CV.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg shadow-lg transition-all transform hover:scale-105">Download Resume</a>
            </div>
            <div className="flex justify-center gap-6 mb-8">
                <a href="https://www.linkedin.com/in/vanessa-castilho-decarvalho" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-accent transition-colors"><Icon name="LinkedInIcon" className="w-6 h-6" /></a>
                <a href="https://medium.com/@vanessadesign" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-slate-500 hover:text-accent transition-colors"><Icon name="MediumIcon" className="w-6 h-6" /></a>
            </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                <p>&copy; 2025 Vanessa Carvalho. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

// --- PROJECT DETAIL PAGE COMPONENTS ---
const DetailSection = ({ children, className = '' }: { children?: React.ReactNode; className?: string; }) => {
    const ref = useFadeIn();
    return <section ref={ref} className={`fade-in-section container mx-auto px-6 py-12 md:py-16 ${className}`}>{children}</section>;
};
const ProjectHero = ({ hero, onImageClick }: { hero: StandardProjectData['hero'], onImageClick: (artifacts: NarrativeArtifact[], index: number) => void }) => (
    <div className="bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-6 pt-20 pb-16 text-center">
            {hero.category && <p className="text-sm font-semibold text-accent dark:text-accent-light mb-2">{hero.category}</p>}
            <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">{hero.title}</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">{hero.subtitle}</p>
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-8 mb-12">
                {hero.impact.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-accent dark:text-accent-light">{metric.value}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">{metric.label}</p>
                    </div>
                ))}
            </div>
            {hero.imageComponent && 
                <button onClick={() => onImageClick([{ component: hero.imageComponent, caption: hero.title, hotspots: hero.hotspots }], 0)} className="w-full cursor-pointer group">
                    <div className="group-hover:scale-[1.02] transition-transform duration-300">
                         <Placeholder name={hero.imageComponent} />
                    </div>
                </button>
            }
            {hero.role && hero.team && hero.timeframe &&
                <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-sm mt-12">
                    <div><p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">My Role</p><p className="text-slate-600 dark:text-slate-400">{hero.role}</p></div>
                    <div><p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Team</p><p className="text-slate-600 dark:text-slate-400">{hero.team}</p></div>
                    <div><p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Timeframe</p><p className="text-slate-600 dark:text-slate-400">{hero.timeframe}</p></div>
                </div>
            }
        </div>
    </div>
);
const ProjectFooter = () => (
    <footer className="bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="shimmer-text animate-shimmer text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                Let's build what's next together.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:designvanessav@gmail.com" className="px-8 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105">Email Vanessa</a>
                <a href="https://storage.googleapis.com/portfolio-asset-vanessa/Vanessa_Growth-Enterprise-CV.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg shadow-lg transition-all transform hover:scale-105">Download Resume</a>
            </div>
        </div>
    </footer>
);

// --- Reusable Project Detail Components ---
const CarouselLightbox = ({ artifacts, onClose, initialIndex = 0 }: { artifacts: (NarrativeArtifact[] | UIShowcaseImage[]), onClose: () => void, initialIndex?: number }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scale, setScale] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [isPanning, setIsPanning] = useState(false);
    const [startPanX, setStartPanX] = useState(0);
    const [startPanY, setStartPanY] = useState(0);
    const [lastTouchDistance, setLastTouchDistance] = useState(0);
    const [lastTouchX, setLastTouchX] = useState(0);
    const [lastTouchY, setLastTouchY] = useState(0);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

    const currentArtifact = artifacts[currentIndex];
    const hasHotspots = currentArtifact.hotspots && currentArtifact.hotspots.length > 0;

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScale(1); setTranslateX(0); setTranslateY(0);
        setActiveHotspot(null);
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? artifacts.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScale(1); setTranslateX(0); setTranslateY(0);
        setActiveHotspot(null);
        const isLastSlide = currentIndex === artifacts.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const resetZoom = () => {
        if (hasHotspots) return;
        setScale(1);
        setTranslateX(0);
        setTranslateY(0);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (hasHotspots) return;
        if (scale > 1) {
            setIsPanning(true);
            setStartPanX(e.clientX - translateX);
            setStartPanY(e.clientY - translateY);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (hasHotspots || !isPanning) return;
        setTranslateX(e.clientX - startPanX);
        setTranslateY(e.clientY - startPanY);
    };

    const handleMouseUp = () => {
        if (hasHotspots) return;
        setIsPanning(false);
    };

    const handleMouseLeave = () => {
        if (hasHotspots) return;
        setIsPanning(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (hasHotspots) return;
        e.preventDefault();
        const scaleAmount = 0.1;
        const newScale = e.deltaY < 0 ? scale * (1 + scaleAmount) : scale / (1 + scaleAmount);
        
        if (newScale < 1) {
            resetZoom();
            return;
        }
        if (newScale > 5) return;

        setScale(newScale);
    };

    const handleDoubleClick = () => {
        if (hasHotspots) return;
        resetZoom();
    };

    const getDistance = (touches: TouchList) => {
        if (touches.length < 2) return 0;
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (hasHotspots) return;
        if (e.touches.length === 2) {
            setLastTouchDistance(getDistance(e.touches));
            setIsPanning(false);
        } else if (e.touches.length === 1 && scale > 1) {
            setIsPanning(true);
            setLastTouchX(e.touches[0].clientX);
            setLastTouchY(e.touches[0].clientY);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (hasHotspots) return;
        if (e.touches.length === 2) {
            const newDistance = getDistance(e.touches);
            if (lastTouchDistance === 0) {
                setLastTouchDistance(newDistance);
                return;
            }
            const scaleAmount = (newDistance - lastTouchDistance) / 200;
            let newScale = scale * (1 + scaleAmount);

            if (newScale < 1) newScale = 1;
            if (newScale > 5) newScale = 5;

            setScale(newScale);
            setLastTouchDistance(newDistance);
        } else if (e.touches.length === 1 && isPanning) {
            const dx = e.touches[0].clientX - lastTouchX;
            const dy = e.touches[0].clientY - lastTouchY;
            setTranslateX(translateX + dx);
            setTranslateY(translateY + dy);
            setLastTouchX(e.touches[0].clientX);
            setLastTouchY(e.touches[0].clientY);
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (hasHotspots) return;
        setIsPanning(false);
        setLastTouchDistance(0);
        if (scale < 1) resetZoom();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goToPrevious(e as any);
            if (e.key === 'ArrowRight') goToNext(e as any);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const handleHotspotClick = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setActiveHotspot(index);
    };

    const handleNextHotspot = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveHotspot(prev => {
            if (prev === null) return 0;
            return (prev + 1) % (currentArtifact.hotspots?.length || 0);
        });
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 text-5xl hover:text-white transition-colors z-20"
                aria-label="Close modal"
            >
                &times;
            </button>
            <div 
                ref={contentRef}
                className="relative w-full h-full flex flex-col items-center justify-center gap-4" 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onWheel={handleWheel}
                onDoubleClick={handleDoubleClick}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ cursor: scale > 1 && !hasHotspots ? (isPanning ? 'grabbing' : 'grab') : 'default' }}
            >
                <div className="relative flex items-center justify-center w-full max-w-5xl">
                    <div className="absolute left-0 p-4" style={{ width: '100px', height: '100px' }} onClick={e => e.stopPropagation()}>
                        {artifacts.length > 1 && <button onClick={goToPrevious} className="p-2 text-white/70 hover:text-white transition-colors rounded-full bg-black/20 hover:bg-black/40" aria-label="Previous image">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>}
                    </div>
                    
                    <div 
                        ref={imageRef}
                        className="relative w-full flex justify-center items-center"
                        style={{
                            transform: `scale(${scale}) translate(${translateX / scale}px, ${translateY / scale}px)`,
                            transition: isPanning ? 'none' : 'transform 0.1s ease-out',
                            transformOrigin: 'center center'
                        }}
                    >
                         <Placeholder name={currentArtifact.component} />
                         {hasHotspots && (
                            <div className="absolute top-0 left-0 w-full h-full">
                                {currentArtifact.hotspots?.map((hotspot, index) => (
                                    <button
                                        key={index}
                                        className="absolute w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-accent font-bold text-lg shadow-lg animate-pulse"
                                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                                        onClick={(e) => handleHotspotClick(e, index)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                         )}
                    </div>

                    <div className="absolute right-0 p-4" style={{ width: '100px', height: '100px' }} onClick={e => e.stopPropagation()}>
                        {artifacts.length > 1 && <button onClick={goToNext} className="p-2 text-white/70 hover:text-white transition-colors rounded-full bg-black/20 hover:bg-black/40" aria-label="Next image">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>}
                    </div>

                    {hasHotspots && activeHotspot !== null && (
                        <div
                            className="absolute bg-white/90 dark:bg-darkBg/90 backdrop-blur-sm rounded-lg shadow-2xl p-4 max-w-xs w-full text-left"
                            style={{
                                left: `${currentArtifact.hotspots?.[activeHotspot].x}%`,
                                top: `${currentArtifact.hotspots?.[activeHotspot].y}%`,
                                transform: 'translate(20px, 20px)'
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{currentArtifact.hotspots?.[activeHotspot].title}</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{currentArtifact.hotspots?.[activeHotspot].description}</p>
                            <button onClick={handleNextHotspot} className="w-full px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors">
                                Next
                            </button>
                        </div>
                    )}
                </div>
                <div className="hidden md:flex justify-center gap-2 mt-4 max-w-5xl overflow-x-auto pb-2 flex-shrink-0">
                    {artifacts.map((artifact, index) => (
                        <button 
                            key={index} 
                            className={`flex-shrink-0 w-20 h-16 border-2 rounded-md overflow-hidden ${index === currentIndex ? 'border-accent' : 'border-transparent'} hover:border-accent-light transition-colors`}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); resetZoom(); }}
                        >
                            <Placeholder key={artifact.component} name={artifact.component} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
                <div className="text-center text-white/80 max-w-3xl">
                    <p className="font-semibold text-lg">{currentArtifact.caption}</p>
                    <p className="text-sm mt-1">{currentIndex + 1} / {artifacts.length}</p>
                </div>
            </div>
        </div>
    );
};
const ProjectShowcase = ({ title, images, onImageClick }: { title: string; images: (UIShowcaseImage[]); onImageClick: (artifacts: UIShowcaseImage[], index: number) => void; }) => (
    <DetailSection>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white mb-12">{title}</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((image, index) => (
                <button 
                    key={index} 
                    onClick={() => onImageClick(images, index)}
                    className="block w-full text-left break-inside-avoid-column group relative z-10"
                >
                    <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                         <Placeholder name={image.component} />
                    </div>
                    <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">{image.caption}</p>
                </button>
            ))}
        </div>
    </DetailSection>
);
const ReflectionSection = ({ section }: { section: Omit<NarrativeSection, 'id' | 'artifacts'> }) => (
    <div className="bg-slate-100 dark:bg-slate-800/50">
        <DetailSection>
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    <span className="text-accent"><Icon name={'ReflectIcon'} /></span>
                    <h2>{section.title}</h2>
                </div>
                 <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 mx-auto">
                     {section.content.map((item, index) => {
                        if (typeof item === 'string') return <p key={index}>{item}</p>;
                        return null; // quotes not expected here, but handle defensively
                    })}
                </div>
            </div>
        </DetailSection>
    </div>
);
const ProjectOverview = ({ title, content }: { title: string, content: (string | {type: 'quote', text: string})[] }) => (
    <DetailSection>
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-6">{title}</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
                {content.map((item, i) => {
                    if (typeof item === 'string') return <p key={i}>{item}</p>;
                    if (item.type === 'quote') {
                        return (
                             <blockquote key={i} className="border-l-4 border-accent pl-4 my-6 text-slate-500 dark:text-slate-400">
                                <p className="text-xl italic">"{item.text}"</p>
                            </blockquote>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    </DetailSection>
);

// --- Standard Reusable Project Detail Component ---
const StandardProjectDetail = ({ project, onImageClick }: { project: StandardProjectData, onImageClick: (artifacts: (NarrativeArtifact[] | UIShowcaseImage[]), index: number) => void }) => {
    const [activeTabId, setActiveTabId] = useState(project.narrative[0].id);
    const activeSection = project.narrative.find(s => s.id === activeTabId) || project.narrative[0];
    
    const handleShowcaseClick = (images: UIShowcaseImage[], index: number) => {
        onImageClick(images, index);
    };
    
    const impactMetrics = {
        'boattrader-app-redesign': [
            { value: '40%', label: 'Faster Discovery' },
            { value: '+5%', label: 'Leads from Search' },
            { value: '↑', label: 'Search Conversion' }
        ],
        'seller-dashboard-redesign': [
            { value: '+42%', label: 'Return Visits' },
            { value: '+22%', label: 'Items Saved / User' },
            { value: '–18%', label: 'Bounce Rate' }
        ],
        'ai-workflow-templates': [
            { value: '50%', label: 'Faster Delivery' },
            { value: '+25%', label: 'A11Y Compliance' },
            { value: '-30%', label: 'UI Bugs' }
        ],
        'ai-image-search': [
            { value: '+28%', label: 'Visual Search Usage' },
            { value: '+17%', label: 'Conversion to View' },
            { value: '-15%', label: 'Search Abandonment' }
        ]
    };

    return (
      <div className="animate-fade-in">
          <main>
              <ProjectHero hero={project.hero} onImageClick={() => onImageClick([{ component: project.hero.imageComponent, caption: project.hero.title, hotspots: project.hero.hotspots }], 0)} />
              <ProjectOverview title={project.overview.title} content={project.overview.content} />
              
              <DetailSection className="!py-10 md:!py-12 bg-slate-100 dark:bg-slate-800/50">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                    <aside className="lg:col-span-3 mb-8 lg:mb-0 lg:ml-8">
                        <nav className="sticky top-24">
                           <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 hidden lg:block">Project Process</p>
                            <div className="relative">
                                <div className="hidden lg:block absolute left-4 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                                <div className="relative flex overflow-x-auto lg:overflow-visible lg:flex-col -mx-6 px-6 lg:p-0 space-x-2 lg:space-x-0 lg:space-y-2">
                                    {project.narrative.map((section, index) => {
                                        const isActive = section.id === activeTabId;
                                        const activeClasses = 'text-accent dark:text-accent-light';
                                        const inactiveClasses = 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white';
                                        return (
                                            <button 
                                                key={section.id} 
                                                onClick={() => setActiveTabId(section.id)}
                                                className="flex-shrink-0 lg:w-full flex items-center p-2 rounded-lg text-left transition-colors duration-200 group"
                                            >
                                                <div className={`z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${isActive ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white lg:ring-4 lg:ring-white dark:lg:ring-darkBg' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-300 dark:group-hover:bg-slate-600'}`}>
                                                    {index + 1}
                                                </div>
                                                <span className={`ml-3 lg:ml-4 font-semibold transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}>
                                                    {section.title.split('—')[0].trim()}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </nav>
                    </aside>

                    <div className="lg:col-span-9 min-h-[400px]">
                        <div key={activeSection.id} className="animate-fade-in">
                           <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">{activeSection.title}</h3>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
                                {activeSection.content.map((item, index) => {
                                    if (typeof item === 'string') {
                                        return <p key={index}>{item}</p>;
                                    }
                                    if (item.type === 'quote') {
                                        return (
                                            <blockquote key={index} className="border-l-4 border-accent pl-4 my-6 text-slate-500 dark:text-slate-400">
                                                <p className="text-xl italic">"{item.text}"</p>
                                                {item.author && <cite className="not-italic font-semibold block mt-2">— {item.author}</cite>}
                                            </blockquote>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                            {/* Render principles separately to apply grid layout */}
                            <div className="grid md:grid-cols-3 gap-4 mt-8">
                                {activeSection.content.map((item, index) => {
                                    if (item.type === 'principle') {
                                        return (
                                            <div key={index} className="my-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                                <p className="font-bold text-slate-900 dark:text-white">{item.title}</p>
                                                <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
                                {activeSection.content.map((item, index) => {
                                    if (item.type === 'post_principles_paragraph') {
                                        return <p key={index}>{item.text}</p>;
                                    }
                                    return null;
                                })}
                            </div>

                            {activeSection.id === 'deliver' && (
                               <div className="grid sm:grid-cols-3 gap-6 my-8 text-center">
                                    {impactMetrics[project.id].map(metric => (
                                        <div key={metric.label} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                                            <p className="text-3xl font-bold text-accent dark:text-accent-light mb-1">{metric.value}</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeSection.artifacts && activeSection.artifacts.length > 0 && (
                                <div className="mt-10">
                                    <button
                                        onClick={() => onImageClick(activeSection.artifacts || [], 0)}
                                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg shadow-lg transition-all transform hover:scale-105"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        Explore Artifacts
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
              </DetailSection>

              <ProjectShowcase 
                title={project.uiShowcase.title}
                images={project.uiShowcase.images}
                onImageClick={handleShowcaseClick}
              />
              
              <ReflectionSection section={project.reflection} />
              <ProjectFooter />
          </main>
      </div>
    );
};


// --- MAIN APP ---
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [carouselState, setCarouselState] = useState<{ artifacts: (NarrativeArtifact[] | UIShowcaseImage[]), initialIndex: number } | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);


  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
    document.documentElement.classList.toggle('light', !prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
        const newIsDark = !prev;
        document.documentElement.classList.toggle('dark', newIsDark);
        document.documentElement.classList.toggle('light', !newIsDark);
        return newIsDark;
    });
  };

  const handleSelectProject = (projectId: string) => {
      if (PROJECT_DETAILS[projectId]) {
        setSelectedProjectId(projectId);
        window.scrollTo(0, 0);
      } else {
        alert('Case study for this project is coming soon!');
      }
  };
  
  const handleBackToHome = () => {
      setSelectedProjectId(null);
      setTimeout(() => window.scrollTo(0, 0), 0);
  }

  const handleImageClick = (artifacts: (NarrativeArtifact[] | UIShowcaseImage[]), initialIndex: number) => {
    setCarouselState({ artifacts, initialIndex });
  };
  
  const selectedProjectData = selectedProjectId ? PROJECT_DETAILS[selectedProjectId] as StandardProjectData : null;
  
  let PageContent;
  if (selectedProjectData) {
      PageContent = <StandardProjectDetail project={selectedProjectData} onImageClick={handleImageClick} />;
  } else {
    PageContent = (
      <>
        <main>
          <Hero />
          <Work onSelectProject={handleSelectProject} />
          <HowIWork />
          <Values />
          <About onOpenModal={() => setIsAboutModalOpen(true)} />
          <Testimonials />
        </main>
        <Contact />
      </>
    );
  }

  return (
    <>
      <Header 
        isDarkMode={isDarkMode} 
        onThemeToggle={toggleTheme} 
        isProjectPage={!!selectedProjectId}
        onBack={handleBackToHome}
      />
      {PageContent}
      {carouselState && <CarouselLightbox artifacts={carouselState.artifacts} initialIndex={carouselState.initialIndex} onClose={() => setCarouselState(null)} />}
      {isAboutModalOpen && <AboutModal onClose={() => setIsAboutModalOpen(false)} />}
    </>
  );
}