export const projects = [
  {
    slug: "smullers-arnhem-operations",
    title: "Operations Management at Smullers Arnhem",
    subtitle: "Process analysis, layout & job design, strategic alignment, and a technology roadmap for a high-volume fast-food operation",
    category: "Operations Management",
    tags: ["Process Mapping", "Bottleneck Analysis", "Capacity Planning", "Layout Design", "Strategy", "Technology Roadmap"],
    summary:
      "A full operations management case study of Smullers Arnhem, a fast-food restaurant inside Arnhem Central Station. Combines direct observation, service blueprinting, capacity analysis, layout and job design evaluation, strategic alignment using QSDFC and Treacy & Wiersema's value disciplines, a KPI dashboard, and a phased technology roadmap.",
    coverGradient: "from-brand-500 to-ink-700",
    date: "2026",
    featured: true,
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This case study presents an analysis of the operations management practices of Smullers Arnhem, a fast-food restaurant located at Arnhem Central Station. Smullers operates in a high-volume service environment where customers — primarily travelers and commuters — expect fast, convenient, and dependable service.",
          "The purpose of this project was to apply operations management theories and tools to a real-life service organization. Observations were conducted within the operation over several weeks and combined with concepts from the operations management curriculum to evaluate how operational decisions influence performance, customer experience, and overall efficiency.",
          "The analysis progresses from process selection and description, through process mapping, bottleneck and capacity analysis, layout and job design evaluation, strategic alignment, KPI dashboarding, and finally a technology roadmap for future development.",
        ],
      },
      {
        heading: "Service Case: Company & Process",
        paragraphs: [
          "Smullers Arnhem is a fast-food restaurant that serves snacks, burgers, fries, and beverages to travelers passing through Arnhem Central Station. The service process focuses on delivering food products quickly and efficiently while maintaining a satisfactory level of quality and customer service.",
          "Customers can either place an order at the counter with an employee (traditional service) or use the self-service vending wall — selecting a product, paying electronically, and retrieving it themselves. Inputs to the process include customers, food ingredients, prepared products, employees, kitchen equipment, the vending system, and payment infrastructure. Outputs are food and beverages delivered to customers, customer satisfaction, and revenue.",
          "Smullers Arnhem was selected because I work there and have direct, ongoing access to observe the service process in practice — including how employees, customers, and technology interact, and how performance shifts with varying demand throughout the day.",
        ],
      },
      {
        heading: "Possible Performance Issues",
        paragraphs: [
          "Several performance issues can be observed across the five performance objectives (quality, speed, dependability, flexibility, cost):",
        ],
        bullets: [
          "Quality: products in the self-service vending wall must stay fresh, monitored via a green/red/blinking-red color-coded freshness system — incorrect monitoring risks serving over-held products.",
          "Speed: waiting times increase during peak periods, especially when large groups of travelers arrive at once.",
          "Dependability: popular products can sell out quickly, leaving customers unable to buy their preferred item.",
          "Flexibility: during busy periods employees must balance counter service, restocking, and quality monitoring simultaneously.",
          "Cost: food waste arises when products exceed their maximum holding time and must be discarded, even if unsold.",
        ],
      },
      {
        heading: "Observation Plan & Recorded Data",
        paragraphs: [
          "The service process was observed during three periods to capture variation in demand: Morning (11:00–12:00, low demand), Lunch (12:00–13:00, medium demand), and Evening peak (17:00–19:00, high demand). Observations focused on arrival rates, waiting times, cycle times, available resources, and operational issues such as queue formation and product availability.",
          "Recorded data showed wait times ranging from 0 seconds (vending wall, quiet period) up to 2 minutes during the evening peak, with service times ranging from 50 seconds for a vending wall purchase to 6 minutes for a counter order during peak hour. Available resources included 2 cash registers, 1–2 employees during quiet periods (2–3 during peak), and 1 vending wall.",
        ],
        bullets: [
          "Demand increases significantly between 17:00 and 19:00.",
          "Roughly one customer arrives every 30 seconds during peak periods.",
          "Counter orders requiring frying create the longest waiting times.",
          "Vending wall purchases are significantly faster than counter orders.",
          "Vending wall products are monitored via a green/red freshness system.",
        ],
      },
      {
        heading: "Current Process Map (Service Blueprint)",
        paragraphs: [
          "The current process was mapped using a service blueprint, visually representing the customer journey and how customer actions, employee (frontstage) activities, and backstage support processes connect throughout the service experience.",
          "The process begins when a customer approaches the Smullers location, reviews the menu board or vending wall, and chooses between a counter order or self-service. For counter orders, an employee takes the order, processes payment, and checks whether the product is ready or needs preparation. If preparation is required, backstage activities — frying, packaging, and restocking the vending wall — come into play.",
          "Frontstage activities (visible to customers) include taking orders, processing payments, answering questions, and handing over products. Backstage activities (behind the scenes) include checking stock levels, preparing food, and monitoring freshness indicators. The completed blueprint helped pinpoint where delays occur and formed the basis for the bottleneck and capacity analysis below.",
        ],
      },
      {
        heading: "Bottleneck Analysis",
        paragraphs: [
          "After mapping the process and observing the operation across different periods, the preparation and frying stage was identified as the main bottleneck.",
          "During quieter periods, customers receive their orders quickly with little or no waiting. During peak hours (17:00–19:00), however, customer arrivals increase sharply and multiple orders requiring freshly prepared snacks or fries arrive simultaneously, causing orders to accumulate at the preparation stage.",
          "Payment and order-taking are completed within seconds, while food preparation can take several minutes — creating a queue at the preparation stage and slowing overall customer flow. The vending wall reduces pressure on the operation for customers who don't need fresh preparation, but the preparation process remains the primary constraint for those who do.",
        ],
      },
      {
        heading: "Capacity Analysis",
        paragraphs: [
          "Customer arrivals vary throughout the day: low in the morning, increasing at lunch, and peaking between 17:00 and 19:00 with roughly one customer every 30 seconds — an arrival rate of approximately 120 customers per hour.",
          "Payment capacity is high: a transaction takes ~10 seconds, so a single register could theoretically process ~360 customers/hour — well above demand, confirming payment is not the constraint.",
          "Preparation is different: snacks and fries take 2–5 minutes (avg. 3.5 minutes), giving the preparation stage a capacity of roughly 17 orders per hour — far below the peak arrival rate of 120/hour, which explains the queues that form for freshly prepared items.",
          "Using Little's Law, with an arrival rate of ~120 customers/hour and an average time-in-system of ~3 minutes during peak periods, approximately six customers are present in the process at any given moment. Demand also arrives in waves tied to train arrivals, adding bursty pressure on preparation.",
        ],
      },
      {
        heading: "Conclusions & Recommendations (Process Analysis)",
        paragraphs: [
          "The preparation and frying stage is the main bottleneck and has the lowest capacity of any process step. However, Smullers Arnhem already mitigates this: popular products are prepared in advance, the vending wall offers a faster alternative, and employees adapt their activities to demand — keeping waiting times generally manageable.",
          "A bottleneck will always exist somewhere in a service process; the key question is whether it negatively affects performance. Based on the observations, there is limited evidence that major changes are currently required.",
        ],
        bullets: [
          "Continue monitoring customer demand patterns and current preparation-planning / inventory practices.",
          "Periodically evaluate staffing levels during peak periods.",
          "Continue promoting the vending wall as a faster service option for time-pressured travelers.",
        ],
      },
      {
        heading: "Layout: Description & Classification",
        paragraphs: [
          "Smullers Arnhem operates within a relatively small physical space inside Arnhem Central Station, designed to support quick service and high throughput. The customer area includes two cash registers, a self-service vending wall, and a sauce station. Behind the counter sit the fryers, beverage refrigerator, ice cream machine, burger preparation station, snack cooler, and storage — positioned close together to reduce walking distances.",
          "The layout can be classified as a hybrid service layout: from the customer's perspective it resembles a line layout (a fixed sequence — arrival, selection, payment, collection, departure), while the backstage resembles a functional layout, with equipment grouped by function (fryers together, beverages in a dedicated fridge, burger prep at its own station). The vending wall adds a self-service route, reinforcing the hybrid character.",
        ],
      },
      {
        heading: "Tasks & Job Allocation",
        paragraphs: [
          "The operation uses two primary roles plus an optional flexible third role during busier periods.",
        ],
        bullets: [
          "Employee 1 — Cash Register & Customer Service: order-taking, payments, frying, drinks, ice cream, product handover, and customer questions.",
          "Employee 2 — Food Preparation & Restocking: frying snacks, preparing burgers, packaging, monitoring stock and freshness, and refilling the vending wall.",
          "Employee 3 — Flexible Support (when present): assists wherever demand is highest — counter, preparation, restocking, cleaning, or vending wall support.",
          "Key equipment: cash registers, vending wall, fryers, burger station, refrigerators and coolers.",
        ],
      },
      {
        heading: "Evaluation of Layout & Job Design",
        paragraphs: [
          "The layout appears well suited to a high-volume environment with relatively standardized products. The compact arrangement minimizes travel distance, supports a logical workflow, and makes efficient use of limited station space. The vending wall provides an alternative channel that reduces pressure on registers and preparation. One trade-off is that multiple activities occur in a small area, occasionally causing employees to cross paths during peak periods — though this has limited impact given staff familiarity with the layout.",
          "Applying Hackman & Oldham's Job Characteristics Model, employees experience reasonable skill variety (combining customer service, food prep, inventory, and quality control), strong task identity and significance (seeing products through from preparation to handover), and direct feedback through customer interactions. A possible limitation is repetitiveness during long shifts (frying, payments, restocking), mitigated through flexible task allocation and role-switching.",
        ],
      },
      {
        heading: "Improvement Ideas & Layout/Job Design Conclusion",
        paragraphs: [
          "No major redesign appears necessary — the operation already functions efficiently, and employees actively manage demand fluctuations. Smaller improvements could nevertheless add value.",
        ],
        bullets: [
          "Additional signage to encourage greater vending wall use during peak periods, spreading demand across channels.",
          "Clearer queue guidance for moments when large groups of travelers arrive simultaneously.",
          "Ongoing monitoring of sales and demand patterns to keep staffing aligned with volume.",
          "Continued cross-training so staff remain flexible across all areas of the operation.",
        ],
      },
      {
        heading: "Strategic Alignment",
        paragraphs: [
          "Smullers Arnhem competes in a crowded fast-food environment inside Arnhem Central Station, alongside chains like McDonald's and Burger King. Rather than competing primarily on price, Smullers — viewed through Treacy & Wiersema's value disciplines — pursues an Operational Excellence strategy: fast, reliable, convenient service for travelers who want food quickly before continuing their journey.",
          "Using the QSDFC framework, the most important performance objectives are Speed, Dependability, and Quality — customers expect short waits, consistent availability, and fresh products. Flexibility matters less given a relatively standardized assortment, and while Cost remains relevant internally, it is not the primary customer-facing competitive priority.",
          "The current operation appears well aligned with this strategy: the compact layout minimizes employee walking distance and supports speed; the vending wall adds a self-service channel; and task allocation lets one employee focus on customer service/fries/drinks/ice cream while the other focuses on snack/burger production and restocking, with a third employee flexing to wherever needed during peak periods. The preparation/frying bottleneck identified earlier is already actively managed through advance preparation and continuous restocking — reinforcing the strong fit between operational design and strategy.",
        ],
      },
      {
        heading: "Conclusion: Operations Design",
        paragraphs: [
          "Smullers Arnhem uses a hybrid service layout well suited to its high-volume, fast-service environment, combining traditional counter service with self-service vending technology to give customers multiple purchasing options while supporting efficient flow.",
          "Task allocation is effective: employees perform varied activities and adapt to changing demand, and the flexible third role further strengthens performance during busy periods. While minor improvements to customer flow and vending wall usage could help, there is limited evidence that major changes to layout or job design are currently required — the operation is well aligned with the volume, variety, and service requirements of the business.",
        ],
      },
      {
        heading: "Technology Roadmap — Current State & Shortlist",
        paragraphs: [
          "Building on the Operational Excellence strategy and the identified preparation/frying bottleneck, four technologies were shortlisted for future development:",
        ],
        bullets: [
          "Self-service ordering kiosks — reduce pressure on cash registers and shorten waits; requires upfront investment, and some customers may still prefer personal interaction.",
          "Mobile ordering — customers order ahead and collect on arrival, improving convenience and reducing congestion; main challenge is development/maintenance cost and adoption.",
          "Smart inventory & freshness monitoring — builds on the existing visual freshness system with automated tracking to reduce waste and improve availability, weighed against implementation cost.",
          "AI-based demand forecasting — uses fluctuating, train-schedule-driven demand patterns to inform staffing and preparation planning; requires reliable historical data, suited to long-term development.",
        ],
      },
      {
        heading: "Technology Assessment & Roadmap",
        paragraphs: [
          "Self-service ordering kiosks offer the strongest fit with the current operation — directly supporting Operational Excellence by improving speed and reducing waits, and they're already proven in the fast-food industry. Mobile ordering aligns well too but requires more investment and organizational change. Smart inventory monitoring offers moderate benefit (food waste, availability) with less direct customer-experience impact. AI-based forecasting offers long-term planning gains but needs more data and capability first.",
          "Proposed phased roadmap:",
        ],
        bullets: [
          "Short term: Introduce self-service ordering kiosks near the entrance, integrated with existing payment systems — reducing queues, improving speed, and freeing staff to focus on preparation. Monitor via waiting times, satisfaction scores, and kiosk usage.",
          "Medium term: Expand digital capabilities with mobile ordering and a designated pickup point. Monitor via mobile order adoption, satisfaction, and order accuracy.",
          "Long term: Invest in smart inventory monitoring and AI-supported demand forecasting to improve planning, reduce waste, and optimize staffing/inventory. Monitor via waste reduction, availability improvements, and forecast accuracy.",
        ],
      },
      {
        heading: "Overall Conclusion",
        paragraphs: [
          "The proposed technology roadmap supports Smullers Arnhem's operational strategy by focusing on technologies that improve speed, dependability, and customer convenience. Although the current operation already performs effectively, these technologies offer gradual improvement without requiring major changes to the existing layout or service process — allowing the company to balance investment costs with operational benefits while staying aligned with its strategy and customer expectations.",
        ],
      },
    ],
    kpis: [
      { objective: "Speed", kpi: "Average wait time", current: "2.8 min", target: "< 3 minutes" },
      { objective: "Speed", kpi: "Average payment time", current: "10 sec", target: "< 20 seconds" },
      { objective: "Dependability", kpi: "Product availability", current: "96%", target: "> 95%" },
      { objective: "Dependability", kpi: "Order accuracy", current: "99%", target: "> 99%" },
      { objective: "Quality", kpi: "Customer satisfaction", current: "8/10", target: "> 8.0/10" },
      { objective: "Quality", kpi: "Freshness compliance", current: "98%", target: "> 98%" },
      { objective: "Flexibility", kpi: "Multi-skilled employees", current: "100%", target: "100%" },
      { objective: "Cost", kpi: "Food waste", current: "4%", target: "< 5%" },
    ],
    references: [
      "Hackman, J. R., & Oldham, G. R. (1976). Motivation through the design of work: Test of a theory. Organizational Behavior and Human Performance, 16(2), 250–279.",
      "Porter, M. E. (1985). Competitive Advantage: Creating and Sustaining Superior Performance. Free Press.",
      "Slack, N., Brandon-Jones, A., & Burgess, N. (2022). Operations Management (10th ed.). Pearson.",
      "Treacy, M., & Wiersema, F. (1993). Customer intimacy and other value disciplines. Harvard Business Review.",
    ],
  },
  {
    slug: "sustainability-scan",
    title: "Sustainability Scan",
    subtitle: "A structured assessment of current sustainability practices and improvement opportunities for a host organization",
    category: "Sustainability",
    tags: ["Sustainability Scan", "ESG", "Resource Efficiency", "Stakeholder Analysis"],
    summary:
      "Case study in progress. This sustainability scan will assess an organization's environmental and social impact across its operations, identify quick wins and longer-term opportunities, and translate the findings into practical recommendations aligned with business strategy.",
    coverGradient: "from-brand-400 to-brand-800",
    date: "2026",
    featured: false,
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This section will introduce the organization under review and outline the purpose and scope of the sustainability scan — including which operations, locations, or processes were assessed.",
        ],
      },
      {
        heading: "Current Sustainability Practices",
        paragraphs: [
          "This section will describe the organization's existing practices around energy use, waste management, sourcing, and social impact, based on observation and available data.",
        ],
      },
      {
        heading: "Findings & Improvement Opportunities",
        paragraphs: [
          "This section will summarize the key findings of the scan and highlight prioritized opportunities for improvement, distinguishing between quick wins and longer-term initiatives.",
        ],
        bullets: [
          "Quick win opportunities to be added once the scan is complete.",
          "Medium- and long-term initiatives to be added once the scan is complete.",
        ],
      },
      {
        heading: "Conclusion & Recommendations",
        paragraphs: [
          "This section will summarize the overall sustainability position of the organization and present recommendations for moving forward.",
        ],
      },
    ],
  },
  {
    slug: "internship-projects",
    title: "Internship Projects",
    subtitle: "A collection of practical assignments and deliverables completed during an internship placement",
    category: "Internship",
    tags: ["Internship", "Applied Project", "Professional Practice"],
    summary:
      "Case study in progress. This page will document the projects and assignments completed during an internship, including the context of the host organization, the tasks carried out, and the outcomes and skills developed.",
    coverGradient: "from-ink-500 to-ink-800",
    date: "2026",
    featured: false,
    sections: [
      {
        heading: "Internship Context",
        paragraphs: [
          "This section will introduce the host organization, the internship role, and the overall objectives of the placement.",
        ],
      },
      {
        heading: "Key Projects & Responsibilities",
        paragraphs: [
          "This section will describe the main projects and day-to-day responsibilities undertaken during the internship.",
        ],
        bullets: [
          "Project details to be added as they are completed.",
        ],
      },
      {
        heading: "Outcomes & Reflection",
        paragraphs: [
          "This section will reflect on the outcomes achieved, skills developed, and lessons learned during the internship.",
        ],
      },
    ],
  },
  {
    slug: "marketing-projects",
    title: "Marketing Projects",
    subtitle: "Marketing analyses and campaign plans developed for academic and applied projects",
    category: "Marketing",
    tags: ["Marketing Strategy", "Market Research", "Branding", "Campaign Planning"],
    summary:
      "Case study in progress. This page will collect marketing-focused projects — covering market research, branding, positioning, and campaign planning — completed as part of coursework and applied assignments.",
    coverGradient: "from-brand-500 to-ink-800",
    date: "2026",
    featured: false,
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [
          "This section will introduce the marketing project(s) covered on this page, including the organization or brand involved and the marketing problem being addressed.",
        ],
      },
      {
        heading: "Market & Customer Analysis",
        paragraphs: [
          "This section will summarize the market research and customer analysis carried out, including target audience definition and key insights.",
        ],
      },
      {
        heading: "Strategy & Recommendations",
        paragraphs: [
          "This section will present the proposed marketing strategy, positioning, and campaign recommendations resulting from the analysis.",
        ],
        bullets: [
          "Strategic recommendations to be added once the project is finalized.",
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
