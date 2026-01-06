import { Project, Pillar, Value, Testimonial, ProjectDetailData } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'first-time-user-plan-choice',
    tag: 'Pricing Strategy · Conversion Optimization',
    title: 'Helping First-Time Users Choose the Right Plan',
    summary: 'Reducing hesitation and improving conversion through pricing clarity and experimentation.',
    impact: [
      '+6.8% lift in overall conversion',
      '↑ selection of higher-value plans',
      '↓ abandonment at plan selection',
    ],
    thumbnailComponent: 'PricingPlanThumbnail',
  },
  {
    id: 'boattrader-app-redesign',
    tag: 'Marketplace UX · Product Discovery',
    title: 'From Hesitation to Action → Redesigning Search UX',
    summary: 'Redesigned BoatTrader’s search, filters, and product detail experience to reduce friction and boost engagement.',
    impact: [
      '2× session time on mobile',
      '+60% buyer inquiries',
      '+20% saved products per session',
    ],
    thumbnailComponent: 'BoatTraderAppThumbnail',
  },
  {
    id: 'seller-dashboard-redesign',
    tag: 'Retention • Engagement Systems',
    title: 'Saved Boats Redesign → Higher Re-Engagement',
    summary: 'Re-imagined the saved items and search flow to foster return visits and user trust. Designed for effortless continuity across sessions.',
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
        description: 'Understand what drives emotion, trust, and decision-making across the shopping journey.',
    },
    {
        icon: 'SystemsThinkingIcon',
        title: 'Systems Thinking',
        description: 'Create scalable frameworks and reusable patterns for cross-platform consistency.',
    },
    {
        icon: 'SpeedIcon',
        title: 'Experimentation at Speed',
        description: 'Run rapid, measurable tests to balance user needs and business goals.',
    },
    {
        icon: 'CollaborationIcon2',
        title: 'Enterprise Collaboration',
        description: 'Align design, data, and engineering to deliver scalable impact.',
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
        icon: 'SafetyIcon',
        title: 'Design Integrity',
        proof: 'Balance innovation with clarity and ethical data use.',
    },
    {
        icon: 'TransparencyIcon',
        title: 'Transparency',
        proof: 'Share context and rationale openly across teams.',
    },
    {
        icon: 'ScalabilityIcon',
        title: 'Scalability',
        proof: 'Build frameworks that grow with products and teams.',
    },
    {
        icon: 'OwnershipIcon',
        title: 'Ownership',
        proof: 'Measure outcomes, not outputs — and act with accountability.',
    },
    {
        icon: 'CollaborationIcon',
        title: 'Collaboration',
        proof: 'Turn cross-functional complexity into shared clarity.',
    },
    {
        icon: 'UserFocusIcon',
        title: 'User Focus',
        proof: 'Anchor every decision in real human needs.',
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
    {
        quote: 'Her ability to synthesize complex user research into actionable design principles is unmatched. She is a true advocate for the user.',
        author: 'Emily White',
        role: 'UX Researcher',
    },
    {
        quote: 'Vanessa is a master of her craft. She consistently delivers elegant solutions to complex problems, and her attention to detail is second to none.',
        author: 'Michael Brown',
        role: 'Engineering Manager',
    },
    {
        quote: 'I was consistently impressed by Vanessa\'s ability to lead design discussions and build consensus across teams. She is a natural collaborator.',
        author: 'Sarah Green',
        role: 'Director of Product',
    },
];

export const PROJECT_DETAILS: { [key: string]: ProjectDetailData } = {
  'first-time-user-plan-choice': {
    id: 'first-time-user-plan-choice',
    hero: {
      title: 'Helping First-Time Users Choose the Right Plan',
      subtitle: 'Reducing hesitation and improving conversion through pricing clarity and experimentation.',
      category: 'Pricing Strategy · Conversion Optimization',
      role: 'Senior Product Designer',
      team: 'Product · Engineering · Marketing',
      timeframe: '8 weeks',
      impact: [
        { value: '+6.8%', label: 'lift in overall conversion' },
        { value: '↑', label: 'selection of higher-value plans' },
        { value: '↓', label: 'abandonment at plan selection' },
      ],
      imageComponent: 'PricingPlanHeroImage',
      hotspots: [
        { x: 10, y: 20, title: 'Card-Based Plan Layouts', description: 'Simplified comparison and reduced cognitive load.' },
        { x: 50, y: 50, title: 'Tiered Visual Hierarchy', description: 'Guided attention to the best-value option.' },
        { x: 80, y: 70, title: 'Clear Value Differentiation', description: 'Made premium benefits easy to scan and understand.' }
      ],
    },
    overview: {
        title: 'Context & Problem',
        content: [
            'Boats Group operates a large B2C marketplace where individuals can list and sell their boats directly through a paid FSBO (For Sale By Owner) flow.',
            'First-time sellers entering this experience arrive with high intent — they want to list their boat — but must choose a package before completing setup.',
            'This project focused on improving plan clarity and decision confidence for first-time users encountering the FSBO pricing step for the first time.'
        ],
        artifact: { component: 'OverviewDiagram', caption: 'User drop-off funnel.' }
    },
    narrative: [
      {
        id: 'role',
        title: 'My Role',
        content: [
            'Senior Product Designer, owning the end-to-end experience for plan selection and checkout.',
            'I partnered closely with Product, Engineering, and Marketing to: Identify behavioral friction, Design and test improvements, and Measure impact through experimentation.'
        ],
        artifacts: []
      },
      {
        id: 'insight',
        title: 'Key Insight',
        content: [
            'Behavioral data (analytics, heatmaps, session recordings) revealed three core friction points:',
            { type: 'principle', icon: 'DiagnosisIcon', title: 'High cognitive load', description: 'Users had to manually compare overlapping features across plans.' },
            { type: 'principle', icon: 'Eye', title: 'No guided choice', description: 'All plans carried equal visual weight, increasing hesitation.' },
            { type: 'principle', icon: 'Key', title: 'Weak value differentiation', description: 'Premium benefits were not immediately clear or easy to scan.' },
            'As a result, users stalled or defaulted to the safest, lowest-commitment option.'
        ],
        artifacts: []
      },
      {
        id: 'hypothesis',
        title: 'Hypothesis',
        content: [
            'If we reduced comparison effort, clarified value differences, and guided attention during plan selection, users would commit more confidently—improving both conversion and plan quality.',
        ],
        artifacts: []
      },
      {
        id: 'design',
        title: 'Design Approach',
        content: [
            'I explored multiple approaches focused on scannability, hierarchy, and decision support:',
            'Card-based plan layouts to reduce reading and scanning effort.',
            'Tiered visual hierarchy to highlight the best-value option without forcing choice.',
            'Feature table comparisons, ultimately rejected for recreating comparison fatigue.',
            'Based on usability risk and stakeholder feedback, we moved forward with two card-based variants.',
        ],
        artifacts: [
            { component: 'DesignApproachA', caption: 'Exploration A: Card-based layouts.' },
            { component: 'DesignApproachB', caption: 'Exploration B: Tiered visual hierarchy.' },
            { component: 'DesignApproachC', caption: 'Exploration C: Feature table comparison.' },
        ]
      },
      {
        id: 'experimentation',
        title: 'Experimentation',
        content: [
            'Both variants were tested through A/B experiments at scale.',
            'We measured: Overall funnel conversion, Plan selection distribution, and Drop-off at the pricing step.',
            'Each experiment was tied to a clear behavioral hypothesis.',
        ],
        artifacts: [
            { component: 'ExperimentationControl', caption: 'Control version of the pricing page.' },
            { component: 'ExperimentationVariantB', caption: 'Variant B with guided choice.' },
        ]
      },
      {
        id: 'results',
        title: 'Results',
        content: [
            'The experiments confirmed the hypothesis.',
            'Beyond revenue impact, users spent less time hesitating and reached checkout more decisively.'
        ],
        metricsGrid: [
            { value: '+6.8%', label: 'lift in overall conversion' },
            { value: '↑', label: 'selection of higher-value plans' },
            { value: '↓', label: 'abandonment at plan selection' },
        ]
      },
    ],
    uiShowcase: {
      title: 'Solution & Results',
      images: [
        { component: 'PricingPlanSolutionScreenshot', caption: 'The new design guides users with a clear hierarchy and highlights the best-value plan, reducing hesitation.' },
        { component: 'PricingPlanSolutionScreenshot', caption: 'Tooltips provide extra clarity on key features.' },
        { component: 'PricingPlanSolutionScreenshot', caption: 'The checkout flow is now more streamlined.' },
        { component: 'PricingPlanSolutionScreenshot', caption: 'Mobile view of the new pricing page.' },
      ]
    },
    reflection: {
        title: 'Outcome & Takeaways',
        content: [
          'The pricing experience shifted from a manual comparison exercise to a guided decision flow, helping first-time users understand value quickly and choose a plan with confidence rather than pressure.',
          'This project reflects how I approach growth design problems: Start from observed user behavior, reduce friction before adding persuasion, use experimentation to validate decisions, and optimize for confidence, not just clicks.'
        ]
    }
  },
  'boattrader-app-redesign': {
    id: 'boattrader-app-redesign',
    hero: {
      title: 'BoatTrader Search Redesign: From Filters to Product Pages',
      subtitle: 'Streamlining exploration into confident action across devices',
      impact: [
        { value: '+60%', label: 'buyer inquiries' },
        { value: '2x', label: 'session time' },
        { value: '+20%', label: 'saved products per session' },
        { value: '4.5 to ↑4.8', label: 'app store ratings' },
      ],
      imageComponent: 'BoatTraderHeroImage',
      role: 'Lead UX Designer (Research → Visual Design)',
      team: 'PM · Eng Lead · 2 Devs · Me',
      timeframe: '6 weeks',
    },
    overview: {
        title: 'Project Overview',
        content: [
            'BoatTrader is the largest marine marketplace in the U.S., serving over 20 million monthly users across app and web.',
            'Despite that scale, most shoppers struggled to move beyond early exploration. Filters were too rigid, scanning was overwhelming, results lacked clarity, and key listing info was buried. Users were dropping off before saving or contacting sellers.',
            'I led the end-to-end redesign of BoatTrader’s discovery experience—reworking filters, results, and product pages to reduce friction and increase conversion across devices.'
            
        ]
    },
    narrative: [
      {
        id: 'empathize',
        title: 'Empathize — Understanding the Friction',
        content: [
          { type: 'quote', text: 'I wasn’t even sure what to pick. I gave up before I found anything.' },
          'Early interviews and analytics revealed a common frustration: shoppers felt lost at the very start of discovery.',
          'Industry benchmarks confirmed the pattern: 78% of mobile retail sites underperform on product listing UX, and 57% offer poor filtering experiences. Our own data echoed this—low filter engagement and high bounce rates right after search.',
          'Users felt pressured to apply precise filters without guidance, while cramped mobile layouts made details hard to scan. Key specs were buried, slowing confident users and discouraging new ones. In short, discovery wasn’t broken—but it created friction.',
        ],
        artifacts: [
            { component: 'BoatTraderEmpathizeArtifact1', caption: 'User interview insights and session replay heatmaps.' },
            { component: 'BoatTraderEmpathizeArtifact2', caption: 'Old search results page, showing information overload.' },
            { component: 'BoatTraderEmpathizeArtifact3', caption: 'Old details screen, showing dense information layout.' }
        ]
      },
      {
        id: 'define',
        title: 'Define — Uncovering the Gaps',
        content: [
          'The journey worked in parts, but not together. Filters overwhelmed upfront. Results were cluttered and hard to compare. Product pages buried key info and surfaced CTAs too late.',
          'Each screen added friction instead of helping users move forward. The full flow assumed shoppers knew what they wanted — but most needed help narrowing in.',
          'My goal was to design a discovery system that simplified decision-making across devices — removing friction, building confidence, and creating space for exploration.'
        ],
        artifacts: [
            { component: 'BoatTraderDefineArtifact1', caption: 'Early wireframes and user flow diagrams.' }
        ]
      },
      {
        id: 'ideate',
        title: 'Ideate — Designing for Momentum',
        content: [
            'I reframed the flow around progressive guidance, speed, and clarity—especially for mobile users who felt the most friction.',
            'The new experience prioritized:',
            { type: 'principle', title: 'Search results designed for scanning', description: 'Bigger images, clear spec tags, and visual hierarchy made product cards easier to browse and skim.' },

            { type: 'principle', title: 'Filters that guide, not gatekeep', description: 'Smart defaults, chips, and sliders replaced long dropdowns. As users typed or tapped, only relevant filters appeared.' },
             { type: 'principle', title: 'Product pages that drive action', description: 'Key specs surfaced early. Visuals stacked for quick review. CTAs were placed where intent peaks — no more buried “Buy” buttons.' },
            { type: 'post_principles_paragraph', text: 'Everything was built into our design system to ensure consistency and easy adoption across brands.' }
        ],
        artifacts: [
          {
            component: 'BoatTraderIdeateArtifact',
            caption: 'Initial concepts for the search results page, focusing on visual hierarchy and scannability.',
            hotspots: [
              { x: 10, y: 20, title: 'Card-Based Results', description: 'Explorations of different card styles to optimize for scannability and visual appeal.' },
              { x: 50, y: 50, title: 'Visual Hierarchy', description: 'Experiments with typography and spacing to guide the user\'s eye and prioritize information.' },
              { x: 80, y: 70, title: 'Data Density', description: 'Testing different levels of information density to balance clarity and completeness.' }
            ]
          },
          {
            component: 'ProductPageExplorations',
            caption: 'Further explorations of the product details page, experimenting with different image displays and information density.'
          },
          {
            component: 'FilterPageExplorations',
            caption: 'Early concepts for the filter page, exploring different layouts and interaction models.'
          }
        ]
      },
      {
        id: 'test',
        title: 'Prototype & Test — Validating What Matters',
        content: [
            'I prototyped new flows and tested them across mobile and desktop. Users immediately noticed the difference: filtering felt faster, scanning was easier, and choosing felt more confident.',
            { type: 'quote', text: 'It feels like the app is finally helping me narrow things down — not making me work for it.', author: "Usability test participant" },
            'Usability tests and A/B experiments confirmed improvements in speed, clarity, and engagement. We refined chips, tweaked copy, and optimized layouts for thumb-friendly interactions.',
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
        title: 'Deliver — Scaled for Growth',
        content: [
          'Once live, the redesign delivered clear results.',
          'Most importantly, users reached decisions faster and felt more in control. Internally, the new patterns became a benchmark for how behavioral UX and scalable systems can drive measurable growth across brands.',
        ],
        metricsGrid: [
          { value: '+60%', label: 'buyer inquiries' },
          { value: '2x', label: 'session time' },
          { value: '+20%', label: 'saved products per session' },
          { value: '4.5 to ↑4.8', label: 'app store ratings' },
        ]
      },
    ],
    uiShowcase: {
        title: 'Key Changes by Screen',
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
        title: 'Outcomes & Takeaways',
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
        ],
        artifacts: [
            { component: 'GenericEmpathizeArtifact', caption: 'User journey map and interview insights.' }
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
        ],
        artifacts: [
            { component: 'GenericDefineArtifact', caption: 'User flow diagrams and competitive analysis.' }
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
        ],
        artifacts: [
            { component: 'GenericDefineArtifact', caption: 'UI audit and component inventory.' }
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
        ],
        artifacts: [
            { component: 'GenericDefineArtifact', caption: 'User research findings and problem statement.' }
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