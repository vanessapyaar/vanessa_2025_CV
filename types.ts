export interface Project {
  id: string;
  tag: string;
  title: string;
  summary: string;
  impact: string[];
  alignmentChip: string;
  thumbnailComponent: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export interface Value {
  title:string;
  proof: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

// --- Project Detail Page Types ---

export interface SnapshotItem {
    label: string;
    value: string;
}

export interface ProblemEvidence {
    type: 'Session' | 'Qual' | 'Data';
    text: string;
}

export interface BehaviorModel {
    model: 'Fogg' | 'Trust loops' | 'Social proof';
    text: string;
}

export interface DesignElement {
    title: string;
    description: string;
}

export interface Experiment {
    title: string;
    description: string;
    result: string;
}

export interface Kpi {
    value: string;
    label: string;
}

export interface Guardrail {
    title: string;
    description: string;
}

export interface Artifact {
    componentName: string;
    caption: string;
}

export interface ProjectDetail {
    id: string;
    breadcrumb: string;
    hero: {
        title: string;
        subtitle: string;
        stats: string[];
    };
    snapshot: SnapshotItem[];
    problemInsight: {
        problem: string;
        evidence: ProblemEvidence[];
        models: BehaviorModel[];
    };
    designSystem: {
        elements: DesignElement[];
    };
    experiments: {
        items: Experiment[];
        note: string;
    };
    results: {
        kpis: Kpi[];
        quote: string;
    };
    ethics: Guardrail[];
    changeOrgTranslation: {
        title: string;
        points: { title: string; description: string }[];
        footer: string;
    };
    process: {
        steps: string[];
        notes: string[];
    };
    artifacts: Artifact[];
}
