import { useEffect, useState } from "react";
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
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);

    const supportsEventListener =
      typeof mediaQuery.addEventListener === "function";

    if (supportsEventListener) {
      mediaQuery.addEventListener("change", listener);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(listener);
    }

    return () => {
      if (supportsEventListener) {
        mediaQuery.removeEventListener("change", listener);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }

    setIsMounted(false);
    const frame = window.requestAnimationFrame(() => setIsMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, [prefersReducedMotion]);

  const handleBackToWorks = () => {
    navigate("/", { state: { scrollTo: "work" } });
  };

  return (
    <aside
      className={`animated-sidebar ${
        isMounted || prefersReducedMotion ? "entered" : ""
      }`}
    >
      <div className="sidebar-header">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={handleBackToWorks}
          aria-label="Back to My Works"
        >
          <span>←</span>
        </button>
      </div>

      <nav className="sidebar-nav-animated">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="sidebar-item-wrapper"
            >
              <button
                type="button"
                className={`sidebar-item ${isActive ? "active" : ""} ${
                  isHovered ? "hovered" : ""
                }`}
                onClick={() => onSectionClick(section.id)}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                onFocus={() => setHoveredSection(section.id)}
                onBlur={() => setHoveredSection(null)}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive && (
                  <span className="active-indicator" aria-hidden="true" />
                )}

                <div className="dot-indicator">
                  <span
                    className={`dot ${isActive ? "active" : ""} ${
                      isHovered ? "hovered" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <span className="sidebar-text">{section.title}</span>
              </button>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default AnimatedSidebar;
