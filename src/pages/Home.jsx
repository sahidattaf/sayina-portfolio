import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import SkillsPreview from "../components/sections/SkillsPreview";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ContactCta from "../components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <ContactCta />
    </>
  );
}
