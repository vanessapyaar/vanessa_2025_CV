import { Project, Pillar, Value, Testimonial, ProjectDetail } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'broker-profile-trust-system',
    tag: 'Trust System • 0→1',
    title: 'Broker Profile → Trust & Accountability System',
    summary: 'Turned anonymity into identity with credentials, badges, and responsiveness indicators—building emotional safety where decisions happen.',
    impact: [
      '↑ qualified leads & follow-through',
      '↑ repeat interactions with verified/responsive profiles',
      'Scalable trust layer integrated near CTAs',
    ],
    alignmentChip: 'Maps to organizer credibility + elected officials responsiveness scores',
    thumbnailComponent: 'Project1Thumbnail',
  },
  {
    id: 'publish-reassurance',
    tag: 'Activation • Experiment',
    title: '“Publish” Reassurance → +12% Completions',
    summary: 'Resolved last-mile hesitation with a clear ‘what happens next’ message at the decision cliff.',
    impact: [
      '+12% completions in 32 days',
      'Surgical copy nudge; low engineering cost',
      'Scaled across platforms',
    ],
    alignmentChip: 'Maps to petition publish reassurance',
    thumbnailComponent: 'Project2Thumbnail',
  },
  {
    id: 'verified-badges',
    tag: 'Legitimacy • Trust Signal',
    title: 'Verified Badges on Detail Pages → +15% Engagement',
    summary: 'Added transparent verification near primary CTAs to reduce uncertainty and increase confident action.',
    impact: [
      '+15% engagement on verified entities',
      'Time on page & lead starts up',
      'Ethical guardrails: ‘why verified’ explainer',
    ],
    alignmentChip: 'Maps to organizer/campaign verification',
    thumbnailComponent: 'Project3Thumbnail',
  },
  {
    id: 'ai-image-search',
    tag: '0→1 • Accessibility',
    title: 'AI Image Search (Mobile) → Ratings 4.5 → 4.8',
    summary: 'Lowered the ability bar with ‘show, don’t tell’ visual input—making discovery intuitive for casual users.',
    impact: [
      'App ratings 4.5 → 4.8 (60 days)',
      '↑ search engagement & retention',
      'Robust error/permission states',
    ],
    alignmentChip: 'Maps to AI-guided discovery & intent starters',
    thumbnailComponent: 'Project4Thumbnail',
  },
];

export const PILLARS: Pillar[] = [
    {
        icon: 'DiagnosisIcon',
        title: 'Behavioral Diagnosis',
        description: 'Find the decision cliff: motivation vs ability vs prompt.',
    },
    {
        icon: 'SafetyIcon',
        title: 'Emotional Safety',
        description: 'Design for confidence, clarity, and fairness at high-stakes moments.',
    },
    {
        icon: 'SpeedIcon',
        title: 'Experiments at Speed',
        description: 'Right-sized tests; variant ethics; measurable outcomes.',
    },
    {
        icon: 'BetsIcon',
        title: '0→1 Bets',
        description: 'De-risked paths from concept to value.',
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
        title: 'Ambitious Change',
        proof: '0→1 systems (trust layer, AI inputs) shipped with clear success criteria.',
    },
    {
        title: 'Responsibility',
        proof: 'Own outcomes and learnings; kill variants that risk user trust.',
    },
    {
        title: 'Openness',
        proof: 'Design neutrality: enable fair participation, avoid coercion.',
    },
    {
        title: 'Candid Collaboration',
        proof: 'Challenge ideas, not people—data + story.',
    },
    {
        title: 'Connection',
        proof: 'Keep experimentation human; show impact to users.',
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

export const PROJECT_1_DETAIL: ProjectDetail = {
    id: 'broker-profile-trust-system',
    breadcrumb: 'Broker Profile → Trust & Accountability',
    hero: {
        title: 'Trust & Accountability Where Decisions Happen',
        subtitle: 'A new Broker Profile with credentials, verified badges, and responsiveness indicators that turns anonymity into identity and doubt into confidence.',
        stats: [
            '↑ Qualified leads (quality over volume)',
            '↑ Repeat interactions with verified/responsive brokers',
            '0→1 system shipped with guardrails',
        ],
    },
    snapshot: [
        { label: 'Role', value: 'End-to-end product design (strategy → UX → UI → test planning)' },
        { label: 'Context', value: 'Boats Group • Marketplace (20M+ users) • PDP/contact funnels' },
        { label: 'Team', value: 'PM, Eng, Data Science, Legal (verification policy)' },
        { label: 'Timeline', value: '0→1 design; phased rollout' },
        { label: 'My Focus', value: 'Trust infrastructure, placement strategy, behavior-first copy, ethics guardrails' },
    ],
    problemInsight: {
        problem: 'Users hesitated to contact brokers due to low emotional safety—uncertainty about identity, credibility, and responsiveness.',
        evidence: [
            { type: 'Session', text: 'Session replays: hover/retreat near contact CTAs' },
            { type: 'Qual', text: 'Qual feedback: “Not sure if they’ll respond / who’s behind this listing”' },
            { type: 'Data', text: 'Data: high views, soft conversion near contact' },
        ],
        models: [
            { model: 'Fogg', text: 'reduce uncertainty → increase Ability' },
            { model: 'Trust loops', text: 'consistent positive experiences → higher willingness to act' },
            { model: 'Social proof', text: 'credible signals near decision points' },
        ],
    },
    designSystem: {
        elements: [
            { title: 'Identity & Credentials', description: 'broker name, license/credentials preview → “view details”' },
            { title: 'Verified Status', description: 'badge + ‘why verified’ explainer modal; transparent criteria' },
            { title: 'Responsiveness Meter', description: 'average reply time (e.g., “Typically responds in ~2h”)' },
            { title: 'Activity History', description: 'recent listings, reviews/acknowledgments' },
            { title: 'Placement Near CTAs', description: 'badges + responsiveness surfaced right where action happens' },
        ],
    },
    experiments: {
        items: [
            { title: 'Placement Variant', description: 'badge near CTA vs header only', result: 'Result: higher CTR near CTA' },
            { title: 'Copy Tone', description: '“Reassurance” vs “Assertive”', result: 'Result: reassurance drove better quality leads' },
            { title: 'Responsiveness Display', description: 'meter vs text-only', result: 'Result: meter more scannable; set min data freshness' },
        ],
        note: 'Track CTR to contact, lead quality, time-to-first-response; include guardrails to avoid misleading signals.',
    },
    results: {
        kpis: [
            { value: '↑ Qualified lead rate', label: '' },
            { value: '↑ Repeat interactions', label: 'for verified profiles' },
            { value: '↓ Time-to-first-response', label: '(where measured)' },
        ],
        quote: '“I knew who I was contacting and how fast they’d reply.”',
    },
    ethics: [
        { title: 'Transparency', description: '“Why verified?” explicit criteria; link to policy' },
        { title: 'No coercion', description: 'trust cues inform, never pressure' },
        { title: 'Freshness', description: 'responsiveness must be recent (SLA on data)' },
        { title: 'Appeals', description: 'brokers can appeal verification; explain process' },
        { title: 'Kill switches', description: 'remove signals if data incomplete/ambiguous' },
    ],
    changeOrgTranslation: {
        title: 'Change.org Translation',
        points: [
            { title: 'Organizer Trust Layer', description: 'verified organizers, impact history, transparent criteria' },
            { title: 'Responsiveness Score for Targets', description: 'accountability widget on petition pages' },
            { title: 'Donor Confidence', description: '“what your support enables,” guarantees, progress feedback' },
        ],
        footer: 'Behavioral effect: emotional safety → higher starts, signs, chip-ins',
    },
    process: {
        steps: ['Identify (friction)', 'Hypothesize (behavior)', 'Design (trust surfaces)', 'Test (variants)', 'Learn → Scale'],
        notes: [
            'session replays + funnels',
            'copy-first, placement-second',
            'guardrails over short-term wins',
        ],
    },
    artifacts: [
        { componentName: 'ArtifactPlaceholder', caption: 'Broker profile v1–v3' },
        { componentName: 'ArtifactPlaceholder', caption: 'Badge set + “why verified” modal' },
        { componentName: 'ArtifactPlaceholder', caption: 'Responsiveness meter states' },
        { componentName: 'ArtifactPlaceholder', caption: 'CTA adjacency layouts (A/B variants)' },
        { componentName: 'ArtifactPlaceholder', caption: 'Metrics snapshot (sanitized)' },
    ],
};
