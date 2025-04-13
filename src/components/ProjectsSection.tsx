import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  number: string;
  title: string;
  technologies: string[];
  link: string;
  image: string; 
}

const projects: Project[] = [
  {
    id: "landlite",
    number: "01",
    title: "LandLite",
    technologies: ["nextjs", "nodejs", "php", "flask"],
    link: "https://landlite.rf.gd/",
    image: "/images/landlite_img_1.JPG"
  },
  {
    id: "mahasharman",
    number: "02",
    title: "Mahasharman",
    technologies: ["html", "css", "javascript", "php", "mysql"],
    link: "https://mahasharman.com",
    image: "/images/mahasharman_img_1.JPG"
  },
  {
    id: "bombayroyals",
    number: "03",
    title: "Bombay Royals",
    technologies: ["html", "css", "javascript"],
    link: "https://vgsaksham.github.io/bombayroyals.github.io/index.html",
    image: "/images/bombay_royal_img_1.JPG"
  },
  {
    id: "elegance",
    number: "04",
    title: "Elegance",
    technologies: ["html", "css", "javascript"],
    link: "https://vgsaksham.github.io/elegance.github.io/",
    image: "/images/elegance_img_1.JPG"
  },
  {
    id: "portfolio1",
    number: "05",
    title: "Portfolio_1",
    technologies: ["html", "css", "javascript"],
    link: "https://vgsaksham.github.io/portfolio.github.io/",
    image: "/images/portfolio_img_1.JPG"
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = React.useState<string | null>(null);
  
  return (
    <section id="projects" className="section py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 md:mb-20 flex items-center gap-2">
            <span className="text-white/50 text-xl sm:text-2xl">*</span> 
            SELECTED PROJECTS
          </h2>
          
          <div>
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-item relative px-2 sm:px-4 transition-all duration-300 group"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="flex justify-between items-start relative">
                  <div className="py-4 sm:py-6">
                    <span className="project-number text-white/30 text-xs sm:text-sm">_{project.number}</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 transition-colors duration-300 group-hover:text-neonGreen flex items-center">
                      {project.title}
                      <a 
                        href={project.link} 
                        className="ml-2 sm:ml-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-neonGreen hover:scale-110 transition-transform" />
                      </a>
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`absolute right-6 top-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[350px] h-auto hidden md:block opacity-0 transform translate-x-4 transition-all duration-300 z-10 ${activeProject === project.id ? 'opacity-100 translate-x-0' : ''}`}>
                  <img src={project.image} alt={project.title} className="w-full h-auto rounded-md shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;