export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  impact: string;
  stats: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "horiba-crm",
    title: "Leading the business side of a Salesforce CRM rollout at HORIBA",
    context: "HORIBA · Business Analytics",
    problem:
      "Sales and service processes were spread across teams and tools, with limited shared visibility to support strategic decisions.",
    approach:
      "Led requirement gathering, UAT, and process validation for the Salesforce CRM implementation, coordinated stakeholders across Sales, Service, Marketing, and IT, and built dashboards and executive reporting to track business performance.",
    impact:
      "Ran the Customer Experience Survey campaign to its highest response rate to date, and support an ongoing LIMS rollout — driving the company's digital-transformation initiatives.",
    stats: [
      { value: "Highest", label: "CX survey response rate" },
      { value: "Salesforce", label: "CRM implementation led" },
      { value: "4", label: "Teams coordinated" },
    ],
  },
  {
    slug: "crl-sales-lift",
    title: "Driving a 21% sales lift at CRL Diagnostics",
    context: "CRL Diagnostics · Data Analyst",
    problem:
      "Sales had flattened and the team had limited visibility into which efforts were actually working.",
    approach:
      "Ran market analysis and focus-group research, tracked performance in Excel and LIS software, and designed KPIs to monitor sales and cost drivers.",
    impact:
      "Lifted sales by 21% through market analysis, added another 11% by implementing focus-group findings, and cut costs by 17% through KPI-driven monitoring.",
    stats: [
      { value: "+21%", label: "Sales increase" },
      { value: "+11%", label: "From focus-group findings" },
      { value: "−17%", label: "Cost reduction via KPIs" },
    ],
  },
  {
    slug: "fiitjee-dashboards",
    title: "Dashboards that run academic operations at FIITJEE",
    context: "FIITJEE eSchool · Operations & Analytics",
    problem:
      "Operational data was manual and fragmented across batches and faculty, slowing down accurate reporting.",
    approach:
      "Built and maintained a central database, automated data cleaning and validation, and designed dashboards for faculty teaching hours and attendance trends.",
    impact:
      "Enabled data-driven decisions and corrective actions on teaching hours and attendance, with faster and more accurate departmental reports.",
    stats: [
      { value: "End-to-end", label: "Operations managed" },
      { value: "2", label: "Dashboards built & maintained" },
    ],
  },
  {
    slug: "hive-ml-datasets",
    title: "Preparing clean ML datasets at scale",
    context: "Chatous Technologies · Data Analyst",
    problem:
      "Large volumes of messy, unstructured data needed to be readied for machine-learning training.",
    approach:
      "Built labeling pipelines with QA and audits, and helped design workflows alongside a 45-person team collaborating with the San Francisco office.",
    impact:
      "Delivered 5 ML/AI labeling projects and significantly reduced manual effort on daily unstructured data.",
    stats: [
      { value: "5", label: "ML/AI projects delivered" },
      { value: "45", label: "Person team (Project Meniso)" },
    ],
  },
];
