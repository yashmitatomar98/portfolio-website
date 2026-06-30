export const profile = {
  name: "Yashmita Tomar",
  title: "Business Analyst",
  tagline: "Data Analytics · Business Strategy · Process Optimization",
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
    "I'm a Business Analyst who pairs analytical rigor with business strategy. With a background in Electrical & Electronics Engineering and an MBA in Finance & Marketing, I specialize in data analysis, visualization (Power BI), Excel, and SQL — turning data-driven strategies into measurable outcomes like higher sales and lower costs.",
    "Currently a Business Analyst at HORIBA, I've previously driven operations and analytics at FIITJEE, CRL Diagnostics, and Hive — building dashboards, KPIs, and reports that help teams make better decisions. I'm known for quantitative analysis, attention to detail, and clear cross-functional collaboration.",
  ],
};

export type Profile = typeof profile;
