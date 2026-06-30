export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "HORIBA India",
    role: "Business Analyst",
    duration: "Aug 2025 – Present",
    location: "India",
    bullets: [
      // TODO (from Yashmita): add 2–3 quantified bullets for the current role.
      "Partnering with business teams to turn operational and sales data into clear, decision-ready analysis and reporting.",
    ],
  },
  {
    company: "FIITJEE eSchool",
    role: "Jr. Manager – Operations",
    duration: "May 2024 – Jun 2025",
    location: "India",
    bullets: [
      "Extracted, organized, and structured data from multiple sources, applying data-mining techniques to convert raw data into clean, usable form.",
      "Designed and maintained the database system; directed data cleaning, gap analysis, and validation for accurate, confidential departmental reports.",
      "Managed end-to-end academic operations — yearly activity calendars, attendance reports, and batch-progress tracking against academic goals.",
      "Built dashboards for faculty teaching hours and attendance trends, enabling data-driven decisions and corrective actions.",
      "Ran student performance analysis, prepared report cards, and facilitated workshops, seminars, and orientation sessions.",
      "Coordinated with stakeholders and drove new initiatives for student engagement and academic excellence.",
    ],
  },
  {
    company: "FIITJEE eSchool",
    role: "Data Analyst – Management Trainee",
    duration: "2024",
    location: "India",
    bullets: [
      "Extracted, organized, and analyzed data using advanced techniques.",
      "Prepared structured datasets by identifying and filtering raw data.",
      "Designed and maintained accurate, up-to-date database systems.",
      "Ensured data reliability through validation and gap analysis.",
      "Generated trend analysis and executive reports for stakeholders.",
    ],
  },
  {
    company: "Outlook Publications",
    role: "Intern",
    duration: "2023",
    location: "Delhi, India",
    bullets: [
      "Met assigned sales targets.",
      "Conducted payment-gateway analysis.",
      "Researched finance terminologies to support editorial/finance work.",
    ],
  },
  {
    company: "CRL Diagnostics",
    role: "Data Analyst",
    duration: "2021 – 2022",
    location: "Delhi, India",
    bullets: [
      "Achieved a 21% sales increase through market analysis.",
      "Used Excel and LIS software for data tracking and analysis.",
      "Boosted sales 11% by researching and implementing focus-group findings.",
      "Led data-flow improvement initiatives.",
      "Developed KPIs that reduced costs by 17% while monitoring sales.",
    ],
  },
  {
    company: "Hive (Chatous Technologies India Pvt. Ltd.)",
    role: "Data Analyst",
    duration: "2020 – 2021",
    location: "Gurugram, India",
    bullets: [
      "Labeled images/video and prepared datasets for ML; handled content flagging, safety monitoring, transcription, parsing, and audits.",
      "Key member of the 45-person Project Meniso team; collaborated with the San Francisco team on workflow design.",
      "Managed large volumes of daily unstructured data, reducing manual effort.",
      "Successfully delivered 5 manual data-labeling projects for ML/AI.",
    ],
  },
  {
    company: "NTPC Limited",
    role: "Intern",
    duration: "2019",
    location: "Delhi, India",
    bullets: ["Networking and its applications."],
  },
];
