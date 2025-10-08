import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { worksData } from "../data/worksData";
import "../styles/NextProjects.css";

interface NextProjectsProps {
  currentWorkId: number;
}

const NextProjects = ({ currentWorkId }: NextProjectsProps) => {
  const navigate = useNavigate();

  // Get the next 3 projects (循环到开头如果不够)
  const getNextProjects = () => {
    const currentIndex = worksData.findIndex((work) => work.id === currentWorkId);
    const nextProjects = [];

    for (let i = 1; i <= 3; i++) {
      const nextIndex = (currentIndex + i) % worksData.length;
      nextProjects.push(worksData[nextIndex]);
    }

    return nextProjects;
  };

  const nextProjects = getNextProjects();

  const handleProjectClick = (workId: number) => {
    window.scrollTo(0, 0);
    navigate(`/work/${workId}`);
  };

  return (
    <section className="next-projects-section">
      <h2 className="next-projects-title">More Projects</h2>
      <div className="next-projects-grid">
        {nextProjects.map((work, index) => (
          <ProjectCard
            key={work.id}
            work={work}
            index={index}
            onClick={() => handleProjectClick(work.id)}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  work: typeof worksData[0];
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ work, index, onClick }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="next-project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
    >
      <div className="next-project-card-image">
        <img
          src={work.thumbnail}
          alt={work.title}
          style={{
            objectPosition: work.thumbnailImagePos || "center",
            objectFit: work.thumbnailImageFit || "cover",
          }}
        />
      </div>
      <div className="next-project-card-content">
        <span className="next-project-category">{work.category}</span>
        <h3 className="next-project-title">{work.title}</h3>
        <p className="next-project-description">{work.description}</p>
      </div>
    </motion.div>
  );
};

export default NextProjects;
