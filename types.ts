import { ReactElement } from "react";

// FIX: Removed circular import from './types' which caused declaration conflicts.
// The file was importing types from itself.

export interface Project {
  id: string;
  tag: string;
  title: string;
  summary: string;
  impact: string[];
  thumbnailComponent: string;
}

export interface Pillar {
  icon: string;
  title:string;
  description: string;
}

export interface Value {
  icon: string;
  title:string;
  proof: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface Hotspot {
  x: number;
  y: number;
  title: string;
  description: string;
}

// --- Project Detail Page Types ---

// Base types shared across projects
export interface OutcomeMetric {
  value: string;
  label: string;
}

// Reusable narrative/process structure for standard case studies
export interface NarrativeArtifact {
  component: string;
  caption: string;
  hotspots?: Hotspot[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface NarrativeSection {
    id: string;
    title: string;
    content: (string | { type: 'quote'; text: string; author?: string } | { type: 'principle'; title: string; description: string } | { type: 'post_principles_paragraph'; text: string })[];
    artifacts?: NarrativeArtifact[];
}

export interface UIShowcaseImage {
    component: string;
    caption: string;
    hotspots?: Hotspot[];
}

export interface StandardProjectData {
    id: 'boattrader-app-redesign' | 'seller-dashboard-redesign' | 'ai-workflow-templates' | 'ai-image-search';
    hero: {
        title: string;
        subtitle: string;
        category?: string;
        impact: OutcomeMetric[];
        imageComponent: string;
        role: string;
        team: string;
        timeframe: string;
    };
    overview: {
        title: string;
        content: (string | { type: 'quote'; text: string; })[];
    };
    narrative: NarrativeSection[];
    uiShowcase: {
        title: string;
        images: UIShowcaseImage[];
    };
    reflection: Omit<NarrativeSection, 'id' | 'artifacts'>;
}

// --- Specific Project Types (can be extended if they diverge) ---
export type SmartSearchProjectData = StandardProjectData & { id: 'boattrader-app-redesign' };
export type SavedBoatsProjectData = StandardProjectData & { id: 'seller-dashboard-redesign' };
export type DesignSystemProjectData = StandardProjectData & { id: 'ai-workflow-templates' };


// Union type for any project detail page
export type ProjectDetailData = StandardProjectData;