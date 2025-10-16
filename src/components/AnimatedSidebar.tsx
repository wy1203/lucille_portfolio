import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AnimatedSidebar.css";

interface SidebarSection {
  id: string;
  title: string;
}

interface AnimatedSidebarProps {
  sections: SidebarSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const AnimatedSidebar = ({
  sections,
  activeSection,
  onSectionClick,
}: AnimatedSidebarProps) => {
  const navigate = useNavigate();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleBackToWorks = () => {
    navigate("/", { state: { scrollTo: "work" } });
  };

  const indicatorVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <motion.aside
      className="animated-sidebar"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="sidebar-header">
        <motion.button
          className="sidebar-toggle"
          onClick={handleBackToWorks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to My Works"
        >
          <span>←</span>
        </motion.button>
      </div>

      <nav className="sidebar-nav-animated">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <motion.div
              key={section.id}
              className="sidebar-item-wrapper"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                className={`sidebar-item ${isActive ? "active" : ""}`}
                onClick={() => onSectionClick(section.id)}
                onHoverStart={() => setHoveredSection(section.id)}
                onHoverEnd={() => setHoveredSection(null)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Dot indicator animation */}
                <div className="dot-indicator">
                  <motion.div
                    className={`dot ${isActive ? "active" : ""}`}
                    variants={indicatorVariants}
                    initial="initial"
                    animate={isActive || isHovered ? "animate" : "initial"}
                  />
                </div>

                {/* Section text */}
                <span className="sidebar-text">
                  {section.title}
                </span>
              </motion.button>
            </motion.div>
          );
        })}
      </nav>

    </motion.aside>
  );
};

export default AnimatedSidebar;
