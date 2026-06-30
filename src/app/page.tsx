import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsGroups from "@/components/SkillsGroups";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";
import EducationPublications from "@/components/EducationPublications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.valueProp,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <SkillsGroups />
        <ExperienceTimeline />
        <CaseStudies />
        <Certifications />
        <EducationPublications />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
