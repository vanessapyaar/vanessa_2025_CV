import { Project, Pillar, Value, Testimonial, ProjectDetailData } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'boattrader-app-redesign',
    tag: 'Marketplace • Personalization & Discovery',
    title: 'Smart Search - Unified Discovery Across Devices',
    summary: 'Redesigned BoatTrader’s search experience with natural-language inputs, contextual filters, and intent detection. Reduced friction for shoppers, increased relevance, and improved overall conversion from search to product view.',
    impact: [
      '↓ Time-to-product by 40%',
      '↑ Search-to-item-view conversion',
      '↑ Qualified leads from search by 5%',
    ],
    thumbnailComponent: 'BoatTraderAppThumbnail',
  },
  {
    id: 'seller-dashboard-redesign',
    tag: 'Retention • Engagement Systems',
    title: 'Saved Boats Redesign → Higher Re-Engagement',
    summary: 'Re-imagined the saved items and search flow to foster return visits and user trust. Designed for effortless continuity across sessions, turning “browse moments” into lasting relationships.',
    impact: [
      '↑ Repeat visits and interactions',
      '↑ Items saved per user',
      '↓ Bounce rate on saved listings',
    ],
    thumbnailComponent: 'SellerDashboardThumbnail',
  },
  {
    id: 'ai-workflow-templates',
    tag: 'Enterprise • Design Ops & Consistency',
    title: 'Unified Design System → 50 % Faster Delivery',
    summary: 'Created a scalable cross-platform design system for Boats Group’s multi-brand ecosystem. Improved accessibility, visual consistency, and reduced development time for new feature launches.',
    impact: [
      '50 % faster time-to-launch',
      '↑ Accessibility compliance',
      '↓ UI bugs post-launch',
    ],
    thumbnailComponent: 'DesignSystemThumbnail',
  },
  {
    id: 'ai-image-search',
    tag: 'AI • Visual Discovery',
    title: 'AI Image Search → 4.8 App Ratings & Higher Engagement',
    summary: 'Launched an AI-powered visual search that lets users upload photos to find similar listings instantly. Boosted discovery engagement and user satisfaction through effortless, image-led browsing.',
    impact: [
      '↑ Visual search engagement',
      '↑ Conversion to product views',
      '↑ App rating +0.3 in 60 days',
    ],
    thumbnailComponent: 'AIImageSearchThumbnail',
  },
];

export const PILLARS: Pillar[] = [
    {
        icon: 'DiagnosisIcon',
        title: 'Behavioral Insight',
        description: 'Identify what drives emotion, trust, and decision-making throughout the shopping journey.',
    },
    {
        icon: 'SystemsThinkingIcon',
        title: 'Systems Thinking',
        description: 'Design frameworks and reusable patterns that ensure consistency across products and platforms.',
    },
    {
        icon: 'SpeedIcon',
        title: 'Experimentation at Speed',
        description: 'Run quick, measurable iterations that balance business outcomes and user needs.',
    },
    {
        icon: 'CollaborationIcon',
        title: 'Enterprise Collaboration',
        description: 'Align design, data, and engineering to deliver scalable experiences with shared impact.',
    }
];

export const PROCESS_STEPS = [
    'Identify', 'Hypothesize', 'Design', 'Test', 'Learn', 'Scale'
];

export const PROCESS_NOTES = [
    'Session replays + funnels to locate friction.',
    'Fogg & trust/commitment loops to frame behavior.',
    'Copy first; placement second; UI polish last.',
    'Guardrails > quick wins if risk to trust.',
    'Analyze results against hypothesis, share learnings widely.',
    'Gradual rollout with monitoring, prepare for next iteration.',
];

export const VALUES: Value[] = [
    {
        title: 'Design Integrity',
        proof: 'Balance innovation with clarity, consistency, and ethical data use.',
    },
    {
        title: 'Transparency',
        proof: 'Communicate design decisions clearly across teams and disciplines.',
    },
    {
        title: 'Scalability',
        proof: 'Design flexible frameworks that adapt across brands, products, and time.',
    },
    {
        title: 'Ownership',
        proof: 'Lead with accountability — measure outcomes, not outputs.',
    },
    {
        title: 'Collaboration',
        proof: 'Partner cross-functionally to transform complexity into shared clarity.',
    },
    {
        title: 'User Focus',
        proof: 'Anchor every decision in user needs, even when it challenges assumptions.',
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'Vanessa has a rare talent for turning ambiguous user friction into measurable, high-impact growth levers. Her focus on outcomes is relentless.',
        author: 'Jane Doe',
        role: 'Lead Product Manager',
    },
    {
        quote: 'Working with Vanessa means you get a partner who is as rigorous about data as she is about the user\'s emotional journey. Her experiment design is top-notch.',
        author: 'John Smith',
        role: 'Senior Data Scientist',
    },
];

export const PROJECT_DETAILS: { [key: string]: ProjectDetailData } = {
  'boattrader-app-redesign': {
    id: 'boattrader-app-redesign',
    hero: {
      title: 'Smart Search - Unified Discovery Across Devices',
      subtitle: '40% faster product discovery across mobile and desktop through natural language and intent detection.',
      impact: [
        { value: '40%', label: 'faster product discovery' },
        { value: '+5%', label: 'leads from search' },
        { value: '↑', label: 'search-to-view conversion' },
        { value: '↑', label: 'mobile + web parity achieved' },
      ],
      imageComponent: 'BoatTraderHeroImage',
      role: 'Lead UX Designer (Research → Visual Design)',
      team: 'PM · Eng Lead · 2 Devs · Me',
      timeframe: '6 weeks',
    },
    overview: {
        title: 'BoatTrader Smart Search',
        content: [
            'As Lead Designer, I reimagined how shoppers find boats across mobile and web by introducing a natural-language, intent-driven search experience. The goal: create a unified, frictionless journey that speeds up discovery and increases confidence — no matter where users start.',
            'The result was a modular, responsive Smart Search system that helped users get to relevant listings 40% faster across devices — driving measurable lifts in engagement, satisfaction, and conversion consistency.'
        ]
    },
    narrative: [
      {
        id: 'empathize',
        title: 'Empathize — What we heard',
        content: [
          { type: 'quote', text: '“I just want a small fishing boat… but I have no idea which make or model.”' },
          'That quote came from one of many first-time buyers we interviewed. It captured a growing pattern we were seeing in session replays and support logs: people were motivated, curious — and completely overwhelmed. They didn’t speak in brand or spec terms. They spoke in goals, feelings, constraints: “affordable,” “family-sized,” “close to me.”',
          'Yet the old search engine expected precision. Rigid filters and keyword matching forced shoppers to guess which category or brand fit their needs. Many bounced before ever seeing a relevant boat.',
          'Cross-device session data revealed similar pain points on both desktop and mobile, where rigid filters and inconsistent layouts created unnecessary cognitive load.',
        ]
      },
      {
        id: 'define',
        title: 'Define — What was broken',
        content: [
          'Search wasn’t broken in function — it was broken in feel. The experience rewarded product knowledge and punished uncertainty. Search-to-lead conversion was low. Time-to-discovery was long. And novice users often abandoned after typing queries like “tritoon with 150hp under $30k.”',
          'Search behavior also differed dramatically across devices — mobile users struggled with dense filter panels, while desktop users faced cognitive overload from too many simultaneous controls. The business needed to increase qualified leads and shopper engagement across devices.',
        ]
      },
      {
        id: 'ideate',
        title: 'Ideate — What we imagined',
        content: [
            'What if search behaved more like a conversation than a form?',
            'We mapped out a vision: a smart, natural-language-powered search bar that could detect intent — price, type, location, features — and convert that into instant, scannable results with consistent usability across mobile and desktop. It would combine the freedom of open input with the guidance of smart filters.',
            'We co-created early concepts with engineering and data science to ensure feasibility. And we scoped it as a modular component to integrate with other marketplaces later.',
            'Every pattern was designed responsively, ensuring the conversational experience felt equally natural on touch and keyboard inputs.'
        ]
      },
      {
        id: 'test',
        title: 'Prototype & Test — What we built and learned',
        content: [
            'We prototyped fast across web and mobile. A hybrid query bar with real-time chip suggestions replaced dropdown-heavy filter panels. As users typed ‘pontoon boat near Austin under 20k,’ the system detected boat type, region, and budget — and displayed relevant listings instantly, regardless of device.',
            'We ran moderated tests remotely and A/B tests post-MVP. Users described it as “so much easier” and “more human.”',
            { type: 'quote', text: '“It feels like the site actually understands me now.”', author: "— Usability test participant" },
            'We validated interaction parity across touch and desktop — ensuring filters, chips, and fallback logic behaved predictably on both.',
            'We adjusted phrasing, chip interactions, and fallback logic. Filters became helpful, not overwhelming.'
        ],
        artifacts: [
          { component: 'FiltersBefore', caption: 'BEFORE: Dense filter panels forced users to guess and scroll endlessly.' },
          { component: 'FiltersAfter', caption: 'AFTER: A guided, conversational flow with smart suggestions and clear confirmation.' },
          { component: 'ResultsBefore', caption: 'BEFORE: Small, text-heavy cards made it difficult to compare listings visually.' },
          { component: 'ResultsAfter', caption: 'AFTER: Large, scan-friendly image stacks with essential specs surfaced for quick evaluation.' },
          { component: 'DetailsBefore', caption: 'BEFORE: Key information was buried in long blocks of text on the details page.' },
          { component: 'DetailsAfter', caption: 'AFTER: A media-first layout with a clear visual hierarchy made details easy to absorb.' },
        ]
      },
      {
        id: 'deliver',
        title: 'Deliver — What changed',
        content: [
          'With Smart Search launched, shoppers reached listings 40% faster across devices. Search-to-view conversion increased, especially among new mobile users. Leads from search jumped 5%, and satisfaction scores rose in follow-ups.',
          'The design scaled across platforms and brands, using shared responsive components. Internally, it became a model for how personalization, accessibility, and systems thinking could work hand in hand.',
        ]
      },
    ],
    uiShowcase: {
        title: 'Visualizing the Change',
        images: [
            { component: 'FiltersAfter', caption: 'A guided, conversational flow with smart suggestions.' },
            { component: 'ResultsAfter', caption: 'Large, scan-friendly image stacks for quick evaluation.' },
            { component: 'DetailsAfter', caption: 'A media-first layout with a clear visual hierarchy.' },
            { component: 'FiltersBefore', caption: 'BEFORE: Dense, overwhelming filter panels.' },
            { component: 'ResultsBefore', caption: 'BEFORE: Small, text-heavy result cards.' },
            { component: 'DetailsBefore', caption: 'BEFORE: Buried information on details page.' },
        ]
    },
    reflection: {
        title: 'Reflect — Why it matters',
        content: [
          'This wasn’t just a UX win — it was a clarity win. We helped users feel seen, understood, and supported — on any device, from their very first query.',
          'It reminded me that great design starts by listening, scales through systems, and succeeds when cross-functional teams build toward the same outcome.',
        ]
      }
  },
  'seller-dashboard-redesign': {
    id: 'seller-dashboard-redesign',
    hero: {
      title: 'Saved Boats & Searches → Turning Interest into Loyalty',
      subtitle: 'Helping shoppers save once and return with confidence.',
      category: 'Marketplace · Retention & Personalization',
      role: 'Lead UX Designer (Research → Visual Design)',
      team: 'PM · Eng Lead · 2 Devs · Me',
      timeframe: '6 weeks',
      impact: [
        { value: '+42%', label: 'increase in return visits' },
        { value: '+22%', label: 'more items saved per user' },
        { value: '–18%', label: 'bounce rate on saved listings' },
      ],
      imageComponent: 'SavedBoatsHeroImage',
    },
    overview: {
        title: 'Saved Boats & Searches',
        content: [
            'As Lead Designer, I redesigned the saved items and search experience to turn casual browsing into return behavior. The goal: increase re-engagement by making it effortless for users to resume their shopping journey with confidence and emotional continuity.',
            'The result was a unified “Saved” hub and smarter interaction design that lifted repeat visits, boosted saved-item activity, and helped users feel more remembered — and more likely to return.'
        ]
    },
    narrative: [
      {
        id: 'empathize',
        title: 'Empathize — The Dreamer\'s Journey',
        content: [
            'I led the end-to-end UX process, from research and journey mapping to UI design and prototyping. My primary focus was to understand the emotional role of “saving” an item.',
            'Interviews with active and aspirational buyers revealed that saving was often tied to dreaming, comparing, or waiting for the right moment. We mapped the journey gaps where users saved something but failed to return, often due to friction, memory loss, or broken context.',
            'Usage pattern analysis helped us isolate the specific drop-off points after a user saved an item, giving us a clear target for intervention.',
        ]
      },
      {
        id: 'define',
        title: 'Define — A Lack of Continuity',
        content: [
            'Saved items were underused. Users frequently lost context between sessions or didn’t realize they could revisit previously viewed listings, leading to missed conversions and low re-engagement.',
            'Session replays showed users screenshotting boats or starting searches over entirely. Without memory or guidance, many simply gave up.',
            { type: 'quote', text: '“I found the perfect boat last night… but I can’t remember how I got there.”' },
            'The core problem was a lack of emotional and functional continuity. The experience felt transactional, not personal. Users didn\'t feel "remembered" by the app, which eroded trust and made re-engagement feel like a chore.',
            'Our goal was to transform the feature from a simple bookmarking tool into a cohesive, accessible hub that proactively re-engages users by remembering their preferences and context.',
        ]
      },
      {
        id: 'ideate',
        title: 'Ideate & Design — Building a Personal Connection',
        content: [
            'We unified Saved Boats and Saved Searches into one hub, introducing visual grouping by recency and listing type to provide a clear hierarchy.',
            'To build an emotional connection, I introduced microcopy like “Still dreaming of this?” or “We saved this for you.” This small change shifted the tone from passive storage to active assistance.',
            'We also designed responsive empty states to guide new users, reducing bounce and confusion. On the strategy side, we enabled saving across devices with login persistence and implemented triggers for re-engagement (like price drops) via in-app messaging.',
            { type: 'quote', text: '“It feels more personal — like the app gets what I’m looking for.”', author: "— Usability test participant" },
        ],
        artifacts: [
          { component: 'SavedTabBefore', caption: 'BEFORE: Disjointed saved items list with no clear organization.' },
          { component: 'SavedTabAfter', caption: 'AFTER: A unified hub for saved boats and searches, with clear hierarchy.' },
          { component: 'EmptyStateBefore', caption: 'BEFORE: A blank, unhelpful empty state.' },
          { component: 'EmptyStateAfter', caption: 'AFTER: A helpful empty state that guides new users.' },
        ]
      },
      {
        id: 'deliver',
        title: 'Deliver — A Measurable Lift in Loyalty',
        content: [
          'The redesigned experience created a significant, measurable impact on user retention and engagement.',
          'Users described the new flow as “easier to browse,” “more reliable,” and “less effort to keep track,” validating our focus on reducing cognitive load and building trust.',
        ]
      },
    ],
    uiShowcase: {
      title: 'Artifacts & Deliverables',
      images: [
        { component: 'SavedTabAfter', caption: 'AFTER: A unified hub for saved boats and searches, with clear hierarchy.' },
        { component: 'EmptyStateAfter', caption: 'AFTER: A helpful empty state that guides new users.' },
        { component: 'SavedSearchFlow', caption: 'Interaction flow mapping for saving a search and receiving notifications.' },
        { component: 'SavedTabBefore', caption: 'BEFORE: Disjointed saved items list with no clear organization.' },
        { component: 'EmptyStateBefore', caption: 'BEFORE: A blank, unhelpful empty state.' },
        { component: 'MicrocopyExamples', caption: 'Examples of emotional microcopy and push notification messaging.' },
      ]
    },
    reflection: {
        title: 'Outcome: Building Trust Through Continuity',
        content: [
          'This project strengthened the platform’s retention loop by bridging cognitive and emotional design. Users felt remembered, understood, and motivated to return — all without forcing more effort. It wasn’t just about features; it was about trust.',
        ]
    }
  },
  'ai-workflow-templates': {
    id: 'ai-workflow-templates',
    hero: {
      title: 'Unified Design System → 50 % Faster Delivery',
      subtitle: 'A scalable, multi-brand design system to accelerate delivery and ensure consistency.',
      category: 'Multi-Brand • Design Ops & Consistency',
      role: 'Lead UX Designer (Architecture & Governance)',
      team: 'Product · Front-end Leads · Me',
      timeframe: '12 weeks (Phase 1)',
      impact: [
        { value: '50%', label: 'faster time-to-launch' },
        { value: '+25%', label: 'accessibility compliance' },
        { value: '–30%', label: 'UI bugs post-launch' },
      ],
      imageComponent: 'DesignSystemHeroImage',
    },
    overview: {
        title: 'Cross-Platform Design System',
        content: [
            'I built and led the design of a unified, scalable design system supporting multiple consumer marketplaces at Boats Group. The system standardized components, behaviors, and accessibility patterns across brands, reducing design debt and accelerating feature launches without compromising brand identity.',
            'The challenge was that each brand (Boat Trader, YachtWorld, Boats.com) had diverging UI libraries and inconsistent accessibility standards. Designers and engineers duplicated efforts, increasing delivery time and eroding visual cohesion across platforms.'
        ]
    },
    narrative: [
      {
        id: 'define',
        title: 'Define — Auditing the Fragmentation',
        content: [
            'My first step was to own the UX architecture and visual language foundations. I conducted a full audit of all live product surfaces across both web and mobile apps for all three brands.',
            'This led to the creation of a comprehensive component inventory which revealed a critical insight: there was a 70% duplication of components across the brands. This was the key data point we needed to make the case for a unified system.',
        ]
      },
      {
        id: 'ideate',
        title: 'Ideate — Building a Flexible Foundation',
        content: [
            'In partnership with product and front-end leads, we defined the core of the system. We established design principles focused on flexibility and scalability.',
            'We defined core design tokens for color, typography, and spacing. This was crucial to achieve brand flexibility within a shared structure. It allowed each brand to feel unique while using the same underlying components.',
            'We also established WCAG 2.1 AA contrast and motion guidelines as a baseline for all components, baking accessibility into the system from the start.',
        ],
        artifacts: [
          { component: 'TokenDocumentation', caption: 'Documentation for design tokens (color, spacing, typography).' },
          { component: 'ComponentLibrary', caption: 'Examples of components with brand variants.' },
        ]
      },
      {
        id: 'build',
        title: 'Build — Governance & Tooling',
        content: [
            'To ensure the system was adopted and maintained, we introduced robust governance and tooling.',
            'We built out comprehensive Figma libraries with clear naming conventions and established design review checkpoints to ensure consistency.',
            'A versioning model was created, allowing local brand teams to customize components for their specific needs while maintaining parity with the global system. This balance was key to getting buy-in from all teams.'
        ]
      },
      {
        id: 'deliver',
        title: 'Deliver — Rollout & Adoption',
        content: [
          'The rollout was a collaborative effort. We partnered closely with engineers to integrate the new system via a shared Storybook and React component library.',
          'To drive adoption, I hosted onboarding sessions and created a "Design System Playbook" for cross-team use. This documentation was critical for success.',
          'The impact was clear and immediate. Within 3 months, 90% of designers were using the system, and we saw measurable improvements in launch speed, accessibility, and quality.',
        ]
      },
    ],
    uiShowcase: {
      title: 'System Artifacts',
      images: [
        { component: 'ComponentLibrary', caption: 'A snapshot of the unified component library in Figma.' },
        { component: 'TokenDocumentation', caption: 'Documentation showing how design tokens are applied across brands.' },
        { component: 'BrandVariants', caption: 'An example of a single component with variants for Boat Trader and YachtWorld.' },
        { component: 'AccessibilityGuidelines', caption: 'Documentation outlining the accessibility standards for color contrast and focus states.' },
      ]
    },
    reflection: {
        title: 'Outcome: From Fragmentation to a Shared Ecosystem',
        content: [
          'This initiative transformed Boats Group’s fragmented design efforts into a shared ecosystem of reusable, configurable components. It also reinforced accessibility, velocity, and design integrity across the entire product suite.',
        ]
    }
  },
  'ai-image-search': {
    id: 'ai-image-search',
    hero: {
      title: 'AI Image Search → 4.8 App Ratings & Higher Engagement',
      subtitle: 'Tap. Upload. Discover. Visual search that feels effortless — and smart.',
      category: 'AI • Visual Discovery',
      role: 'Lead UX Designer (Product & ML Collaboration)',
      team: 'Product · ML Eng · 2 Devs · Me',
      timeframe: '8 weeks',
      impact: [
        { value: '+28%', label: 'visual search engagement' },
        { value: '+17%', label: 'product view conversion' },
        { value: '4.8', label: 'app rating in 60 days' },
      ],
      imageComponent: 'AIImageSearchHeroImage',
    },
    overview: {
        title: 'AI-Powered Visual Discovery',
        content: [
            'As Lead Designer, I partnered with product and ML teams to design and launch a visual search feature that lets users upload or snap a photo to find similar boats instantly. The goal: reduce friction, enable intuitive discovery, and spark curiosity through image-led interaction.',
            'The release lifted visual-search usage, boosted product-view conversion, and contributed to a +0.3 jump in app rating within 60 days.'
        ]
    },
    narrative: [
      {
        id: 'define',
        title: 'Define — The Limits of Language',
        content: [
            'Shoppers struggled to describe what they wanted — especially first-time buyers unfamiliar with model names or specs. Filters were intimidating, and many abandoned search mid-flow.',
            { type: 'quote', text: '“I saw a boat I loved… but had no idea what to search for.”' },
            'We needed a visual-first, low-friction way to turn curiosity into discovery.'
        ]
      },
      {
        id: 'ideate',
        title: 'Ideate — A Visual-First Solution',
        content: [
            'The solution was an AI-powered visual search experience integrated directly into the app: users could upload or capture a photo, and the system returned visually similar listings using ML-driven tagging and spec matching.',
            'Key UX improvements included a drop-in entry point on Home and Search, an upload preview with contextual feedback like “Finding similar boats…”, and confidence tags such as “95% hull match” to build trust. We also included post-filter refinement to give users more control.',
        ],
        artifacts: [
          { component: 'AIEntryPoint', caption: 'The visual search entry point was tested in multiple high-traffic locations.' },
          { component: 'AIUploadPreview', caption: 'The upload preview screen provided instant feedback to the user.' },
          { component: 'AIMatchResults', caption: 'Match results included confidence tags and options for refinement.' },
        ]
      },
      {
        id: 'test',
        title: 'Test — Iterating for Trust',
        content: [
            'We rigorously tested multiple entry points, including a persistent camera icon, a CTA modal, and a bottom navigation item, to find the most intuitive placement.',
            'Usability testing on the preview UI helped us refine the copy to better clarify how matches were found, which was crucial for building user trust.',
            'We also added an in-session feedback prompt after a search. This small addition significantly increased perceived accuracy and user confidence in the feature. Cross-device QA ensured visual parity and performance consistency.'
        ]
      },
      {
        id: 'deliver',
        title: 'Deliver — Inspiring Discovery',
        content: [
          'The feature launch was a success, driving significant lifts in engagement and conversion. It proved to be particularly popular with new and novice buyers, lowering the barrier to entry for boat discovery.',
        ]

      },
    ],
    uiShowcase: {
      title: 'Key Feature Moments',
      images: [
        { component: 'AIEntryPoint', caption: 'A clear and accessible entry point for visual search.' },
        { component: 'AIUploadPreview', caption: 'The upload preview provided instant feedback and managed expectations.' },
        { component: 'AIMatchResults', caption: 'Results page with confidence scores and refinement filters.' },
        { component: 'AIFeedbackPrompt', caption: 'In-session feedback prompt to improve trust and accuracy.' },
      ]
    },
    reflection: {
        title: 'Reflection: Trust & Transparency in AI',
        content: [
          'Great AI UX isn’t about automation — it’s about trust and transparency. We turned a technical feature into a discovery moment that felt human, immediate, and inspiring.',
        ]
    }
  },
};