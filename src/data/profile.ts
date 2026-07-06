export const profile = {
  name: "Yashmita Tomar",
  title: "Business Analyst",
  tagline: "Data Analytics · Dashboards · CRM · Process Improvement",
  valueProp:
    "I turn raw data into decisions that move sales, efficiency, and strategy.",
  location: "West Delhi, India",
  email: "yashmita.tomar98@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashmita-tomar-836a55175/",

  // PRIVATE — intentionally NOT published. Her CV lists a phone number and home
  // address; per the brief these stay off the public site. Use email / LinkedIn.

  headshot: "/yashmita.jpg", // add a professional photo to /public
  resumeUrl: "/Yashmita_Tomar_CV.pdf", // add résumé PDF to /public

  about: [
    "I'm a business analytics professional with 4+ years of experience across data analysis, dashboard development, CRM implementation, and business process improvement. With a background in Electrical & Electronics Engineering and an MBA in Finance & Marketing, I turn data into actionable insights through dashboards, reporting, and close stakeholder collaboration.",
    "Currently driving business analytics at HORIBA, I lead the business side of a Salesforce CRM rollout and support a LIMS implementation, while building dashboards and executive reporting for Sales, Service, Marketing, and IT. Earlier, I drove analytics and operations at FIITJEE, CRL Diagnostics, and Chatous Technologies — delivering measurable outcomes like higher sales and lower costs, with a reputation for quantitative rigor, attention to detail, and clear cross-functional collaboration.",
  ],
};

export type Profile = typeof profile;
