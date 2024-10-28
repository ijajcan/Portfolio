import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
export default function Home() {
    return (
      <>
        <Header />
        <p className="one-liner one">
          I help companies grow by delivering value to their users and customers
          through innovative software solutions.
        </p>
        <AboutSection />
        <ProjectsSection />
        <p className="one-liner two">
          Over the years, I've worked on a variety of projects. For many
          companies both small and large.
        </p>
        <SkillsSection />
        <ContactSection />
        <Footer />
      </>
    );
}