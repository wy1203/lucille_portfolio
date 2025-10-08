import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ScobyBook.css";

interface PageContent {
  image: string;
  viewBox?: string; // Custom viewBox to control what area of SVG to display
}

const ScobyBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [zoomedElement, setZoomedElement] = useState<string | null>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Define pages with custom viewBox for each
  const pages: PageContent[] = [
    {
      image: "/work_details/scoby_all/1.svg",
      viewBox: "0 0 1224 792",
    },
    {
      image: "/work_details/scoby_all/2.svg",
      viewBox: "0 0 1224 792",
    },
    {
      image: "/work_details/scoby_all/3.svg",
      viewBox: "0 0 1224 792",
    },
    {
      image: "/work_details/scoby_all/4.svg",
      viewBox: "0 0 1224 792",
    },
    {
      image: "/work_details/scoby_all/5.svg",
      viewBox: "0 0 1224 792",
    },
  ];

  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  // Handle SVG click events
  useEffect(() => {
    const handleSvgClick = (event: MouseEvent) => {
      const target = event.target as SVGElement;

      // Check if clicked element or its parent has an id containing "human", "person", or "icon"
      let element: SVGElement | null = target;
      while (element && element !== svgContainerRef.current) {
        const id = element.id?.toLowerCase() || "";
        const className = (element as any).className?.baseVal?.toLowerCase() || "";

        if (
          id.includes("human") ||
          id.includes("person") ||
          id.includes("icon") ||
          id.includes("user") ||
          className.includes("human") ||
          className.includes("person") ||
          className.includes("icon")
        ) {
          // Toggle zoom
          if (zoomedElement === element.id) {
            setZoomedElement(null);
            element.style.transform = "";
            element.style.transformOrigin = "center";
            element.style.transition = "transform 0.5s ease";
          } else {
            // Reset previous zoomed element
            if (zoomedElement) {
              const prevElement = document.getElementById(zoomedElement);
              if (prevElement) {
                prevElement.style.transform = "";
              }
            }

            setZoomedElement(element.id);
            element.style.transform = "scale(2)";
            element.style.transformOrigin = "center";
            element.style.transition = "transform 0.5s ease";
            element.style.cursor = "pointer";
          }
          break;
        }
        element = element.parentElement as SVGElement;
      }
    };

    const container = svgContainerRef.current;
    if (container) {
      container.addEventListener("click", handleSvgClick as EventListener);
    }

    return () => {
      if (container) {
        container.removeEventListener("click", handleSvgClick as EventListener);
      }
    };
  }, [zoomedElement]);

  return (
    <div className="scoby-container">
      <div className="scoby-header">
        <h1 className="scoby-title">SCOBY Design Strategy Portfolio</h1>
        <p className="scoby-subtitle">
          Page {currentPage + 1} of {totalPages}
        </p>
      </div>

      <div className="book-wrapper">
        <div className="book-3d-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="book-page"
              initial={{ rotateY: currentPage > 0 ? -90 : 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: currentPage > 0 ? 90 : -90 }}
              transition={{
                duration: 0.8,
                ease: [0.645, 0.045, 0.355, 1.0],
              }}
            >
              <div className="page-content">
                <div className="page-inner" ref={svgContainerRef}>
                  <div className="svg-wrapper">
                    <svg
                      viewBox={pages[currentPage].viewBox || "0 0 1224 792"}
                      preserveAspectRatio="xMidYMid meet"
                      className="svg-viewport"
                    >
                      <image
                        href={pages[currentPage].image}
                        width="100%"
                        height="100%"
                      />
                    </svg>
                  </div>
                </div>

                {/* Page shadow for 3D effect */}
                <div className="page-shadow"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="book-navigation">
          <button
            className="nav-button prev"
            onClick={prevPage}
            disabled={currentPage === 0 || isAnimating}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
          </button>

          <button
            className="nav-button next"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || isAnimating}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Page indicators */}
      <div className="page-indicators">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentPage ? "active" : ""}`}
            onClick={() => {
              if (!isAnimating && index !== currentPage) {
                setIsAnimating(true);
                setCurrentPage(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            disabled={isAnimating}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScobyBook;
