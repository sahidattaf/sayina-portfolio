export const researchQuestion =
  "How does Fear of Missing Out (FOMO) in social media marketing influence the purchase intentions of Generation Z consumers toward international fashion brands?";

export const researchCycles = [
  { id: "RC1", title: "Topic and Scope", objective: "Define the problem, target group, context, boundaries, and key concepts." },
  { id: "RC2", title: "International Business Relevance", objective: "Establish why the problem matters to international fashion brands." },
  { id: "RC3", title: "Questions, Literature and Models", objective: "Align research questions with verified literature and the conceptual model." },
  { id: "RC4", title: "Research Methods", objective: "Design and justify a valid, reliable, ethical research method." },
  { id: "RC5", title: "Results and Gap Analysis", objective: "Analyze authentic data and compare findings with theoretical expectations." },
  { id: "RC6", title: "Recommendations and Reflection", objective: "Derive evidence-based recommendations and reflect on the research process." },
].map((cycle) => ({ ...cycle, status: "Not started", progress: 0, deadline: "", notes: "" }));

export const framework = {
  primary: "Theory of Planned Behavior",
  constructs: ["Attitude", "Subjective norms", "Perceived behavioural control", "Purchase intention"],
  supporting: "Consumer Decision-Making Process",
  fomoDimensions: ["Scarcity", "Urgency", "Exclusivity", "Social proof"],
};

export const initialThesisState = {
  version: 1,
  currentCycle: "RC1",
  cycles: researchCycles,
  priorities: [
    { id: "p1", text: "Confirm topic, scope, and delimitations with the supervisor", done: false, template: true },
    { id: "p2", text: "Approve the final research question and subquestions", done: false, template: true },
    { id: "p3", text: "Build a verified APA 7 literature matrix", done: false, template: true },
  ],
  metrics: { verifiedSources: 0, surveyResponses: 0, openRisks: 0, feedbackActions: 0 },
  updatedAt: null,
};

export const qualityChecks = [
  "Problem, objective, questions, theory, method, results, and recommendations are aligned",
  "Every academic source is verified and formatted in APA 7",
  "Validity, reliability, ethics, consent, and anonymization are justified",
  "Findings use authentic research data only",
  "Each recommendation links to a finding and an identified gap",
  "Limitations and research-process reflections are explicit",
];
