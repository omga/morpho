/**
 * Legal documents for apps we publish — deliberately separate from lib/data.ts
 * (agency marketing content). These pages are referenced by permanent App Store
 * and Google Play listing URLs: change them carefully, and always bump `updated`.
 */

export type LegalBlock = { h2?: string; p?: string; list?: string[] };

export type LegalDoc = {
  kind: "privacy" | "terms";
  title: string;
  /** Human-readable publication date shown on the page. */
  updated: string;
  /** Renders a loud banner. Set false only when the text is final. */
  draft?: boolean;
  blocks: LegalBlock[];
};

export type LegalApp = {
  slug: string;
  name: string;
  /** One-line description of the app, used in the doc intro and metadata. */
  description: string;
  /** Entity responsible for the app — the data controller named in the policy. */
  publisher: string;
  contactEmail: string;
  docs: LegalDoc[];
};

import { sanctum } from "./sanctum";

export const legalApps: LegalApp[] = [sanctum];

export const legalCopy = {
  indexTitle: "App policies",
  indexIntro:
    "Privacy policies and terms of service for the apps we publish.",
  draftWarning:
    "DRAFT — this document is not final and must not be submitted to an app store.",
  updatedLabel: "Last updated",
  contactLabel: "Questions about this document?",
  docLabels: { privacy: "Privacy Policy", terms: "Terms of Service" }
} as const;

export function findLegalDoc(appSlug: string, docKind: string) {
  const app = legalApps.find((a) => a.slug === appSlug);
  if (!app) return null;
  const doc = app.docs.find((d) => d.kind === docKind);
  if (!doc) return null;
  return { app, doc };
}
