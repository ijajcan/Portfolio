import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Technology from "../components/Technology";

export default function Home() {
    return (
      <>
        <Header />
        <p className="one-liner one">
          I help companies grow by delivering value to their users and customers
          through innovative software solutions.
        </p>
        <div className="technologies-container">
          <Technology technologyImage="react.png" technologyName="React" technologyDescription="JavaScript framework" technologyColor="#035262"/>
          <Technology technologyImage="javascript.png" technologyName="JavaScript" technologyDescription="Programming language" technologyColor="#927F01"/>
          <Technology technologyImage="html.png" technologyName="HTML" technologyDescription="Programming language" technologyColor="#874529"/>
          <Technology technologyImage="css.png" technologyName="CSS" technologyDescription="Programming language" technologyColor="#0A4766"/>
          <Technology technologyImage="git.png" technologyName="Git" technologyDescription="Version control" technologyColor="#921907"/>
          <Technology technologyImage="figma.png" technologyName="Figma" technologyDescription="Design tool" technologyColor="#027549"/>
          <Technology technologyImage="java.png" technologyName="Java" technologyDescription="Programming language" technologyColor="#013053"/>
          <Technology technologyImage="firebase.png" technologyName="Firebase" technologyDescription="Database" technologyColor="#B96900"/>
        </div>
        <AboutSection />
        <ProjectsSection />
        <p className="one-liner two">
          Over the years, I've worked on a variety of projects. For many
          companies both small and large.
        </p>
        <SkillsSection />
        <ContactSection />
      </>
    );
}