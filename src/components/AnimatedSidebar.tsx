import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/AnimatedSidebar.css";

interface SidebarSection {
  id: string;
  title: string;
}

interface AnimatedSidebarProps {
  sections: SidebarSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  onCollapseChange?: (isCollapsed: boolean) => void;
}

const AnimatedSidebar = ({
  sections,
  activeSection,
  onSectionClick,
  onCollapseChange,
}: AnimatedSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleToggle = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    if (onCollapseChange) {
      onCollapseChange(newCollapsedState);
    }
  };

  const sidebarVariants = {
    expanded: {
      width: 240,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    collapsed: {
      width: 80,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const textVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const indicatorVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <motion.aside
      className="animated-sidebar"
      variants={sidebarVariants}
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
    >
      <div className="sidebar-header">
        <motion.button
          className="sidebar-toggle"
          onClick={handleToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <motion.span
            animate={{ rotate: isCollapsed ? 0 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isCollapsed ? "→" : "←"}
          </motion.span>
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

                {/* Dot indicator - enhanced for collapsed mode */}
                <div className="dot-indicator">
                  <motion.div
                    className={`dot ${isActive ? "active" : ""} ${isCollapsed ? "collapsed-mode" : ""}`}
                    variants={indicatorVariants}
                    initial="initial"
                    animate={isActive || isHovered ? "animate" : "initial"}
                  />
                </div>

                {/* Section text */}
                <motion.span
                  className="sidebar-text"
                  variants={textVariants}
                  animate={isCollapsed ? "hidden" : "visible"}
                >
                  {section.title}
                </motion.span>
              </motion.button>

              {/* Tooltip for collapsed state */}
              {isCollapsed && isHovered && (
                <motion.div
                  className="sidebar-tooltip"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {section.title}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </nav>

    </motion.aside>
  );
};

export default AnimatedSidebar;
