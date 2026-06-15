export const skillLevelValue = {
  Foundational: 35,
  "Working knowledge": 55,
  Proficient: 75,
  Strong: 90,
};

export const skillCategories = [
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Translating customer needs and market data into positioning, branding, and campaign decisions.",
    skills: [
      { name: "Market research & analysis", level: "Proficient" },
      { name: "Brand positioning & strategy", level: "Working knowledge" },
      { name: "Consumer behavior analysis", level: "Working knowledge" },
      { name: "Digital marketing fundamentals", level: "Working knowledge" },
      { name: "Marketing mix (4Ps/7Ps)", level: "Proficient" },
    ],
  },
  {
    id: "operations",
    title: "Operations Management",
    description:
      "Analyzing processes, layouts, and capacity to improve service performance and efficiency.",
    skills: [
      { name: "Process mapping & service blueprints", level: "Strong" },
      { name: "Bottleneck & capacity analysis", level: "Strong" },
      { name: "Little's Law & queuing concepts", level: "Proficient" },
      { name: "Layout design & job design (Hackman & Oldham)", level: "Proficient" },
      { name: "KPI dashboards & performance objectives (QSDFC)", level: "Proficient" },
      { name: "Technology roadmapping", level: "Working knowledge" },
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "Connecting environmental and social impact considerations to business strategy and operations.",
    skills: [
      { name: "Sustainable operations principles", level: "Working knowledge" },
      { name: "ESG & impact reporting awareness", level: "Working knowledge" },
      { name: "Waste reduction & resource efficiency", level: "Proficient" },
      { name: "Stakeholder-oriented strategy", level: "Working knowledge" },
    ],
  },
  {
    id: "business-tools",
    title: "Tools & Frameworks",
    description: "Frameworks and software used to support analysis and presentation of business cases.",
    skills: [
      { name: "Porter's strategy frameworks", level: "Working knowledge" },
      { name: "Treacy & Wiersema value disciplines", level: "Proficient" },
      { name: "Microsoft Office (Excel, PowerPoint, Word)", level: "Strong" },
      { name: "Data visualization for dashboards", level: "Working knowledge" },
    ],
  },
  {
    id: "personal",
    title: "Professional Skills",
    description: "Soft skills developed through study, teamwork, and part-time work in a fast-paced environment.",
    skills: [
      { name: "Multilingual communication (English, Dutch, Papiamentu)", level: "Strong" },
      { name: "Working under pressure / fast-paced service", level: "Strong" },
      { name: "Cross-functional teamwork", level: "Proficient" },
      { name: "Analytical & structured writing", level: "Proficient" },
    ],
  },
];
